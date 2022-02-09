/**
 * Index page integration tests.
 */
describe('Index page', () => {
  /**
   * Runs after each individual test.
   */
  afterEach(() => {
    cy.wait(3000);
    cy.screenshot();
  });

  /**
   * Testing that the index page has link to page with pokemons.
   */
  it('has link to pokemons page', () => {
    cy.visit('/');

    cy.get('a[href*="pokemons"]')
      .click();

    cy.location()
      .should((loc) => {
        expect(loc.pathname).to.eq('/pokemons');
      });
  });
});
