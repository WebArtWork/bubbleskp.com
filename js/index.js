

$(document).ready(function () {
	$('.slider').slick({
		autoplay: true
	});
	$('.menubox ul').on('click', function (e) {
		e.stopPropagation()
	})
	$('.menubox').on('click', function () {
		$('#menu-toggle').prop('checked', false)
	})

});

const arr = document.querySelectorAll('.anchor')

arr.forEach((el, index) => {
	el.addEventListener('click', function (e) {
		let name = el.getAttribute('href')
		let anchor = document.querySelector(`a[name="${name}"]`)
		e.preventDefault();
		anchor.scrollIntoView({
			behavior: 'smooth'
		});
	});
});
