import React from 'react'
import { Slide, Code } from 'spectacle'
import notes from '../../notes'

export default (
	<Slide notes={notes.yarninstall} key="contrived_yi" transition={['flip']}>
		<Code textColor="yello" language="js">
			> yarn install fancy-charts
		</Code>
	</Slide>
)
