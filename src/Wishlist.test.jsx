import { fireEvent, render } from "@testing-library/react";
import { WishlistProvider } from "./WishlistContext";
import Wishlist from "./Wishlist";
import Card from "./components/Card";

const movie = {
  id: 1,
  index: 0,
  original_title: "Drunken Master",
  poster_path: "drunken.jpg",
  overview:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, distinctio animi consequatur ea architecto inventore! Eveniet id aliquid at quidem rem itaque, cupiditate quam error, cum vel esse! Velit, reiciendis.",
};

describe("Wishlist page", () => {
  test("render a wishlist page", () => {
    const { getByRole } = render(
      <WishlistProvider>
        <Wishlist />
      </WishlistProvider>
    );

    expect(getByRole("heading")).toBeInTheDocument();
  });

  test("movies are on the wishlist", () => {
    const { getByRole, getByTestId } = render(
      <WishlistProvider>
        <Card {...movie} />
        <Wishlist />
      </WishlistProvider>
    );

    fireEvent.click(getByRole("button"));
    expect(getByTestId("my-movies")).toBeInTheDocument();
  });

  test("movies are not on the wishlist", () => {
    const { getAllByRole, getByTestId, getByText } = render(
      <WishlistProvider>
        <Card {...movie} />
        <Wishlist />
      </WishlistProvider>
    );

    fireEvent.click(getAllByRole("button")[0]);
    expect(getByTestId("my-movies")).toBeInTheDocument();

    fireEvent.click(getAllByRole("button")[0]);
    expect(getByText("Wishlist kosong")).toBeInTheDocument();
  });
});
