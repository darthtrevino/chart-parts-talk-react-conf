import React from 'react'
import CodeSlide from 'spectacle-code-slide'

import code from '../../code'
import notes from '../../notes'
import TwoStepHeader from '../../components/TwoStepHeader'

export default [
	<TwoStepHeader
		key="showcase_mobile"
		notes={notes.mobile}
		text={'Example Showcase'}
		sub={'Charting in React-Native'}
	/>,
	<CodeSlide
		key="showcase_mobile_code"
		lang="jsx"
		notes={notes.mobileCode}
		code={code.mobile}
		ranges={[
			{ loc: [9, 11], title: 'Switch Renderer' },
			{ loc: [15, 16], title: 'Use Native Renderer' },
			{ loc: [41, 44], title: 'Handle Native Events' },
		]}
	/>,
]
