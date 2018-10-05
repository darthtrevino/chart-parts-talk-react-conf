import React from 'react'
import { Layout, Fill, Heading, Image, Text } from 'spectacle'
import posed from 'react-pose'
import WalkableSlide from '../../components/WalkableSlide'
import notes from '../../notes'
import images from '../../images'

const ImagePlacer = posed.div({
	visible: {
		opacity: 1,
		transition: { duration: 300 },
	},
	hidden: {
		opacity: 0,
		transition: { duration: 300 },
	},
})

const imageStyle = {
	margin: 15,
}
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
		y: ({ y = 0 }) => y,
		transition: {
			duration: 500,
		},
	},
})

const slideUpTrayStyle = {
	position: 'relative',
	bottom: 0,
	display: 'flex',
	justifyContent: 'space-around',
	flex: 1,
}

export default (
	<WalkableSlide
		key="surv_candidate_showcase"
		notes={notes.composableLibraries}
		transition={['fade']}
		numSteps={4}
		renderContent={step => {
			const poseForStep = (appear, disappear) =>
				step >= disappear || step < appear ? 'hidden' : 'visible'

			return (
				<div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
					<Text textSize={50} textColor="secondary" style={headingStyle}>
						Coupled to Rendering
					</Text>
					<SlideUpTray pose={poseForStep(1, 2)} style={slideUpTrayStyle}>
						<Image src={images.victoryCircle} height={300} />
					</SlideUpTray>
					<SlideUpTray
						pose={poseForStep(2, 3)}
						style={slideUpTrayStyle}
						y={-300}
					>
						<Image src={images.reactVisCanvas} height={300} />
					</SlideUpTray>
					<SlideUpTray
						pose={step >= 3 ? 'visible' : 'hidden'}
						style={slideUpTrayStyle}
						y={-600}
					>
						<div style={{ backgroundColor: 'white', width: 360 }}>
							<Image src={images.dom} height={300} />
						</div>
					</SlideUpTray>
				</div>
			)
		}}
	/>
)
