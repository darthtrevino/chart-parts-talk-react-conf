// Import React
import React from 'react'
import 'prismjs/themes/prism-okaidia.css'

// Import Spectacle Core tags
import {
	BlockQuote,
	Cite,
	Deck,
	Heading,
	ListItem,
	List,
	Quote,
	Slide,
	Text,
	Appear,
	Image,
	Layout,
	Fill,
	Fit,
	Code,
	CodePane,
} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')

const theme = createTheme(
	{
		primary: '#403F4C',
		secondary: '#BA3B50',
		dark: '#222222',
		light: '#DAD2D8',
		highlight: '#0F8B8D',
		yello: '#f6c143',
	},
	{
		primary: 'Montserrat',
		secondary: 'Helvetica',
	},
)

const images = {
	city: require('../assets/city.jpg'),
	kat: require('../assets/kat.png'),
	logo: require('../assets/formidable-logo.svg'),
	markdown: require('../assets/markdown.png'),
	barchart: require('../assets/bar_chart.png'),
	barchart2: require('../assets/bar_chart2.png'),
	linechart: require('../assets/line_chart.png'),
	radial_chart: require('../assets/radial_chart.png'),
	streamgraph: require('../assets/streamgraph.png'),
	mapBase: require('../assets/map.png'),
	mapMs: require('../assets/map-ms.png'),
	mapMsSilverdale: require('../assets/map-ms-silverdale.png'),
	healthcare: require('../assets/healthcare.png'),
	narcissism: require('../assets/narcissism.jpg'),
	dcu: require('../assets/dcu.jpg'),
	network: require('../assets/network.png'),
	ourteam: require('../assets/our-team.png'),
	ourteam2: require('../assets/our-team-2.png'),
	visualSurvey: require('../assets/visual-survey.png'),
	winchester: require('../assets/winchester.gif'),
	npmsearch: require('../assets/npm_search.png'),
	lumbergh: require('../assets/lumbergh.gif'),
	rage: require('../assets/rage.png'),
	missingAbstraction: require('../assets/missing_abstraction.png'),
	wilkinson: require('../assets/wilkinson_book.png'),
	analogy: require('../assets/analogy.png'),
	markencoding: require('../assets/mark_encoding.png'),
	reactlogo: require('../assets/react-logo.png'),
	vegapage: require('../assets/vega-page.png'),
	rechartspage: require('../assets/recharts-page.png'),
	altairpage: require('../assets/altair-page.png'),
	barchartwithmean: require('../assets/bar_chart_with_mean.png'),
	chartPartsPage: require('../assets/chart-parts-page.png'),
	architecture: require('../assets/architecture_pipeline.png'),
}

const code = {
	fancyBarChart: require('raw-loader!../assets/code/newlib.text'),
	vegaBarChart: require('raw-loader!../assets/code/vega-bar-chart.text'),
	vegaBarleyChart: require('raw-loader!../assets/code/vega-barley-trellis.text'),
	barChart: require('raw-loader!../assets/code/bar-chart.text'),
	barChartSFC: require('raw-loader!../assets/code/bar-chart-sfc.text'),
	barChartWithMean: require('raw-loader!../assets/code/bar-chart-with-mean.text'),
	barChartAccessible: require('raw-loader!../assets/code/bar-chart-accessible.text'),
}

