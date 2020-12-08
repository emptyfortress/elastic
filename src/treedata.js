const departments = [
	{ text: 'Item 1' },
	{ text: 'Item 2' },
	{ text: 'Item 3', state: { selected: true } },
	{ text: 'Item 4', children: [
		{ text: 'Item 5.1', state: { disabled: true } },
		{ text: 'Item 5.2', state: { selectable: false } }
	] }
]

export { departments }
