import React from 'react'
import { Slide, Image, Text } from 'spectacle'

import notes from '../../notes'
import images from '../../images'

export default (
	<Slide
		key="showcase_architecture_be"
		notes={notes.chartPartsArchitectureBackend}
		transition={['fade']}
	>
		<Image src={images.backendArchitecture} />
	</Slide>
)

// <Slide
// 	key="showcase_architecture_fe"
// 	notes={notes.chartPartsArchitectureFrontend}
// 	transition={['fade']}
// >
// 	<Image src={images.frontendArchitecture} />
// </Slide>,
// <Slide
// 	key="showcase_architecture_dropout"
// 	notes={notes.chartPartsArchitectureDropout}
// 	transition={['fade']}
// >
// 	<Image src={images.dropout} />
// </Slide>,
