import React from 'react'
import { Slide, Image } from 'spectacle'
import notes from '../../notes'
import images from '../../images'

export default (
	<Slide notes={notes.barchartwithmean} key="contrived_wmean">
		<Image src={images.barchartwithmean} />
	</Slide>
)
