import React from 'react'
import { Layout, Fill, Heading, Image, Text } from 'spectacle'
import posed from 'react-pose'
import WalkableSlide from '../../components/WalkableSlide'
import { palette } from '../../theme'
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
	dissolved: {
		opacity: 0,
		transition: { duration: 50 },
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
	dissolved: {
		opacity: 0,
		transition: { duration: 100 },
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
	dissolved: {
		opacity: 0,
		transition: { duration: 100 },
	},
})

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

const imageStyle = { margin: 8 }
const headingStyle = { fontWeight: 100 }
const slideUpTrayStyle = {
	position: 'absolute',
	bottom: 0,
	display: 'flex',
	justifyContent: 'space-around',
	width: '100%',
}

export default (
	<WalkableSlide
		key="surv_candidate_showcase"
		notes={notes.composableLibraries}
		numSteps={4}
		transition={['fade']}
		renderContent={step => {
			const poseForStep = index => {
				return step >= 3 ? 'dissolved' : step < index ? 'hidden' : 'visible'
			}
			return (
				<Fill>
					<Text textSize={50} textColor="secondary" style={headingStyle}>
						Taxonomic APIs
					</Text>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<LeftPlacer pose={poseForStep(1)} style={imageStyle}>
							<Image src={images.skeletonArmy} height={300} />
						</LeftPlacer>
						<CenterPlacer
							pose={poseForStep(2)}
							style={{ display: 'flex', alignItems: 'center' }}
						>
							<Text textSize={50} textColor="secondary" style={headingStyle}>
								vs
							</Text>
						</CenterPlacer>
						<RightPlacer pose={poseForStep(2)} style={imageStyle}>
							<Image src={images.bones} height={300} />
						</RightPlacer>
					</div>
					<SlideUpTray
						pose={step >= 3 ? 'visible' : 'hidden'}
						style={slideUpTrayStyle}
					>
						<LeftPlacer pose={poseForStep(3)} style={imageStyle}>
							<Image src={images.victoryApi} height={300} />
						</LeftPlacer>
						<RightPlacer pose={poseForStep(3)} style={imageStyle}>
							<Image src={images.rechartsTaxonomical} height={300} />
						</RightPlacer>
					</SlideUpTray>
				</Fill>
			)
		}}
	/>
)
