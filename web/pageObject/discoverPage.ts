import * as defaultPage from './defaultPage'

const discoverPageTitle = 'h1'

export async function getPageTitleByText(): Promise<string> {
    return await defaultPage.getElementTextByLocator(discoverPageTitle) 
}