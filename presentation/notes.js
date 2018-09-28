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

	reactVis: `
  Another great option is React-Vis by Uber. We've used this in some of our React applications, and it's been fantastic.
  `,

	reactVisApi: `
  The components of the react-vis API are named really well. The component types are expressed as series of mark types being drawn instead of chart types.<br/><br/>
  This is basically just a difference in naming, but conceptually it gets us closer to the ideas in the grammar of graphics.
  `,

	reactVisCanvasApi: `
  Switching rendering in react-vis is done by implementing a canvas-based component. <br/><br/>
  This is better than nothing in terms of switching rendering engines, but we can start to see 
  not having a scenegraph metaphor in these libraries makes alternate rendering engines difficult.`,

	rechartsPage: `
  The last one we're going to look at is a library called Recharts.<br/><br/>
  This is a library that we didn't really learn about until I was getting this talk ready, and it gave me just a touch
  of existential despair. But it has some fantastic qualities that make it fit well into the ideas of the "grammar of graphics".
  `,

	rechartsDatabind: `
  The mechanism for getting data into Recharts componts is a little different than react-vis or victory<br/><br/>
  You set data at the top-level chart component, and then the elements databind to attributes of the dataset.<br/><br/>
  This may seem a little wonky at first, but it's how other libraries such as Vega work, and there's good reason for them to do it that way,
  which we'll get to shortly.
  `,

	rechartsCustomizability: `
  Recharts' customizability is pretty great. It exposes render-prop extension points where you can customize all kinds of aspects about the chart, 
  from how marks render, to how axis ticks or tooltips render.
  `,

	rechartsTooltips: `
  And it has great tooltip support. The tooltip component displays the data point you're hovering over, but you can use your own components to put whatever
  you want here.
  `,

	rechartsTaxonomical: `
  One kind of weird thing about recharts, and you may have noticed it, is that its API uses taxonomical chart container components.<br/><br/>
  You wrap your chart in a component describing what kind of chart it is (e.g. bar or area), and that determines what kinds of children are allowed.<br/><br/>
  There is a ComposedChart container that allows you to mix bar, area, and line pieces, but the nature of the top-level API is artificially of constraining.<br/><br/>
  A more grammar-of-graphics-ish alternative would be to define a chart wrapper, a coordinate space, then allow any element.
  `,

	commonThemes: `
  Now that we've looked at a few composable libraries, and have thought about them from the viewpoint of the grammar of graphics, 
  there are some common themes and ideas we've picked up.
  `,

	taxonomyVsElements: `
  The first one is the language of abstraction we use when defining our composable components: 
  are we expressing a fixed range of possible taxonomies, or lego pieces that can be assembled arbitrarily?<br/><br/>

  A lot of great charting libraries use taxonomical components, and they can pull off quite a bit, but they can result in abstraction leaks
  when we need to add one-off subtle elements<br/><br/>

  There's no reason these can't co-exist together. In our applications we probably want to use really terse taxonomical tags that are composed of custom pieces, 
  and we want to be able to eject out into the raw pieces, or add new children if we need to customize our chart<br/><br/>
  `,
	directVsScenegraph: `
  Another concept to consider is how flexible our rendering system is - are we rendering directly to a view technology or are we emitting an intermediate scenegraph?<br/><br/>
  Scenegraph-based charting libraries, by their nature, are going to be easier to apply to different rendering technologies.<br/><br/>
  This probably has some implications for what extensibility means in our applications - how would a custom element wind up in a scenegraph object?
  `,
	directVsScenegraphAst: `
  I think it's useful to think of a scenegraph as having the same role in charting as abstract-syntax-trees have in programming languages.<br/><br/>
  In compilers, the front-end is turning whatever language you're writing into a generic tree of instructions, and the back-end is turning that into bits for your CPU<br/><br/>
  This allows compiler authors to switch languages or target environments fairly easily without writing a system from scratch.<br/><br/>
  `,
	dataInjectionVsDataBinding: `
  One thing we haven't dug into much is how we deal with data in our applications. We've talked about different ways of injecting data into our chart components,
  but we haven't really discussed what that means.<br/><br/>
  In all of the libraries we've seen so far, the onus for data aggregation, faceting, statistical computing, etc.. is put on the developer. It's up to you to do 
  that performantly and inject it into the right places in your application. <br/><br/>
  In the "grammar of graphics", the data computation is a part of the pipeline of creating a visual.
  There are some interesting ideas on how to do this effectively, but in component-land, as far as I can tell it's kind of an open problem. 
  `,
	dataflowProblem: `
  Vega has the interesting concept of a dataflow graph. You define a reactive graph of data tables, and signals occur at various points in the graph to mutate processing parameters
  or to pump in new data. <br/><br/>
  It's unfortunately kind of hard to use outside of Vega, although they did publish a library called the "dataflow-api" that wraps up some basic functionality.<br/><br/>
  It would be nice if we could express this at the component level, or even in Javascript with a friendly API that's maybe based on Observables, and have that wire into our charts.<br/><br/> 
  `,
	showcaseVegaPage: `
  Now, going back to the theory-grounded implementations - being Javascript people, the implementation we've worked the most with is Vega<br/><br/>
  We first learned about these ideas from a talk that Dominik Moretz and Ham Wongsuphasawat from the UW IDL gave about Vega-Lite.<br/><br/>
  These tools are part of the same ecosystem, but they have slightly different philosophies.<br/><br/> 
  
  Vega-Lite is a high-level abstraction that gives you some on-rails niceties for free, and Vega is a more low-levelelement-based grammar-of-graphics engine.<br/><br/>

  In both of these libraries though, you author your visuals using static JSON, and the whole thing is a closed-off, seamless unit.<br/><br/>
  
  Let's look at how you'd write some charts in Vega.
  `,

	vegaBarChart: `
  Vega in practice is like a super structured d3. So there's a little bit of plumbing that goes along with it.<br/><br/>

  To start, we need to set our chart options, here's where we'd select what renderer to use - svg or canvas, and what the dimensions will be.<br/><br/>
  Axes will kind of stretch that size out, so be careful of that.<br/><br/>

  Next, we wire in our data tables. Each table has a name, and either a static definition like we have here or a source URL. <br/>
  You can also define data transformation steps that will perform aggregation or layout transform on the input data. This is the start of the 
  vega-dataflow pipeline.<br/><br/>

  Next we'll define some event handling. This sets up an internal "signaling system" where vega knows that a variable updated and will respond accordingly.<br/><br/>
  There's an API on the chart object that will let you subscribe to these in your app.<br/><br/>

  Next you define your scales. These map your data to view dimensions.<br/><br/>

  Then we'll define our axis components, oriented to the edges of our view-space<br/><br/>

  Finally, we'll define our visual components. These will be bound to data<br/><br/> 
  Or to static values <br/><br/>  
  `,

	vegaBarChartLive: `
  And now we have a bar-chart in Vega.
  `,

	whatif: `
  There's some component-based thinking going on within Vega. It provides individual components such as scales, axes, marks and legends that 
  are configured either statically or in a data-bound way.<br/><br/>

  But a declarative JSON-based API like that is kind of a pain to work with. You don't have great debugging seams, and it can be difficult to reason about the
  structure of a chart. This is only exacerbated as the complexity of a chart grows.<br/><br/>
  
  What we really want is something that like the composable API's we've looked at before.<br/><br/>

  But Vega has some fantastic thought put into it, in terms of how you structure and express charts, how you manage dataflow, etc..<br/><br/>

  So our question, since first learning about Vega, has been - what if were were to have access to Vega's abstraction level,<br/><br/>

  But you expressed it with a component-based API instead?<br/><br/>

  And we're incredibly naieve and full of hubris, so we made our own library...
  `,

	chartPartsPage: `
  We're calling it chart-part, and it's our love-letter to Vega.<br/><br/>
  We had a better name, but legal said "no".<br/><br/>
  So I'll start off with some caveats - this is only used and developed by my team at the moment, and it's in very nascent stages<br/><br/>
  Don't expect vscode level support<br/><br/>
  `,

	chartPartsArchitectureBackend: `
  We started out by using vega's scenegraph.<br/><br/>
  Their specification is built out into a scenegraph json object that's then drawn out using your selected renderer.<br/><br/>

  We started with these objects and built a transform pipeline out into React. This piece of the library was came up really quickly, 
  we made a few transforming funcitons that turn this scenegraph into a pseodo-svg model, and then that model into React-Dom SVG.<br/><br/>

  By leaning on React's reconciliation algorithm, we've been able to avoid dealing with DOM updates.<br/><br/>

  This will probably change in the future, especially as we start taking a hard look at how to resolve some performance issues, 
  but it was encouraging to see that part happen quickly<br/><br/>

  This technique also allows us to wire in react event handlers in our chart components' eventing, which gives them kind of a nice, at-home feel.
  `,

	chartPartsArchitectureFrontend: `
  The specification of charts is done via our component layer. We use renderless components, which do not emit any actual DOM, but instead interact with 
  APIs as they mount. We learned of this technique from a talk Ken Wheeler gave at react-europe, I think, and it's worked out really well, and has
  had a couple of ramifications.<br/><br/>
  
  First, although our library is kind of designed around our use case of using react, it's not tightly coupled to it. 
  We made a scene-specification API that our Renderless layer is interacting with. So if React ever goes the way of Angular 1, we don't necessarily lose everything</br></br>

  And second, because there's no tacit structure between renderless components, you can combine them any way you want and insert fragments and functional components anywhere in your 
  chart structure. This means that you have a way to kind of document the structural complexity in interacting with whatever API you're dealing with<br/><br/>
  `,

	chartPartsArchitectureDropout: `
  One interesting thing about this technique is that if you look at the flow of when things are in "react-land" vs when they are in vanilla Javascript land, 
  we're only in React-land at the very beginning and end of chart construction.<br/><br/>

  Everything between those points is data binding into a scenegraph and the scenegraph being transformed into virtual-dom.
  `,

	chartPartsBarChart: `
  Let's take a look at what our API looks like.<br/><br/>
  
  So first, we're going to import our charting components. In this case we need a top-level chart, axes, a rectangle and some scales.<br/><br/>
  
  Next we'll pick a renderer. Right now we have an React SVG and a React-Native-SVG renderer, but we're considering adding one for PIXI as well.<br/><br/>

  Next we set up a top-level chart. Here's where we'll set top-level values such as the width, height, padding, the renderer, and data tables for the chart<br/><br/>

  And next we'll define some scales. Scales in chart-parts are independent components that can be referenced by other components<br/><br/>

  Each scale has a name, which we'll use to reference from the drawn components.<br/><br/>

  And we can bind it to a domain of the source data. Any lodash expression will work<br/><br/>
  
  We can also bind it to a view dimension. As we build complex charts, these view dimensions could be a subsection of the top-level chart, 
  and so this will allow us to map to those dimensions. As we add axes, this will exclude that space as well<br/><br/>

  Next we'll add Axis components, anchored to an edge of the viewspace and bound to a scale. These can also be customized with tick label formatting, tick counts, etc..<br/><br/>
  
  And finally, we'll define our drawn element.<br/><br/>

  We can bind to a data table in our dataset. For each row in that data table we'll emit a rectangle into our scenegraph<br/><br/>

  Here's how we encode attributes of the drawn elements. We define an encoding function for each attribute of the element we want to customise. 
  This encoding function is a context object containing the current view size, the named scales and data tables, the datum being rendered, and the index it appears at.<br/><br/>

  We can also encode them as static values. If we're not bound to a table, this only renders a single instance, and the context would contain whatever datum the parent was bound to.<br/><br/>

  And finally, we can add event handlers for any event on the rendered view elements. We wanted to be able to integrate these charts into apps we were building, so we wanted to 
  be able to opt-out of the built-in signal system and handle our own events and state.<br/><br/>
  `,

	managingComplexity: `
  I've mentioned that Renderless Components have given us a way to manage complexity in our chart. The reason for that is that there is no tacit parent/child relationship betewen our elements.<br/><br/>

  In some charting libraries, you'll see that there's some boilerplate work done to ensure that only valid child components are used, and that kind of precludes the ability to insert your own abstraction.<br/><br/>

  Since renderless components orchestrate api interactions under the hood, and the nodes in our specification graph all have the same kinds of elements, we can organize these using Function Components pretty easily<br/><br/>
  `,

	barChartSFC: `
  In this code snippet, we're taking the same bar chart, but we're going to slice it up a little. This is a trivial example, but it demonstrates the idea.<br/><br/>
  We have custom components that encapsulate our scale and axis components, and below we have function components that define those elements.
  `,

	composability: `
  The flexibility afforded to us by renderless components also allows us to compose and augment charting elements in a very fluid way.  
  `,
	composabilityCode: `
  So if we take a look at our bar chart, you'll notice off the bat that we're going to use the react children. We could use render props if we wanted, and that would be great for more complex situations, but 
  in this case this will give us the effect we want<br/><br/>

  And then we simply render the children elements into the chart.<br/><br/>

  We can now define a new component for our meanLine. You'll notice that we're not binding this to a table, so it will render as a singleton instance. <br/><br/>

  PUSH<br/><br/>
  The x parameters will use the current view bounds, so it it will be the full width of the chart. 
  This lets us avoid having to define a new scale, since our X scale is categorical.<br/><br/>

  PUSH<br/><br/>
  And the y value for this line will be the mean of the data.
  `,

	accessibility: `
  Now let's talk about accessibility. It's not normally something we consider when writing visualizations, since we normally assume that our 
  users are sighted.<br/><Br/>

  But SVG does support aria tags, by supporting them in our charts, we can tell the same data stories to users who are visually impaired<br/><br/>
  
  This is an area that probably needs some good feedback, and it only works with our web SVG renderer, but here's our take on it:
  `,

	accessibilityCode: `
  First off, we can add aria description and title tags to our chart at the top level. This would give any screen reader users a high-level description of what 
  the chart is about<br/><br/>

  Next, we can encode tab indexes into our marks - this will allow screen-reader users to tab through key marks in chart and navigate them in sequence.<br/><br/>

  And finally we can add aria tags to individual mark elements, and encode them like any other tag to enrich them with some data.
  `,

	accessibleLiveChart: `
  TURN ON CHROMEVOX

  And now we can tab through our chart and hear descriptions of all the important data points
  `,
}
