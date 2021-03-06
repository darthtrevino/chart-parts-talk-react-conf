import React from 'react'
import posed from 'react-pose'
import { ListItem, List, Image, Layout, Fill, Text } from 'spectacle'
import WalkableSlide from '../../components/WalkableSlide'

import images from '../../images'
import notes from '../../notes'

const BookPlacer = posed.div({
	hidden: {
		opacity: 0,
		scale: 4,
		x: 400,
	},
	splash: {
		opacity: 1,
		scale: 1.5,
		x: 400,
		transition: {
			duration: 70,
			type: 'spring',
			stiffness: 100,
			damping: 70,
		},
	},
	side: {
		opacity: 1,
		scale: 1,
		x: 0,
		transition: {
			duration: 300,
			type: 'spring',
			stiffness: 80,
		},
	},
})

const Revealed = posed.div({
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 500,
		},
	},
	visible_slow: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 8000,
		},
	},
	hidden: {
		y: 0,
		opacity: 0,
		transition: {
			duration: 500,
		},
	},
	dissolved: {
		y: 1000,
		opacity: 0,
		transition: {
			duration: 500,
		},
	},
})

const SlideRevealed = posed.div({
	visible: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: {
			duration: 750,
		},
	},
	hidden: {
		opacity: 0,
		x: 500,
		y: 0,
		transition: {
			duration: 750,
		},
	},
	dissolved: {
		x: 0,
		y: 1000,
		opacity: 0,
		transition: {
			duration: 500,
		},
	},
})

export default (
	<WalkableSlide
		transition={['fade']}
		notes={notes.gogWalk}
		key="gog_walk"
		numSteps={12}
		renderContent={step => {
			const bookPose = () => {
				if (step === 0) {
					return 'hidden'
				} else if (step === 1) {
					return 'splash'
				} else {
					return 'side'
				}
			}

			const revealAt = (showIndex, hideIndex) => {
				if (step < showIndex) {
					return 'hidden'
				} else if (hideIndex != null && step >= hideIndex) {
					return 'dissolved'
				} else {
					return 'visible'
				}
			}

			return (
				<Layout>
					<BookPlacer pose={bookPose()} style={{ marginRight: 50 }}>
						<Image src={images.wilkinson} height={528} />
					</BookPlacer>
					<Fill style={{ marginTop: 100 }}>
						<Revealed pose={revealAt(2, 3)}>
							<Image src={images.analogy} />
						</Revealed>
						<div style={{ position: 'absolute', top: 80, right: 0 }}>
							<Revealed pose={revealAt(3, 4)}>
								<Image src={images.legoBricks} height={350} />
							</Revealed>
						</div>
						<div style={{ position: 'absolute', top: 40, flex: 1 }}>
							<Revealed pose={revealAt(4, 10)}>
								<Text textSize={30} textColor="crimson">
									A system of charting components
								</Text>
							</Revealed>
							<List>
								<ListItemPosed
									pose={revealAt(5, 10)}
									textSize={35}
									style={{ fontWeight: 200 }}
								>
									shapes
								</ListItemPosed>
								<ListItemPosed
									pose={revealAt(6, 10)}
									textSize={35}
									style={{ fontWeight: 200 }}
								>
									scales
								</ListItemPosed>
								<ListItemPosed
									pose={revealAt(7, 10)}
									textSize={35}
									style={{ fontWeight: 200 }}
								>
									coordinate systems
								</ListItemPosed>
								<SlideRevealed
									pose={revealAt(8, 10)}
									textSize={35}
									style={{ fontWeight: 200 }}
								>
									<ListItem textSize={35} textColor="secondary">
										axes
									</ListItem>
									<ListItem textSize={35} textColor="secondary">
										legends
									</ListItem>
								</SlideRevealed>
								<ListItemPosed
									pose={revealAt(9, 10)}
									textSize={35}
									style={{ fontWeight: 200 }}
								>
									data transformation
								</ListItemPosed>
							</List>
						</div>
						<div style={{ position: 'absolute', top: 80 }}>
							<Revealed pose={revealAt(10, 11)}>
								<Image src={images.markEncoding} />
							</Revealed>
						</div>
						<div style={{ position: 'absolute', top: 80 }}>
							<Revealed pose={step >= 11 ? 'visible_slow' : 'hidden'}>
								<Image src={images.reactLogo} />
							</Revealed>
						</div>
					</Fill>
				</Layout>
			)
		}}
	/>
)

const PoseableListItem = ({ hostRef, children, ...props }) => (
	<div ref={hostRef}>
		<ListItem {...props}>{children}</ListItem>
	</div>
)

const ListItemPosed = posed(PoseableListItem)({
	visible: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 750,
		},
	},
	hidden: {
		opacity: 0,
		x: 500,
		y: 0,
		transition: {
			duration: 750,
		},
	},
	dissolved: {
		y: 1000,
		opacity: 0,
		transition: {
			duration: 500,
		},
	},
})

/*
fromStyle={{
    opacity: 0,
    transform: 'translate3d(0px, -100px, 0px)  scale(1) rotate(0deg)',
}}
toStyle={[
    {
        opacity: 1,
        transform: 'translate3d(0px, -361px, 0px)  scale(0.4) rotate(0deg)',
    },
    {
        opacity: 1,
        transform: 'translate3d(-230px, -361px, 0px) scale(0.4) rotate(0deg)',
    },
    {
        opacity: 1,
        transform: 'translate3d(-230px, -361px, 0px) scale(0.4) rotate(0deg)',
    },
    {},
    {},
    {},
]}*/

function gogSlideCarouselItem(content) {
	return (
		<Layout>
			<Fill>
				<Image src={images.wilkinson} height={528} />
			</Fill>
			{content}
		</Layout>
	)
}
function getGogSlideContent(animIndex) {
	if (animIndex <= 1) {
		return <Image src={images.wilkinson} />
	} else if (animIndex === 2) {
		return gogSlideCarouselItem(
			<Fill style={{ marginTop: 100 }}>
				<Image src={images.analogy} />
			</Fill>,
		)
	} else if (animIndex === 3) {
		return gogSlideCarouselItem()
	} else if (animIndex === 4) {
		return gogSlideCarouselItem(
			<Fill style={{ marginTop: 70 }}>
				<Image src={images.markencoding} />
			</Fill>,
		)
	} else if (animIndex === 5) {
		return gogSlideCarouselItem(
			<Fill style={{ marginTop: 15 }}>
				<Image src={images.reactlogo} height={500} />
			</Fill>,
		)
	}
}
