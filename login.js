function auth(email, password) {

    if (email) {
        cy.get('input[id=\"email\"]')
            .type(email)
            .should("have.value", email);
    }

    if (password) {
        cy.get('input[id=\"passwd\"]')
            .type(password);
    }


    cy.get('button[id=\"SubmitLogin\"]').click();
}

export {auth};