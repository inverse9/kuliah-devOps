import { fireEvent, render } from "@testing-library/react";
import Card from "./Card";
import { WishlistProvider } from "../WishlistContext";

const movie = {
  id: 1,
  original_title: "Drunken Master",
  poster_path: "drunken.jpg",
  overview:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, distinctio animi consequatur ea architecto inventore! Eveniet id aliquid at quidem rem itaque, cupiditate quam error, cum vel esse! Velit, reiciendis.",
};

describe("Card component", () => {
  test("render a card component", () => {
    const { getByTestId } = render(
      <WishlistProvider>
        <Card {...movie} />
      </WishlistProvider>
    );

    expect(getByTestId("1")).toBeInTheDocument();
  });

  test("simulate a button click", () => {
    const { getByRole, getByTitle } = render(
      <WishlistProvider>
        <Card {...movie} />
      </WishlistProvider>
    );

    fireEvent.click(getByRole("button"));
    expect(getByTitle("remove from wishlist")).toBeInTheDocument();
  });
});
