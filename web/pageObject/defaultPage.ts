export async function getElementByLocator(locator: string) {
    return await (browser).$(locator)
}

export async function getElementTextByLocator(locator: string): Promise<string> {
    return await (await getElementByLocator(locator)).getText()
}

export async function clickByLocator(locator: string): Promise<void> {
    await (await getElementByLocator(locator)).click()
}

export async function openLandingPage(): Promise<void> {
    await browser.url('')
}

export async function openSignInWithEmailPage(): Promise<void> {
    await browser.url('/sign-in')
}

export async function findByLocatorAndAddText(locator:string, text: string): Promise<void> {
    await (await getElementByLocator(locator)).addValue(text) 
}