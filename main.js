const prices = document.querySelectorAll('.price');
const toggle = document.querySelector('.toggle__checkbox');

const pricing = {
	monthly: {
		basic: '19.99',
		professional: '24.99',
		master: '39.99',
	},
	anually: {
		basic: '199.99',
		professional: '249.99',
		master: '399.99',
	},
};

const toggleHandler = function () {
	this.setAttribute('aria-checked', `${this.checked}`);
	prices.forEach((price) => {
		const pricingPlan = price.dataset.pricingPlan;
		price.textContent = this.checked ? pricing.monthly[pricingPlan] : pricing.anually[pricingPlan];
	});
};

toggle.addEventListener('click', toggleHandler);
