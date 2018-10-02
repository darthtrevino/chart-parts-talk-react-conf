import './styles'
import React from 'react'
import { Deck } from 'spectacle'
import theme from './theme'

// Talk Sections
import frontSlide from './slides/front'
import whoWeAre from './slides/whoWeAre'
import aboutOurWork from './slides/aboutOurWork'
import chartsAreImportant from './slides/chartsAreImportant'
import contrivedProblem from './slides/contrivedProblem'
import reactAndD3 from './slides/reactAndD3'
import gogImplementationSurvey from './slides/gogImplementationSurvey'
import showcaseChartParts from './slides/showcaseChartParts'
import gogTheory from './slides/gogTheory'
import chartTypeCarousel from './slides/chartTypeCarousel'

export default class Presentation extends React.Component {
	state = { animIndex: 0 }

	render() {
		return (
			<Deck
				transition={['slide']}
				transitionDuration={500}
				theme={theme}
				progress="bar"
			>
				{frontSlide}
				{whoWeAre}
				{aboutOurWork}
				{chartsAreImportant}
				{chartTypeCarousel}
				{contrivedProblem}
				{reactAndD3}
				{gogTheory(this.state.animIndex, animIndex =>
					this.setState({ animIndex }),
				)}
				{gogImplementationSurvey}
				{showcaseChartParts}
			</Deck>
		)
	}
}
