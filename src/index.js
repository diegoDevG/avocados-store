
const baseUrl = 'https://platzi-avo.vercel.app'
const app = document.querySelector('#app')

async function getData() {
    const response = await fetch(`${baseUrl}/api/avo`)
    const { data } = await response.json()
    const items = []

    //handle currencie
    const formatPrice = (price) => {
        const newPrice = new window.Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price)

        return newPrice
    }

    data.forEach(item => {
        const itemContaier = document.createElement('div')
        const imageNode = document.createElement('img')
        const titleNode = document.createElement('h2')
        const priceNode = document.createElement('div')

        app.className = 'grid gap-8 md:grid-cols-1 md:grid-cols-3'
        itemContaier.className = 'cursor-pointer flex flex-col justify-around items-center bg-gray-800 rounded-lg p-6 hover:bg-gray-600'
        titleNode.className = 'text-2xl text-green-400'
        imageNode.className = 'w-40 rounded-full'
        priceNode.classList = 'text-yellow-300'

        imageNode.src = `${baseUrl}${item.image}`
        titleNode.textContent = item.name
        priceNode.textContent = `${formatPrice(item.price)} USD`
        itemContaier.append(imageNode, titleNode, priceNode)
        items.push(itemContaier)
    });
    app.append(...items)
}

getData()