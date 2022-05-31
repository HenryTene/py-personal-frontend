///<reference types="cypress"/>

describe('<Login/>', () => {
    it('<Login/> - Verificar pantalla de inicio', () => {
        cy.visit('/')

        //Probar el texto
        cy.contains('h1', 'Inicia Sesión en Simple Project')

        /*   cy.get('[data-cy=titulo]')
             .invoke('text')
             .should('eq', 'Inicia Sesión en Simple Project') */

        //Revisar que el formulario exista
        cy.get('[data-cy="form-login"]')
            .should('exist')

        //Revisar inputs de form
        cy.get('[data-cy="email-input"]')
            .should('exist')
        cy.get('[data-cy="password-input"]')
            .should('exist')


        //Revisar boton inicio de sesion
        cy.get('[data-cy="sumbit-login"]')
            .should('exist')
            .should('have.value', 'Iniciar Sesión')

        cy.get('[data-cy="nueva-cuenta"]')
            .should('exist')
            .should('have.attr', 'href')
            .should('eq', '/registrar')

        cy.get('[data-cy="olvide-cuenta"]')
            .should('exist')
            .should('have.attr', 'href')
            .should('eq', '/olvide-password')


    });

    it('<Login/> - Verificar el formulario', () => {

    });
});