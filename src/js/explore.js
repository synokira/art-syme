const tabs = document.querySelectorAll('.tab')

tabs.forEach((tab, index) => {
	if (index !== 0) {
		tab.addEventListener('mouseover', () => {
			tabs[0].style.width = '5%'
		})
	}
})

document.querySelector('.images-accordion').addEventListener('mouseout', () => {
	tabs[0].style.width = '100%'
})

const links = document.querySelectorAll('.explore-nav a')

for (const link of links) {
	link.addEventListener('click', (event) => {
		event.preventDefault()

		const containers = document.querySelectorAll('.imageContainer')
		for (const container of containers) {
			container.style.display = 'none'
		}

		const target = link.getAttribute('href').slice(1)

		const container = document.querySelector(`#${target}`)
		container.style.display = 'grid'
	})
}
