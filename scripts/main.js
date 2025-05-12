const InputCoupon0 = document.querySelector('#input-coupon0');
const InputCoupon1 = document.querySelector('#input-coupon1');
const InputCoupon2 = document.querySelector('#input-coupon2');
const InputCoupon3 = document.querySelector('#input-coupon3');
const InputCoupon4 = document.querySelector('#input-coupon4');
const InputCoupon5 = document.querySelector('#input-coupon5');
const InputCoupon6 = document.querySelector('#input-coupon6');
const InputCoupon7 = document.querySelector('#input-coupon7');
const InputCoupon8 = document.querySelector('#input-coupon8');
const ButtonCoupon0 = document.querySelector('#button-coupon0');
const ButtonCoupon1 = document.querySelector('#button-coupon1');
const ButtonCoupon2 = document.querySelector('#button-coupon2');
const ButtonCoupon3 = document.querySelector('#button-coupon3');
const ButtonCoupon4 = document.querySelector('#button-coupon4');
const ButtonCoupon5 = document.querySelector('#button-coupon5');
const ButtonCoupon6 = document.querySelector('#button-coupon6');
const ButtonCoupon7 = document.querySelector('#button-coupon7');
const ButtonCoupon8 = document.querySelector('#button-coupon8');
const ButtonBuy0 = document.querySelector('#button-buy0');
const ButtonBuy1 = document.querySelector('#button-buy1');
const ButtonBuy2 = document.querySelector('#button-buy2');
const ButtonBuy3 = document.querySelector('#button-buy3');
const ButtonBuy4 = document.querySelector('#button-buy4');
const ButtonBuy5 = document.querySelector('#button-buy5');
const ButtonBuy6 = document.querySelector('#button-buy6');
const ButtonBuy7 = document.querySelector('#button-buy7');
const ButtonBuy8 = document.querySelector('#button-buy8');
const TextCouponAccepted = document.querySelectorAll('.text-coupon-accepted');
const TextCouponDenied = document.querySelectorAll('.text-coupon-denied');
const TextCouponUsed = document.querySelectorAll('.text-coupon-used');
var CouponAccepted = 0;

function TextCouponDisplayNone()
{
	for (let i = 0; i < 8; i++) {
		TextCouponAccepted[i].style.display="none";
		TextCouponDenied[i].style.display="none";
		TextCouponUsed[i].style.display="none";
	}
}

ButtonCoupon0.addEventListener("click", (event) => {
	TextCouponDisplayNone();
	if (InputCoupon0.value.toLowerCase() === "exploitation") {
		if (CouponAccepted === 2) {
			for (let i = 0; i < 8; i++) {
				TextCouponUsed[i].style.display="block";
			}
		} else {
			for (let i = 0; i < 8; i++) {
				TextCouponAccepted[i].style.display="block";
			}
			CouponAccepted = 1;
		}
	} else {
		for (let i = 0; i < 8; i++) {
			TextCouponDenied[i].style.display="block";
		}
		if ( CouponAccepted !== 2 ) {
			CouponAccepted = 0;
		}
	}
	InputCoupon0.value = '';
});

ButtonCoupon1.addEventListener("click", (event) => {
	TextCouponDisplayNone();
	if (InputCoupon1.value.toLowerCase() === "exploitation") {
		if (CouponAccepted === 2) {
			for (let i = 0; i < 8; i++) {
				TextCouponUsed[i].style.display="block";
			}
		} else {
			for (let i = 0; i < 8; i++) {
				TextCouponAccepted[i].style.display="block";
			}
			CouponAccepted = 1;
		}
	} else {
		for (let i = 0; i < 8; i++) {
			TextCouponDenied[i].style.display="block";
		}
		if ( CouponAccepted !== 2 ) {
			CouponAccepted = 0;
		}
	}
	InputCoupon1.value = '';
});

ButtonCoupon2.addEventListener("click", (event) => {
	TextCouponDisplayNone();
	if (InputCoupon2.value.toLowerCase() === "exploitation") {
		if (CouponAccepted === 2) {
			for (let i = 0; i < 8; i++) {
				TextCouponUsed[i].style.display="block";
			}
		} else {
			for (let i = 0; i < 8; i++) {
				TextCouponAccepted[i].style.display="block";
			}
			CouponAccepted = 1;
		}
	} else {
		for (let i = 0; i < 8; i++) {
			TextCouponDenied[i].style.display="block";
		}
		if ( CouponAccepted !== 2 ) {
			CouponAccepted = 0;
		}
	}
	InputCoupon2.value = '';
});

