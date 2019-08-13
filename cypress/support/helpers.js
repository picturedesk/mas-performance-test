export function firstLevelMenu(menu) {
    cy.get('.navbar-nav > li > a').contains(menu).click();
}

export function secondLevelMenu(menu) {
    cy.get('.navbar-nav > li > .dropdown-menu > li > a').contains(menu).click();
}


export function thirdLevelMenu(menu) {
    cy.get('.navbar-nav > li > .dropdown-menu > li > .dropdown-menu > li > a').contains(menu).click();
}
