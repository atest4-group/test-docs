module.exports = {
	base: '/test-docs/',
	locales: {
		'/': {
			lang: 'zh-CN',
			title: 'test-docs',
			description: 'test-docs',
		},
	},
	themeConfig: {
		repo: 'atest4-group/test-docs',
		docsDir: 'docs',
		docsBranch: 'docs',
		editLinks: true,
		editLinkText: '在 GitHub 上编辑此页',
		lastUpdated: '上次更新',
	},
	nav: [
		{
			text: 'Guide',
			link: '/guide/',
		},
	],
	sidebar: {
		'/guide/': [
			{
				title: '指南',
				collapsable: false,
				children: [
					'',
				],
			},
		],
	},
}
