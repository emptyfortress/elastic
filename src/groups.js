const groups = [
	{ text: 'Группы', state: {expanded: true, checked: false, selected: false}, data: {icon: 'group', dep: -1 }, children: [
		{ text: 'Администраторы', state: {expanded: false, checked: false, selected: false}, data: {icon: 'group', dep: 0}, children: [
			{ text: 'Администраторы КС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'group', dep: 0, firm: 0}},
			{ text: 'Администраторы УД', state: {expanded: false, checked: false, selected: false}, data: {icon: 'group', dep: 0, firm: 1}},
			{ text: 'Админы РГ', state: {expanded: false, checked: false, selected: false}, data: {icon: 'group', dep: 0, firm: 2}},
		]},
		{ text: 'Печать договоров', state: {expanded: false, checked: false, selected: false}, data: {icon: 'group', dep: 0, firm: 3}},
		{ text: 'Согласование договоров', state: {expanded: false, checked: false, selected: false}, data: {icon: 'group', dep: 1, firm: 0}},
		{ text: 'Системная WF', state: {expanded: false, checked: false, selected: false}, data: {icon: 'group', dep: 2}, children: [
			{ text: 'Группа 1', state: {expanded: false, checked: false, selected: false}, data: {icon: 'group', dep: 1, firm: 1}},
			{ text: 'Группа 2', state: {expanded: false, checked: false, selected: false}, data: {icon: 'group', dep: 1, firm: 2}},
			{ text: 'Группа 3', state: {expanded: false, checked: false, selected: false}, data: {icon: 'group', dep: 1, firm: 3}},
		]},
		{ text: 'Специалисты по БП', state: {expanded: false, checked: false, selected: false}, data: {icon: 'group', dep: 3}, children: [
			{ text: 'Аналитики', state: {expanded: false, checked: false, selected: false}, data: {icon: 'group', dep: 3, firm: 0}},
			{ text: 'Разработчики', state: {expanded: false, checked: false, selected: false}, data: {icon: 'group', dep: 3, firm: 1}},
			{ text: 'Продавцы', state: {expanded: false, checked: false, selected: false}, data: {icon: 'group', dep: 3, firm: 2}},
		]},
	]}
]

export { groups }
