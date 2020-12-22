const roles = [
	{ text: 'Роли', state: {expanded: true, checked: false, selected: false}, data: {icon: 'role', dep: 0}, children: [
		{ text: 'Тестировщики', state: {expanded: false, checked: false, selected: false}, data: {icon: 'role', dep: 3, firm: 0}},
		{ text: 'Эксперимент', state: {expanded: false, checked: false, selected: false}, data: {icon: 'role', dep: 2, firm: 1}},
		{ text: 'Заместители', state: {expanded: false, checked: false, selected: false}, data: {icon: 'role', dep: 0, firm: 2}},
		{ text: 'Гостевая роль', state: {expanded: false, checked: false, selected: false}, data: {icon: 'role', dep: 0, firm: 3}},
	]}
]

export { roles }
