import React from 'react'
import { Slide, Anim } from 'spectacle'

export default class WalkableSlide extends React.Component {
	state = { animIndex: -1 }

	render() {
		const { numSteps, renderContent, notes, ...rest } = this.props
		const { animIndex } = this.state

		const targets = []
		for (let i = 1; i < numSteps; ++i) {
			targets.push({})
		}
		return (
			<Slide notes={notes} {...rest}>
				<Anim
					fromStyle={{}}
					toStyle={targets}
					easing="quadInOut"
					transitionDuration={0}
					onAnim={(forwards, animIndex) => this.setState({ animIndex })}
				>
					<div style={{ width: '100%', height: '100%' }}>
						{renderContent(animIndex + 1, numSteps)}
					</div>
				</Anim>
			</Slide>
		)
	}
}
