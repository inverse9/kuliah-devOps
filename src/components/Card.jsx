import React from "react";
import { useWishlistContext } from "../WishlistContext";

const Card = (movie) => {
  const { updateWishlist, wishlist } = useWishlistContext();
  const { index, original_title, poster_path, overview } = movie;
  const wishlistState = wishlist.find((item) => item.id === movie.id);

  return (
    <div
      data-testid={`card-${index}`}
      className="bg-slate-800 text-slate-100 w-full sm:w-1/3 md:w-1/4 lg:w-1/6 group"
    >
      <div className="transition group-hover:translate-x-2 group-hover:-translate-y-2 relative">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt="img"
        />
        <div className="px-2 absolute bottom-0 w-full invisible backdrop-blur group-hover:bg-slate-700/30 group-hover:visible">
          <div className="text-2xl text-red-500 font-semibold mb-1 line-clamp-1">
            {original_title}
          </div>
          <div className="line-clamp-none sm:line-clamp-3 lg:line-clamp-4">
            {overview}
          </div>
        </div>
        <div
          id="hidden-parent"
          className="absolute top-1 right-1 invisible group-hover:visible"
        >
          <button
            data-testid={index}
            title={wishlistState ? "remove from wishlist" : "wishlist"}
            onClick={() => updateWishlist(movie)}
            className="p-2 bg-red-500 hover:bg-red-600 active:bg-red-500"
          >
            {wishlistState ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
