/// <reference types="Cypress" />
import {firstLevelMenu, secondLevelMenu, thirdLevelMenu} from "../../support/helpers";

context('MAS Headless', () => {

    it('Loading', () => {
        cy.visit('https://headless-measure.picturedesk.ch');
        cy.get('h1').should('have.text', 'Home Mission Headless');
    });

    it('Metanav', () => {
        cy.get('.meta-nav').contains('Kontakt').click();
        cy.get('h1').should('have.text', 'Kontakt');
    });

    it('Über uns', () => {
        firstLevelMenu('Über uns');
        secondLevelMenu('Über uns');
        cy.get('h1').should('have.text', 'Mission Headless Leistungen & Produkte');
    });

    it('Qualität', () => {
        firstLevelMenu('Über uns');
        secondLevelMenu('Qualität');
    });

    it('Kooperation', () => {
        firstLevelMenu('Über uns');
        secondLevelMenu('Kooperation');
        thirdLevelMenu('Kooperation');
    });

    it('Gesundheitsprogramme', () => {
        firstLevelMenu('Über uns');
        secondLevelMenu('Kooperation');
        thirdLevelMenu('Gesundheitsprogramme');
    });

    it('Integrierte Versorgung', () => {
        firstLevelMenu('Über uns');
        secondLevelMenu('Kooperation');
        thirdLevelMenu('Integrierte Versorgung');
    });

    it('Kontaktformular', () => {
        firstLevelMenu('Über uns');
        secondLevelMenu('Kontakt');
        cy.get('.media-body a').contains('Kontaktformular').click();
    });

    it('Kongresse', () => {
        firstLevelMenu('Über uns');
        secondLevelMenu('Kongresse');
        thirdLevelMenu('Kongresse');
    });

    it('2019, Traditionell vor Headless', () => {
        firstLevelMenu('Über uns');
        secondLevelMenu('Kongresse');
        thirdLevelMenu('2019, Traditionell vor Headless');
    });

    it('Spital / Klinik', () => {
        firstLevelMenu('Spital / Klinik');
    });

    it('Apotheken', () => {
        firstLevelMenu('Apotheken');
    });

    it('Ärzte / Zahnärzte', () => {
        firstLevelMenu('Ärzte / Zahnärzte');
        secondLevelMenu('Ärzte / Zahnärzte');
    });

    it('TARMED', () => {
        firstLevelMenu('Ärzte / Zahnärzte');
        secondLevelMenu('TARMED');
    });

    it('Ärzte', () => {
        firstLevelMenu('Ärzte / Zahnärzte');
        secondLevelMenu('Ärzte');
    });

    it('Ärztenetzwerke', () => {
        firstLevelMenu('Ärzte / Zahnärzte');
        secondLevelMenu('Ärztenetzwerke');
    });

    it('Hausärzte', () => {
        firstLevelMenu('Ärzte / Zahnärzte');
        secondLevelMenu('Hausärzte');
    });

    it('Zweitmeinungsarzt', () => {
        firstLevelMenu('Ärzte / Zahnärzte');
        secondLevelMenu('Zweitmeinungsarzt');
    })
});
