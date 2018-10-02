import React from 'react'
import { Heading, Slide } from 'spectacle'

import notes from '../../notes'
import images from '../../images'

export default (
	<Slide
		transition={['fade']}
		key="survey_whatimpls"
		notes={notes.gogImpls}
		bgImage={images.hauntedHouseBG}
	>
		<Heading caps size={4} textColor="pcontrast" fill>
			Grammar of Graphics
		</Heading>
		<Heading caps size={3} fill textColor="secondary">
			Implementations
		</Heading>
	</Slide>
)
