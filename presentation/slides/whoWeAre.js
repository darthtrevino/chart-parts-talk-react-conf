import React from 'react'
import { Slide, Image, Heading } from 'spectacle'
import notes from '../notes'
import images from '../images'

export default [
	<Slide key="about_me" notes={notes.aboutMe}>
		<Image src={images.profile} height={500} />
		<Heading size={3} textColor="yello">
			it me
		</Heading>
	</Slide>,
	// <Slide transition={['fade']} notes={notes.mapMs} key="whoweare1">
	// 	<Image fill src={images.mapMs} />
	// </Slide>,
	// <Slide transition={['fade']} notes={notes.mapSilverdale} key="whoweare1">
	// 	<Image fill src={images.mapMsSilverdale} />
	// </Slide>,
	// <Slide notes={notes.bossman} key="whoweare1">
	// 	<Image fill src={images.chriswhite} />
	// </Slide>,
]
