//Accordion
const tabs = document.querySelectorAll('.tab')

tabs.forEach((tab, index) => {
	if (index !== 0) {
		tab.addEventListener('mouseover', () => {
			tabs[0].style.width = '10%'
		})
	}
})

document.querySelector('.images-accordion').addEventListener('mouseout', () => {
	tabs[0].style.width = '100%'
})

//Gallery navigation
const containers = document.querySelectorAll('.imageContainer')

containers.forEach((container) => {
	container.style.display = 'none'
})

const editorialContainer = document.querySelector('#editorial')

editorialContainer.style.display = 'grid'

const links = document.querySelectorAll('.explore-nav a')

links.forEach((link) => {
	link.addEventListener('click', (event) => {
		event.preventDefault()

		containers.forEach((container) => {
			container.style.display = 'none'
		})

		const target = link.getAttribute('href').slice(1)
		const targetContainer = document.querySelector(`#${target}`)

		targetContainer.style.display = 'grid'
	})
})
