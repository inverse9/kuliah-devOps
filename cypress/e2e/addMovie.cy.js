import "cypress-real-events";

it("should add movie to the wishlist", () => {
  cy.visit("http://localhost:3000");
  cy.wait(1200);
  cy.get('[data-testid="968051"]')
    .realHover("mouse")
    .then(() => {
      cy.get("#hidden-parent").should("be.visible");
      cy.get('button[data-testid="968051"]').realClick();
    });
  cy.get("a").click();
});
