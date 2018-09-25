import React from 'react'
import { Slide, Heading } from 'spectacle'
import images from '../images'
import notes from '../notes'

export default [
	<Slide
		transition={['fade']}
		bgImage={images.visualSurvey}
		notes={notes.uiwork}
		key={'chartsimportant1'}
	/>,
	<Slide
		notes={notes.uiemphasis}
		transition={['fade']}
		bgImage={images.visualSurvey}
		bgDarken={0.8}
		key={'chartsimportant2'}
	>
		<Heading fill textColor="pcontrast">
			Visualization is how we communicate complex data
		</Heading>
	</Slide>,
	<Slide notes={notes.charting} key={'chartsimportant3'}>
		TODO: Include common chart types, slide through them
	</Slide>,
]
