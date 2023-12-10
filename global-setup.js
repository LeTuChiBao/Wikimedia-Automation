import {test as setup,expect} from '@playwright/test'
import * as dotenv from 'dotenv'
dotenv.config() 
let username = 'Chibao116'
let password = process.env.password
setup('do login', async ({page})=> {
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.getByPlaceholder('Enter your username').fill(username);
    await page.getByPlaceholder('Enter your password').fill(password);
    await page.context().storageState({ path: "./userauth.json" });   
})