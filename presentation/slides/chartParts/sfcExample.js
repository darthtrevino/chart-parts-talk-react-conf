import React from 'react'
import CodeSlide from 'spectacle-code-slide'
import TwoStepHeader from '../../components/TwoStepHeader'
import PopulationPyramidSlide from './PopulationPyramidSlide'
import code from '../../code'
import notes from '../../notes'

export default [
	<TwoStepHeader
		key="showcase_mobile"
		notes={notes.mobile}
		text={'Example Showcase'}
		sub={'Managing Complexity with Functional Components'}
	/>,
	PopulationPyramidSlide,
	<CodeSlide
		key="showcase_sfc"
		transition={['fade']}
		lang="jsx"
		code={code.barChartSFC}
		notes={notes.barChartSFC}
		ranges={[
			{
				loc: [29, 43],
				note: 'top-level chart definition',
			},
			{
				loc: [44, 63],
				note: 'scale definitions',
			},
			{
				loc: [64, 75],
				note: 'shared age labels',
			},
			{
				loc: [76, 83],
				note: 'mperyear',
			},
			{
				loc: [84, 91],
				note: 'fperyear',
			},
			{
				loc: [92, 103],
				note: 'shared chart structure',
			},
		]}
	/>,
]
