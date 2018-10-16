import React from 'react'
import { Layout, Fill, Heading, Image, Text } from 'spectacle'
import posed from 'react-pose'
import WalkableSlide from '../../components/WalkableSlide'
import notes from '../../notes'
import images from '../../images'
import { palette } from '../../theme'

const transition = {
	duration: 300,
}

const visible = {
	opacity: 1,
	transition,
	x: 0,
	y: 0,
}

const LeftPlacer = posed.div({
	visible,
	hidden: {
		opacity: 0,
		x: -500,
		y: 500,
		transition,
	},
	dissolved: {
		opacity: 0,
		transition: { duration: 50 },
	},
})
const CenterPlacer = posed.div({
	visible,
	hidden: {
		opacity: 0,
		x: 0,
		y: 500,
		transition,
	},
	dissolved: {
		opacity: 0,
		transition: { duration: 100 },
	},
})
const RightPlacer = posed.div({
	visible,
	hidden: {
		opacity: 0,
		x: 500,
		y: 500,
		transition,
	},
	dissolved: {
		opacity: 0,
		transition: { duration: 100 },
	},
})

const SlideUpTray = posed.div({
	hidden: {
		opacity: 0,
		y: 500,
		transition: {
			duration: 500,
		},
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 500,
		},
	},
})

const imageStyle = { margin: 8 }
const headingStyle = { fontWeight: 100 }
const slideUpTrayStyle = {
	position: 'absolute',
	bottom: 0,
	display: 'flex',
	justifyContent: 'space-around',
	width: '100%',
}

const victoryBoxStyle = {
	backgroundColor: palette.crimson,
	height: 100,
	width: 250,
	borderRadius: 10,
	margin: 8,
	alignItems: 'center',
	justifyContent: 'center',
	display: 'flex'
}

const boxColumnContainerStyle = {
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center'
}

export default (
	<WalkableSlide
		key="taxonomic"
		notes={notes.composableLibrariesTaxonomic}
		numSteps={9}
		transition={['fade']}
		renderContent={step => {
			const poseForStep = index => {
				return step >= 3 ? 'dissolved' : step < index ? 'hidden' : 'visible'
			}
			return (
				<Fill>
					<Text textSize={50} textColor="secondary" style={headingStyle}>
						Taxonomic
					</Text>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							flex: 1,
						}}
					>
						<LeftPlacer pose={poseForStep(1)} style={imageStyle}>
							<Image src={images.skeletonArmy} height={300} />
						</LeftPlacer>
						<CenterPlacer
							pose={poseForStep(2)}
							style={{ display: 'flex', alignItems: 'center' }}
						>
							<Text textSize={50} textColor="secondary" style={headingStyle}>
								vs
							</Text>
						</CenterPlacer>
						<RightPlacer pose={poseForStep(2)} style={imageStyle}>
							<Image src={images.bones} height={300} />
						</RightPlacer>
					</div>
					<SlideUpTray
						pose={step === 3 ? 'visible' : 'hidden'}
						style={slideUpTrayStyle}
					>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<Image src={images.victoryApi} height={360} />
						</div>
					</SlideUpTray>
					<SlideUpTray
						pose={step === 4 ? 'visible' : 'hidden'}
						style={slideUpTrayStyle}
					>
						<div style={{ display: 'flex' }}>
							<div style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								marginRight: 25,
							}}>
								<Text textSize={35} textColor="secondary">Victory</Text>
							</div>
							<div style={boxColumnContainerStyle}>
								<div style={victoryBoxStyle}>Taxonomic Charts</div>
								<div style={victoryBoxStyle}>Simple Components</div>
								<div style={victoryBoxStyle}>Draw Primitives</div>
							</div>
						</div>
					</SlideUpTray>
					<SlideUpTray
						pose={step === 5 ? 'visible' : 'hidden'}
						style={slideUpTrayStyle}
					>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<Image src={images.reactVisApi} height={360} />
						</div>
					</SlideUpTray>
					<SlideUpTray
						pose={step === 6 ? 'visible' : 'hidden'}
						style={slideUpTrayStyle}
					>
						<div style={{ display: 'flex' }}>
							<div style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								marginRight: 25,
								height: 320,
							}}>
								<Text textSize={35} textColor="secondary">React-Vis</Text>
							</div>
							<div style={boxColumnContainerStyle}>
								<div style={victoryBoxStyle}>Mark-Series Components</div>
							</div>
						</div>
					</SlideUpTray>
					<SlideUpTray
						pose={step === 7 ? 'visible' : 'hidden'}
						style={slideUpTrayStyle}
					>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<Image src={images.rechartsTaxonomical} height={360} />
						</div>
					</SlideUpTray>
					<SlideUpTray
						pose={step === 8 ? 'visible' : 'hidden'}
						style={slideUpTrayStyle}
					>
						<div style={{ display: 'flex' }}>
							<div style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								marginRight: 25,
								height: 320,
							}}>
								<Text textSize={35} textColor="secondary">Recharts</Text>
							</div>
							<div style={boxColumnContainerStyle}>
								<div style={victoryBoxStyle}>Taxonomical Containers</div>
								<div style={victoryBoxStyle}>Legal Children</div>
							</div>
						</div>
					</SlideUpTray>
				</Fill >
			)
		}}
	/>
)
