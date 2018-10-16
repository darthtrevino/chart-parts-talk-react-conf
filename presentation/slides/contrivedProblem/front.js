import React from 'react'
import TwoStepHeader from '../../components/TwoStepHeader'
import notes from '../../notes'

export default (
	<TwoStepHeader
		notes={notes.stepsForUsingNewLibrary}
		key="contrived_steps"
		text="Using a new charting library"
		sub="a slightly contrived problem"
	/>
)
