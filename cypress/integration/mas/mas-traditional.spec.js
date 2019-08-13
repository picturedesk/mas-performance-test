/// <reference types="Cypress" />
import {firstLevelMenu, secondLevelMenu, thirdLevelMenu} from "../../support/helpers";

context('MAS Traditional', () => {
    it('Loading', () => {
        cy.visit('https://traditional.picturedesk.ch')
    });

    it('Metanav', () => {
        cy.get('.meta-nav').contains('Kontakt').click();
    })

    it('Über uns', () => {
        firstLevelMenu('Über uns');
        secondLevelMenu('Über uns');

        firstLevelMenu('Über uns');
        secondLevelMenu('Qualität');

        firstLevelMenu('Über uns');
        secondLevelMenu('Kooperation');
        thirdLevelMenu('Kooperation');

        firstLevelMenu('Über uns');
        secondLevelMenu('Kooperation');
        thirdLevelMenu('Gesundheitsprogramme');

        firstLevelMenu('Über uns');
        secondLevelMenu('Kooperation');
        thirdLevelMenu('Integrierte Versorgung');

        firstLevelMenu('Über uns');
        secondLevelMenu('Kontakt');
        cy.get('.media-body a').contains('Kontaktformular').click();

        firstLevelMenu('Über uns');
        secondLevelMenu('Kongresse');
        thirdLevelMenu('Kongresse');

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

        firstLevelMenu('Ärzte / Zahnärzte');
        secondLevelMenu('TARMED');

        firstLevelMenu('Ärzte / Zahnärzte');
        secondLevelMenu('Ärzte');

        firstLevelMenu('Ärzte / Zahnärzte');
        secondLevelMenu('Ärztenetzwerke');

        firstLevelMenu('Ärzte / Zahnärzte');
        secondLevelMenu('Hausärzte');

        firstLevelMenu('Ärzte / Zahnärzte');
        secondLevelMenu('Zweitmeinungsarzt');
    })
});
