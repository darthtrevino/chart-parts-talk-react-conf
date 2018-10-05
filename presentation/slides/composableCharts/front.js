import React from 'react'
import TwoStepHeader from '../../components/TwoStepHeader'
import notes from '../../notes'

export default (
	<TwoStepHeader
		notes={notes.composableLibraries}
		key="contrived_steps"
		text="A brief look at composable charting"
		sub="in React"
	/>
)
