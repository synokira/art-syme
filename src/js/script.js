//Sticky Header
$(window).on('scroll', () => {
	const header = $('.header')
	header.toggleClass('sticky', $(window).scrollTop() > 0)
})

// Mobile Menu
$(window).ready(() => {
	const iconMenuMobile = $('.icon-menu-mobile')
	const menuMobile = $('.menu-mobile')
	const iconClose = $('.menu-icon-close')

	iconMenuMobile.on('click', () => {
		menuMobile.addClass('active')
	})

	iconClose.on('click', () => {
		menuMobile.removeClass('active')
	})
})

// Accordion on home page
const accordionHeaders = $('.accordion-header')

accordionHeaders.on('click', (event) => {
	const clickedHeader = $(event.currentTarget)

	const activeHeaders = $('.accordion-header.active')

	activeHeaders.each((_, activeHeader) => {
		if (activeHeader !== clickedHeader[0]) {
			$(activeHeader).removeClass('active')
			$(activeHeader).next().css('maxHeight', '')
		}
	})

	if (clickedHeader.hasClass('active')) {
		clickedHeader.removeClass('active')
		clickedHeader.next().css('maxHeight', '')
	} else {
		clickedHeader.addClass('active')
		const panel = clickedHeader.next()
		panel.css('maxHeight', `${panel[0].scrollHeight}px`)
	}
})
