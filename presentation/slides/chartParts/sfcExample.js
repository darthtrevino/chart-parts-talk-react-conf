import React from 'react'
import CodeSlide from 'spectacle-code-slide'
import TwoStepHeader from '../../components/TwoStepHeader'
import PopulationPyramidSlide from './PopulationPyramidSlide'
import code from '../../code'
import notes from '../../notes'

export default [
	<TwoStepHeader
		key="showcase_mobile"
		notes={notes.managingComplexity}
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
				loc: [44, 65],
			},
			{
				loc: [67, 80],
			},
			{
				loc: [81, 88],
			},
			{
				loc: [89, 96],
			},
			{
				loc: [97, 112],
			},
		]}
	/>,
]
