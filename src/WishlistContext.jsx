import { useState, createContext, useContext, useEffect } from "react";

const Wishlist = createContext(null);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const updateWishlist = (movie) => {
    if (wishlist.find((item) => item.id === movie.id)) {
      setWishlist(wishlist.filter((item) => item.id !== movie.id));
      return;
    }
    setWishlist((val) => [...val, movie]);
  };

  useEffect(() => {
    console.log(wishlist);
  }, [wishlist]);

  return (
    <Wishlist.Provider
      value={{
        wishlist,
        updateWishlist,
      }}
    >
      {children}
    </Wishlist.Provider>
  );
};

export const useWishlistContext = () => useContext(Wishlist);
