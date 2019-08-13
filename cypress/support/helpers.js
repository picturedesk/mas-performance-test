export function openMenu(menu) {
    cy.get('.navbar-nav > .nav-item > .nav-link').contains(menu).click();
}
