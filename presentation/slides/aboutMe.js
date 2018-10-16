import React from 'react'
import { Layout, Image, Heading, Fill, List, ListItem } from 'spectacle'
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
										style={{ marginLeft: 47 }}
									>
										@darthtrevino
									</PosedText>
								</HiImWrapper>
							</Heading>
						</Fill>
					</Fill>
					<Fill>
						<List>
							<ListItemPosed pose={animIndex >= 1 ? 'visible' : 'hidden'}>
								MSR Silverdale
							</ListItemPosed>
							<ListItemPosed pose={animIndex >= 1 ? 'visible' : 'hidden'}>
								JavaScript Convert
							</ListItemPosed>
							<ListItemPosed pose={animIndex >= 1 ? 'visible' : 'hidden'}>
								🚴‍ 🌮 🍺
							</ListItemPosed>
						</List>
					</Fill>
				</Layout>
			</SlideZoom>
		)}
	/>
)

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

const PoseableListItem = ({ hostRef, children }) => (
	<div ref={hostRef}>
		<ListItem>{children}</ListItem>
	</div>
)

const PoseableSildeZoom = ({ hostRef, children }) => (
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

const SlideZoom = posed(PoseableSildeZoom)({
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
