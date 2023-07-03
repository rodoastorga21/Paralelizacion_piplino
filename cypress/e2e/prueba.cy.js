/// <reference types='Cypress'/>
import 'cypress-file-upload'
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')

Cypress.on('uncaught:exception', (err, runnable) => {
return false

})

describe('descipcion',()=>{
    it('Prueba inicial',()=>{
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')
    })
})