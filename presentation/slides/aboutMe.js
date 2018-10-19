import React from 'react'
import { Layout, Image, Heading, Fill, List, ListItem, Text } from 'spectacle'
import { palette } from '../theme'
import WalkableSlide from '../components/WalkableSlide'

import notes from '../notes'
import images from '../images'
import posed from 'react-pose'

export default (
	<WalkableSlide
		key="about_me"
		numSteps={2}
		notes={notes.aboutMe}
		renderContent={animIndex => (
			<SlideZoom
				style={{ width: '100%', height: '100%' }}
				pose={animIndex === 0 ? 'highlight' : 'normal'}
			>
				<Layout>
					<Fill>
						<Fill>
							<Image src={images.profile} height={300} />
							<Heading
								size={4}
								textColor="secondary"
								style={{ fontWeight: 300 }}
								fit
							>
								<HiImWrapper pose={animIndex == 0 ? 'shifted' : 'normal'}>
									<div>
										<PosedText pose={animIndex === 0 ? 'visible' : 'hidden'}>
											Hi I'm&nbsp;
										</PosedText>
										<span style={{ color: palette.crimson }}>Chris</span>
										<PosedText
											pose={animIndex === 0 ? 'hidden' : 'visible'}
											style={{ color: palette.crimson }}
										>
											&nbsp;Trevino
										</PosedText>
									</div>
									<PosedText
										pose={animIndex === 0 ? 'hidden' : 'visible'}
										style={{ marginLeft: 47, }}
									>
										@darthtrevino
									</PosedText>
								</HiImWrapper>
							</Heading>
						</Fill>
					</Fill>
					<Fill>
						<List>
							<ListItemPosed pose={animIndex >= 1 ? 'visible' : 'hidden'} textSize={35}>
								Microsoft Research
								<Text textColor="crimson" textSize={30} style={{ marginLeft: 45 }}>Silverdale, WA</Text>
							</ListItemPosed>
							<ListItemPosed pose={animIndex >= 1 ? 'visible' : 'hidden'} style={{ marginTop: 20 }} textSize={35}>
								JavaScript Convert
							</ListItemPosed>
							<ListItemPosed pose={animIndex >= 1 ? 'visible' : 'hidden'} style={{ marginTop: 10 }}>
								<div style={{ display: 'inline-block' }}>
									<span style={{ display: 'flex', flexDirection: 'row' }}>
										🚴‍ 🌮 🍺
										<Image src={images.cougs} height={40} width={40} style={cougStyle} />
									</span>
								</div>
							</ListItemPosed>
						</List>
					</Fill>
				</Layout>
			</SlideZoom>
		)}
	/>
)

const cougStyle = { marginLeft: 8, marginTop: 0, marginRight: 0, marginBottom: 0 }

const HiImWrapper = posed.div({
	shifted: {
		x: 32,
		transition: {
			duration: 750,
		},
	},
	normal: {
		x: -25,
		transition: {
			duration: 750,
		},
	},
})
const PosedText = posed.span({
	visible: {
		opacity: 1,
		transition: {
			duration: 750,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			duration: 750,
		},
	},
})

const PoseableListItem = ({ hostRef, children, ...props }) => (
	<div ref={hostRef}>
		<ListItem {...props}>{children}</ListItem>
	</div>
)

const PosableSlideZoom = ({ hostRef, children }) => (
	<div ref={hostRef}>{children}</div>
)

const ListItemPosed = posed(PoseableListItem)({
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 750,
		},
	},
	hidden: {
		opacity: 0,
		x: 500,
		transition: {
			duration: 750,
		},
	},
})



const DivItemPosed = posed.div({
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 750,
		},
	},
	hidden: {
		opacity: 0,
		x: 500,
		transition: {
			duration: 750,
		},
	},
})

const SlideZoom = posed(PosableSlideZoom)({
	highlight: {
		scale: 1.5,
		x: 400,
		transition: {
			duration: 500,
		},
	},
	normal: {
		scale: 1,
		x: 0,
		transition: {
			duration: 500,
		},
	},
})
