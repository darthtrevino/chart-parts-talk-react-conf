import React from 'react'
import { Text, Fill } from 'spectacle'
import posed from 'react-pose'
import WalkableSlide from './WalkableSlide'

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

export default ({ text, sub, ...props }) => (
	<WalkableSlide
		numSteps={2}
		{...props}
		renderContent={index => (
			<Fill>
				<Text
					textSize={60}
					textColor="secondary"
					style={{ fontWeight: 200, textAlign: 'start' }}
				>
					{text}
				</Text>
				<Subtext pose={index === 0 ? 'hidden' : 'visible'}>
					<Text
						textSize={50}
						textColor="crimson"
						style={{ fontWeight: 200, textAlign: 'start' }}
					>
						{sub}
					</Text>
				</Subtext>
			</Fill>
		)}
	/>
)
