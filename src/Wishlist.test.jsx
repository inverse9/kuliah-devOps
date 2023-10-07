import { fireEvent, render } from "@testing-library/react";
import { WishlistProvider } from "./WishlistContext";
import Wishlist from "./Wishlist";
import Card from "./components/Card";

describe("Wishlist page", () => {
  test("render a wishlist page", () => {
    const { getByRole } = render(
      <WishlistProvider>
        <Wishlist />
      </WishlistProvider>
    );

    expect(getByRole("heading")).toBeInTheDocument();
  });

  test("what movies are on the wishlist", () => {
    const movie = {
      id: 1,
      original_title: "Drunken Master",
      poster_path: "drunken.jpg",
      overview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, distinctio animi consequatur ea architecto inventore! Eveniet id aliquid at quidem rem itaque, cupiditate quam error, cum vel esse! Velit, reiciendis.",
    };
    const { getByRole, getByTestId } = render(
      <WishlistProvider>
        <Card {...movie} />
        <Wishlist />
      </WishlistProvider>
    );

    fireEvent.click(getByRole("button"));
    expect(getByTestId("my-movies")).toBeInTheDocument();
  });
});
