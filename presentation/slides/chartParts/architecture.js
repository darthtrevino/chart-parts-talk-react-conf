import React from 'react'
import { Slide, Image, Text, Fill } from 'spectacle'
import posed from 'react-pose'

import notes from '../../notes'
import images from '../../images'
import { palette } from '../../theme'

import WalkableSlide from '../../components/WalkableSlide'

const transition = {
	duration: 500,
}

const containerStyle = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginTop: 30,
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
	faded: {
		x: 0,
		opacity: 0.2,
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
	faded: {
		x: 0,
		opacity: 0.2,
		transition,
	},
})

const CenterBlock = posed.div({
	hidden: {
		y: 200,
		opacity: 0,
		transition,
		containerStyle,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition,
	},
})

const arrowStyle = {
	borderRight: '5px solid',
	borderBottom: '5px solid',
	height: 20,
	width: 20,
	transform: 'rotate(-45deg)',
	marginRight: 10,
}

const Arrow = posed.div({
	visible: {
		opacity: 1,
		transition: {
			duration: 1000,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			duration: 1000,
		},
	},
})

const blockStyle = {
	backgroundColor: palette.crimson,
	height: 150,
	width: 150,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	borderRadius: 15,
	fontSize: 20,
}

export default (
	<WalkableSlide
		key="chart_parts_architecture"
		notes={notes.chartPartsArchitecture}
		numSteps={4}
		renderContent={step => {
			const visibleAt = index => (step >= index ? 'visible' : 'hidden')
			const visFadeAt = index => {
				if (step === 3) {
					return 'faded'
				} else {
					return visibleAt(index)
				}
			}
			return (
				<div>
					<div style={containerStyle}>
						<LeftBlock pose={visFadeAt(2)} style={blockStyle}>
							React Renderless
						</LeftBlock>
						<Arrow pose={visibleAt(2)} style={arrowStyle} />
						<LeftBlock pose={visibleAt(2)} style={blockStyle}>
							Scene Builder
						</LeftBlock>
						<Arrow pose={visibleAt(2)} style={arrowStyle} />
						<CenterBlock pose={'visible'} style={blockStyle}>
							Abstract Scenegraph
						</CenterBlock>
						<Arrow pose={visibleAt(1)} style={arrowStyle} />
						<RightBlock pose={visibleAt(1)} style={blockStyle}>
							Virtual SVG
						</RightBlock>
						<Arrow pose={visibleAt(1)} style={arrowStyle} />
						<RightBlock pose={visFadeAt(1)} style={blockStyle}>
							React-DOM
						</RightBlock>
					</div>
				</div>
			)
		}}
	/>
)
