import React from 'react'
import posed from 'react-pose'
import { Text } from 'spectacle'

import WalkableSlide from '../../components/WalkableSlide'
import notes from '../../notes'
import { palette } from '../../theme'

const transition = {
	duration: 500,
}

const LeftBlock = posed.div({
	hidden: {
		x: -100,
		opacity: 0,
		transition,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition,
	},
})

const RightBlock = posed.div({
	hidden: {
		x: 100,
		opacity: 0,
		transition,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition,
	},
})

const CenterBlock = posed.div({
	hidden: {
		y: 200,
		opacity: 0,
		transition,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition,
	},
})

const ElementTypeBlock = posed.div({
	hidden: {
		opacity: 0,
		transition,
	},
	visible: {
		opacity: 1,
		transition,
	},
})

const containerStyle = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginTop: 30,
}

const arrowStyle = {
	borderRight: '10px solid',
	borderBottom: '10px solid',
	height: 30,
	width: 30,
	transform: 'rotate(-45deg)',
}

const Arrow = posed.div({
	visible: {
		opacity: 1,
	},
	hidden: {
		opacity: 0,
	},
})

export default (
	<WalkableSlide
		notes={notes.gogPhases}
		key="phases_of_gog"
		numSteps={4}
		renderContent={step => {
			const rightPoses = ['hidden', 'hidden', 'hidden', 'visible']
			const leftPoses = ['hidden', 'visible', 'visible', 'visible']
			const centerPoses = ['hidden', 'hidden', 'visible', 'visible']
			return (
				<div>
					<Text textSize={50} textColor="secondary">
						Phases of the{' '}
						<span style={{ color: step === 0 ? undefined : palette.crimson }}>
							Grammar of Graphics
						</span>
					</Text>
					<div style={containerStyle}>
						<LeftBlock pose={leftPoses[step]} style={blockStyle}>
							Specification Components
						</LeftBlock>
						<Arrow pose={centerPoses[step]} style={arrowStyle} />
						<CenterBlock
							pose={centerPoses[step]}
							textColor="highlight"
							style={blockStyle}
						>
							Scenegraph Generation
						</CenterBlock>
						<Arrow pose={rightPoses[step]} style={arrowStyle} />
						<RightBlock
							pose={rightPoses[step]}
							textColor="highlight"
							style={blockStyle}
						>
							Rendering
						</RightBlock>
					</div>
					<ElementTypeBlock
						pose={step >= 1 ? 'visible' : 'hidden'}
						style={{ textAlign: 'start', marginTop: 5 }}
					>
						<Text textColor="yello" textSize={25}>
							Data, Trans, Scale
						</Text>
						<Text textColor="yello" textSize={25}>
							Coord, Element, Guide
						</Text>
					</ElementTypeBlock>
				</div>
			)
		}}
	/>
)

const blockStyle = {
	backgroundColor: palette.crimson,
	height: 300,
	width: 250,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	borderRadius: 15,
}
