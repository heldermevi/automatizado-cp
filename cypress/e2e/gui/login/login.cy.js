/// <reference types="cypress" />

describe('GUI - Testes relacionados ao login ', () => {    
    it('TC001 - Nome e Senha em branco', () => {

        cy.visit("http://localhost:3000");
        cy.get('#email').type(" ");
        cy.get('#senha').type(" ");
        cy.get('#btn-entrar').click();
        cy.get('#mensagem').should('contain','Informe usuário e senha, os campos não podem ser brancos.');        
    });
    it('TC002 - Nome correto e Senha em branco', () => {
        cy.visit("http://localhost:3000");
        cy.get('#email').type("admin@admin.com");
        cy.get('#senha').type(" ");
        cy.get('#btn-entrar').click();
        cy.get('#mensagem').should('contain','E-mail ou senha inválidos');
        /// Erro no Cypress porque está pegando a senha '123456' que é apenas de ex. 
        //com isso manualmente a mensagem é 'Informe usuário e senha, os campos não podem ser brancos.'
        /// e no cypress 'E-mail ou senha inválidos'
         });
    
    it('TC003 - Nome em branco e Senha correto', () => {
        cy.visit("http://localhost:3000");
        cy.get('#email').type(" ");
        cy.get('#senha').type("admin@123");
        cy.get('#btn-entrar').click();
        cy.get('#mensagem').should('contain','Informe usuário e senha, os campos não podem ser brancos.');    
    });    
    it('TC004 - Nome correto Senha errada', () => {
        cy.visit("http://localhost:3000");
        cy.get('#email').type("admin@admin.com");
        cy.get('#senha').type("123");
        cy.get('#btn-entrar').click();
        cy.get('#mensagem').should('contain', 'E-mail ou senha inválidos');
    });
    it('TC005 - Nome errado e Senha correta', () => {
        cy.visit("http://localhost:3000");
        cy.get('#email').type("111@admin.com");
        cy.get('#senha').type("admin@123");
        cy.get('#btn-entrar').click();
        cy.get('#mensagem').should('contain','E-mail ou senha inválidos');        
    });
    it('TC006 - Nome correto e Senha correta mas com letra maiúscula', () => {
        cy.visit("http://localhost:3000");
        cy.get('#email').type("admin@admin.com");
        cy.get('#senha').type("ADMIN@123");
        cy.get('#btn-entrar').click();
        cy.get('#mensagem').should('contain','E-mail ou senha inválidos');        
    });
    it('TC007 - Nome errado e Senha correta', () => {
        cy.visit("http://localhost:3000");
        cy.get('#email').type("dmin@admin.com");
        cy.get('#senha').type("admin@123");
        cy.get('#btn-entrar').click();
        cy.get('#mensagem').should('contain','E-mail ou senha inválidos');        
    });
    it('TC008 - Nome maiúculo e Senha correta', () => {
        cy.visit("http://localhost:3000");
        cy.get('#email').type("ADMIN@ADMIN.COM");
        cy.get('#senha').type("admin@123");
        cy.get('#btn-entrar').click();
        cy.get('.navbar-brand').should('contain','Controle de produtos');        
    });
    it('TC009 - Nome parte maiúculo e Senha correta', () => {
        cy.visit("http://localhost:3000");
        cy.get('#email').type("ADMIN@admin.com");
        cy.get('#senha').type("admin@123");
        cy.get('#btn-entrar').click();
        cy.get('.navbar-brand').should('contain','Controle de produtos');                
    });
    it('TC010 - Nome e Senha corretos', () => {
        cy.visit("http://localhost:3000");
        cy.get('#email').type("admin@admin.com");
        cy.get('#senha').type("admin@123");
        cy.get('#btn-entrar').click();                       
    });
	it('TC011 - Testes de funcionalidades da aplicação', () => {
        cy.visit("http://localhost:3000");
        cy.get('#email').type("admin@admin.com");
        cy.get('#senha').type("admin@123");
        cy.get('#btn-entrar').click();     

        // Botão 'Criar' só abre com dois clicks
        cy.get('#btn-adicionar').click();
        cy.get('#btn-adicionar').click();
        cy.get('.modal-title').should('contain','Produto');

        //sair sem preencher tudo
        cy.get('#codigo').type("asd123");
        cy.get('#nome').type("123asd!@#");
        cy.get('#quantidade').type("@#$123asd");
        cy.get('#valor').type(" ");
        cy.get('#data').type("2024-06-30");
        cy.get('#btn-salvar').click();
        cy.get('#btn-sair').click();        

	    //click abrir preencher e salvar
        cy.get('#btn-adicionar').click();
        cy.get('.modal-title').should('contain','Produto');
        cy.get('#codigo').type("asd123");
        cy.get('#nome').type("123asd!@#");
        cy.get('#quantidade').type("@#$123asd");
        cy.get('#valor').type("12as@#");
        cy.get('#data').type('2024-06-30');
        cy.get('#btn-salvar').click();  
        
        //clicar sair
        cy.get('#btn-sair').click();

        //clica editar  clica excluir
        cy.get(':nth-child(6) > :nth-child(1)');
        cy.get(':nth-child(6) > :nth-child(2)');
	
	    //clica reload deveria manter salvo
        cy.reload()

	    //Fim dos testes                
    });
})