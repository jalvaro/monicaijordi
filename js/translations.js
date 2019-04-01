jQuery(document).ready($ => {

	'use strict';

	const getValueFromAttribute = (item, attribute) => 
		attribute.split('.').reduce((prev, curr) => prev && prev[curr], item);

	const translateTags = lang => {
		const translate = function(index) {
			const rawKey = $(this).text();
			const key = rawKey.match('{{(.*)}}')[1];

			$(this).html(getValueFromAttribute(lang, key));
		};

		$('[translate]').map(translate);
	}
	
	const translations = {
		ca: ca,
		es: es,
		en: en
	};

	const selectLanguage = () => {
		const hash = $(location).attr('hash').substring(1);
		const language = hash && hash !== '' ? hash : 'ca';

		translateTags(translations[language]);
	}

	selectLanguage();

	$(window).on('hashchange', () =>location.reload());
});