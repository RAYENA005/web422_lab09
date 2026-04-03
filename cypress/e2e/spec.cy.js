describe("Calculator Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Addition Test", () => {
    cy.contains("5").click();
    cy.contains("+").click();
    cy.contains("3").click();
    cy.contains("=").click();
    cy.get('[data-testid="display"]').should("have.text", "8");
  });

  it("Subtraction Test", () => {
    cy.contains("1").click();
    cy.contains("0").click();
    cy.contains("-").click();
    cy.contains("4").click();
    cy.contains("=").click();
    cy.get('[data-testid="display"]').should("have.text", "6");
  });

  it("Multiplication Test", () => {
    cy.contains("6").click();
    cy.contains("*").click();
    cy.contains("7").click();
    cy.contains("=").click();
    cy.get('[data-testid="display"]').should("have.text", "42");
  });

  it("Division Test", () => {
    cy.contains("1").click();
    cy.contains("5").click();
    cy.contains("/").click();
    cy.contains("3").click();
    cy.contains("=").click();
    cy.get('[data-testid="display"]').should("have.text", "5");
  });
});