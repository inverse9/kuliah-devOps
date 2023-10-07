import { useState, createContext, useContext } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const updateWishlist = (movie) => {
    if (wishlist.find((item) => item.id === movie.id)) {
      setWishlist(wishlist.filter((item) => item.id !== movie.id));
      return;
    }
    setWishlist((val) => [...val, movie]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        updateWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlistContext = () => useContext(WishlistContext);
