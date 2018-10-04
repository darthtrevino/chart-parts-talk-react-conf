import React from 'react'
import { Heading, ListItem, List, Slide, Appear, Text } from 'spectacle'

import images from '../../images'
import notes from '../../notes'

export default (
	<Slide notes={notes.gogPhases} key="phases_of_gog">
		<Heading size={6} caps textColor="secondary">
			Phases of the Grammar of Graphics
		</Heading>
		<List>
			<Appear>
				<ListItem textColor="highlight" textSize={55}>
					Specification Components
					<Text textColor="yello" textSize={25} style={{ marginLeft: 60 }}>
						Data, Trans, Scale, Coord, Element, Guide
					</Text>
				</ListItem>
			</Appear>
			<Appear>
				<ListItem textSize={55} textColor="highlight">
					Scenegraph Generation
				</ListItem>
			</Appear>
			<Appear>
				<ListItem textSize={55} textColor="highlight">
					Rendering
				</ListItem>
			</Appear>
		</List>
	</Slide>
)
