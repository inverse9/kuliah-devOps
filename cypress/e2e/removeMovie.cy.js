import "cypress-real-events";

it("should remove movie from the wishlist", () => {
  cy.intercept("/3/discover/*").as("getMovies");
  cy.visit("http://localhost:3000");
  cy.wait("@getMovies");
  cy.get("h1").should("contain", "Trending");
  cy.get('[data-testid="card-0"]')
    .realHover("mouse")
    .then(() => {
      cy.get("#hidden-parent").should("be.visible");
      cy.get('button[data-testid="0"]').realClick();
    });
  cy.contains("a", "Wishlist").click();
  cy.get('[data-testid="0"]')
    .realHover("mouse")
    .then(() => {
      cy.get("#hidden-parent").should("be.visible");
      cy.get('button[data-testid="0"]').realClick();
    });
});
