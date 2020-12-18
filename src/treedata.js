const departments = [
	{ text: 'Организации', state: {expanded: true, checked: false, selected: false}, data: {icon: 'icon-folder-outline'}, children: [
		{ text: 'АК "Алроса" ПАО', state: {expanded: true, checked: false, selected: false}, data: {icon: 'icon-firm', logo: 'img/alrosa.svg', dep: -1}, children: [
			{ text: 'Горно-обогатительные комбинаты', states: {expanded: true, checked: false, selected: false}, data: {icon: 'icon-folder-outline', dep: 0, logo: 'img/alrosa.svg'}, children: [
				{ text: 'Мирнинский ГОК', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 0, firm: 0}},
				{ text: 'Айхальский ГОК', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 0, firm: 1}},
				{ text: 'Нюрнбинский ГОК', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 0, firm: 2}},
				{ text: 'Удачнинский ГОК', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 0, firm: 3}},
			]},
			{ text: 'Производственная инфраструктура', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', dep: 1, logo: 'img/alrosa.svg'}, children: [
				{ text: 'Авиационное предприятие МУАД', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 1, firm: 0}},
				{ text: 'Управление капитального строительства', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 1, firm: 1}},
				{ text: 'СТ "Алмазавтоматика"', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 1, firm: 2}},
				{ text: 'Управление материально-технического снабжения', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 1, firm: 3}},
				{ text: 'Институт "Якутнипроалмаз"', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 1, firm: 4}},
			]},
			{ text: 'Геологоразведочные подразделения', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', dep: 2, logo: 'img/alrosa.svg'}, children: [
				{ text: 'Научно-исследовательское геологическое предприятие', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 2, firm: 0}},
				{ text: 'Вилюйская геологоразведочная экспедиция', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 2, firm: 1}},
			]},
			{ text: 'Социальный комплекс', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', dep: 3, logo: 'img/alrosa.svg'}, children: [
				{ text: 'Медицинский центр', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 3, firm: 0}},
				{ text: 'Культурно-спортивный комплекс', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 3, firm: 1}},
				{ text: 'Центр подготовки кадров', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 3, firm: 2}},
			]},
			{ text: 'Представительства и филиалы', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', dep: 4, logo: 'img/alrosa.svg'}, children: [
				{ text: 'Филиал АК «АЛРОСА» в Республике Ангола', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 4, firm: 0}},
				{ text: 'ALROSA Mumbai (г. Мумбай, Индия)', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 4, firm: 1}},
				{ text: 'Филиал во Владивостоке', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 4, firm: 2}},
			]},
			{ text: 'Сбыт алмазов', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', dep: 5, logo: 'img/alrosa.svg'}, children: [
				{ text: 'Предприятие «Коммерал»', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 5, firm: 0}},
				{ text: 'Филиал «Якутское предприятие по торговле алмазами» (ЯПТА)', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 5, firm: 1}},
				{ text: 'Центр сортировки алмазов', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 5, firm: 2}},

			]},
			{ text: 'Сбыт бриллиантов', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', dep: 6, logo: 'img/alrosa.svg'}, children: [
				{ text: 'Филиал "Бриллианты Алроса"', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 6, firm: 0}},
			]},
			{ text: 'Дочерние организации', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', dep: 7, logo: 'img/alrosa.svg'}, children: [
				{ text: 'ООО «Бриллианты АЛРОСА»', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 7, firm: 0}},
				{ text: 'Горнорудное общество «Катока Лтд.»', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 7, firm: 1}},
				{ text: 'АО «Алмазы Анабара»', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 7, firm: 2}},
				{ text: 'ПАО «Севералмаз»', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 7, firm: 3}},
				{ text: 'ПАО «АЛРОСА-Нюрба»', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', dep: 7, firm: 4}},
			]},
		]},
		{ text: 'АО "Гознак"', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', logo: 'img/goznak.svg' }, children: [
			{ text: 'Московский монетный двор', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Московская печатная фабрика', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Московская типография Гознака', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Санкт-петербургская бумажная фабрика', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Санкт-петербургский монетный двор', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Пермская печатная фабрика', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Краснокамская печатная фабрика', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			{ text: 'Научно-исследовательский институт', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			
		]},
		{ text: 'Интер РАО ЕЭС', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm', logo: 'img/ees.png' }, children: [
			{ text: 'Электрогенерация', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', logo: 'img/ees.png'}, children: [
				{ text: 'Верхнетагильская ГРЭС', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Гусиноозёрская ГРЭС', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Джубгинская ТЭС', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Ивановские ПГУ', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Ириклинская ГРЭС', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Калининградская ТЭЦ-2', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Каширская ГРЭС', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Костромская ГРЭС', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Нижневартовская ГРЭС', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Пермская ГРЭС', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Печорская ГРЭС', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Северо-Западная ТЭЦ', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Сочинская ТЭС', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Уренгойская ГРЭС', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Харанорская ГРЭС', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Черепетская ГРЭС', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Южноуральская ГРЭС', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Южноуральская ГРЭС-2', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			], },
			{ text: 'Зарубежная генерация', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', logo: 'img/ees.png'}, children: [
				{ text: 'Молдавская ГРЭС', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Храми ГЭС-1', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Храми ГЭС-2' , states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Trakya Elektrik A.S.', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Ветропарк «Видмантай»', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			],},
			{ text: 'Теплогенерация', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', logo: 'img/ees.png'}, children: [
				{ text: 'Томская Генерация', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'ТГК-11', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Башкирская генерирующая компания', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			], },
			{ text: 'Теплосети', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', logo: 'img/ees.png'}, children: [
				{ text: 'ОмскРТС', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'ТомскРТС', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'БашРТС', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			], },
			{ text: 'Зарубежные сетевые активы', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', logo: 'img/ees.png'}, children: [
				{ text: 'Теласи', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}}
			], },
			{ text: 'Сбыт', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', logo: 'img/ees.png'}, children: [
				{ text: 'Мосэнергосбыт', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Петербургская сбытовая', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Саратовэнерго', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Алтайэнергосбыт', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Башэлектросбыт', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Омская энергосбытовая компания', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Томскэнергосбыт', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Орловский энергосбыт', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Тамбовская энергосбытовая компания', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Северная сбытовая компания', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Энергосбыт Волга', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			], },
			{ text: 'Трейдинг', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', logo: 'img/ees.png'}, children: [
				{ text: 'RAO Nordic', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Восточная энергетическая компания', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'IRL Polska', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Inter RAO Latvia', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Inter RAO Lietuva', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Inter RAO Eesti', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			], },
			{ text: 'Инжиниринг', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', logo: 'img/ees.png'}, children: [
				{ text: 'Интер РАО – Инжиниринг', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Русские газовые турбины', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Интер РАО – Экспорт', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			], },
			{ text: 'Инновации и энергоэффективность', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', logo: 'img/ees.png'}, children: [
				{ text: 'Центр энергоэффективности Интер РАО ЕЭС', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
				{ text: 'Фонд «Энергия без границ', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			], },
			{ text: 'Ремонт и сервис', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-folder-outline', logo: 'img/ees.png'}, children: [
				{ text: 'КВАРЦ Групп', states: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-firm'}},
			], },
		] },
	]}
]

export { departments }
