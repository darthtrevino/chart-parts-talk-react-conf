import React from 'react'
import { Heading, Slide } from 'spectacle'
import CodeSlide from 'spectacle-code-slide'

import images from '../../images'
import code from '../../code'
import notes from '../../notes'
import BarChartLive from '../../components/BarChart'
import TwoStepHeader from '../../components/TwoStepHeader'

export default [
	<TwoStepHeader
		key="showcase_accessibility"
		notes={notes.accessibility}
		text="Example Showcase"
		sub="Accessible Charting"
	/>,
	<CodeSlide
		key="showcase_accessible_code"
		transition={['fade']}
		lang="jsx"
		notes={notes.accessibilityCode}
		code={code.barChartAccessible}
		ranges={[
			{
				loc: [20, 21],
				title: 'a11y',
				note: 'add a top-level chart description',
			},
			{
				loc: [27, 28],
				title: 'a11y',
				note: 'define a tab-index for keyboard-navigability',
			},
			{
				loc: [28, 30],
				title: 'a11y',
				note: 'include an aria decription for the element',
			},
		]}
	/>,
	<Slide key="showcase_live_chart_accessible" notes={notes.accessibleLiveChart}>
		<BarChartLive />
	</Slide>,
]
