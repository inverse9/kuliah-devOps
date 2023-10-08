import { fireEvent, render } from "@testing-library/react";
import { WishlistProvider, useWishlistContext } from "./WishlistContext";

const TestingComponent = ({ movie }) => {
  const { updateWishlist, wishlist } = useWishlistContext();
  return (
    <>
      <span data-testid="wishlist-length">{wishlist.length}</span>
      <button onClick={() => updateWishlist(movie)}>Wishlist</button>
    </>
  );
};

describe("Wishlist Context", () => {
  test("wishlist is 0 by default", () => {
    const { getByTestId } = render(
      <WishlistProvider>
        <TestingComponent />
      </WishlistProvider>
    );
    expect(getByTestId("wishlist-length")).toHaveTextContent("0");
  });

  test("add movie to wishlist", () => {
    const movie = {
      id: 1,
      name: "Drunken Master",
    };

    const { getByTestId, getByRole } = render(
      <WishlistProvider>
        <TestingComponent movie={movie} />
      </WishlistProvider>
    );
    expect(getByTestId("wishlist-length")).toHaveTextContent("0");
    fireEvent.click(getByRole("button"));
    expect(getByTestId("wishlist-length")).toHaveTextContent("1");
  });

  test("remove movie from wishlist", () => {
    const movie = {
      id: 1,
      name: "Drunken Master",
    };
    const { getByTestId, getByRole } = render(
      <WishlistProvider>
        <TestingComponent movie={movie} />
      </WishlistProvider>
    );
    expect(getByTestId("wishlist-length")).toHaveTextContent("0");
    fireEvent.click(getByRole("button"));
    expect(getByTestId("wishlist-length")).toHaveTextContent("1");
    fireEvent.click(getByRole("button"));
    expect(getByTestId("wishlist-length")).toHaveTextContent("0");
  });
});