ButtonCoupon3.addEventListener("click", (event) => {
	TextCouponDisplayNone();
	if (InputCoupon3.value.toLowerCase() === "exploitation") {
		if (CouponAccepted === 2) {
			for (let i = 0; i < 8; i++) {
				TextCouponUsed[i].style.display="block";
			}
		} else {
			for (let i = 0; i < 8; i++) {
				TextCouponAccepted[i].style.display="block";
			}
			CouponAccepted = 1;
		}
	} else {
		for (let i = 0; i < 8; i++) {
			TextCouponDenied[i].style.display="block";
		}
		if ( CouponAccepted !== 2 ) {
			CouponAccepted = 0;
		}
	}
	InputCoupon3.value = '';
});

ButtonCoupon4.addEventListener("click", (event) => {
	TextCouponDisplayNone();
	if (InputCoupon4.value.toLowerCase() === "exploitation") {
		if (CouponAccepted === 2) {
			for (let i = 0; i < 8; i++) {
				TextCouponUsed[i].style.display="block";
			}
		} else {
			for (let i = 0; i < 8; i++) {
				TextCouponAccepted[i].style.display="block";
			}
			CouponAccepted = 1;
		}
	} else {
		for (let i = 0; i < 8; i++) {
			TextCouponDenied[i].style.display="block";
		}
		if ( CouponAccepted !== 2 ) {
			CouponAccepted = 0;
		}
	}
	InputCoupon4.value = '';
});

ButtonCoupon5.addEventListener("click", (event) => {
	TextCouponDisplayNone();
	if (InputCoupon5.value.toLowerCase() === "exploitation") {
		if (CouponAccepted === 2) {
			for (let i = 0; i < 8; i++) {
				TextCouponUsed[i].style.display="block";
			}
		} else {
			for (let i = 0; i < 8; i++) {
				TextCouponAccepted[i].style.display="block";
			}
			CouponAccepted = 1;
		}
	} else {
		for (let i = 0; i < 8; i++) {
			TextCouponDenied[i].style.display="block";
		}
		if ( CouponAccepted !== 2 ) {
			CouponAccepted = 0;
		}
	}
	InputCoupon5.value = '';
});

ButtonCoupon6.addEventListener("click", (event) => {
	TextCouponDisplayNone();
	if (InputCoupon6.value.toLowerCase() === "exploitation") {
		if (CouponAccepted === 2) {
			for (let i = 0; i < 8; i++) {
				TextCouponUsed[i].style.display="block";
			}
		} else {
			for (let i = 0; i < 8; i++) {
				TextCouponAccepted[i].style.display="block";
			}
			CouponAccepted = 1;
		}
	} else {
		for (let i = 0; i < 8; i++) {
			TextCouponDenied[i].style.display="block";
		}
		if ( CouponAccepted !== 2 ) {
			CouponAccepted = 0;
		}
	}
	InputCoupon6.value = '';
});

ButtonCoupon7.addEventListener("click", (event) => {
	TextCouponDisplayNone();
	if (InputCoupon7.value.toLowerCase() === "exploitation") {
		if (CouponAccepted === 2) {
			for (let i = 0; i < 8; i++) {
				TextCouponUsed[i].style.display="block";
			}
		} else {
			for (let i = 0; i < 8; i++) {
				TextCouponAccepted[i].style.display="block";
			}
			CouponAccepted = 1;
		}
	} else {
		for (let i = 0; i < 8; i++) {
			TextCouponDenied[i].style.display="block";
		}
		if ( CouponAccepted !== 2 ) {
			CouponAccepted = 0;
		}
	}
	InputCoupon7.value = '';
});

ButtonCoupon8.addEventListener("click", (event) => {
	TextCouponDisplayNone();
	if (InputCoupon8.value.toLowerCase() === "exploitation") {
		if (CouponAccepted === 2) {
			for (let i = 0; i < 8; i++) {
				TextCouponUsed[i].style.display="block";
			}
		} else {
			for (let i = 0; i < 8; i++) {
				TextCouponAccepted[i].style.display="block";
			}
			CouponAccepted = 1;
		}
	} else {
		for (let i = 0; i < 8; i++) {
			TextCouponDenied[i].style.display="block";
		}
		if ( CouponAccepted !== 2 ) {
			CouponAccepted = 0;
		}
	}
	InputCoupon8.value = '';
});

ButtonBuy0.addEventListener("click", (event) => {
	switch (CouponAccepted) {
	case 1:
		alert("Order is in progress\nCoupon \"Exploitation\" has been used\nTM21 has been added to your order");
		CouponAccepted = 2;
		break;
	case 2:
	case 0:
	default:
		alert("Order is in progress");
	}
});

