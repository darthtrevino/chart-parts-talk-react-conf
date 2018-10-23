import React from 'react'
import { Image } from 'spectacle'

import WalkableSlide from '../../components/WalkableSlide'
import notes from '../../notes'
import images from '../../images'
import posed from 'react-pose'

const ApiImage = posed.div({
	default: {
		scale: 1,
		x: 0,
		transition: {
			duration: 500,
		},
	},
	zoom: {
		scale: 2.8,
		x: 500,
		transition: {
			duration: 500,
		},
	},
})

const RageImage = posed.div({
	default: {
		opacity: 0,
		scale: 1,
		transition: {
			duration: 500,
		},
	},
	zoom: {
		opacity: 0.2,
		scale: 1.6,
		transition: {
			duration: 500,
		},
	},
})

const rageStyle = { position: 'absolute', top: 0, left: 0 }

export default (
	<WalkableSlide
		transition={['fade']}
		numSteps={3}
		notes={notes.barchartapi}
		key="contrived_api"
		renderContent={step => (
			<>
				<ApiImage pose={step >= 1 ? 'zoom' : 'default'}>
					<Image src={images.barchartapi} fill />
				</ApiImage>
				<RageImage pose={step >= 2 ? 'zoom' : 'default'} style={rageStyle}>
					<Image src={images.rage} fill />
				</RageImage>
			</>
		)}
	>
		<Image src={images.barchartapi} />
	</WalkableSlide>
)
