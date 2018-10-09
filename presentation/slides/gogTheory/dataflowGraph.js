import React from 'react'
import posed from 'react-pose'
import { Slide, Image, Text } from 'spectacle'

import images from '../../images'
import notes from '../../notes'
import WalkableSlide from '../../components/WalkableSlide'

export default (
	<WalkableSlide
		key="dataflow_graph"
		notes={notes.dataflowProblem}
		numSteps={3}
		renderContent={step => {
			return (
				<div>
					<Text textSize={50} textColor="secondary" fontWeight={200}>
						Reactive Data Flows
					</Text>
					{step === 1 ? (
						<Image src={images.dataflow} height={500} />
					) : step === 2 ? (
						<Image src={images.dataflow2} height={500} />
					) : (
						<div style={{ height: 500 }} />
					)}
				</div>
			)
		}}
	/>
)
