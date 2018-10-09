import React from 'react'
import { Slide, Text, Fill } from 'spectacle'
import notes from '../../notes'

const textStyle = { fontWeight: 200, textAlign: 'start' }

export default (
	<Slide
		notes={notes.composableLibraryIssues}
		key="contrived_steps"
		transition={['fade']}
	>
		<Fill>
			<Text textSize={60} textColor="secondary" style={textStyle}>
				What are some common issues with these libraries?
			</Text>
		</Fill>
	</Slide>
)
