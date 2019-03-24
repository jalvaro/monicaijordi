jQuery(document).ready($ => {

	'use strict';

	const getValueFromAttribute = (item, attribute) => 
		attribute.split('.').reduce((prev, curr) => prev && prev[curr], item);

	const a2 = lang => {

		const translate = function(index) {
			const rawKey = $(this).text();

			const key = rawKey.match('{{(.*)}}')[1];

			$(this).html(getValueFromAttribute(lang, key));
		};

		const elements = $('[translate]');

		elements.map(translate);
	}
	
	const translations = {
		ca: ca,
		es: es,
		en: en
	};

	const selectLanguage = () => {
		const hash = $(location).attr('hash').substring(1);

		const language = hash && hash !== '' ? hash : 'ca';

		a2(translations[language]);
	}

	selectLanguage();

	$(window).on('hashchange', () =>location.reload());
});