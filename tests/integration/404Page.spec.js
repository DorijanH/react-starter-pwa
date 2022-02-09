/**
 * 404 page integration tests.
 */
describe('404 page', () => {
  afterEach(() => cy.screenshot());

  /**
   * Testing that the 404 page is shown when accessing route that does not exist.
   */
  it('shows when bad is entered', () => {
    cy.visit('/this/is/some/bad/url', { failOnStatusCode: false });

    cy.get('h1').contains('404');
  });
});
