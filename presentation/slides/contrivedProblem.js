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
	Appear,
	Code,
	CodePane,
} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'

import notes from '../notes'
import images from '../images'
import code from '../code'

export default [
	<Slide notes={notes.stepsForUsingNewLibrary} key="contrived_steps">
		<Fill>
			<Text textSize={60} textColor="secondary" style={{ fontWeight: 200 }}>
				Steps for using
			</Text>
			<Text textSize={60} textColor="secondary">
				a new charting library
			</Text>
		</Fill>
	</Slide>,
	<Slide notes={notes.npmsearch} key="contrived_npmsearch">
		<Image src={images.npmsearch} />
	</Slide>,
	<Slide notes={notes.yarninstall} key="contrived_yi">
		<Code textColor="yello" language="js">
			> yarn install fancy-charts
		</Code>
	</Slide>,
	<Slide key="cortrived_uselib_codepane" notes={notes.useFancyCharts}>
		<Heading size={3}>🙌 🙌 🙌</Heading>
		<CodePane
			fill
			lang="jsx"
			theme="external"
			textSize={30}
			source={code.fancyBarChart}
		/>
		<Heading size={3}>🙌 🙌 🙌</Heading>
	</Slide>,
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
		bgColor="crimson"
		textColor="primary"
		notes={notes.smallchange}
		key="contrived_smallchange"
	>
		<BlockQuote>
			<Quote>We need to make a small change. No big deal.</Quote>
			<Cite>Your Manager</Cite>
		</BlockQuote>
	</Slide>,
	<Slide notes={notes.barchartwithmean} key="contrived_wmean">
		<Image src={images.barchartwithmean} />
	</Slide>,
	<Slide transition={['fade']} notes={notes.barchartapi} key="contrived_api">
		<Image src={images.barchartapi} />
	</Slide>,
	<Slide notes={notes.hans} key="contrived_hans" bgImage={images.hans}>
		<Appear>
			<div style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
				<Heading size={2} textColor="secondary">
					Abstract Charts
				</Heading>
				<Heading size={1} fill style={{ padding: 5 }}>
					👇👇👇
				</Heading>
				<Heading size={2} textColor="highlight">
					2D Libraries
				</Heading>
			</div>
		</Appear>
	</Slide>,
	<Slide notes={notes.missingAbstraction} key="theory_ma">
		<Heading size={1} caps fit textColor="pcontrast">
			The Missing Abstraction
		</Heading>
		<Appear>
			<Image src={images.missingAbstraction} />
		</Appear>
	</Slide>,
]
