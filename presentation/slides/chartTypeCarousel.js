import React from 'react'
import { Slide, Anim, Text, Image } from 'spectacle'
import WalkableSlide from '../components/WalkableSlide'
import posed from 'react-pose'

import notes from '../notes'
import images from '../images'

const Stacked = posed.div({
	final: {
		rotate: ({ rotation }) => rotation,
		scale: 1,
		opacity: 1,
		zIndex: 0,
		transition: {
			delay: 150,
			duration: 500,
		},
	},
	highlighted: {
		rotate: 0,
		scale: 1,
		opacity: 1,
		zIndex: 1,
		transition: {
			duration: 500,
		},
	},
	initial: {
		rotate: ({ rotation }) => rotation,
		scale: 5,
		opacity: 0,
		zIndex: 2,
		transition: {
			duration: 500,
		},
	},
})

const imagePos = {
	position: 'absolute',
	right: 100,
	top: -100,
	backgroundColor: 'white',
	boxShadow: '3px 3px #444',
}
function poseForStep(index) {}
export default (
	<WalkableSlide
		key="chart_carousel"
		notes={notes.charting}
		numSteps={7}
		renderContent={step => {
			const poseForStep = index => {
				if (index === step) {
					return 'highlighted'
				} else if (index < step) {
					return 'final'
				} else {
					return 'initial'
				}
			}

			return [
				<Stacked rotation={-30} pose={poseForStep(1)} style={imagePos}>
					<Image src={images.barChart} height={400} />
				</Stacked>,
				<Stacked rotation={30} pose={poseForStep(2)} style={imagePos}>
					<Image src={images.lineChart} height={400} />
				</Stacked>,
				<Stacked rotation={10} pose={poseForStep(3)} style={imagePos}>
					<Image src={images.pieChart} height={400} />
				</Stacked>,
				<Stacked rotation={15} pose={poseForStep(4)} style={imagePos}>
					<Image src={images.areaChart} height={400} />
				</Stacked>,
				<Stacked rotation={12} pose={poseForStep(5)} style={imagePos}>
					<Image src={images.radarChart} height={400} />
				</Stacked>,
				<Stacked rotation={45} pose={poseForStep(6)} style={imagePos}>
					<Image src={images.boxPlots} height={400} />
				</Stacked>,
			]
		}}
	/>
)
