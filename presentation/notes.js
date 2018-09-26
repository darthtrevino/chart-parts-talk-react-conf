export default {
	slide1: `
    Good morning! My name is Chris Trevino, and I'm an engineer in Microsoft Research.<br/><br/>
    To set this talk up with some context, I'd like to tell you a bit about my team's work.  
  `,
	mapMs: `
    I'm a software engineer at microsoft research. However, my team is not based out of the main corporate hub here...
  `,
	mapSilverdale: `
    We are over here in Silverdale, with Bigfoot.<br/><br/>
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

	gog: `
  One idea that we've heard about, being adjacent to well-read visualization 
  researchers is that of the "Grammar of Graphics".<br/><br/>
  This idea originated in 1999 with the publication a book titled "The Grammar of Graphics" by Leland Wilkinson, who's a well-know visualization researcher<br/><br/>
  These ideas have a handful of implementations, in various programming ecosystems<br/><br/>
  Prof. Wilkinson has gone on to help found Tableau software.<br/><br/>

  PUSH<br/<br/>
  The grammar of graphics is named so, because it envisions an object-oriented system of charting elements that 
  operate together to form a cohesive chart. These elements are analogous to words used in 
  language to convey meaning. <br/><br/>

  PUSH<br/><br/>
  These elements consist of the basic pieces of charts we're all familiar with: <br/>
  - data transformation elements<br/>
  - data scales to map to view boundaries<br/>
  - coordinate systems for those scales<br/>
  - drawn shapes<br/>
  - and axes and legends<br/><br/>

  PUSH<br/><br/>

  As an example, we may want to encode a rectagular mark into cartesian space for every data point we encounter.<br/>
  It will have an x,y start position, width and height parameters and a color encoding.<br/><br/>

  PUSH<br/><br/>
  Now this is basically how components work, we parameterize elements that encapsulate behavior of some kind. 
  They may or may not interact with each other to coordinate their functional behavior. And we compose them
  in our applications to express something that solves a problem for us.
  `,

	gogPhases: `
  In Wilkinson's book, the main phases of the building a chart using the Grammar of Graphics are described as:<br/><br/>
  * first, specify a scene using chart-element components. 
    This specification contains a lot of moving parts, and not all of them are visual. <br/>
    &nbsp;&nbsp;- This includes data inputs,<br/>
    &nbsp;&nbsp;- data transformations and statistical aggregations, <br/>
    &nbsp;&nbsp;- scale definitions, <br/>
    &nbsp;&nbsp;- coordinate systems such as cartesian or polar, <br/>
    &nbsp;&nbsp;- rendered shapes or elements,<br/>
    &nbsp;&nbsp;- and defining any guides such as axes and legends.<br/><br/>

  * second, we need to assemble a scenegraph. This means taking our data sources, flowing them through our specification and emitting a resultant scene that 
  expresses an instance of a chart. Ideally, this should be platform agnostic. While you may want to have responsive variants of a chart, how chart elements map to 
  pixels shouldn't matter yet.<br/><br/>

  * And finally, render it out into whatever output our system supports. 
  `,

	gogImpls: `
  So this is a cool idea, it maps nicely to other frameworks and ideas we use. Let's talk about what implementations exist for this idea.
  `,

	gogGrounded: `
  First, let's talk about implementations that are grounded in the theory of the grammar of graphics. 
  These all explicitly reference the text and attempt to implement the ideas fully.<br/><br/>

  PUSH<br/><br/>
  The first implementation I'm aware of is ggplot2 for R, and it's super popular there. 
  It was made in 2005 by a statistician named Hadley Wickham.<br/><br/>

  PUSH<br/><br/>
  There's an implementation in Python called ggplot, and it's based on ggplot2<br/><br/>

  PUSH<br/><br/>
  In Javascript, there's Vega which is made by Jeff Heer at the UW IDL.

  PUSH<br/><br/>
  There's Vega-Lite, which is a terser, on-rails abstraction on top of Vega. 
  This is also made by the university of washington IDL. This was the first version of the Grammar of Graphics
  that my team learned about from a talk by Dominik Moretz at UW. We all fell in love with the concept after that.

  PUSH<br/><br/>
  Going back to python, there's Altair, which is a port of Vega-Lite.

  PUSH<br/><br/>
  Alibaba has an implementation called g2, which powers their BizCharts components.<br/><br/>

  PUSH<br/><br/>
  And there's Plotly, which is an open source product that the Plotly company offers products designed around.<br/>
  They have some great online tooling for designing charts and editing charts designed by their community members.<br/><br/>
  `,

	composableVictory: `
  Now there are other charting libraries that might not technically implement all the ideas in the "grammar of graphics", are
  flexible and composable by virtue of being component-based.<br/><br/>
  The React development community has made some very compelling charting libraries that get us into that sweet spot of 
  being able to customize charts without making them from scratch.<br/><br/>

  PUSH
  One great option is victory-charts by Formidable. These are absolutely gorgeous. 
  `,

	composableVictoryPage: `
  Victory supports a wide variety of chart types - the all look great and they're all stylable and customizable. <br/><br/>
  I'm a big fan, and I especially love that they support charting on mobile as well.
  `,

	victoryTaxonomical: `
  Their API for charting elements is kind of taxonomical in nature. Meaning that each victory component is basically a sub-chart.  
  This is a notable distinction between charting libraries. Some libraries, even the theory-grounded ones, support a broad catalogue that 
  contains most of the charting types that you'll ever be interested in instead of low-level primitives. They then provide rich 
  interaction capabilites or customizability
  `,

	victoryCustomizable: `
  One really nice thing about Victory is that they've thought about how users would develop custom components. 
  A lot of the "grammar of graphics" implementations are envisioned as closed systems that contain all the visual 
  elements you'll ever want.
  `,

	composableVictory: `
  And even though it's taxonomical in nature, you can compose these taxonomical charts to really cool effect. 
  Here they have a pie chart expressing a breakdown of given points on an area chart.
  `,

	victoryCircle: `
  If you want to add one-off elements, like our mean line from the example, the mechanism for doing that is thunking down to SVG. <br/><br/>
  In this example from their documentation, they're composing a chart with a drawn circle using an SVG circle element.<br/><br/>
  This is still usable, but the abstraction leaks a little bit, and it means that you have to use their sister library Victory-Native for drawing native chart. It also means you're tightly coupled to SVG
  `,
}
