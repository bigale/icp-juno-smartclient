describe('SmartClient CRUD Grid', () => {
  it('should load the CRUD grid and display the grid container', () => {
    cy.visit('/');
    cy.get('[data-cy="crud-grid-container"]').should('exist');
  });

  // Add more tests for CRUD operations as needed
});
