const items = [
	{
		id: 0,
		type: 'task',
		typ: 'Задание',
		vid: 'На исполнение',
		status: 'В работе',
		title: 'Заказ канцелярии для отдела закупок',
		author: 'Иванов И.К.',
		changed: '23.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur приказ adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		file: 'Служебная записка № 241-5 от 20.10.2020',
		num: 3,
	},
	{
		id: 1,
		type: 'doc',
		typ: 'Документ',
		vid: 'Приказ',
		status: 'На подписании',
		title: 'Приказ о награждении виноватых и закрытии столовой',
		author: 'Петров З.А.',
		changed: '23.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur прошлый год adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		file: 'Приказ о закрытии столовой № 241 от 20.10.2020',
		num: 2,
	},
	{
		id: 2,
		type: 'doc',
		typ: 'Документ',
		vid: 'Приказ',
		status: 'На согласовании',
		title: 'График выплат по договору',
		author: 'Орлов П.А.',
		changed: '19.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		file: 'График выплат по договору',
		num: 1,
	},
	{
		id: 3,
		type: 'doc',
		typ: 'Документ',
		vid: 'Приказ',
		status: 'На согласовании',
		title: 'График отпусков',
		author: 'Орлов П.А.',
		changed: '19.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		file: 'График отпусков',
		num: 6,
	},
	{
		id: 4,
		type: 'file',
		typ: 'Файл',
		vid: 'Основной',
		title: 'Заявка № 45612-3',
		author: 'Петров З.А.',
		changed: '23.10.2020',
		digest: 'Lorem ipsum dolor sit amet, прошлый год consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		file: 'Заявка про заявки и о заявке',
		num: 1,
	},
	{
		id: 5,
		type: 'doc',
		typ: 'Документ',
		vid: 'Заявление',
		status: 'На подписании',
		title: 'Заявление на отпуск',
		author: 'Гришин П.А.',
		changed: '19.10.2020',
		digest: 'Lorem прошлый ipsum dolor sit amet, consectetur adipiscing elit, год приказ sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		file: 'Заявление на отпуск',
		num: 1,
	},
	{
		id: 6,
		type: 'doc',
		typ: 'Документ',
		vid: 'Служебная записка',
		status: 'На подписании',
		title: 'О ношении масок',
		author: 'Орлов П.А.',
		changed: '19.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt приказ ut labore et dolore magna aliqua.',
		file: 'Служебка про маски',
		num: 2,
	},
	{
		id: 7,
		type: 'doc',
		typ: 'Документ',
		vid: 'Договор',
		status: 'Подготовка',
		title: 'Договор с компанией Алроса',
		author: 'Петров П.А.',
		changed: '19.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		file: 'Договор № 12345 от 12 окт 2020',
		num: 1,
	},
	{
		id: 8,
		type: 'file',
		typ: 'Файл',
		vid: 'Основной',
		title: 'Цели на 3 кв сотрудников отдела',
		author: 'Петров З.А.',
		changed: '23.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore прошлый et dolore magna aliqua.',
		file: 'Цели на 3 кв',
		num: 4,
	},
	{
		id: 9,
		type: 'doc',
		typ: 'Документ',
		vid: 'Договор',
		status: 'Подготовка',
		title: 'Договор с ООО Газпром',
		author: 'Петров П.А.',
		changed: '19.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		file: 'Договор № 12345 от 12 окт 2020',
		num: 1,
	},
	{
		id: 10,
		type: 'doc',
		typ: 'Документ',
		vid: 'Договор',
		status: 'Подготовка',
		title: 'Договор с ООО Ромашка',
		author: 'Петров П.А.',
		changed: '19.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		file: 'Договор № 123 от 12 окт 2020',
		num: 2,
	},
	{
		id: 11,
		type: 'doc',
		typ: 'Документ',
		vid: 'Заявка',
		status: 'На согласовании',
		title: 'Общая закупка канцелярии',
		author: 'Орлов З.А.',
		changed: '25.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		file: 'Заявка про канцелярию',
		num: 1,
	},
	{
		id: 12,
		type: 'task',
		typ: 'Задание',
		vid: 'На ознакомление',
		status: 'В работе',
		title: 'Роман Горького На дне',
		author: 'Горький',
		changed: '19.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		file: 'Текст романа На дне',
		num: 10,
	},
	{
		id: 13,
		type: 'doc',
		typ: 'Документ',
		vid: 'Заявка',
		status: 'На согласовании',
		title: 'Закупка канцелярии для отдела маркетинга',
		author: 'Орлов З.А.',
		changed: '25.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		file: 'Заявка про канцелярию',
		num: 1,
	},
	{
		id: 14,
		type: 'doc',
		typ: 'Документ',
		vid: 'Заявка',
		status: 'Подготовка',
		title: 'Закупка канцелярии для отдела продаж',
		author: 'Орлов З.А.',
		changed: '25.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		file: 'Заявка про канцелярию',
		num: 2,
	},
	{
		id: 15,
		type: 'doc',
		typ: 'Документ',
		vid: 'Служебная записка',
		status: 'На подписании',
		title: 'Цели на 4 кв',
		author: 'Орлов П.А.',
		changed: '19.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		file: 'Цели на 4 кв',
		num: 1,
	},
	{
		id: 16,
		type: 'task',
		typ: 'Задание',
		vid: 'На исполнение',
		status: 'В работе',
		title: 'Цели на 4 кв',
		author: 'Орлов П.А.',
		changed: '19.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		id: 17,
		type: 'task',
		typ: 'Задание',
		vid: 'На исполнение',
		status: 'Завершено',
		title: 'Цели на 3 кв',
		author: 'Орлов П.А.',
		changed: '19.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		id: 18,
		type: 'task',
		typ: 'Задание',
		vid: 'На исполнение',
		status: 'Завершено',
		title: 'Цели на 2 кв',
		author: 'Орлов П.А.',
		changed: '19.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		id: 19,
		type: 'task',
		typ: 'Задание',
		vid: 'На исполнение',
		status: 'Завершено',
		title: 'Цели на 1 кв',
		author: 'Орлов П.А.',
		changed: '19.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		id: 20,
		type: 'file',
		typ: 'Файл',
		vid: 'Основной',
		title: 'Приказ о награждении премиями виноватых и закрытии столовой',
		author: 'Петров З.А.',
		changed: '23.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		file: 'Приказ о закрытии столовой № 241 от 20.10.2020',
		num: 2,
	},
	{
		id: 21,
		type: 'file',
		typ: 'Файл',
		vid: 'Основной',
		title: 'График отпусков на первое полугодие',
		author: 'Орлов З.А.',
		changed: '23.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		file: 'График отпусков на 1 и 2 кварталы',
		num: 2,
	},
	{
		id: 22,
		type: 'file',
		typ: 'Файл',
		vid: 'Основной',
		title: 'График отпусков на второе полугодие',
		author: 'Орлов З.А.',
		changed: '23.10.2020',
		digest: 'Lorem ipsum прошлый год dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		file: 'График отпусков на 3 и 4 кварталы',
		num: 1,
	},
	{
		id: 23,
		type: 'task',
		typ: 'Задание',
		vid: 'На согласование',
		title: 'Согласование договора аренды с ООО Ромашка',
		author: 'Орлов З.А.',
		changed: '23.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		file: 'Договор с ООО Ромашка',
		num: 3,
	},
	{
		id: 24,
		type: 'task',
		typ: 'Группа заданий',
		vid: 'На ознакомление',
		title: 'Положение об отпусках на следующий год',
		author: 'Петров З.А.',
		changed: '23.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		file: 'Положение-расположение',
		num: 1,
	},
	{
		id: 25,
		type: 'task',
		typ: 'Задание',
		vid: 'На согласование',
		status: 'Завершено',
		title: 'Договорные контракты с компанией Алроса',
		author: 'Петров П.А.',
		changed: '19.10.2020',
		digest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		file: 'Список договоров',
		num: 1,
	},
]

export default items
