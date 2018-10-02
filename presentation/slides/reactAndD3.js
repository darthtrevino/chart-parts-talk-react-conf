import React from 'react'
import notes from '../notes'
import images from '../images'
import { Slide, Heading, Text, Appear, Image, Layout, Fill } from 'spectacle'

export default [
	<Slide notes={notes.backtobasics} key="rd3_b2b">
		<Heading size={3} textColor="yello">
			Back to Basics
		</Heading>
		<Appear>
			<Image src={images.d3} />
		</Appear>
	</Slide>,

	<Slide notes={notes.react_and_d3} key="rd3_options">
		<Heading fit size={3} textColor="secondary">
			Using d3 and React
		</Heading>
		<Layout>
			<Fill style={{ padding: 10 }}>
				<Appear>
					<Text textColor="yello">Use React to wrap d3</Text>
				</Appear>
			</Fill>
			<Fill style={{ padding: 10 }}>
				<Appear>
					<Text textColor="highlight">Use d3 utils to author React dom</Text>
				</Appear>
			</Fill>
		</Layout>
	</Slide>,

	//TODO: Add slides about code examples using these techniques?
]
