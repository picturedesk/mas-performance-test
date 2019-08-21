/// <reference types="Cypress" />
import {firstLevelMenu, secondLevelMenu, thirdLevelMenu} from "../../support/helpers";

context('MAS Traditional', () => {
    it('Loading', () => {
        cy.visit('https://tranditional-measure.picturedesk.ch')
    });

    it('Metanav', () => {
        cy.get('.meta-nav').contains('Kontakt').click();
    });

    it('Über uns', () => {
        firstLevelMenu('Über uns');
        secondLevelMenu('Über uns');
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
