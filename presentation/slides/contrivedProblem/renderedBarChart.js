import React from 'react'
import { Heading, Slide, Image } from 'spectacle'
import notes from '../../notes'
import images from '../../images'

export default (
	<Slide
		transition={['fade']}
		notes={notes.fancybarchartrendered}
		key="contrived_barchart"
	>
		<Heading size={3}>🙌 </Heading>
		<Image src={images.barchart2} height={500} fill />
	</Slide>
)
