import React from 'react'
import { Slide, Fill, Text, List, ListItem, Appear } from 'spectacle'
import notes from '../../notes'

const transition = {
	duration: 300,
	type: 'spring',
	stiffness: 100,
}

const visible = {
	opacity: 1,
	transition,
	x: 0,
	y: 0,
}

const headingStyle = { fontWeight: 100 }

export default (
	<Slide
		key="surv_candidate_showcase"
		notes={notes.composableLibraries}
		transition={['fade']}
	>
		<Text textSize={50} textColor="secondary" style={headingStyle}>
			DIY Dataflow
		</Text>
		<Appear>
			<Fill style={{ marginTop: 25 }}>
				<Text
					textSize={30}
					textColor="crimson"
					style={{ ...headingStyle, textAlign: 'left' }}
				>
					You have to supply
				</Text>
				<List>
					<Appear>
						<ListItem>Statistical Computation</ListItem>
					</Appear>
					<Appear>
						<ListItem>Aggregation</ListItem>
					</Appear>
					<Appear>
						<ListItem>Filtering</ListItem>
					</Appear>
				</List>
			</Fill>
		</Appear>
	</Slide>
)