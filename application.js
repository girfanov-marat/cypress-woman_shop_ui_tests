function open_main_page() {
    cy.visit("/index.php?controller=authentication&back=my-account");
}

export {open_main_page}