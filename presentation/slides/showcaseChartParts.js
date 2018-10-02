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
import images from '../images'
import code from '../code'
import notes from '../notes'
// import HeadingSlide from '../components/HeadingSlide'
import BarChartLive from '../components/BarChart'
import BarChartMeanLive from '../components/BarChartWithMeanLine'

const leadUp = [
	<Slide
		bgImage={images.vegapage}
		key="showcase_vega"
		notes={notes.showcaseVegaPage}
	/>,
	<CodeSlide
		key="showcase_vegabarchart"
		transition={['fade']}
		lang="js"
		code={code.vegaBarChart}
		notes={notes.vegaBarChart}
		ranges={[
			{ loc: [2, 5], note: 'set chart size' },
			{ loc: [6, 21], note: 'define data source' },
			{ loc: [22, 32], note: 'wire up some event channels' },
			{ loc: [33, 50], note: 'define scales' },
			{ loc: [50, 55], note: 'add some axes' },
			{ loc: [55, 72], note: 'define the mark shapes' },
			{ loc: [64, 65], note: 'bind attributes to data fields' },
			{ loc: [67, 68], note: 'or set statically' },
		]}
	/>,
	<Slide key="showcase_vegabarchartlive" notes={notes.vegaBarChartLive}>
		{/*TODO: add live bar chart*/}
		<Image src={images.barchart2} />
	</Slide>,
	<Slide key="showcase_whatif" notes={notes.whatif} bgImage={images.spookyBG}>
		<Heading size={5} textColor="secondary">
			What if we had
		</Heading>
		<Heading size={5} textColor="secondary">
			Vega's abstraction
		</Heading>
		<Appear>
			<div style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
				<Heading size={4} textColor="yello">
					...but with components?
				</Heading>
			</div>
		</Appear>
	</Slide>,
	<Slide
		bgImage={images.chartPartsPage}
		key="showcase_chartparts_front"
		notes={notes.chartPartsPage}
		transition={['fade']}
	/>,
	<Slide
		key="showcase_architecture_be"
		notes={notes.chartPartsArchitectureBackend}
		transition={['fade']}
	>
		<Image src={images.backendArchitecture} />
	</Slide>,
	<Slide
		key="showcase_architecture_fe"
		notes={notes.chartPartsArchitectureFrontend}
		transition={['fade']}
	>
		<Image src={images.frontendArchitecture} />
	</Slide>,
	<Slide
		key="showcase_architecture_dropout"
		notes={notes.chartPartsArchitectureDropout}
		transition={['fade']}
	>
		<Image src={images.dropout} />
	</Slide>,
]

const basicExample = [
	<CodeSlide
		key="showcase_barchart_example"
		transition={['fade']}
		lang="js"
		code={code.barChart}
		notes={notes.chartPartsBarChart}
		ranges={[
			{ loc: [1, 8], title: 'Import chart elements' },
			{
				loc: [9, 12],
				title: 'Pick a renderer',
				note: 'currently react-svg or react-native-svg',
			},
			{ loc: [14, 16], title: 'Set chart options' },
			{
				loc: [16, 30],
				title: 'Define scales',
			},
			{
				loc: [17, 18],
				title: 'Define scales',
				note: 'Each scale has a name for lookup',
			},
			{
				loc: [18, 19],
				title: 'Define scales',
				note: 'scale domains can be bound to data fields using expressions',
			},
			{
				loc: [19, 20],
				title: 'Define scales',
				note: 'we can bind the output range to a view dimension',
			},
			{
				loc: [31, 33],
				title: 'Define Axes',
			},
			{
				loc: [34, 42],
				title: 'Define Marks',
			},
			{
				loc: [35, 36],
				title: 'Define Marks',
				note: 'Bind to Data',
			},
			{
				loc: [36, 37],
				title: 'Define Marks',
				note: 'attributes can be defined with an encoding function',
			},
			{
				loc: [40, 41],
				title: 'Define Marks',
				note: 'attributes can be static',
			},
			{
				loc: [41, 44],
				title: 'Define Marks',
				note: 'we can wire in event handlers on any visual mark',
			},
		]}
	/>,
	<Slide key="showcase_live_chart">
		<BarChartLive />
	</Slide>,
]

