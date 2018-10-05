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
		notes={notes.gog}
		key="vega_front"
		renderContent={index => (
			<Fill>
				<Text
					textSize={60}
					textColor="secondary"
					style={{ fontWeight: 200, textAlign: 'start' }}
				>
					What implementations of the Grammar of Graphics exist?
				</Text>
				<Subtext pose={index === 0 ? 'hidden' : 'visible'}>
					<Text
						textSize={40}
						textColor="crimson"
						style={{ fontWeight: 200, textAlign: 'start' }}
					>
						in Javascript?
					</Text>
				</Subtext>
			</Fill>
		)}
	/>
)
