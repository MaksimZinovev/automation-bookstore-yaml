describe('search for books', () => {
  beforeEach(() => {
    //cy.visit('https://mzinbookstore-linux.azurewebsites.net/')
    cy.visit('/')
  })

  it('should return one book with title Agile Testing', () => {
    const  title = `Agile Testing`
    const  expectedCount = 1

    // Search 
    cy.get('#searchBar').type(title, {delay: 250})

    // Verify count
    cy.get('li:not(.ui-screen-hidden)').should('have.length', expectedCount, `There should be exactly ${expectedCount} book(s) visible`)

    // Verify  book title
    cy.get('h2').should('contain.text', title, `${title} should be visible`)
  })
})