import React from 'react'
import { BlockQuote, Cite, Quote, Slide } from 'spectacle'
import notes from '../../notes'

export default (
	<Slide
		transition={['spin']}
		bgColor="crimson"
		textColor="primary"
		notes={notes.smallchange}
		key="contrived_smallchange"
	>
		<BlockQuote>
			<Quote>We need to make a small change. No big deal.</Quote>
			<Cite>Your Manager</Cite>
		</BlockQuote>
	</Slide>
)