ButtonBuy1.addEventListener("click", (event) => {
	switch (CouponAccepted) {
	case 1:
		alert("Order is in progress\nCoupon \"Exploitation\" has been used\nTM21 has been added to your order");
		CouponAccepted = 2;
		break;
	case 2:
	case 0:
	default:
		alert("Order is in progress");
	}
});

ButtonBuy2.addEventListener("click", (event) => {
	switch (CouponAccepted) {
	case 1:
		alert("Order is in progress\nCoupon \"Exploitation\" has been used\nTM21 has been added to your order");
		CouponAccepted = 2;
		break;
	case 2:
	case 0:
	default:
		alert("Order is in progress");
	}
});

ButtonBuy3.addEventListener("click", (event) => {
	switch (CouponAccepted) {
	case 1:
		alert("Order is in progress\nCoupon \"Exploitation\" has been used\nTM21 has been added to your order");
		CouponAccepted = 2;
		break;
	case 2:
	case 0:
	default:
		alert("Order is in progress");
	}
});

ButtonBuy4.addEventListener("click", (event) => {
	switch (CouponAccepted) {
	case 1:
		alert("Order is in progress\nCoupon \"Exploitation\" has been used\nTM21 has been added to your order");
		CouponAccepted = 2;
		break;
	case 2:
	case 0:
	default:
		alert("Order is in progress");
	}
});

ButtonBuy5.addEventListener("click", (event) => {
	switch (CouponAccepted) {
	case 1:
		alert("Order is in progress\nCoupon \"Exploitation\" has been used\nTM21 has been added to your order");
		CouponAccepted = 2;
		break;
	case 2:
	case 0:
	default:
		alert("Order is in progress");
	}
});

ButtonBuy6.addEventListener("click", (event) => {
	switch (CouponAccepted) {
	case 1:
		alert("Order is in progress\nCoupon \"Exploitation\" has been used\nTM21 has been added to your order");
		CouponAccepted = 2;
		break;
	case 2:
	case 0:
	default:
		alert("Order is in progress");
	}
});

ButtonBuy7.addEventListener("click", (event) => {
	switch (CouponAccepted) {
	case 1:
		alert("Order is in progress\nCoupon \"Exploitation\" has been used\nTM21 has been added to your order");
		CouponAccepted = 2;
		break;
	case 2:
	case 0:
	default:
		alert("Order is in progress");
	}
});

ButtonBuy8.addEventListener("click", (event) => {
	switch (CouponAccepted) {
	case 1:
		alert("Order is in progress\nCoupon \"Exploitation\" has been used\nTM21 has been added to your order");
		CouponAccepted = 2;
		break;
	case 2:
	case 0:
	default:
		alert("Order is in progress");
	}
});

(() => {
	'use strict'

	const getStoredTheme = () => localStorage.getItem('theme')
	const setStoredTheme = theme => localStorage.setItem('theme', theme)

	const getPreferredTheme = () => {
		const storedTheme = getStoredTheme()
		if (storedTheme) {
			return storedTheme
		}

		return 'dark'
	}

	const setTheme = theme => {
		if (theme === 'auto') {
			document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
		} else {
			document.documentElement.setAttribute('data-bs-theme', theme)
		}
	}

	setTheme(getPreferredTheme())

	const showActiveTheme = (theme, focus = false) => {
		const themeSwitcher = document.querySelector('#bd-theme')

		if (!themeSwitcher) {
			return
		}

		const themeSwitcherText = document.querySelector('#bd-theme-text')
		const activeThemeIcon = document.querySelector('.theme-icon-active use')
		const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
		const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

		document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
			element.classList.remove('active')
			element.setAttribute('aria-pressed', 'false')
		})

		btnToActive.classList.add('active')
		btnToActive.setAttribute('aria-pressed', 'true')
		activeThemeIcon.setAttribute('href', svgOfActiveBtn)
		const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
		themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

		if (focus) {
			themeSwitcher.focus()
		}
	}

	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
		const storedTheme = getStoredTheme()
		if (storedTheme !== 'light' && storedTheme !== 'dark') {
			setTheme(getPreferredTheme())
		}
	})

	window.addEventListener('DOMContentLoaded', () => {
		showActiveTheme(getPreferredTheme())

		document.querySelectorAll('[data-bs-theme-value]')
			.forEach(toggle => {
				toggle.addEventListener('click', () => {
					const theme = toggle.getAttribute('data-bs-theme-value')
					setStoredTheme(theme)
					setTheme(theme)
					showActiveTheme(theme, true)
				})
			})
	})
})()