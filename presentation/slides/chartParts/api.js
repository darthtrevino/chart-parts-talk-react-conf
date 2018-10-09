import React from 'react'
import { Slide, Text, Image, List, ListItem, Appear } from 'spectacle'

import notes from '../../notes'
import images from '../../images'

export default (
	<Slide
		key="showcase_api"
		notes={notes.chartPartsArchitectureBackend}
		transition={['fade']}
	>
		<Text textColor="crimson" style={{ fontWeight: 200 }}>
			API Components
		</Text>
		<List>
			<Appear>
				<ListItem>Scales</ListItem>
			</Appear>
			<Appear>
				<ListItem>View Marks</ListItem>
			</Appear>
			<Appear>
				<ListItem>Axes</ListItem>
			</Appear>
			<Appear>
				<ListItem>Groups</ListItem>
			</Appear>
		</List>
	</Slide>
)
