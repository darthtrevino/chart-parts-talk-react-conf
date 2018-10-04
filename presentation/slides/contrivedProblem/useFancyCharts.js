import React from 'react'
import { Heading, Slide, Image } from 'spectacle'
import notes from '../../notes'
import images from '../../images'

export default (
	<Slide
		key="cortrived_uselib_codepane"
		notes={notes.useFancyCharts}
		transition={['flip']}
	>
		<Heading size={3}>🙏</Heading>
		<Image src={images.fancyGif} height={500} fill />
	</Slide>
)
