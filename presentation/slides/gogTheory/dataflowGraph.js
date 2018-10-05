import React from 'react'
import { Slide, Image, Text } from 'spectacle'

import WalkableSlide from '../../components/WalkableSlide'
import { palette } from '../../theme'
import images from '../../images'
import notes from '../../notes'

export default (
	<WalkableSlide
		key="lessons-dataflow"
		notes={notes.dataflowProblem}
		numSteps={2}
		renderContent={step => {
			return (
				<div>
					<Text textSize={50} textColor="secondary" fontWeight={200}>
						Reactive Data Flows
					</Text>
					<Image src={images.dataflow} />
				</div>
			)
		}}
	/>
)
