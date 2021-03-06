import React from 'react'
import posed from 'react-pose'

import { Slide, Image, Code } from 'spectacle'

import WalkableSlide from '../../components/WalkableSlide'
import notes from '../../notes'
import images from '../../images'

const NpmSearchImage = posed.div({
	hidden: {
		scale: 1,
		opacity: 0,
		x: 500,
		transition: {
			duration: 100,
		},
	},
	visible: {
		scale: 1,
		x: 0,
		opacity: 1,
		transition: {
			duration: 500,
		},
	},
	zoom: {
		scale: 2.8,
		x: 500,
		opacity: 1,
		transition: {
			duration: 500,
		},
	},
})

const ApiImage = posed.div({
	hidden: {
		opacity: 0,
		scale: 1,
		x: 500,
		transition: {
			duration: 100,
		},
	},
	visible: {
		scale: 1,
		x: 0,
		opacity: 1,
		transition: {
			duration: 500,
		},
	},
	zoom: {
		scale: 2.8,
		x: 500,
		opacity: 1,
		transition: {
			duration: 500,
		},
	},
})

const CodePlacer = posed.div({
	hidden: {
		opacity: 0,
		scale: 1,
		y: 500,
	},
	visible: {
		scale: 1,
		y: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			duration: 1200,
		},
	},
})

const npmSearchStyle = { position: 'absolute', bottom: -130, left: 0 }
const apiImageStyle = { position: 'absolute', bottom: -220, left: 0 }

//<Slide notes={notes.yarninstall} key="contrived_yi" transition={['flip']}>

export default (
	<WalkableSlide
		notes={notes.npmsearch}
		key="contrived_npmsearch"
		numSteps={6}
		renderContent={step => {
			const barchartSteps = [
				'visible',
				'hidden',
				'hidden',
				'hidden',
				'hidden',
				'hidden',
			]
			const searchImageStates = [
				'hidden',
				'visible',
				'zoom',
				'hidden',
				'hidden',
				'hidden',
			]
			const apiImageStates = [
				'hidden',
				'hidden',
				'hidden',
				'visible',
				'zoom',
				'hidden',
			]
			const codePlacerStates = [
				'hidden',
				'hidden',
				'hidden',
				'hidden',
				'hidden',
				'visible',
			]
			return (
				<>
					<NpmSearchImage style={npmSearchStyle} pose={barchartSteps[step]}>
						<Image src={images.barChart} fill height={500} />
					</NpmSearchImage>
					<NpmSearchImage style={npmSearchStyle} pose={searchImageStates[step]}>
						<Image src={images.npmsearch} fill />
					</NpmSearchImage>
					<ApiImage style={apiImageStyle} pose={apiImageStates[step]}>
						<Image src={images.barchartapi} fill />
					</ApiImage>
					<CodePlacer pose={codePlacerStates[step]}>
						<Code textColor="yello" language="sh">
							> yarn install fancy-charts
						</Code>
					</CodePlacer>
					,
				</>
			)
		}}
	/>
)
