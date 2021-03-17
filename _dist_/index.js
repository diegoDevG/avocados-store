/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = 'https://platzi-avo.vercel.app'
const app = document.querySelector('#app')

async function getData() {
    const response = await fetch(`${baseUrl}/api/avo`)
    const { data } = await response.json()
    const items = []

    data.forEach(item => {
        const imageNode = document.createElement('img')
        imageNode.src = `${baseUrl}${item.image}`

        const titleNode = document.createElement('h2')
        titleNode.textContent = item.name

        const priceNode = document.createElement('div')
        priceNode.textContent = item.price

        const itemContaier = document.createElement('div')
        itemContaier.append(imageNode, titleNode, priceNode)
        items.push(itemContaier)
    });
    app.append(...items)
}

getData()