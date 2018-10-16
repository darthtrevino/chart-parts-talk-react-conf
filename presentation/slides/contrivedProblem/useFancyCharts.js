import React from 'react'
import { Heading, Slide, Image, Code } from 'spectacle'
import notes from '../../notes'
import images from '../../images'
import code from '../../code'
import CodeSlide from 'spectacle-code-slide'

export default (
	<CodeSlide lang="jsx" code={code.fancyBarChart}
		key="cortrived_uselib_codepane"
		notes={notes.useFancyCharts}
		transition={['flip']}
		ranges={[{ loc: [0, 7], title: "🙏" }]}
	/>
)
