import React from 'react'
import CodeSlide from 'spectacle-code-slide'
import TwoStepHeader from '../../components/TwoStepHeader'

import code from '../../code'
import notes from '../../notes'

export default [
	<TwoStepHeader
		key="showcase_mobile"
		notes={notes.mobile}
		text={'Example Showcase'}
		sub={'Managing Complexity with Functional Components'}
	/>,
	<CodeSlide
		key="showcase_sfc"
		transition={['fade']}
		lang="jsx"
		code={code.barChartSFC}
		notes={notes.barChartSFC}
		ranges={[
			{
				loc: [16, 18],
				note: "We've tucked some pieces away behind components",
			},
			{
				loc: [33, 51],
			},
			{
				loc: [52, 58],
			},
		]}
	/>,
]
