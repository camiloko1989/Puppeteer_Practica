const puppeteer = require('puppeteer')

describe('dejando comentario en un post', () =>{

    it('Debe dejar un comentario en el primer post que encuentre', async () =>{
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
            
        })
        const page = await browser.newPage()
        await page.goto('https://andaregueandoando.com/') //Ir a la pagina
        await page.waitForSelector('#post-3213 > div > h2 > a') // Esperar la carga del link
        await page.click('#post-3213 > div > h2 > a') // Click sobre el link
        let commentario = await page.waitForXPath('//*[@id="comment"]') 
        await commentario.type("Este es un comentario de prueba") // Escribir sobre el campo comentario
        let autor = await page.waitForSelector('#author') //Encontrar el campo de Autor
        await autor.type("Camilo Jimenez") // Diligenciar el campo Autor
        let email = await page.waitForXPath('//*[@id="email" and @name="email"]') //Buscar el campo email
        await email.type('camilojimenez@gmail.com')// Diligenciar email
        await page.click('#submit') //Click en Enviar


        /*await page.waitForSelector('img')
        //recargar pagina
        await page.reload()
        await page.waitForSelector('img')

        //navegar a otro sitio
        await page.goto('https://platzi.com/')
        await page.waitForSelector('img')

        //Navegar hacia atras
        await page.goBack()
        await page.goForward()
        //await page.waitForSelector('img')

        //abrir nueva pagina
        const page2 = await browser.newPage()
        await page2.goto('https://google.com/') */

        await browser.close()
    }, 30000) 

})