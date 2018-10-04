import React from 'react'
import { Text, Fill } from 'spectacle'
import posed from 'react-pose'
import WalkableSlide from '../../components/WalkableSlide'
import notes from '../../notes'

const Subtext = posed.div({
	visible: {
		opacity: 1,
		transition: {
			duration: 500,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			duration: 500,
		},
	},
})

export default (
	<WalkableSlide
		numSteps={2}
		notes={notes.stepsForUsingNewLibrary}
		key="contrived_steps"
		renderContent={index => (
			<Fill>
				<Text
					textSize={60}
					textColor="secondary"
					style={{ fontWeight: 200, textAlign: 'start' }}
				>
					Steps for using
				</Text>
				<Text
					textSize={60}
					textColor="secondary"
					style={{ fontWeight: 200, textAlign: 'start' }}
				>
					a new charting library
				</Text>
				<Subtext pose={index === 0 ? 'hidden' : 'visible'}>
					<Text
						textSize={40}
						textColor="crimson"
						style={{ fontWeight: 200, textAlign: 'start' }}
					>
						a slightly contrived problem
					</Text>
				</Subtext>
			</Fill>
		)}
	/>
)
