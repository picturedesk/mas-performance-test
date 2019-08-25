/// <reference types="Cypress" />
import {firstLevelMenu, secondLevelMenu, thirdLevelMenu} from "../../support/helpers";

context('MAS Headless', () => {
    it('Loading', () => {
        cy.server();
        cy.route('GET', "/**/*").as('pict');
        cy.visit('https://headless-measure.picturedesk.ch');
        cy.wait('@pict');
    });

    it('Metanav', () => {
        cy.server();
        cy.route('GET', "/**/*").as('pict');
        cy.route('GET', "/**/*").as('pict');
        cy.get('.meta-nav').contains('Kontakt').click();
        cy.wait('@pict');
    });

    it('Über uns', () => {
        cy.server();
        cy.route('GET', "/**/*").as('pict');
        firstLevelMenu('Über uns');
        secondLevelMenu('Über uns');
        cy.wait('@pict');
    });

    it('Qualität', () => {
        cy.server();
        cy.route('GET', "/**/*").as('pict');
        firstLevelMenu('Über uns');
        secondLevelMenu('Qualität');
        cy.wait('@pict');
    });

    it('Kooperation', () => {
        cy.server();
        cy.route('GET', "/**/*").as('pict');
        firstLevelMenu('Über uns');
        secondLevelMenu('Kooperation');
        thirdLevelMenu('Kooperation');
        cy.wait('@pict');
    });

    it('Gesundheitsprogramme', () => {
        cy.server();
        cy.route('GET', "/**/*").as('pict');
        firstLevelMenu('Über uns');
        secondLevelMenu('Kooperation');
        thirdLevelMenu('Gesundheitsprogramme');
        cy.wait('@pict');
    });

    it('Integrierte Versorgung', () => {
        cy.server();
        cy.route('GET', "/**/*").as('pict');
        firstLevelMenu('Über uns');
        secondLevelMenu('Kooperation');
        thirdLevelMenu('Integrierte Versorgung');
        cy.wait('@pict');
    });

    it('Kontaktformular', () => {
        cy.server();
        cy.route('GET', "/**/*").as('pict');
        firstLevelMenu('Über uns');
        secondLevelMenu('Kontakt');
        cy.get('.media-body a').contains('Kontaktformular').click();
        cy.wait('@pict');
    });

    it('Kongresse', () => {
        cy.server();
        cy.route('GET', "/**/*").as('pict');
        cy.server();
        firstLevelMenu('Über uns');
        secondLevelMenu('Kongresse');
        thirdLevelMenu('Kongresse');
        cy.wait('@pict');
    });

    it('2019, Traditionell vor Headless', () => {
        cy.server();
        cy.route('GET', "/**/*").as('pict');
        firstLevelMenu('Über uns');
        secondLevelMenu('Kongresse');
        thirdLevelMenu('2019, Traditionell vor Headless');
        cy.wait('@pict');
    });

    it('Spital / Klinik', () => {
        cy.server();
        cy.route('GET', "/**/*").as('pict');
        firstLevelMenu('Spital / Klinik');
        cy.wait('@pict');
    });

    it('Apotheken', () => {
        cy.server();
        cy.route('GET', "/**/*").as('pict');
        firstLevelMenu('Apotheken');
        cy.wait('@pict');
    });

    it('Ärzte / Zahnärzte', () => {
        cy.server();
        cy.route('GET', "/**/*").as('pict');
        firstLevelMenu('Ärzte / Zahnärzte');
        secondLevelMenu('Ärzte / Zahnärzte');
        cy.wait('@pict');
    });

    it('TARMED', () => {
        cy.server();
        cy.route('GET', "/**/*").as('pict');
        firstLevelMenu('Ärzte / Zahnärzte');
        secondLevelMenu('TARMED');
        cy.wait('@pict');
    });

    it('Ärzte', () => {
        cy.server();
        cy.route('GET', "/**/*").as('pict');
        firstLevelMenu('Ärzte / Zahnärzte');
        secondLevelMenu('Ärzte');
        cy.wait('@pict');
    });

    it('Ärztenetzwerke', () => {
        cy.server();
        cy.route('GET', "/**/*").as('pict');
        firstLevelMenu('Ärzte / Zahnärzte');
        secondLevelMenu('Ärztenetzwerke');
        cy.wait('@pict');
    });

    it('Hausärzte', () => {
        cy.server();
        cy.route('GET', "/**/*").as('pict');
        firstLevelMenu('Ärzte / Zahnärzte');
        secondLevelMenu('Hausärzte');
        cy.wait('@pict');
    });

    it('Zweitmeinungsarzt', () => {
        cy.server();
        cy.route('GET', "/**/*").as('pict');
        firstLevelMenu('Ärzte / Zahnärzte');
        secondLevelMenu('Zweitmeinungsarzt');
        cy.wait('@pict');
    })
});
