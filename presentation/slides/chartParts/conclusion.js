import React from 'react'
import { Heading, Slide, Text } from 'spectacle'
import images from '../../images'
import notes from '../../notes'

export default (
	<Slide
		key="showcase_conclusion"
		notes={notes.conclusion}
		bgImage={images.dealWithIt}
	>
		<div style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
			<Heading size={2} textColor="pcontrast">
				That's all Folks!
			</Heading>
			<Text textColor="yello">github.com/Microsoft/chart-parts</Text>
			<Text textColor="yello">twitter.com/darthtrevino</Text>
		</div>
	</Slide>
)
