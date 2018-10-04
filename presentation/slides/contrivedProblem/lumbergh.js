import React from 'react'
import { Slide } from 'spectacle'
import notes from '../../notes'
import images from '../../images'

export default (
	<Slide
		transition={['fade']}
		bgImage={images.lumbergh}
		notes={notes.lumbergh}
		key="contrived_lumbergh"
	/>
)
