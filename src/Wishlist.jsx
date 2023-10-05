import React from "react";
import Card from "./components/Card";
import { useWishlistContext } from "./WishlistContext";

const Wishlist = () => {
  const { updateWishlist, wishlist } = useWishlistContext();
  return (
    <>
      <h1 className="font-bold mb-10 text-3xl text-red-500 px-6">
        My Wishlist
      </h1>
      <div className="flex flex-wrap gap-10 relative flex-1 px-6">
        {wishlist.length !== 0 ? (
          wishlist.map((movie) => (
            <Card
              {...movie}
              updateWishlist={updateWishlist}
              wishlist={wishlist}
            />
          ))
        ) : (
          <div className="text-red-500 font-bold text-5xl w-full ">
            Wishlist kosong
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;
