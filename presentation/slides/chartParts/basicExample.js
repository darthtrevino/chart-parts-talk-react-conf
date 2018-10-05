import React from 'react'
import { Slide } from 'spectacle'
import CodeSlide from 'spectacle-code-slide'

import code from '../../code'
import notes from '../../notes'
import BarChartLive from '../../components/BarChart'

export default [
	<CodeSlide
		key="showcase_barchart_example"
		transition={['fade']}
		lang="jsx"
		code={code.barChart}
		notes={notes.chartPartsBarChart}
		ranges={[
			{ loc: [1, 8], title: 'Import chart elements' },
			{
				loc: [9, 12],
				title: 'Pick a renderer',
				note: 'currently react-svg or react-native-svg',
			},
			{ loc: [14, 16], title: 'Set chart options' },
			{
				loc: [16, 30],
				title: 'Define scales',
			},
			{
				loc: [17, 18],
				title: 'Define scales',
				note: 'Each scale has a name for lookup',
			},
			{
				loc: [18, 19],
				title: 'Define scales',
				note: 'scale domains can be bound to data fields using expressions',
			},
			{
				loc: [19, 20],
				title: 'Define scales',
				note: 'we can bind the output range to a view dimension',
			},
			{
				loc: [31, 33],
				title: 'Define Axes',
			},
			{
				loc: [34, 42],
				title: 'Define Marks',
			},
			{
				loc: [35, 36],
				title: 'Define Marks',
				note: 'Bind to Data',
			},
			{
				loc: [36, 37],
				title: 'Define Marks',
				note: 'attributes can be defined with an encoding function',
			},
			{
				loc: [40, 41],
				title: 'Define Marks',
				note: 'attributes can be static',
			},
			{
				loc: [41, 44],
				title: 'Define Marks',
				note: 'we can wire in event handlers on any visual mark',
			},
		]}
	/>,
	<Slide key="showcase_live_chart">
		<BarChartLive />
	</Slide>,
]
