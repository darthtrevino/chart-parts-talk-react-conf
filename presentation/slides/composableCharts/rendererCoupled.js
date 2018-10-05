import React from 'react'
import { Layout, Fill, Heading, Image, Text } from 'spectacle'
import posed from 'react-pose'
import WalkableSlide from '../../components/WalkableSlide'
import notes from '../../notes'
import images from '../../images'

const transition = {
	duration: 300,
}

const visible = {
	opacity: 1,
	transition,
}

const ImagePlacer = posed.div({
	visible,
	hidden: {
		opacity: 0,
		transition,
	},
	dissolved: {
		opacity: 0,
		y: -500,
		transition,
	},
})

const imageStyle = { margin: 15 }
const headingStyle = { fontWeight: 100 }

const SlideUpTray = posed.div({
	hidden: {
		opacity: 0,
		y: 500,
		transition: {
			duration: 500,
		},
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 500,
		},
	},
})

const slideUpTrayStyle = {
	position: 'absolute',
	bottom: -30,
	display: 'flex',
	justifyContent: 'space-around',
	width: '100%',
}

export default (
	<WalkableSlide
		key="surv_candidate_showcase"
		notes={notes.composableLibraries}
		transition={['fade']}
		numSteps={4}
		renderContent={step => {
			const poseForStep = index =>
				step >= 3 ? 'dissolved' : step < index ? 'hidden' : 'visible'
			return (
				<Fill>
					<Text textSize={50} textColor="secondary" style={headingStyle}>
						Coupled to View Technology
					</Text>

					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<ImagePlacer pose={poseForStep(1)} style={imageStyle}>
							<Image src={images.victoryCircle} />
						</ImagePlacer>
						<ImagePlacer pose={poseForStep(2)} style={imageStyle}>
							<Image src={images.reactVisCanvas} />
						</ImagePlacer>
					</div>

					<SlideUpTray
						pose={step >= 3 ? 'visible' : 'hidden'}
						style={slideUpTrayStyle}
					>
						<ImagePlacer
							pose={step >= 3 ? 'visible' : 'hidden'}
							style={imageStyle}
						>
							<div style={{ backgroundColor: 'white', width: 360 }}>
								<Image src={images.dom} height={300} />
							</div>
						</ImagePlacer>
					</SlideUpTray>
				</Fill>
			)
		}}
	/>
)
