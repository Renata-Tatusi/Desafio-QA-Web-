describe('My Store', ()=> { 
    it('Login invalido',() => {
        cy.visit('http://automationpractice.com/index.php');
        
        cy.get('.login').click();

        cy.get('#email').focus().type ('admin')

        cy.get('#passwd').focus().type('admin')
      
        cy.get('#SubmitLogin > span').click();
    });
      
    it('Login em branco',() => {
        cy.visit('http://automationpractice.com/index.php');
            
        cy.get('.login').click();
    
        cy.get('#passwd').focus().type('admin')
          
        cy.get('#SubmitLogin > span').click();    

    });

    it('Login valido',() => {
        cy.visit('http://automationpractice.com/index.php');
        
        cy.get('.login').click();

        cy.get('#email').focus().type ('renata@testes.com.br')

        cy.get('#passwd').focus().type('admin')
      
        cy.get('#SubmitLogin > span').click();

    
    });
});