const notes = {
	slide1: `
    Good morning! My name is Chris Trevino, and I'm an engineer in Microsoft Research. 
    
    To set up some context, I'd like to tell you a bit about my team's work.
  
  `,
	usingANewChartingLibrary: `
  These are the common steps we always run into when using a new charting library
  `,
}

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck
				transition={['zoom', 'slide']}
				transitionDuration={500}
				theme={theme}
			>
				<Slide
					transition={['zoom']}
					bgColor="primary"
					notes={notes.slide1}
					fill
				>
					<Heading size={2} fit caps lineHeight={1}>
						The Missing
					</Heading>
					<Heading
						caps
						fill
						size={1}
						lineHeight={1.3}
						style={{
							background: '-webkit-linear-gradient(#eee, #222)',
							['-webkit-background-clip']: 'text',
							['-webkit-text-fill-color']: 'transparent',
						}}
					>
						Abstraction
					</Heading>
					<Heading caps fit size={3} textColor="secondary" lineHeight={1}>
						of Charting
					</Heading>
					<Layout fit>
						<Heading size={4} fill lineHeight={1} textColor="highlight">
							Chris Trevino
						</Heading>
						<Heading size={4} fill lineHeight={1} textColor="highlight">
							Microsoft
						</Heading>
					</Layout>
				</Slide>

				{/* Discuss our Location, who we are */}
				<Slide transition={['fade']}>
					<Image fill src={images.mapBase} />
				</Slide>
				<Slide transition={['fade']}>
					<Image fill src={images.mapMs} />
				</Slide>
				<Slide transition={['fade']}>
					<Image fill src={images.mapMsSilverdale} />
				</Slide>
				{/* Discuss details of our work */}
				<Slide>
					<Heading size={1} fill textColor="secondary">
						Our Work
					</Heading>
				</Slide>
				<Slide>
					<Layout>
						<Fill>
							<Image fill src={images.narcissism} height={325} />
							<Appear>
								<Image fill src={images.network} height={325} />
							</Appear>
						</Fill>
						<Fill>
							<Appear>
								<Image fill src={images.dcu} height={300} />
							</Appear>
							<Appear>
								<Image fill src={images.healthcare} height={325} />
							</Appear>
						</Fill>
					</Layout>
				</Slide>
				<Slide transition={['fade']}>
					<Image fill src={images.ourteam} />
				</Slide>
				<Slide transition={['fade']}>
					<Image fill src={images.ourteam2} />
				</Slide>
				<Slide transition={['fade']} bgImage={images.visualSurvey} />
				<Slide
					transition={['fade']}
					bgImage={images.visualSurvey}
					bgDarken={0.8}
				>
					<Heading fill textColor="secondary">
						Visualization is how we communicate complex data
					</Heading>
				</Slide>

				{/* Using a new charting library */}
				<Slide>
					<Heading size={2} textColor="highlight">
						Using a new charting library
					</Heading>
				</Slide>
				<Slide transition={['spin']}>
					<Image src={images.npmsearch} />
				</Slide>
				<Slide transition={['spin']}>
					<Heading size={4} textColor="secondary">
						> yarn install fancy-charts
					</Heading>
				</Slide>
				<CodeSlide
					transition={['fade']}
					lang="js"
					code={code.fancyBarChart}
					ranges={[
						{ loc: [1, 2], note: 'Import fancy-charts, w00t!!' },
						{ loc: [4, 5], note: 'Use the library 🙌' },
					]}
				/>
				<Slide transition={['fade']}>
					<Image src={images.barchart2} />
				</Slide>
				<Slide transition={['fade']} bgImage={images.winchester} />
				<Slide transition={['fade']} bgImage={images.lumbergh} />
				<Slide transition={['fade']} bgColor="secondary" textColor="primary">
					<BlockQuote>
						<Quote>We need to make a small change</Quote>
						<Cite>Your Manager</Cite>
					</BlockQuote>
				</Slide>
				<Slide>
					<Image src={images.barchartwithmean} />
				</Slide>
				<Slide transition={['fade']} bgImage={images.rage} />
				<Slide>
					<Heading size={1} caps fit textColor="secondary">
						The Missing Abstraction
					</Heading>
					<Image src={images.missingAbstraction} />
				</Slide>
				<Slide>
					<Heading size={4} caps textColor="highlight">
						The Grammar of Graphics
					</Heading>
					<Layout>
						<Fill>
							<Image src={images.wilkinson} />
						</Fill>
						<Fill>
							<Image src={images.analogy} />
						</Fill>
					</Layout>
				</Slide>
				<Slide>
					<Heading size={4} caps textColor="highlight">
						The Grammar of Graphics
					</Heading>
					<Layout>
						<Fill>
							<Image src={images.wilkinson} />
						</Fill>
						<Fill>
							<List>
								<ListItem textSize={35} textColor="yello">
									parameterized shapes (marks)
								</ListItem>
								<ListItem textSize={35} textColor="yello">
									scaling
								</ListItem>
								<ListItem textSize={35} textColor="yello">
									coordinate systems
								</ListItem>
								<ListItem textSize={35} textColor="yello">
									axes and legends
								</ListItem>
							</List>
						</Fill>
					</Layout>
				</Slide>
				<Slide transition={['fade']}>
					<Image src={images.markencoding} />
				</Slide>
				<Slide transition={['fade']}>
					<Image src={images.reactlogo} height={500} />
				</Slide>
				{/* Discuss various implementations */}
				<Slide transition={['fade']}>
					<Heading size={5} textColor="secondary" fit>
						What implementations exist?
					</Heading>
					<Appear>
						<Image src={images.altairpage} />
					</Appear>
				</Slide>
				<Slide transition={['fade']}>
					<Heading size={5} textColor="secondary" fit>
						What implementations exist?
					</Heading>
					<Image src={images.rechartspage} />
				</Slide>
				<Slide transition={['fade']}>
					<Heading size={5} textColor="secondary" fit>
						What implementations exist?
					</Heading>
					<Image src={images.vegapage} />
				</Slide>

				<CodeSlide
					fill
					transition={['fade']}
					lang="json"
					code={code.vegaBarChart}
					ranges={[
						{ loc: [2, 5], note: 'set chart size (bit of a suggestion)' },
						{ loc: [6, 21], note: 'define data source' },
						{ loc: [22, 32], note: 'wire up some event channels' },
						{ loc: [33, 50], note: 'define scales' },
						{ loc: [50, 55], note: 'add some axes' },
						{ loc: [55, 72], note: 'define the mark shapes' },
					]}
				/>
				<Slide>
					{/*TODO: add live bar chart*/}
					<Image src={images.barchart2} />
				</Slide>

				<Slide>
					<div style={{ overflowY: 'scroll', height: '500px' }}>
						<CodePane fill source={code.vegaBarleyChart} lang="javascript" />
					</div>
				</Slide>

				<Slide>
					<Layout>
						<Fill>
							<Heading size={5} textColor="highlight">
								Vega 👍
							</Heading>
							<List>
								<Appear>
									<ListItem>Rich and mature API</ListItem>
								</Appear>
								<Appear>
									<ListItem>Large ecosystem and community</ListItem>
								</Appear>
								<Appear>
									<ListItem>Made by really smart humans</ListItem>
								</Appear>
							</List>
						</Fill>
						<Fill>
							<Heading size={5} textColor="highlight">
								Vega 😕
							</Heading>
							<List>
								<Appear>
									<ListItem>JSON API has no seams</ListItem>
								</Appear>
								<Appear>
									<ListItem>Depends on DOM</ListItem>
								</Appear>
								<Appear>
									<ListItem>No way to manage complexity</ListItem>
								</Appear>
								<Appear>
									<ListItem>Chart sizes are not precise</ListItem>
								</Appear>
							</List>
						</Fill>
					</Layout>
				</Slide>

				<Slide>
					<Heading size={1} textColor="highlight">
						What if we had Vega's abstraction in React?
					</Heading>
				</Slide>

				<Slide bgImage={images.chartPartsPage} />

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
							loc: [24, 25],
							title: 'Define scales',
							note: 'Each scale has a name for lookup',
						},
						{
							loc: [19, 20],
							title: 'Define scales',
							note: 'we can bind the output range to a view dimension',
						},
						{
							loc: [18, 19],
							title: 'Define scales',
							note:
								'scales can be bound to a data table and field using a lodash-get expression',
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
				/>

				<Slide>TODO: SHOW LIVE CHART</Slide>

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
						<ListItem textColor="yello">
							...data - The named data tables
						</ListItem>
						<ListItem textColor="yello">
							...scales - The named data scales
						</ListItem>
					</List>
				</Slide>

				<Slide>
					<Heading size={2} textColor="secondary">
						Managing Complexity
					</Heading>
				</Slide>

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
				/>

				<Slide>
					<Heading size={2}>Renderless Components</Heading>
				</Slide>
				<Slide>
					<Image src={images.architecture} />
				</Slide>

				<Slide>
					<Heading size={2} textColor="secondary">
						Composeability
					</Heading>
				</Slide>

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
				/>

				<Slide>TODO: INSERT LIVE BARCHART WITH MEANLINE</Slide>

				<Slide>
					<Heading size={2} textColor="secondary">
						Accessibility
					</Heading>
				</Slide>

				<CodeSlide
					transition={['fade']}
					lang="js"
					code={code.barChartAccessible}
					ranges={[
						{
							loc: [21, 22],
							title: 'a11y',
							note: 'define a tab-index for keyboard-navigability',
						},
						{
							loc: [22, 25],
							title: 'a11y',
							note: 'include an aria decription for the element',
						},
					]}
				/>
			</Deck>
		)
	}
}
