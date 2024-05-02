const {$} = require('@wdio/globals');
const Page = require('./page');


// const unete = await $('=Unete')
// await expect(link).toHaveText('Unete')
// await expect(link).toHaveAttribute('href', 'http://localhost:3000/#Unete')
// const uneteBtn = await $('=Unete');
// await expect(link).toHaveText('Unete');
// await expect(link).toHaveAttribute('href', 'http://localhost:3000/BolsaDeTrabajo')

class LandingPage extends Page{

    get sidebarBtn(){
        return $('button[type="button"]');
    }

    get navOption(){
        return $('a[href="#Unete"]')
    }

    get uneteBtn(){
        return $('a[href="/BolsaDeTrabajo"]');
    }


    open(){
        return super.open('http://localhost:3000/#Inicio');
    }

    mercOpen(){
        return super.mercOpen('#Inicio')
    }

    async clickOnUnete(){
        await this.navOption.click();
        await browser.pause(5000);
    }

    async clickOnOptions(path){
        const option = await $(`a[href="#${path}"], a[href="/${path}"]`);
        await option.click();
        await browser.pause(5000);
        // switch (option) {
        //     case ($(`a[href="#${path}"]`)):
        //         await browser.pause(5000);
        //         await option.click();
        //     case ($(`a[href="/${path}"]`)):
        //         await browser.pause(5000);
        //         await option.click();
        // }

        
    }

    async clickOnBurgerBtn(){
        await this.sidebarBtn.click();
    }

}

module.exports = new LandingPage();