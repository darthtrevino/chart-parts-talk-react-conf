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
import gogImplementationSurvey from './slides/gogImplementationSurvey'
import showcaseChartParts from './slides/showcaseChartParts'
import gogTheory from './slides/gogTheory'
import chartTypeCarousel from './slides/chartTypeCarousel'
import gogLessons from './slides/gog_lessons'

export default class Presentation extends React.Component {
	state = { animIndex: 0 }

	render() {
		const { animIndex } = this.state
		console.log('Deck@', animIndex)
		return (
			<Deck
				transition={[
					'fade',
					'slide',
					(transitioning, forward) => {
						return {
							transform: `
							translate3d(0%, ${transitioning ? -100 : 0}%, 0)
							`,
						}
					},
				]}
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
				{gogTheory(animIndex, this.setAnimIndex)}
				{gogLessons}
				{gogImplementationSurvey}
				{showcaseChartParts}
			</Deck>
		)
	}

	setAnimIndex = animIndex => this.setState({ animIndex })
}
