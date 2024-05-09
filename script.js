
let isCreating = false
let creationInterval = 75

document.addEventListener('mousemove', () => {
    if (!isCreating) {
        isCreating = true

        let i = document.createElement('i')
        i.style.left = (event.pageX) + 'px'
        i.style.top = (event.pageY) + 'px'
        i.style.scale = `${Math.random() * 4 + 1}`
        i.style.setProperty('--x', getRandomPosition())
        i.style.setProperty('--y', getRandomPosition())
        i.style.setProperty('--r', getRandomColor())
        i.style.setProperty('--v', getRandomColor())
        i.style.setProperty('--b', getRandomColor())
    
        function getRandomColor() {
            return ~~(Math.random() * 255 + 125)
        }

        function getRandomPosition() {
            return `${Math.random() * 400 - 200}px`
        }

        document.body.appendChild(i)

        setTimeout(() => {
            document.body.removeChild(i)
        }, 2000)
    }
})

setInterval(() => {
    isCreating = false
}, creationInterval)