import React from 'react'
import {
	Heading,
	Slide,
	Text,
	Appear,
	Image,
	Layout,
	CodePane,
} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'
import images from '../../images'
import code from '../../code'
import notes from '../../notes'
import front from './front'

export default [
	front,
	<Slide key="showcase_vega" notes={notes.showcaseVegaPage}>
		<Image src={images.vegapage} />
	</Slide>,
	<CodeSlide
		key="showcase_vegabarchart"
		transition={['fade']}
		lang="jsx"
		code={code.vegaBarChart}
		notes={notes.vegaBarChart}
		ranges={[
			{ loc: [2, 5], note: 'set chart size' },
			{ loc: [6, 15], note: 'define data source' },
			{ loc: [16, 28], note: 'wire up some event channels' },
			{ loc: [29, 39], note: 'define scales' },
			{ loc: [50, 54], note: 'add some axes' },
			{ loc: [55, 69], note: 'define the mark shapes' },
			{ loc: [58, 59], note: 'bind mark to a table' },
			{ loc: [61, 65], note: 'bind attributes to data fields' },
			{ loc: [65, 68], note: 'or set statically' },
		]}
	/>,
	<Slide key="showcase_vegabarchartlive" notes={notes.vegaBarChartLive}>
		{/*TODO: add live bar chart*/}
		<Image src={images.barchart2} />
	</Slide>,
]
