module.exports = {
	port : 3000,
	host : 'localhost',
	commands : [
		{
			initial: true,
			npm : 'start validate',
			title : 'Validate',
			description : 'Will validate all architecture and OS properties.'
		},
		{
			npm : 'start fe dev',
			description: 'Will process and run all front-end code.',
			title : 'Front-end'
		},
		{
			npm : 'start be',
			description: `Will watch DLL's and PDP files and publish.`,
			title : 'Backend-end'
		},
		{
			npm : 'start full',
			description: 'Build, Front-end and deploy',
			title : 'Full'
		},
		{
			npm : 'start build',
			description: 'Build & front-end tasks combined.',
			title : 'Build'
		},
		{
			npm : 'start ci build-number',
			description: 'Will run all tasks associated with CI.',
			title : 'Continuous Integration'
		},
	]
};