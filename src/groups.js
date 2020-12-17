const groups = [
	{ text: 'Группы', state: {expanded: true, checked: false, selected: false}, data: {icon: 'icon-group' }, children: [
		{ text: 'Администраторы', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-group'}, children: [
			{ text: 'Администраторы КС', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-group'}},
			{ text: 'Администраторы УД', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-group'}},
			{ text: 'Админы РГ', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-group'}},
		]},
		{ text: 'Печать договоров', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-group'}},
		{ text: 'Согласование договоров', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-group'}},
		{ text: 'Системная WF', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-group'}, children: [
			{ text: 'Группа 1', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-group'}},
			{ text: 'Группа 2', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-group'}},
			{ text: 'Группа 3', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-group'}},
		]},
		{ text: 'Специалисты по БП', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-group'}, children: [
			{ text: 'Аналитики', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-group'}},
			{ text: 'Разработчики', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-group'}},
			{ text: 'Продавцы', state: {expanded: false, checked: false, selected: false}, data: {icon: 'icon-group'}},
		]},
	]}
]

export { groups }
