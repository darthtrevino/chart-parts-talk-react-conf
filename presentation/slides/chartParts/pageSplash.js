import React from 'react'
import { Slide, Text } from 'spectacle'

import images from '../../images'
import notes from '../../notes'

export default (
	<Slide
		bgImage={images.chartPartsPage}
		key="showcase_chartparts_front"
		notes={notes.chartPartsPage}
		transition={['fade']}
	/>
)
