import React from 'react'
import {
	Anim,
	Heading,
	ListItem,
	List,
	Slide,
	Appear,
	Image,
	Layout,
	Fill,
} from 'spectacle'

import images from '../images'
import notes from '../notes'

export default (animIndex, setAnimIndex) => [
	<Slide notes={notes.missingAbstraction} key="theory_ma">
		<Heading size={1} caps fit textColor="pcontrast">
			The Missing Abstraction
		</Heading>
		<Appear>
			<Image src={images.missingAbstraction} />
		</Appear>
	</Slide>,
	<Slide transition={['fade']} notes={notes.gog} key="gog_walk">
		<Anim
			onAnim={(forwards, animIndex) => setAnimIndex(animIndex)}
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
				{},
				{},
				{},
				{},
			]}
			easing={'bounceOut'}
			transitionDuration={500}
		>
			<div style={{ width: '100%', height: '100%' }}>
				{getGogSlideContent(animIndex)}
			</div>
		</Anim>
	</Slide>,
]

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
		return gogSlideCarouselItem(
			<Fill style={{ marginTop: 100 }}>
				<Heading fit caps textColor="highlight">
					A system of charting components
				</Heading>
				<List>
					<ListItem textSize={35} textColor="yello">
						data transformation
					</ListItem>
					<ListItem textSize={35} textColor="yello">
						scaling
					</ListItem>
					<ListItem textSize={35} textColor="yello">
						coordinate systems
					</ListItem>
					<ListItem textSize={35} textColor="yello">
						shapes
					</ListItem>
					<ListItem textSize={35} textColor="yello">
						axes
					</ListItem>
					<ListItem textSize={35} textColor="yello">
						legends
					</ListItem>
				</List>
			</Fill>,
		)
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
