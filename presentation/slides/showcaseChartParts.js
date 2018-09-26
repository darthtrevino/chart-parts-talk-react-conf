import React from 'react'
import {
	Heading,
	ListItem,
	List,
	Slide,
	Text,
	Appear,
	Image,
	Layout,
} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'
import images from '../images'
import code from '../code'
import notes from '../notes'
import HeadingSlide from '../components/HeadingSlide'

export default [
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
	<Slide key="showcase_whatif" notes={notes.whatif}>
		<Heading size={5} textColor="secondary">
			What if had
		</Heading>
		<Heading size={5} textColor="secondary">
			Vega's abstraction
		</Heading>
		<Appear>
			<Heading size={4} textColor="yello">
				...but with components?
			</Heading>
		</Appear>
	</Slide>,
	// TODO: DOPE ANIMATION IN
	<Slide
		bgImage={images.chartPartsPage}
		key="showcase_chartparts_front"
		notes={notes.chartPartsPage}
	/>,
	<Slide
		key="showcase_architecture_be"
		notes={notes.chartPartsArchitectureBackend}
	>
		<Text>Architecture Overview BE</Text>
		{/* TODO: image */}
	</Slide>,
	<Slide
		key="showcase_architecture_fe"
		notes={notes.chartPartsArchitectureFrontend}
	>
		<Text>Architecture Overview FE</Text>
		{/* TODO: image */}
	</Slide>,
	<CodeSlide
		transition={['fade']}
		lang="js"
		code={code.barChart}
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
	<Slide>TODO: SHOW LIVE CHART</Slide>,
	<Slide>
		<Heading size={5} textColor="highlight">
			Mark Encoding Context
		</Heading>
		<List>
			<ListItem textColor="yello">d - The bound data item</ListItem>
			<ListItem textColor="yello">
				index - The index of the data item in the table
			</ListItem>
			<ListItem textColor="yello">
				view - The current width/height of the operating view
			</ListItem>
			<ListItem textColor="yello">
				id - The generated id of the bound item
			</ListItem>
			<ListItem textColor="yello">...data - The named data tables</ListItem>
			<ListItem textColor="yello">...scales - The named data scales</ListItem>
		</List>
	</Slide>,
	<Slide>
		<Heading size={2} textColor="pcontrast">
			Managing Complexity
		</Heading>
		<Layout>
			<Appear>
				<Text textColor="highlight">Renderless Components</Text>
			</Appear>
		</Layout>
	</Slide>,
	<Slide>
		<Image src={images.architecture} />
	</Slide>,
	<CodeSlide
		transition={['fade']}
		lang="js"
		code={code.barChartSFC}
		ranges={[
			{
				loc: [16, 18],
				note: "We've tucked some pieces away behind components",
			},
			{
				loc: [33, 51],
				note: 'Complex chart structure can be understandable',
			},
		]}
	/>,
	<HeadingSlide text="Composability" />,
	<CodeSlide
		transition={['fade']}
		lang="js"
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
				loc: [32, 41],
			},
			{
				title: 'Define MeanLine Component',
				loc: [34, 35],
				note: 'singleton marks appear once and are not data-bound',
			},
			{
				title: 'Define MeanLine Component',
				loc: [36, 37],
				note: 'we can use the view-bounds to avoid defining a new scale',
			},
		]}
	/>,
	<Slide>TODO: INSERT LIVE BARCHART WITH MEANLINE</Slide>,
	<HeadingSlide text="Accessibility" />,
	<CodeSlide
		transition={['fade']}
		lang="js"
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
	<HeadingSlide text="Mobile" />,
]
