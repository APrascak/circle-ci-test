// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  beforeEach(() => {
    cy.viewport(1300, 650);
    cy.server();
    cy.visit("/");
  });
  it("Visits the app root url", () => {
    cy.contains("h1", "Welcome to Your Vue.js App");
  });
});