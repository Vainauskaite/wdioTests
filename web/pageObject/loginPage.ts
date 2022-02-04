import * as defaultPage from "./defaultPage"

const signInEmailButton = "//button[text()='Sign in with email']"
const signInHeader = 'h1'
const emailfield = '//form//input[@name="email"]';
const passwordfield = '//input[@name="password"]';
const signInBtn = '//button[text()="Sign in"]';

export async function clickSignInWithEmailButton(): Promise<void> {
    await defaultPage.clickByLocator(signInEmailButton)
}

export async function getSignInHeaderText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(signInHeader)
} 

export async function enterEmailAndPassword(email:string, password: string): Promise<void> {
    await defaultPage.findByLocatorAndAddText(emailfield, email);
    await defaultPage.findByLocatorAndAddText(passwordfield, password);
    await defaultPage.clickByLocator(signInBtn);

}