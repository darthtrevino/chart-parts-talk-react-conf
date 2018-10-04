import React from 'react'
import posed from 'react-pose'
import { Heading } from 'spectacle'
import WalkableSlide from '../../components/WalkableSlide'
import notes from '../../notes'
import { palette } from '../../theme'

const transition = {
	duration: 500,
}

const LeftBlock = posed.div({
	hidden: {
		rotate: -180,
		x: -100,
		opacity: 0,
		transition,
	},
	visible: {
		rotate: 0,
		x: 0,
		opacity: 1,
		transition,
	},
})

const RightBlock = posed.div({
	hidden: {
		rotate: 180,
		x: 100,
		opacity: 0,
		transition,
	},
	visible: {
		rotate: 0,
		x: 0,
		opacity: 1,
		transition,
	},
})

const CenterBlock = posed.div({
	hidden: {
		scale: 3,
		opacity: 0,
		transition: {
			...transition,
			type: 'spring',
			stiffness: 60,
		},
	},
	visible: {
		scale: 1,
		opacity: 1,
		transition: {
			...transition,
			type: 'spring',
			stiffness: 60,
		},
	},
})

const blockStyle = {
	backgroundColor: palette.crimson,
	height: 300,
	width: 250,
	display: 'flex',
	alignItems: 'center',
	borderRadius: 15,
}

const containerStyle = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginTop: 30,
}

const centerStyle = {
	color: palette.crimson,
	display: 'flex',
	flex: 1,
	fontSize: 120,
	fontWeight: 'bold',
	alignItems: 'center',
	justifyContent: 'center',
}

export default (
	<WalkableSlide
		notes={notes.missingAbstraction}
		key="theory_ma"
		numSteps={4}
		renderContent={step => {
			const rightPoses = ['hidden', 'visible', 'visible', 'visible']
			const leftPoses = ['hidden', 'hidden', 'visible', 'visible']
			const centerPoses = ['hidden', 'hidden', 'hidden', 'visible']
			return (
				<div>
					<Heading size={1} caps fit textColor="pcontrast">
						The Missing Abstraction
					</Heading>
					<div style={containerStyle}>
						<LeftBlock pose={leftPoses[step]} style={blockStyle}>
							Low-Level 2D APIs
						</LeftBlock>
						<CenterBlock pose={centerPoses[step]} style={centerStyle}>
							?
						</CenterBlock>
						<RightBlock pose={rightPoses[step]} style={blockStyle}>
							High-Level Charting APIs
						</RightBlock>
					</div>
				</div>
			)
		}}
	/>
)
