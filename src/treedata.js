const departments = [
	{ text: 'Организации', state: {matched: false, expanded: true, checked: false, selected: false}, data: {icon: 'folder-outline', dep: 0}, children: [
		{ text: 'АК "Алроса" ПАО', state: {matched: false, expanded: true, checked: false, selected: false}, data: {icon: 'firm', logo: 'img/alrosa.svg', dep: -1}, children: [
			{ text: 'Горно-обогатительные комбинаты', state: {matched: false, expanded: true, checked: false, selected: false}, data: {icon: 'folder-outline', dep: 0, logo: 'img/alrosa.svg'}, children: [
				{ text: 'Мирнинский ГОК', state: {matched: true, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 0, firm: 0}},
				{ text: 'Айхальский ГОК', state: {matched: false, expanded: true, checked: false, selected: false}, data: {icon: 'firm', dep: 0, firm: 1}},
				{ text: 'Нюрнбинский ГОК', state: {matched: false, expanded: false, checked: false, selected: true}, data: {icon: 'firm', dep: 0, firm: 2}},
				{ text: 'Удачнинский ГОК', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 0, firm: 3}},
			]},
			{ text: 'Производственная инфраструктура', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'folder-outline', dep: 1, logo: 'img/alrosa.svg'}, children: [
				{ text: 'Авиационное предприятие МУАД', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 1, firm: 0}},
				{ text: 'Управление капитального строительства', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 1, firm: 1}},
				{ text: 'СТ "Алмазавтоматика"', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 1, firm: 2}},
				{ text: 'Управление материально-технического снабжения', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 1, firm: 3}},
				{ text: 'Институт "Якутнипроалмаз"', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 1, firm: 4}},
			]},
			{ text: 'Геологоразведочные подразделения', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'folder-outline', dep: 2, logo: 'img/alrosa.svg'}, children: [
				{ text: 'Научно-исследовательское геологическое предприятие', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 2, firm: 0}},
				{ text: 'Вилюйская геологоразведочная экспедиция', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 2, firm: 1}},
			]},
			{ text: 'Социальный комплекс', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'folder-outline', dep: 3, logo: 'img/alrosa.svg'}, children: [
				{ text: 'Медицинский центр', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 3, firm: 0}},
				{ text: 'Культурно-спортивный комплекс', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 3, firm: 1}},
				{ text: 'Центр подготовки кадров', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 3, firm: 2}},
			]},
			{ text: 'Представительства и филиалы', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'folder-outline', dep: 4, logo: 'img/alrosa.svg'}, children: [
				{ text: 'Филиал АК «АЛРОСА» в Республике Ангола', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 4, firm: 0}},
				{ text: 'ALROSA Mumbai (г. Мумбай, Индия)', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 4, firm: 1}},
				{ text: 'Филиал во Владивостоке', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 4, firm: 2}},
			]},
			{ text: 'Сбыт алмазов', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'folder-outline', dep: 5, logo: 'img/alrosa.svg'}, children: [
				{ text: 'Предприятие «Коммерал»', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 5, firm: 0}},
				{ text: 'Филиал «Якутское предприятие по торговле алмазами» (ЯПТА)', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 5, firm: 1}},
				{ text: 'Центр сортировки алмазов', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 5, firm: 2}},

			]},
			{ text: 'Сбыт бриллиантов', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'folder-outline', dep: 6, logo: 'img/alrosa.svg'}, children: [
				{ text: 'Филиал "Бриллианты Алроса"', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 6, firm: 0}},
			]},
			{ text: 'Дочерние организации', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'folder-outline', dep: 7, logo: 'img/alrosa.svg'}, children: [
				{ text: 'ООО «Бриллианты АЛРОСА»', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 7, firm: 0}},
				{ text: 'Горнорудное общество «Катока Лтд.»', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 7, firm: 1}},
				{ text: 'АО «Алмазы Анабара»', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 7, firm: 2}},
				{ text: 'ПАО «Севералмаз»', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 7, firm: 3}},
				{ text: 'ПАО «АЛРОСА-Нюрба»', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', dep: 7, firm: 4}},
			]},
		]},
		{ text: 'АО "Гознак"', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', logo: 'img/goznak.svg' }, children: [
			{ text: 'Московский монетный двор', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
			{ text: 'Московская печатная фабрика', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
			{ text: 'Московская типография Гознака', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
			{ text: 'Санкт-петербургская бумажная фабрика', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
			{ text: 'Санкт-петербургский монетный двор', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
			{ text: 'Пермская печатная фабрика', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
			{ text: 'Краснокамская печатная фабрика', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
			{ text: 'Научно-исследовательский институт', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
			
		]},
		{ text: 'Интер РАО ЕЭС', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm', logo: 'img/ees.png' }, children: [
			{ text: 'Электрогенерация', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'folder-outline', logo: 'img/ees.png'}, children: [
				{ text: 'Верхнетагильская ГРЭС', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Гусиноозёрская ГРЭС', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Джубгинская ТЭС', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Ивановские ПГУ', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Ириклинская ГРЭС', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Калининградская ТЭЦ-2', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Каширская ГРЭС', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Костромская ГРЭС', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Нижневартовская ГРЭС', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Пермская ГРЭС', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Печорская ГРЭС', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Северо-Западная ТЭЦ', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Сочинская ТЭС', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Уренгойская ГРЭС', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Харанорская ГРЭС', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Черепетская ГРЭС', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Южноуральская ГРЭС', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Южноуральская ГРЭС-2', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
			], },
			{ text: 'Зарубежная генерация', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'folder-outline', logo: 'img/ees.png'}, children: [
				{ text: 'Молдавская ГРЭС', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Храми ГЭС-1', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Храми ГЭС-2' , state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Trakya Elektrik A.S.', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Ветропарк «Видмантай»', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
			],},
			{ text: 'Теплогенерация', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'folder-outline', logo: 'img/ees.png'}, children: [
				{ text: 'Томская Генерация', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'ТГК-11', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Башкирская генерирующая компания', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
			], },
			{ text: 'Теплосети', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'folder-outline', logo: 'img/ees.png'}, children: [
				{ text: 'ОмскРТС', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'ТомскРТС', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'БашРТС', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
			], },
			{ text: 'Зарубежные сетевые активы', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'folder-outline', logo: 'img/ees.png'}, children: [
				{ text: 'Теласи', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}}
			], },
			{ text: 'Сбыт', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'folder-outline', logo: 'img/ees.png'}, children: [
				{ text: 'Мосэнергосбыт', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Петербургская сбытовая', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Саратовэнерго', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Алтайэнергосбыт', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Башэлектросбыт', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Омская энергосбытовая компания', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Томскэнергосбыт', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Орловский энергосбыт', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Тамбовская энергосбытовая компания', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Северная сбытовая компания', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Энергосбыт Волга', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
			], },
			{ text: 'Трейдинг', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'folder-outline', logo: 'img/ees.png'}, children: [
				{ text: 'RAO Nordic', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Восточная энергетическая компания', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'IRL Polska', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Inter RAO Latvia', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Inter RAO Lietuva', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Inter RAO Eesti', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
			], },
			{ text: 'Инжиниринг', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'folder-outline', logo: 'img/ees.png'}, children: [
				{ text: 'Интер РАО – Инжиниринг', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Русские газовые турбины', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Интер РАО – Экспорт', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
			], },
			{ text: 'Инновации и энергоэффективность', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'folder-outline', logo: 'img/ees.png'}, children: [
				{ text: 'Центр энергоэффективности Интер РАО ЕЭС', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
				{ text: 'Фонд «Энергия без границ', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
			], },
			{ text: 'Ремонт и сервис', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'folder-outline', logo: 'img/ees.png'}, children: [
				{ text: 'КВАРЦ Групп', state: {matched: false, expanded: false, checked: false, selected: false}, data: {icon: 'firm'}},
			], },
		] },
	]}
]

export { departments }
