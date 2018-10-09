import React from 'react'
import { Layout, Fill, Heading, Image } from 'spectacle'
import posed from 'react-pose'
import WalkableSlide from '../../components/WalkableSlide'
import notes from '../../notes'
import images from '../../images'

const transition = {
	duration: 300,
	type: 'spring',
	stiffness: 100,
}

const visible = {
	opacity: 1,
	transition,
	x: 0,
	y: 0,
}

const LeftPlacer = posed.div({
	visible,
	hidden: {
		opacity: 0,
		x: -500,
		y: 500,
		transition,
	},
})
const CenterPlacer = posed.div({
	visible,
	hidden: {
		opacity: 0,
		x: 0,
		y: 500,
		transition,
	},
})
const RightPlacer = posed.div({
	visible,
	hidden: {
		opacity: 0,
		x: 500,
		y: 500,
		transition,
	},
})

const imageStyle = { margin: 8 }
const headingStyle = { fontWeight: 100 }

export default (
	<WalkableSlide
		key="candidate_showcase"
		notes={notes.composableLibraries}
		numSteps={4}
		renderContent={step => {
			const poseForStep = index => (step < index ? 'hidden' : 'visible')
			return (
				<Fill>
					<Heading size={6} fit textColor="secondary" style={headingStyle}>
						The most-popular composable chart libraries in React
					</Heading>
					<Layout>
						<LeftPlacer pose={poseForStep(1)} style={imageStyle}>
							<Image src={images.victory} height={250} />
						</LeftPlacer>
						<CenterPlacer pose={poseForStep(2)} style={imageStyle}>
							<Image src={images.reactVisPage} height={250} />
						</CenterPlacer>
						<RightPlacer pose={poseForStep(3)} style={imageStyle}>
							<Image src={images.rechartsPage} height={250} />
						</RightPlacer>
					</Layout>
				</Fill>
			)
		}}
	/>
)
