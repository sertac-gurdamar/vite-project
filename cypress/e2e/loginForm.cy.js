describe('Login Form E2E Testleri', () => {

  const baseUrl = 'http://localhost:5173/'; // Vite dev server URL

  it('Başarılı form doldurma ve Success sayfası', () => {
    cy.visit(baseUrl);
    cy.get('[data-cy="input-email"]').type('test@example.com');
    cy.get('[data-cy="input-password"]').type('Test1234Abc');
    cy.get('[data-cy="input-terms"]').check();
    cy.get('[data-cy="form-submit"]').click();
    cy.contains('Form başarıyla gönderildi!').should('be.visible');
  });

  it('Hatalı email ve password ile buton disabled', () => {
    cy.visit(baseUrl);
    cy.get('[data-cy="input-email"]').type('test@'); // hatalı email
    cy.get('[data-cy="input-password"]').type('123'); // kısa şifre
    cy.get('[data-cy="form-submit"]').should('be.disabled');
  });

  it('Email ve password doğru ama checkbox işaretlenmedi → buton disabled', () => {
    cy.visit(baseUrl);
    cy.get('[data-cy="input-email"]').type('test@example.com');
    cy.get('[data-cy="input-password"]').type('Test1234Abc');
    cy.get('[data-cy="form-submit"]').should('be.disabled');
  });

});