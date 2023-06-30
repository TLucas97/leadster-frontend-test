Cypress.config("baseUrl", "http://localhost:3000");
Cypress.config("viewportWidth", 1920);
Cypress.config("viewportHeight", 1080);

beforeEach(() => {
  cy.visit("/");
});

describe("MainApp", () => {
  it("should render", () => {
    cy.get('[data-testid="main"]').should("exist");
    cy.get('[data-testid="header-leadster-logo"]').should("exist");
    cy.get('[data-testid="highlighted-text"]').should("exist");
    cy.get('[data-testid="card-img-banner"]').should("exist");
    cy.get('[data-testid="card-img-banner"]').should("have.length", 9);
    cy.get('[data-testid="ui-btn"]').should("have.length", 11);
    cy.get('[data-testid="ad-img"]').should("exist");
    cy.get('[data-testid="footer-leadster-logo"]').should("exist");
    cy.get('[data-testid="footer-last-texts"]').should("exist");
    cy.get("a").should("have.length", 14);
  });

  it("should open the video modal", () => {
    cy.get('[data-testid="card-img-banner"]').first().trigger("mouseover");
    cy.get('[data-testid="card-middle-play-btn"]').should("exist").click();
    cy.wait(2500);
    cy.get('[data-testid="videomodal-wrapper"]').should("exist");
    cy.get('[data-testid="videomodal-title"]').should("exist");
    cy.get('[data-testid="videomodal-iframe"]').should("exist");
    cy.get('[data-testid="videomodal-description"]').should("exist");
    cy.get('[data-testid="videomodal-downloadicons"]').should("exist");
    cy.get('[data-testid="videomodal-closebtn"]').should("exist").click();
    cy.get('[data-testid="videomodal-wrapper"]').should("not.exist");
  });
});
