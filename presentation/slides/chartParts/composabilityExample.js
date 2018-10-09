import React from 'react'
import { Slide, CodePane } from 'spectacle'
import CodeSlide from 'spectacle-code-slide'

import images from '../../images'
import code from '../../code'
import notes from '../../notes'
import BarChartMeanLive from '../../components/BarChartWithMeanLine'
import TwoStepHeader from '../../components/TwoStepHeader'

export default [
	<TwoStepHeader
		key="showcase_composability"
		notes={notes.composability}
		text="Example Showcase"
		sub="Composable Charts"
	/>,
	<CodeSlide
		key="showcase_composeability_code"
		transition={['fade']}
		lang="jsx"
		notes={notes.composabilityCode}
		code={code.barChartWithMean}
		ranges={[
			{
				title: 'Define MeanLine Component',
				loc: [32, 40],
			},
			{
				title: 'Define MeanLine Component',
				loc: [34, 36],
				note: 'use view bounds for full-width line',
			},
			{
				title: 'Define MeanLine Component',
				loc: [36, 37],
				note: 'determine mean line value',
			},
			{
				loc: [16, 17],
				title: 'Update BarChart',
				note: 'include children',
			},
			{
				loc: [28, 29],
				title: 'Update BarChart',
				note: 'render children',
			},
		]}
	/>,
	<Slide key="showcase_meantop" notes={notes.composableComposed}>
		<CodePane
			lang="jsx"
			theme="external"
			source={code.barChartWithMeanTop}
			textSize={40}
		/>
	</Slide>,
	<Slide key="showcase_live_barchart">
		<BarChartMeanLive />
	</Slide>,
	<Slide
		key="showcase_winchester"
		bgImage={images.winchester}
		notes={notes.showcaseWinchester}
	/>,
]
