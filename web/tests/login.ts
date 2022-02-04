import * as defaultPage from "../pageObject/defaultPage"
import * as loginPage from "../pageObject/loginPage"
import * as discoverPage from "../pageObject/discoverPage"
import {expect} from "chai"

const validEmail = 'egle.vainauskaite@telesoftas.com'
const validPassword = 'Eagle258+'

const invalidEmail = 'tets';
const invalidPassword = 'tes';
const expectedHeaderText = "Discover"


describe('Test for login with email', function () {

   before(async function() {
    await defaultPage.openSignInWithEmailPage()
    await browser.pause(2000);
   }) 

    it('user successfuly sign in', async () => {
       await loginPage.enterEmailAndPassword(validEmail, validPassword)
       await browser.pause(2000);
       expect(await discoverPage.getPageTitleByText()).equals(expectedHeaderText)
      
    })

   it('invalid user error', async () => {
    
        await loginPage.enterEmailAndPassword(invalidEmail, invalidPassword)
        await browser.pause(2000);
     })
    
})   