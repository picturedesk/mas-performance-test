/// <reference types="Cypress" />
import {openMenu} from "../../support/helpers";

context('Navigation', () => {
    before(() => {
        cy.visit('https://headless.picturedesk.ch')
    })

    it('Metanav', () => {
        cy.get('.meta-nav').contains('Kontakt').click();
    })

    it('Über uns', () => {
        openMenu('Über uns');
        cy.get(".navbar-nav > .nav-item > .dropdown-menu > .nav-item > .nav-link").contains("Über uns").click();
    })
});
