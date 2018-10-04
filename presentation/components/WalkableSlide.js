import React from 'react'
import { Slide, Anim } from 'spectacle'

const containerStyle = { width: '100%', height: '100%' }

export default class WalkableSlide extends React.Component {
	state = { animIndex: -1 }

	render() {
		const { numSteps, renderContent, notes, ...rest } = this.props
		const { animIndex } = this.state

		const targets = []
		for (let i = 1; i < numSteps; ++i) {
			targets.push({})
		}

		let content = null
		try {
			content = renderContent(animIndex + 1, numSteps)
		} catch (err) {
			console.log('error rendering content', err)
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
					<div style={containerStyle}>{content}</div>
				</Anim>
			</Slide>
		)
	}
}
