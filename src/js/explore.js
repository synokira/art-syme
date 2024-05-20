//Accordion
const tabs = $('.tab')

tabs.each((index, tab) => {
	if (index !== 0) {
		$(tab).on('mouseover', () => {
			tabs.eq(0).css('width', '5%')
		})
	}
})
const imagesAccordion = $('.images-accordion')

imagesAccordion.on('mouseout', () => {
	tabs.eq(0).css('width', '100%')
})

//Gallery navigation
const containers = $('.image-container')
containers.css('display', 'none')

const editorialContainer = $('#editorial')
editorialContainer.css('display', 'grid')

const links = $('.explore-nav a')

links.each((_, a) => {
	$(a).on('click', (event) => {
		event.preventDefault()

		containers.css('display', 'none')

		const target = $(a).attr('href')
		const targetContainer = $(target)

		targetContainer.css('display', 'grid')
	})
})
