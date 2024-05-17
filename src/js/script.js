//Sticky Header
$(window).on("scroll", () => {
	const header = $("header");
	header.toggleClass("sticky", $(window).scrollTop() > 0);
});

// Mobile Menu
const iconMenuMobile = $(".icon-menu-mobile");
const menuMobile = $(".menu-mobile");
const menuIconClose = $(".menu-icon-close");
const menuMobileNav = $(".menu-mobile-nav");

iconMenuMobile.on("click", () => {
	menuMobile.toggleClass("active");
});

menuIconClose.on("click", () => {
	menuMobile.removeClass("active");
});

menuMobileNav.on("click", () => {
	menuMobile.removeClass("active");
});

// Accordion
const acc = $(".accordion-header");

acc.on("click", (event) => {
	const clickedHeader = $(event.currentTarget);

	const activeHeaders = $(".accordion-header.active");

	activeHeaders.each((index, activeHeader) => {
		if (activeHeader !== clickedHeader[0]) {
			$(activeHeader).removeClass("active");
			$(activeHeader).next().css("maxHeight", "");
		}
	});

	if (clickedHeader.hasClass("active")) {
		clickedHeader.removeClass("active");
		clickedHeader.next().css("maxHeight", "");
	} else {
		clickedHeader.addClass("active");
		const panel = clickedHeader.next();
		panel.css("maxHeight", `${panel[0].scrollHeight}px`);
	}
});
