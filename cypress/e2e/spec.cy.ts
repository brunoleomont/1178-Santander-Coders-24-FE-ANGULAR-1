describe('My Angular App', () => {
  it('should display the app title', () => {
    // Visit the app's base URL
    cy.visit('http://localhost:4200');
    
    // Check if the page contains the app title
    cy.get('h2').should('contain', 'Pipe de Gramas');
  });
});