import React from 'react'
import { Heading, Slide, Text, Image } from 'spectacle'
import images from '../../images'
import notes from '../../notes'

export default (
	<Slide
		key="showcase_conclusion"
		notes={notes.conclusion}
		bgImage={images.dealWithIt}
	>
		<div style={{ backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center', display: 'flex', flex: 1, flexDirection: 'column' }}>
			<Heading size={2} textColor="pcontrast" style={{ marginTop: 30 }}>
				That's all Folks!
			</Heading>
			<Text textColor="yello">github.com/Microsoft/chart-parts</Text>
			<Text textColor="yello">@darthtrevino</Text>

			<div style={{ backgroundColor: 'white', marginTop: 30, marginBottom: 30 }}>
				<Image src={images.microsoft} height={100} style={{ margin: 10 }} />
			</div>
		</div>
	</Slide>
)
