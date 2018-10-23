import React from 'react'
import posed from 'react-pose'
import { Slide, Heading, Anim, Image } from 'spectacle'
import images from '../images'
import notes from '../notes'
import WalkableSlide from '../components/WalkableSlide'

const Positioned = posed.div({
	initial: {
		scale: 3,
		opacity: 0,
		x: 0,
		transition: {
			duration: 150,
		},
	},
	visible: {
		scale: 1,
		opacity: 1,
		x: 0,
		transition: {
			delay: 100,
			duration: 500,
		},
	},
	hidden: {
		opacity: 0,
		scale: 0,
		x: -500,
		transition: {
			delay: 150,
			duration: 300,
		},
	},
})

const imagePos = {
	position: 'absolute',
	backgroundColor: 'white',
	boxShadow: '3px 3px #444',
}

export default [
	<WalkableSlide
		numSteps={3}
		notes={notes.uiwork}
		renderContent={step => {
			const poseForStep = index => {
				if (step < index) {
					return 'initial'
				} else if (step === index) {
					return 'visible'
				} else {
					return 'hidden'
				}
			}
			return (
				<>
					<Positioned pose={poseForStep(0)} style={{ ...imagePos, top: -200 }}>
						<Image fill src={images.essexPbi} />
					</Positioned>
					<Positioned pose={poseForStep(1)} style={{ ...imagePos, top: -250 }}>
						<Image fill src={images.essexTopics} />
					</Positioned>
					<Positioned pose={poseForStep(2)} style={{ ...imagePos, top: -220 }}>
						<Image fill src={images.essexMoose} />
					</Positioned>
				</>
			)
		}}
	/>,
	<Slide
		notes={notes.uiemphasis}
		bgImage={images.visualSurvey}
		bgDarken={0.8}
		transition={['fade']}
	>
		<Heading fill textColor="pcontrast">
			Visualization is how we communicate complex data
		</Heading>
	</Slide>,
]
