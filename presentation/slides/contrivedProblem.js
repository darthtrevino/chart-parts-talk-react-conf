import React from 'react'
import {
	BlockQuote,
	Cite,
	Heading,
	Quote,
	Slide,
	Text,
	Image,
	Layout,
	Fill,
} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'

import notes from '../notes'
import images from '../images'
import code from '../code'

export default [
	<Slide notes={notes.stepsForUsingNewLibrary} key="contrived_steps">
		<Heading heading caps size={1} textColor="secondary">
			Steps for
		</Heading>
		<Heading caps size={2} textColor="highlight">
			Using a new
		</Heading>
		<Heading caps textColor="secondary">
			Charting Library
		</Heading>
	</Slide>,
	<Slide
		transition={['spin']}
		notes={notes.npmsearch}
		key="contrived_npmsearch"
	>
		<Image src={images.npmsearch} />
	</Slide>,
	<Slide transition={['spin']} notes={notes.yarninstall} key="contrived_yi">
		<Heading size={4} textColor="pcontrast">
			> yarn install fancy-charts
		</Heading>
	</Slide>,
	<CodeSlide
		key="contrived_uselib"
		notes={notes.useFancyCharts}
		transition={['fade']}
		lang="js"
		code={code.fancyBarChart}
		ranges={[
			{ loc: [1, 2], note: 'Import fancy-charts, w00t!!' },
			{ loc: [4, 5], note: 'Use the library 🙌' },
		]}
	/>,
	<Slide
		transition={['fade']}
		notes={notes.fancybarchartrendered}
		key="contrived_barchart"
	>
		<Image src={images.barchart2} />
	</Slide>,
	<Slide
		transition={['fade']}
		bgImage={images.winchester}
		notes={notes.winchester}
		key="contrived_winchester"
	/>,
	<Slide
		transition={['fade']}
		bgImage={images.lumbergh}
		notes={notes.lumbergh}
		key="contrived_lumbergh"
	/>,
	<Slide
		transition={['spin']}
		bgColor="secondary"
		textColor="primary"
		notes={notes.smallchange}
		key="contrived_smallchange"
	>
		<BlockQuote>
			<Quote>We need to make a small change. No big deal.</Quote>
			<Cite>Your Manager</Cite>
		</BlockQuote>
	</Slide>,
	<Slide
		transition={['spin']}
		bgColor="primary"
		textColor="secondary"
		notes={notes.weekend}
		key="contrived_lol"
	>
		<BlockQuote textColor="secondary">
			<Quote textColor="secondary">
				You can wrap it up before the weekend right?
			</Quote>
			<Cite>Your Manager</Cite>
		</BlockQuote>
	</Slide>,
	<Slide notes={notes.barchartwithmean} key="contrived_wmean">
		<Image src={images.barchartwithmean} />
	</Slide>,
	<Slide transition={['fade']} notes={notes.barchartapi} key="contrived_api">
		<Image src={images.barchartapi} />
	</Slide>,
	<Slide notes={notes.hans} key="contrived_hans">
		<Layout>
			<Fill>
				<Image fill src={images.hans} />
			</Fill>
			<Fill>
				<Text textColor="secondary">High-Level Charting Abstractions</Text>
				<Heading size={1} fill style={{ padding: 5 }}>
					👇
				</Heading>
				<Text textColor="highlight">Low-Level 2D Libraries</Text>
			</Fill>
		</Layout>
	</Slide>,
	<Slide
		transition={['fade']}
		bgImage={images.rage}
		notes={notes.rage}
		key="contrived_rage"
	/>,
]
