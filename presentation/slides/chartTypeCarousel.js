import React from 'react'
import { Slide, Anim, Text, Image } from 'spectacle'

import notes from '../notes'
import images from '../images'

class ChartTypeCarouselSlide extends React.Component {
	state = { animIndex: -1 }

	render() {
		const { ...rest } = this.props
		const { animIndex } = this.state
		return (
			<Slide notes={notes.aboutMe} {...rest}>
				<Anim
					fromStyle={{}}
					toStyle={[{}, {}, {}]}
					easing="quadInOut"
					transitionDuration={0}
					onAnim={(forwards, animIndex) => this.setState({ animIndex })}
				>
					<div />
				</Anim>
			</Slide>
		)
	}
}

export default [
	<Slide notes={notes.charting} key="chartsimportant0" transition={['fade']} />,
	<Slide notes={notes.charting} key="chartsimportant1">
		<Image src={images.barChart} height={500} />
	</Slide>,
	<Slide notes={notes.charting} key="chartsimportant2">
		<Image src={images.lineChart} height={500} />
	</Slide>,
	<Slide notes={notes.charting} key="chartsimportant3">
		<Image src={images.pieChart} height={500} />
	</Slide>,
	<Slide notes={notes.charting} key="chartsimportant4">
		<Image src={images.areaChart} height={500} />
	</Slide>,
	<Slide notes={notes.charting} key="chartsimportant5">
		<Image src={images.radarChart} height={500} />
	</Slide>,
	<Slide notes={notes.charting} key="chartsimportant6">
		<Image src={images.boxPlots} height={500} />
	</Slide>,
]
