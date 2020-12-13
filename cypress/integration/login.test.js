import {auth} from '../../login.js'
import {open_main_page} from "../../application";

describe("Login tests", () => {
    it("Auth valid data", () => {
        open_main_page();
        auth('testmail@t.t', '1234567890')
        cy.url().should('include', '/index.php?controller=my-account');
    });

    it('Auth empty email ', () => {
        open_main_page()
        auth(null, '1234567890')
        cy.get('div[class="alert alert-danger"]')
    });

    it('Auth invalid email ', () => {
        open_main_page()
        auth('test123123', '1234567890')
        cy.get('div[class="alert alert-danger"]')
    });

    it('Auth invalid password ', () => {
        open_main_page()
        auth('testmail@t.t', '00000')
        cy.get('div[class="alert alert-danger"]')
    });
});