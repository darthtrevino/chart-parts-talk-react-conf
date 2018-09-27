// Import React
import React from 'react'
import { Heading, Slide, Layout } from 'spectacle'
import notes from '../notes'

export default (
	<Slide
		transition={['zoom']}
		bgColor="primary"
		notes={notes.slide1}
		fill
		key="front"
	>
		<Heading size={2} fit caps lineHeight={1}>
			The Missing
		</Heading>
		<Heading
			caps
			fill
			size={1}
			lineHeight={1.3}
			style={{
				background: '-webkit-linear-gradient(#eee, #222)',
				['-webkit-background-clip']: 'text',
				['-webkit-text-fill-color']: 'transparent',
			}}
		>
			Abstraction
		</Heading>
		<Heading caps fit size={3} textColor="pcontrast" lineHeight={1}>
			of Charting
		</Heading>
		<Layout fit>
			<Heading size={4} fill lineHeight={1} textColor="highlight">
				Chris Trevino
			</Heading>
			<Heading size={4} fill lineHeight={1} textColor="highlight">
				Microsoft
			</Heading>
		</Layout>
	</Slide>
)