const mobileExample = [
	<Slide key="showcase_mobile" notes={notes.mobile}>
		<Heading size={2} textColor="pcontrast">
			Mobile
		</Heading>
	</Slide>,
]

const accessibilityExample = [
	<Slide key="showcase_accessibility" notes={notes.accessibility}>
		<Heading size={2} textColor="pcontrast">
			Accessibility
		</Heading>
	</Slide>,
	<CodeSlide
		key="showcase_accessible_code"
		transition={['fade']}
		lang="js"
		notes={notes.accessibilityCode}
		code={code.barChartAccessible}
		ranges={[
			{
				loc: [20, 21],
				title: 'a11y',
				note: 'add a top-level chart description',
			},
			{
				loc: [27, 28],
				title: 'a11y',
				note: 'define a tab-index for keyboard-navigability',
			},
			{
				loc: [28, 30],
				title: 'a11y',
				note: 'include an aria decription for the element',
			},
		]}
	/>,
	<Slide key="showcase_live_chart_accessible" notes={notes.accessibleLiveChart}>
		<BarChartLive />
	</Slide>,
]

const usingSfcExample = [
	<Slide key="showcase_manage_complexity" notes={notes.managingComplexity}>
		<Heading size={2} textColor="pcontrast">
			Managing Complexity
		</Heading>
		<Layout>
			<Appear>
				<Text textColor="highlight">Renderless Components</Text>
			</Appear>
		</Layout>
	</Slide>,
	<CodeSlide
		key="showcase_sfc"
		transition={['fade']}
		lang="js"
		code={code.barChartSFC}
		notes={notes.barChartSFC}
		ranges={[
			{
				loc: [16, 18],
				note: "We've tucked some pieces away behind components",
			},
			{
				loc: [33, 51],
			},
			{
				loc: [52, 58],
			},
		]}
	/>,
]

const composabilityExample = [
	<Slide key="showcase_composability" notes={notes.composability}>
		<Heading size={2} textColor="pcontrast">
			Composability
		</Heading>
	</Slide>,
	<CodeSlide
		key="showcase_composeability_code"
		transition={['fade']}
		lang="js"
		notes={notes.composabilityCode}
		code={code.barChartWithMean}
		ranges={[
			{
				loc: [16, 17],
				title: 'Update BarChart',
				note: 'include children',
			},
			{
				loc: [28, 29],
				title: 'Update BarChart',
				note: 'render children into virtual dom',
			},
			{
				title: 'Define MeanLine Component',
				loc: [32, 40],
			},
			{
				title: 'Define MeanLine Component',
				loc: [34, 36],
				note: 'use view bounds for full-width line',
			},
			{
				title: 'Define MeanLine Component',
				loc: [36, 37],
				note: 'determine mean line value',
			},
		]}
	/>,
	<Slide key="showcase_meantop" notes={notes.composableComposed}>
		<CodePane
			lang="jsx"
			theme="external"
			source={code.barChartWithMeanTop}
			textSize={40}
		/>
	</Slide>,
	<Slide key="showcase_live_barchart">
		<BarChartMeanLive />
	</Slide>,
	<Slide
		key="showcase_winchester"
		bgImage={images.winchester}
		notes={notes.showcaseWinchester}
	/>,
]

export default [
	...leadUp,
	...basicExample,
	...mobileExample,
	...usingSfcExample,
	...accessibilityExample,
	...composabilityExample,
	<Slide
		key="showcase_conclusion"
		notes={notes.conclusion}
		bgImage={images.dealWithIt}
	>
		<div style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
			<Heading size={2} textColor="pcontrast">
				That's all Folks!
			</Heading>
			<Text textColor="yello">github.com/Microsoft/chart-parts</Text>
			<Text textColor="yello">twitter.com/darthtrevino</Text>
		</div>
	</Slide>,
]
