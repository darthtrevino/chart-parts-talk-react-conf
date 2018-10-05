import React from 'react'
import { Slide, Text, Image } from 'spectacle'

import notes from '../../notes'
import images from '../../images'

export default (
	<Slide
		key="showcase_api"
		notes={notes.chartPartsArchitectureBackend}
		transition={['fade']}
	>
		<Text textColor="secondary" style={{ fontWeight: 200 }}>
			API Components
		</Text>
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
