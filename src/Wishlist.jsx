import React, { Fragment } from "react";
import Card from "./components/Card";
import { useWishlistContext } from "./WishlistContext";

const Wishlist = () => {
  const { wishlist } = useWishlistContext();
  return (
    <>
      <h1 className="font-bold mb-10 text-3xl text-red-500 px-6">
        My Wishlist
      </h1>
      {wishlist.length !== 0 ? (
        <div
          data-testid="my-movies"
          className="flex flex-wrap gap-10 relative flex-1 px-6"
        >
          {wishlist.map((movie, index) => (
            <Fragment key={movie.id}>
              <Card {...movie} index={index} />
            </Fragment>
          ))}
        </div>
      ) : (
        <div className="text-red-500 font-bold text-5xl w-full">
          Wishlist kosong
        </div>
      )}
    </>
  );
};

export default Wishlist;
