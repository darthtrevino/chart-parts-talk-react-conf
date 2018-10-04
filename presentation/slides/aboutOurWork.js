import React from 'react'
import { Slide, Image, Layout, Fill, Appear } from 'spectacle'
import notes from '../notes'
import images from '../images'
import WalkableSlide from '../components/WalkableSlide'

import posed from 'react-pose'

export default (
	<WalkableSlide
		notes={notes.ourwork}
		key="ourwork"
		numSteps={5}
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
			return (
				<Layout>
					<Fill>
						<Positioned pose={poseForStep(1)}>
							<Image fill src={images.narcissism} height={325} />
						</Positioned>
						<Positioned pose={poseForStep(2)}>
							<Image fill src={images.network} height={325} />
						</Positioned>
					</Fill>
					<Fill>
						<Positioned pose={poseForStep(3)}>
							<Image fill src={images.dcu} height={300} />
						</Positioned>
						<Positioned pose={poseForStep(4)}>
							<Image fill src={images.healthcare} height={325} />
						</Positioned>
					</Fill>
				</Layout>
			)
		}}
	/>
)

const Positioned = posed.div({
	final: {
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
		scale: 5,
		opacity: 0,
		zIndex: 2,
		transition: {
			duration: 500,
		},
	},
})
