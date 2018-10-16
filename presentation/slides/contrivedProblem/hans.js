import React from 'react'
import { Heading } from 'spectacle'
import WalkableSlide from '../../components/WalkableSlide'
import notes from '../../notes'
import images from '../../images'
import posed from 'react-pose'

const HansText = posed.div({
	hidden: {
		opacity: 0,
		y: 0,
		transition: {
			duration: 500,
		},
	},
	top: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 500,
		},
	},
	bottom: {
		opacity: 1,
		y: 520,
		transition: {
			duration: 1500,
		},
	},
})

const containerStyle = {
	display: 'flex',
	flexDirection: 'column',
	height: 700,
	width: '100%',
}

const textStyle = { backgroundColor: 'rgba(0,0,0,0.5)' }

export default (
	<WalkableSlide
		notes={notes.hans}
		key="contrived_hans"
		bgImage={images.hans}
		numSteps={3}
		renderContent={step => {
			function getTextPose() {
				if (step === 0) {
					return 'hidden'
				} else if (step === 1) {
					return 'top'
				} else {
					return 'bottom'
				}
			}

			const text = step < 2 ? 'Abstract Charts' : '2D APIs'
			const textColor = step === 0 ? 'secondary' : 'highlight'

			return (
				<div style={containerStyle}>
					<HansText style={textStyle} pose={getTextPose()}>
						<Heading size={2} textColor={textColor}>
							{text}
						</Heading>
					</HansText>
				</div>
			)
		}}
	/>
)
