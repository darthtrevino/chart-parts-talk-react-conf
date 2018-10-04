// Import React
import React from 'react'
import { Slide, Layout, Fill, Text } from 'spectacle'
import notes from '../notes'
import images from '../images'

export default (
	<Slide notes={notes.slide1} fill key="front">
		<Fill>
			<Text textSize={60} textColor="secondary" style={{ fontWeight: 200 }}>
				The Missing Abstraction
			</Text>
			<Text textSize={60} textColor="secondary">
				of Charting
			</Text>
		</Fill>
		<Layout fit style={{ marginTop: 10 }}>
			<Text
				textSize={30}
				fill
				lineHeight={1}
				textColor="crimson"
				fontWeight={200}
				style={{ textAlign: 'start' }}
			>
				Chris Trevino - Microsoft
			</Text>
		</Layout>
	</Slide>
)
