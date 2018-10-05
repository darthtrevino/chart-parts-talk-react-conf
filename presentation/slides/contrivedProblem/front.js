import React from 'react'
import TwoStepHeader from '../../components/TwoStepHeader'
import notes from '../../notes'

export default (
	<TwoStepHeader
		notes={notes.stepsForUsingNewLibrary}
		key="contrived_steps"
		text="Steps for using a new charting library"
		sub="a slightly contrived problem"
	/>
)
