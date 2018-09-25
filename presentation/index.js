// Import React
import React from 'react'
import 'prismjs/themes/prism-okaidia.css'

// Import Spectacle Core tags
import {
	Anim,
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
		pcontrast: '#DDDDEE',
		dark: '#222222',
		light: '#DAD2D8',
		highlight: '#0F8B8D',
		yello: '#f6c143',
	},
	{
		primary: 'Montserrat',
		pcontrast: 'Helvetica',
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
	chriswhite: require('../assets/chris_white.jpg'),
	barchartapi: require('../assets/barchart_api.png'),
	hans: require('../assets/hans.gif'),
	d3: require('../assets/d3.png'),
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
    Good morning! My name is Chris Trevino, and I'm an engineer in Microsoft Research.<br/><br/>
    To set this talk up with some context, I'd like to tell you a bit about my team's work.  
  `,
	mapMs: `
    I'm a software engineer at microsoft research. However, my team is not based out of the main corporate hub here...
  `,
	mapSilverdale: `
    We are over here in Silverdale.<br/><br/>
    We are kind of a newer team whose emphasis is on applying data analytics and machine learning to large sets of textual data, and trying to convey insights from that<br/><br/>
  
    `,

	usingANewChartingLibrary: `
  These are the common steps we always run into when using a new charting library
  `,

	bossman: `
  My boss is Chris White, who's our team's principal researcher.<br/><br/>
  He's a much better public speaker than I am, so if I screw this up, send your complaints to him.
  `,

	ourwork: `We work on a grab-bag of data problems.<br/><br/>
  Our job usually involves getting a large set of data and brainstorming on ways to make it useful or interesting.<br/><br/>
  
  This can take the form of solving brand management problems, helping individuals or brands to understand where conversations are occuring that involve them...<br/><br/>
  Or understanding how information flows through news networks, where ideas come from and how they propagate...<br/><br/>
  Or fighting tech scams and human trafficking...<br/><br/>
  Or trying to find ways to apply data to healthcare cost problems, which is a topic we're actively working on...
  `,

	ourteam: `
  Our team is broken up into a few parts, and we have a handful of very smart humans working on the Data and ML part of our problems.
  `,

	ourteam2: `
  I work on our user interfaces though, and we're giant react fanpeople. 
  `,

	uiwork: `
  Our team builds a lot of data visualizations to try and communicate a lot of different kinds of data. We're not 
  necessarily experts in dataviz, there are other teams at Microsoft that very much are, but we try to apply it on a daily basis<br/><br/>
  A lot of times, our work is as simple as wiring up a PowerBI workbook that tells a story with data, and allows users to explore the data using that modality. For a lot of users, that works very well.<br/><br/>
  Sometimes we make custom PowerBI visuals that help us tell those stories, we have several of our visualizations on the PowerBI visual marketplace.<br/><br/>
  Sometimes we get to do one off experiments, to see what mixes of technologies work well, and how well they scale with input data<br/><br/>
  And sometimes we get to make applications - in the web and on mobile - that deliver a custom experience and tell a very specific story.<br/><br/>
  `,

	uiemphasis: `
  Now this is all just to emphasize that for us, data visualization is absolutely essential to what we do. It's ofter our first method for understanding nuance in data that's hard to 
  discern in its raw form.<br/><br/>
  A lot of times when we work with teams, they're seeing their data visualized for the first time and it can be illuminating for them. <br/><br/>
  I would wager that data visualization is important for you too. Maybe not all of the time, and maybe it's not super complex, but we're all UI developers, and it's a problem space we all run into<br/><br/>
  Usually, this takes the form of charting...<br/><br/>
  `,

	charting: `
  Charting and dataviz are basically synonymous, but when we use charts in our applications, we're usually talking about including one of a few very common types of visualizations.<br/><br/>
  These are your basic bar charts, line chart, pie charts (as gross as they are), and area charts.<br/><br/>
  If you're getting fancy, maybe you'll want a radar chart, or a box plot, or violin plot<br/><br/> 
  There are a lot more, but you'll find the basics in pretty much any charting library you download.
  `,

	stepsForUsingNewLibrary: `
  Let's take a moment to talk about what our experience is mostly like with Charting libraries.<br/><br/>
  This section is a little unfair, so bear with me, but I hope it paints a picture of a specific type of problem that people have<br/><br/>
  `,

	npmsearch: `
  So we're making an application, and we want to include a chart. It's nothing fancy, just a bar-chart.<br/><br/>
  So we head to NPM and search for something simple that matches our use case. <br/><br/>
  And we find fancy charts (w00t!), which appears to be super popular, has lots of downloads and stars, and has a clean up-front API<br/><br/>
  `,
	yarninstall: `
  So we install our new charting library, and we're stoked!!<br/><br/>
  Nothing's going wrong today, we can feel it.
  `,
	useFancyCharts: `
  We import the Bar Chart component into our application, easy peasy.<br/><br/>
  And then we wire it up in our render function, binding it to whatever data we have.<br/><br/>
  This is great, couldn't be easier.<br/><br/>
  `,
	fancybarchartrendered: `
  And so we have our bar chart, and it's absolutely perfect in every way, and soooo...
  `,
	winchester: `We got a task done today, so it's time to head to the pub and celebrate....<br/><br/>
  However...<br/><br/>
  `,
	lumbergh: `
  Your boss has discussed new requirements with your customer, and your new, fancy, chart needs some work...<br/><br/>
  `,
	smallchange: `because it's no big deal`,
	weekend: `And you shouldn't worry about it.<br/><br/>
  Your friends are definitely not at the pub waiting for you already</br>
  `,
	barchartwithmean: `
  According to the new requirements, all we need to do is add a mean-line to our bar chart.<br/><br/>
  For some reason, it's super important for the analysts, and it's a key metric for them.
  `,

	barchartapi: `
  So we take a look at the API docs. Is there a way of adding a new mark on the chart? 
  Can we add any child components?<br/><br/>
  No, no we can not.
  `,
	hans: `
  We have fallen off of the abstraction cliff<br/><br/>
  The abstraction we're using is brittle. 
  It's not expressive enough to adapt to subtle changes in our requirements<br/><br/>
  At this point, you may be so jaded with the fancy-charts library that you eject it, 
  and the next step may be to rewrite the chart with custom code.<br/><br/>
  `,
	rage: `   
  And now we're angry: 
  <br/>- maybe at our manager 
  <br/>- or the customer, 
  <br/>- maybe at the pub for having terrible parking after 6, 
  <br/>- but mostly, we're angry at ourselves.<br/><br/>
  We selected our charting library because it's components had an easy abstraction at the top-level, 
  but we don't havy any recourse for when we need something subtle or custom in that framework.<br/><br/>
  Obviously, this is a contrived example, but we've all been in situations where the expressiveness afforded to us 
  by the abstraction level of a library we've selected doesn't match that of our problem.
  `,

	backtobasics: `
  At this point, we're going down the road of writing our own data visualization.<br/><br/>
  We're either going to get into the blood and guts of scaling and drawing, or we're 
  going to look for a reliable, general purpose tool for authoring data visualization.<br/><br/>
  And if you're using Javascript, that means using d3...<br/><br/>
  d3 is basically the foundation of all data visualization in Javascript, so we're going to 
  break off some rust and use d3 in our application.<br/><br/>
  `,

	react_and_d3: `  
  Because we're using React, now we have an interesting decision to make. 
  How do we integrate d3 with React? This is a problem that has been approached 
  from a few different ways. The basic approaches are <br/><br/>

  1 - We can let d3 manage its own rendering, and set up a container bridge between
  d3-land and react-land.<br/><br/>  
  
  This has the advantage that you can re-use a lot of existing d3 code, and work your 
  way up from a published examples.<br/><br/>

  But we basically have two systems rendering out data to the dom, which is a little weird, 
  events are going to be different that what you get in React, which may or may not matter, 
  but it affects consistency. It also solidly binds us into using the DOM, so this isn't 
  going to be portable when we start trying to implement this same chart in react-native.

  2 - we can use the non-dom capabilities of d3 to give us a utility-bag of scaling, drawing, and 
  data manipulation utilities  

  d3 is essentially a collection of small libraries that perform different jobs, such as scaling, 
  drawing shape paths, etc.. We can use these to help us author SVG using React<br/><br/>
  This makes rendering and eventing more consistent<br/><br/>
  However, we miss out on some d3 niceties such as drawing axes, legends, scrubbing, etc..
  `,

	missingAbstraction: `
  This path we've taken has led us to the zone of the missing abstraction.<br/><br/>
  We want to author data visualizations in higher-level terms, 
  but we run into brittle abstractions that force us into diving down into low-level
  rendering.<br/><br/>
  The "missing abstraction" is being able to develop visualizations using a mid-level abstraction. Something
  that's more verbose than a chart-tag, but fits nicely in a component ecosystem and 
  is pleasant to author with and read.<br/><br/>
  Maybe 90% of the time, we use chart-tags, and once in a while, when we need something custom,
  we can "eject" out the basic chart components so that we can author something custom within them.
  `,

	// TODO: Break into multiple slides?
	gog: `
  One idea that we've heard about, being adjacent to well-read visualization 
  researchers is the "Grammar of Graphics".<br/><br/>
  This idea originated in 1999 with the publication of "The Grammar of Graphics" by Leland Wilkinson<br/><br/>
  It has been implemented in an R package called ggplot2, and Prof. Wilkinson has gone on to help found Tableau
  software.<br/><br/>
  The grammar of graphics is named so, because it envisions a system of elements that 
  operate together to form a cohesive chart. These elements are analogous to words used in 
  language to convey meaning. <br/><br/>
  Now this is basically how components work, we paramaterize elements that encapsulate behavior of some kind. 
  They may or may not interact with each other to coordinate their functional behavior. And we compose them
  in our applications to express something that solves a problem for us.
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
					<Heading caps fit size={3} textColor="pcontrast" lineHeight={1}>
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
				<Slide transition={['fade']} notes={notes.mapMs}>
					<Image fill src={images.mapMs} />
				</Slide>
				<Slide transition={['fade']} notes={notes.mapSilverdale}>
					<Image fill src={images.mapMsSilverdale} />
				</Slide>
				<Slide notes={notes.bossman}>
					<Image fill src={images.chriswhite} />
				</Slide>

				{/* Discuss details of our work */}
				<Slide notes={notes.ourwork}>
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
				<Slide transition={['fade']} notes={notes.ourteam}>
					<Image fill src={images.ourteam} />
				</Slide>
				<Slide transition={['fade']} notes={notes.ourteam2}>
					<Image fill src={images.ourteam2} />
				</Slide>
				<Slide
					transition={['fade']}
					bgImage={images.visualSurvey}
					notes={notes.uiwork}
				/>
				<Slide
					notes={notes.uiemphasis}
					transition={['fade']}
					bgImage={images.visualSurvey}
					bgDarken={0.8}
				>
					<Heading fill textColor="pcontrast">
						Visualization is how we communicate complex data
					</Heading>
				</Slide>

				<Slide notes={notes.charting}>
					TODO: Include common chart types, slide through them
				</Slide>

				{/* Describe the problem of the missing abstraction */}
				<Slide notes={notes.stepsForUsingNewLibrary}>
					<Heading heading caps size={1} textColor="secondary">
						Steps for
					</Heading>
					<Heading caps size={2} textColor="highlight">
						Using a new
					</Heading>
					<Heading caps textColor="secondary">
						Charting Library
					</Heading>
				</Slide>
				<Slide transition={['spin']} notes={notes.npmsearch}>
					<Image src={images.npmsearch} />
				</Slide>
				<Slide transition={['spin']} notes={notes.yarninstall}>
					<Heading size={4} textColor="pcontrast">
						> yarn install fancy-charts
					</Heading>
				</Slide>
				<CodeSlide
					notes={notes.useFancyCharts}
					transition={['fade']}
					lang="js"
					code={code.fancyBarChart}
					ranges={[
						{ loc: [1, 2], note: 'Import fancy-charts, w00t!!' },
						{ loc: [4, 5], note: 'Use the library 🙌' },
					]}
				/>
				<Slide transition={['fade']} notes={notes.fancybarchartrendered}>
					<Image src={images.barchart2} />
				</Slide>
				<Slide
					transition={['fade']}
					bgImage={images.winchester}
					notes={notes.winchester}
				/>
				<Slide
					transition={['fade']}
					bgImage={images.lumbergh}
					notes={notes.lumbergh}
				/>
				<Slide
					transition={['spin']}
					bgColor="secondary"
					textColor="primary"
					notes={notes.smallchange}
				>
					<BlockQuote>
						<Quote>We need to make a small change. No big deal.</Quote>
						<Cite>Your Manager</Cite>
					</BlockQuote>
				</Slide>
				<Slide
					transition={['spin']}
					bgColor="primary"
					textColor="secondary"
					notes={notes.weekend}
				>
					<BlockQuote textColor="secondary">
						<Quote textColor="secondary">
							You can wrap it up before the weekend right?
						</Quote>
						<Cite>Your Manager</Cite>
					</BlockQuote>
				</Slide>
				<Slide notes={notes.barchartwithmean}>
					<Image src={images.barchartwithmean} />
				</Slide>
				<Slide transition={['fade']} notes={notes.barchartapi}>
					<Image src={images.barchartapi} />
				</Slide>
				<Slide notes={notes.hans}>
					<Layout>
						<Fill>
							<Image fill src={images.hans} />
						</Fill>
						<Fill>
							<Text textColor="secondary">
								High-Level Charting Abstractions
							</Text>
							<Heading size={1} fill style={{ padding: 5 }}>
								👇
							</Heading>
							<Text textColor="highlight">Low-Level 2D Libraries</Text>
						</Fill>
					</Layout>
				</Slide>
				<Slide transition={['fade']} bgImage={images.rage} notes={notes.rage} />

				<Slide notes={notes.backtobasics}>
					<Heading size={3} textColor="yello">
						Back to Basics
					</Heading>
					<Appear>
						<Image src={images.d3} />
					</Appear>
				</Slide>

				{/* TODO: Design this next slider better */}
				<Slide notes={notes.react_and_d3}>
					<Heading fit size={3} textColor="secondary">
						Using d3 and React
					</Heading>
					<Layout>
						<Fill>
							<Appear>
								<Text textColor="yello">Use React to wrap d3</Text>
							</Appear>
						</Fill>
						<Fill>
							<Appear>
								<Text textColor="highlight">
									Use d3 utils to author React dom
								</Text>
							</Appear>
						</Fill>
					</Layout>
				</Slide>

				<Slide notes={notes.missingAbstraction}>
					<Heading size={1} caps fit textColor="pcontrast">
						The Missing Abstraction
					</Heading>
					<Appear>
						<Image src={images.missingAbstraction} />
					</Appear>
				</Slide>

				{/* Describe the Grammar of Graphics */}
				<Slide transition={['fade']} notes={notes.gog}>
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

				<Slide transition={['fade']}>
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
					<Heading size={5} textColor="pcontrast" fit>
						What implementations exist?
					</Heading>
					<Appear>
						<Image src={images.altairpage} />
					</Appear>
				</Slide>
				<Slide transition={['fade']}>
					<Heading size={5} textColor="pcontrast" fit>
						What implementations exist?
					</Heading>
					<Image src={images.rechartspage} />
				</Slide>
				<Slide transition={['fade']}>
					<Heading size={5} textColor="pcontrast" fit>
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
						<Appear>
							<ListItem>No seams, difficult to debug</ListItem>
						</Appear>
						<Appear>
							<ListItem>No great way to manage complexity</ListItem>
						</Appear>
					</List>
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
							loc: [17, 18],
							title: 'Define scales',
							note: 'Each scale has a name for lookup',
						},
						{
							loc: [18, 19],
							title: 'Define scales',
							note:
								'scale domains can be bound to data fields using expressions',
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
					<Heading size={2} textColor="pcontrast">
						Managing Complexity
					</Heading>
					<Layout>
						<Appear>
							<Text textColor="highlight">Renderless Components</Text>
						</Appear>
					</Layout>
				</Slide>
				<Slide>
					<Image src={images.architecture} />
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

				<HeadingSlide text="Composability" />

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

				<HeadingSlide text="Accessibility" />
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
				/>
				<HeadingSlide text="Mobile" />
			</Deck>
		)
	}
}

const HeadingSlide = ({
	text,
	children,
	size = 2,
	textColor = 'pcontrast',
}) => (
	<Slide>
		<Heading size={size} textColor={textColor}>
			{text}
		</Heading>
		{children}
	</Slide>
)
