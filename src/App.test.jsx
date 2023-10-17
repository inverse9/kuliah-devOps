import { render } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { getMoviesApi } from "./api";
import { WishlistProvider } from "./WishlistContext";

const movie = [
  {
    id: 1,
    original_title: "Drunken Master",
    poster_path: "drunken.jpg",
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, distinctio animi consequatur ea architecto inventore! Eveniet id aliquid at quidem rem itaque, cupiditate quam error, cum vel esse! Velit, reiciendis.",
  },
];

jest.mock("./api");
describe("Home page", () => {
  beforeEach(() => jest.clearAllMocks());

  test("Successful API request", async () => {
    getMoviesApi.mockResolvedValue({ results: movie });

    const { findByText } = render(
      <WishlistProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </WishlistProvider>
    );

    expect(await findByText("Drunken Master")).toBeInTheDocument();
  });

  test("Error API request", async () => {
    getMoviesApi.mockRejectedValue();

    const { findByText } = render(
      <WishlistProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </WishlistProvider>
    );

    expect(await findByText("Error fetching data")).toBeInTheDocument();
  });
});
