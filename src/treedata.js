const departments = [
	{ text: 'АК "Алроса" ПАО', data: {icon: 'icon-firm'}, children: [
		{ text: 'Горно-обогатительные комбинаты', data: {icon: 'icon-folder-outline'}, children: [
			{ text: 'Мирнинский ГОК', data: {icon: 'icon-firm'}},
			{ text: 'Айхальский ГОК', data: {icon: 'icon-firm'}},
			{ text: 'Нюрнбинский ГОК', data: {icon: 'icon-firm'}},
			{ text: 'Удачнинский ГОК', data: {icon: 'icon-firm'}},
		]},
		{ text: 'Производственная инфраструктура', data: {icon: 'icon-folder-outline'}, children: [
			{ text: 'Авиационное предприятие МУАД', data: {icon: 'icon-firm'}},
			{ text: 'Управление капитального строительства', data: {icon: 'icon-firm'}},
			{ text: 'СТ "Алмазавтоматика"', data: {icon: 'icon-firm'}},
			{ text: 'Управление материально-технического снабжения', data: {icon: 'icon-firm'}},
			{ text: 'Институт "Якутнипроалмаз"', data: {icon: 'icon-firm'}},
		]},
		{ text: 'Геологоразведочные подразделения', data: {icon: 'icon-folder-outline'}, children: [
			{ text: 'Научно-исследовательское геологическое предприятие', data: {icon: 'icon-firm'}},
			{ text: 'Вилюйская геологоразведочная экспедиция', data: {icon: 'icon-firm'}},
		]},
		{ text: 'Социальный комплекс', data: {icon: 'icon-folder-outline'}, children: [
			{ text: 'Медицинский центр', data: {icon: 'icon-firm'}},
			{ text: 'Культурно-спортивный комплекс', data: {icon: 'icon-firm'}},
			{ text: 'Центр подготовки кадров', data: {icon: 'icon-firm'}},
		]},
		{ text: 'Представительства и филиалы', data: {icon: 'icon-folder-outline'}, children: [
			{ text: 'Филиал АК «АЛРОСА» в Республике Ангола', data: {icon: 'icon-firm'}},
			{ text: 'ALROSA Mumbai (г. Мумбай, Индия)', data: {icon: 'icon-firm'}},
			{ text: 'Филиал во Владивостоке', data: {icon: 'icon-firm'}},
		]},
		{ text: 'Сбыт алмазов', data: {icon: 'icon-folder-outline'}, children: [
			{ text: 'Предприятие «Коммерал»', data: {icon: 'icon-firm'}},
			{ text: 'Филиал «Якутское предприятие по торговле алмазами» (ЯПТА)', data: {icon: 'icon-firm'}},
			{ text: 'Центр сортировки алмазов', data: {icon: 'icon-firm'}},

		]},
		{ text: 'Сбыт бриллиантов', data: {icon: 'icon-folder-outline'}, children: [
			{ text: 'Филиал "Бриллианты Алроса"', data: {icon: 'icon-firm'}},
		]},
		{ text: 'Дочерние организации', data: {icon: 'icon-folder-outline'}, children: [
			{ text: 'ООО «Бриллианты АЛРОСА»', data: {icon: 'icon-firm'}},
			{ text: 'Горнорудное общество «Катока Лтд.»', data: {icon: 'icon-firm'}},
			{ text: 'АО «Алмазы Анабара»', data: {icon: 'icon-firm'}},
			{ text: 'ПАО «Севералмаз»', data: {icon: 'icon-firm'}},
			{ text: 'ПАО «АЛРОСА-Нюрба»', data: {icon: 'icon-firm'}},
		]},
	]},
	{ text: 'АО "Гознак"', data: {icon: 'icon-firm'}, children: [
		{ text: 'Московский монетный двор', data: {icon: 'icon-firm'}},
		{ text: 'Московская печатная фабрика', data: {icon: 'icon-firm'}},
		{ text: 'Московская типография Гознака', data: {icon: 'icon-firm'}},
		{ text: 'Санкт-петербургская бумажная фабрика', data: {icon: 'icon-firm'}},
		{ text: 'Санкт-петербургский монетный двор', data: {icon: 'icon-firm'}},
		{ text: 'Пермская печатная фабрика', data: {icon: 'icon-firm'}},
		{ text: 'Краснокамская печатная фабрика', data: {icon: 'icon-firm'}},
		{ text: 'Научно-исследовательский институт', data: {icon: 'icon-firm'}},
		
	]},
	{ text: 'Интер РАО ЕЭС', data: {icon: 'icon-firm'}, children: [
		{ text: 'Электрогенерация', data: {icon: 'icon-folder-outline'}, children: [
			{ text: 'Верхнетагильская ГРЭС', data: {icon: 'icon-firm'}},
			{ text: 'Гусиноозёрская ГРЭС', data: {icon: 'icon-firm'}},
			{ text: 'Джубгинская ТЭС', data: {icon: 'icon-firm'}},
			{ text: 'Ивановские ПГУ', data: {icon: 'icon-firm'}},
			{ text: 'Ириклинская ГРЭС', data: {icon: 'icon-firm'}},
			{ text: 'Калининградская ТЭЦ-2', data: {icon: 'icon-firm'}},
			{ text: 'Каширская ГРЭС', data: {icon: 'icon-firm'}},
			{ text: 'Костромская ГРЭС', data: {icon: 'icon-firm'}},
			{ text: 'Нижневартовская ГРЭС', data: {icon: 'icon-firm'}},
			{ text: 'Пермская ГРЭС', data: {icon: 'icon-firm'}},
			{ text: 'Печорская ГРЭС', data: {icon: 'icon-firm'}},
			{ text: 'Северо-Западная ТЭЦ', data: {icon: 'icon-firm'}},
			{ text: 'Сочинская ТЭС', data: {icon: 'icon-firm'}},
			{ text: 'Уренгойская ГРЭС', data: {icon: 'icon-firm'}},
			{ text: 'Харанорская ГРЭС', data: {icon: 'icon-firm'}},
			{ text: 'Черепетская ГРЭС', data: {icon: 'icon-firm'}},
			{ text: 'Южноуральская ГРЭС', data: {icon: 'icon-firm'}},
			{ text: 'Южноуральская ГРЭС-2', data: {icon: 'icon-firm'}},
		], },
		{ text: 'Зарубежная генерация', data: {icon: 'icon-folder-outline'}, children: [
			{ text: 'Молдавская ГРЭС', data: {icon: 'icon-firm'}},
			{ text: 'Храми ГЭС-1', data: {icon: 'icon-firm'}},
			{ text: 'Храми ГЭС-2' , data: {icon: 'icon-firm'}},
			{ text: 'Trakya Elektrik A.S.', data: {icon: 'icon-firm'}},
			{ text: 'Ветропарк «Видмантай»', data: {icon: 'icon-firm'}},
		],},
		{ text: 'Теплогенерация', data: {icon: 'icon-folder-outline'}, children: [
			{ text: 'Томская Генерация', data: {icon: 'icon-firm'}},
			{ text: 'ТГК-11', data: {icon: 'icon-firm'}},
			{ text: 'Башкирская генерирующая компания', data: {icon: 'icon-firm'}},
		], },
		{ text: 'Теплосети', data: {icon: 'icon-folder-outline'}, children: [
			{ text: 'ОмскРТС', data: {icon: 'icon-firm'}},
			{ text: 'ТомскРТС', data: {icon: 'icon-firm'}},
			{ text: 'БашРТС', data: {icon: 'icon-firm'}},
		], },
		{ text: 'Зарубежные сетевые активы', data: {icon: 'icon-folder-outline'}, children: [
			{ text: 'Теласи', data: {icon: 'icon-firm'}}
		], },
		{ text: 'Сбыт', data: {icon: 'icon-folder-outline'}, children: [
			{ text: 'Мосэнергосбыт', data: {icon: 'icon-firm'}},
			{ text: 'Петербургская сбытовая', data: {icon: 'icon-firm'}},
			{ text: 'Саратовэнерго', data: {icon: 'icon-firm'}},
			{ text: 'Алтайэнергосбыт', data: {icon: 'icon-firm'}},
			{ text: 'Башэлектросбыт', data: {icon: 'icon-firm'}},
			{ text: 'Омская энергосбытовая компания', data: {icon: 'icon-firm'}},
			{ text: 'Томскэнергосбыт', data: {icon: 'icon-firm'}},
			{ text: 'Орловский энергосбыт', data: {icon: 'icon-firm'}},
			{ text: 'Тамбовская энергосбытовая компания', data: {icon: 'icon-firm'}},
			{ text: 'Северная сбытовая компания', data: {icon: 'icon-firm'}},
			{ text: 'Энергосбыт Волга', data: {icon: 'icon-firm'}},
		], },
		{ text: 'Трейдинг', data: {icon: 'icon-folder-outline'}, children: [
			{ text: 'RAO Nordic', data: {icon: 'icon-firm'}},
			{ text: 'Восточная энергетическая компания', data: {icon: 'icon-firm'}},
			{ text: 'IRL Polska', data: {icon: 'icon-firm'}},
			{ text: 'Inter RAO Latvia', data: {icon: 'icon-firm'}},
			{ text: 'Inter RAO Lietuva', data: {icon: 'icon-firm'}},
			{ text: 'Inter RAO Eesti', data: {icon: 'icon-firm'}},
		], },
		{ text: 'Инжиниринг', data: {icon: 'icon-folder-outline'}, children: [
			{ text: 'Интер РАО – Инжиниринг', data: {icon: 'icon-firm'}},
			{ text: 'Русские газовые турбины', data: {icon: 'icon-firm'}},
			{ text: 'Интер РАО – Экспорт', data: {icon: 'icon-firm'}},
		], },
		{ text: 'Инновации и энергоэффективность', data: {icon: 'icon-folder-outline'}, children: [
			{ text: 'Центр энергоэффективности Интер РАО ЕЭС', data: {icon: 'icon-firm'}},
			{ text: 'Фонд «Энергия без границ', data: {icon: 'icon-firm'}},
		], },
		{ text: 'Ремонт и сервис', data: {icon: 'icon-folder-outline'}, children: [
			{ text: 'КВАРЦ Групп', data: {icon: 'icon-firm'}},
		], },
	] },
]

export { departments }
