import './styles'
import React from 'react'
import { Deck, Magic, Slide, Heading } from 'spectacle'
import theme from './theme'

// Talk Sections
import frontSlide from './slides/front'
import aboutMe from './slides/aboutMe'
import aboutOurWork from './slides/aboutOurWork'
import chartsAreImportant from './slides/chartsAreImportant'
import problemDescription from './slides/contrivedProblem'
import composableCharts from './slides/composableCharts'
import chartParts from './slides/chartParts'
import gogTheory from './slides/gogTheory'
import chartTypeCarousel from './slides/chartTypeCarousel'
import vega from './slides/vega'

const deckTransition = [
	'fade',
	'slide',
	(transitioning, forward) => ({
		transform: `translate3d(0%, ${transitioning ? -100 : 0}%, 0)`,
	}),
]
export default () => (
	<Deck
		transition={deckTransition}
		transitionDuration={500}
		controls={false}
		theme={theme}
		progress="bar"
	>
		{frontSlide}
		{aboutMe}
		{aboutOurWork}
		{chartsAreImportant}
		{chartTypeCarousel}
		{problemDescription}
		{composableCharts}
		{gogTheory}
		{vega}
		{chartParts}
	</Deck>
)
