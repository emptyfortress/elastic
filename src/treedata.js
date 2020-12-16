const departments = [
	{ text: 'АК "Алроса" ПАО', state: {expanded: true, checked: false, selected: false}, data: {icon: 'icon-firm', logo: 'img/alrosa.svg', dep: -1}, children: [
		{ text: 'Горно-обогатительные комбинаты', state: {expanded: true, checked: false, selected: false}, data: {icon: 'icon-folder-outline', dep: 0, logo: 'img/alrosa.svg'}, children: [
			{ text: 'Мирнинский ГОК', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 0, firm: 0}},
			{ text: 'Айхальский ГОК', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 0, firm: 1}},
			{ text: 'Нюрнбинский ГОК', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 0, firm: 2}},
			{ text: 'Удачнинский ГОК', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 0, firm: 3}},
		]},
		{ text: 'Производственная инфраструктура', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', dep: 1, logo: 'img/alrosa.svg'}, children: [
			{ text: 'Авиационное предприятие МУАД', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 1, firm: 0}},
			{ text: 'Управление капитального строительства', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 1, firm: 1}},
			{ text: 'СТ "Алмазавтоматика"', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 1, firm: 2}},
			{ text: 'Управление материально-технического снабжения', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 1, firm: 3}},
			{ text: 'Институт "Якутнипроалмаз"', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 1, firm: 4}},
		]},
		{ text: 'Геологоразведочные подразделения', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', dep: 2, logo: 'img/alrosa.svg'}, children: [
			{ text: 'Научно-исследовательское геологическое предприятие', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 2, firm: 0}},
			{ text: 'Вилюйская геологоразведочная экспедиция', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 2, firm: 1}},
		]},
		{ text: 'Социальный комплекс', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', dep: 3, logo: 'img/alrosa.svg'}, children: [
			{ text: 'Медицинский центр', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 3, firm: 0}},
			{ text: 'Культурно-спортивный комплекс', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 3, firm: 1}},
			{ text: 'Центр подготовки кадров', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 3, firm: 2}},
		]},
		{ text: 'Представительства и филиалы', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', dep: 4, logo: 'img/alrosa.svg'}, children: [
			{ text: 'Филиал АК «АЛРОСА» в Республике Ангола', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 4, firm: 0}},
			{ text: 'ALROSA Mumbai (г. Мумбай, Индия)', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 4, firm: 1}},
			{ text: 'Филиал во Владивостоке', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 4, firm: 2}},
		]},
		{ text: 'Сбыт алмазов', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', dep: 5, logo: 'img/alrosa.svg'}, children: [
			{ text: 'Предприятие «Коммерал»', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 5, firm: 0}},
			{ text: 'Филиал «Якутское предприятие по торговле алмазами» (ЯПТА)', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 5, firm: 1}},
			{ text: 'Центр сортировки алмазов', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 5, firm: 2}},

		]},
		{ text: 'Сбыт бриллиантов', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', dep: 6, logo: 'img/alrosa.svg'}, children: [
			{ text: 'Филиал "Бриллианты Алроса"', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 6, firm: 0}},
		]},
		{ text: 'Дочерние организации', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', dep: 7, logo: 'img/alrosa.svg'}, children: [
			{ text: 'ООО «Бриллианты АЛРОСА»', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 7, firm: 0}},
			{ text: 'Горнорудное общество «Катока Лтд.»', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 7, firm: 1}},
			{ text: 'АО «Алмазы Анабара»', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 7, firm: 2}},
			{ text: 'ПАО «Севералмаз»', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 7, firm: 3}},
			{ text: 'ПАО «АЛРОСА-Нюрба»', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 7, firm: 4}},
		]},
	]},
	{ text: 'АО "Гознак"', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', logo: 'img/goznak.svg' }, children: [
		{ text: 'Московский монетный двор', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
		{ text: 'Московская печатная фабрика', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
		{ text: 'Московская типография Гознака', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
		{ text: 'Санкт-петербургская бумажная фабрика', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
		{ text: 'Санкт-петербургский монетный двор', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
		{ text: 'Пермская печатная фабрика', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
		{ text: 'Краснокамская печатная фабрика', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
		{ text: 'Научно-исследовательский институт', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
		
	]},
	{ text: 'Интер РАО ЕЭС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', logo: 'img/ees.png' }, children: [
		{ text: 'Электрогенерация', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', logo: 'img/ees.png'}, children: [
			{ text: 'Верхнетагильская ГРЭС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Гусиноозёрская ГРЭС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Джубгинская ТЭС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Ивановские ПГУ', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Ириклинская ГРЭС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Калининградская ТЭЦ-2', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Каширская ГРЭС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Костромская ГРЭС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Нижневартовская ГРЭС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Пермская ГРЭС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Печорская ГРЭС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Северо-Западная ТЭЦ', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Сочинская ТЭС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Уренгойская ГРЭС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Харанорская ГРЭС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Черепетская ГРЭС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Южноуральская ГРЭС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Южноуральская ГРЭС-2', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
		], },
		{ text: 'Зарубежная генерация', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', logo: 'img/ees.png'}, children: [
			{ text: 'Молдавская ГРЭС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Храми ГЭС-1', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Храми ГЭС-2' , state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Trakya Elektrik A.S.', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Ветропарк «Видмантай»', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
		],},
		{ text: 'Теплогенерация', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', logo: 'img/ees.png'}, children: [
			{ text: 'Томская Генерация', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'ТГК-11', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Башкирская генерирующая компания', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
		], },
		{ text: 'Теплосети', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', logo: 'img/ees.png'}, children: [
			{ text: 'ОмскРТС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'ТомскРТС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'БашРТС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
		], },
		{ text: 'Зарубежные сетевые активы', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', logo: 'img/ees.png'}, children: [
			{ text: 'Теласи', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}}
		], },
		{ text: 'Сбыт', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', logo: 'img/ees.png'}, children: [
			{ text: 'Мосэнергосбыт', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Петербургская сбытовая', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Саратовэнерго', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Алтайэнергосбыт', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Башэлектросбыт', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Омская энергосбытовая компания', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Томскэнергосбыт', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Орловский энергосбыт', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Тамбовская энергосбытовая компания', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Северная сбытовая компания', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Энергосбыт Волга', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
		], },
		{ text: 'Трейдинг', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', logo: 'img/ees.png'}, children: [
			{ text: 'RAO Nordic', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Восточная энергетическая компания', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'IRL Polska', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Inter RAO Latvia', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Inter RAO Lietuva', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Inter RAO Eesti', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
		], },
		{ text: 'Инжиниринг', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', logo: 'img/ees.png'}, children: [
			{ text: 'Интер РАО – Инжиниринг', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Русские газовые турбины', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Интер РАО – Экспорт', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
		], },
		{ text: 'Инновации и энергоэффективность', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', logo: 'img/ees.png'}, children: [
			{ text: 'Центр энергоэффективности Интер РАО ЕЭС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Фонд «Энергия без границ', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
		], },
		{ text: 'Ремонт и сервис', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', logo: 'img/ees.png'}, children: [
			{ text: 'КВАРЦ Групп', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
		], },
	] },
]

export { departments }
