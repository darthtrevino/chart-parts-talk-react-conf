import React from 'react'
import posed from 'react-pose'
import { Slide, Image, Text } from 'spectacle'

import images from '../../images'
import notes from '../../notes'
import WalkableSlide from '../../components/WalkableSlide'

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
					{step === 0 ? (
						<Image src={images.dataflow} height={500} />
					) : (
						<Image src={images.dataflow2} height={500} />
					)}
				</div>
			)
		}}
	/>
)
