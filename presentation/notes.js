export default {
	slide1: `
    Good morning! My name is Chris Trevino, and I'm an software engineer with Microsoft Research.<br/><br/>
    To set this talk up with a little bit of context, I'd like to briefly tell you a bit about my team's work.  
  `,
	aboutMe: `
    Good morning! My name is Chris Trevino, and I'm an software engineer with Microsoft Research in Silverdale, WA.<br/><br/>

    I've been writing Javascript for about 5 years now - before that I spent a lot of time doing back-end development using tools like Java, C#, etc..<br/><br/>

    I prefer using classes and I don't mind hierarchies of them - which probably makes me a bit of a weirdo here<br/><br/>

    To set this talk up with a little bit of context, I'd like to briefly tell you a bit about my team's work.<br/><br/>

    We are kind of a newer team whose emphasis is on applying data analytics and machine learning to large sets of textual data, and trying to convey insights from that<br/><br/>

    <br/><br/><br/>    
  `,

	ourteam: `
  I'm part of a full-stack team that runs the gamut from data analysis and ML to backend data services to user interfaces. <br/><br/>
  We have a handful of very smart humans working on the Data and ML part of our problems.<br/><br/>
  We also have some team members who wore on services that apply those techniques with large data sources.<br/><br/>
  `,

	ourteam2: `
  However, I work on user interfaces.<br/><br/>
  We're a team of about 5 people, and we're giant react fanpeople. 
  `,

	ourwork: `We work on a grab-bag of data problems.<br/><br/>
  Our job usually involves looking at large datasets from sister teams and brainstorming 
  on ways to make it useful or interesting, or to glean insights from it.<br/><br/>
  
  This sometimes takes the form of brand management, helping individuals and 
  brands understand where conversations about them are happening, and what the general tone of those conversations are.<br/><br/>

  Or understanding how information flows through news and influence networks: e.g. where ideas come from and how they propagate...<br/><br/>

  Or fighting tech scams, human trafficking, and other really bad things...<br/><br/>

  Or trying to find ways to apply data to healthcare cost problems, which is a topic we're actively working on...
  <br/><br/><br/>
  `,

	uiwork: `
  Our team builds a lot of data visualizations to try and communicate a lot of 
  different kinds of data. <br/><br/>

  We're not necessarily experts in experimental data visualization: there are 
  other teams at Microsoft Research that are, but we apply visualization on almost a daily basis<br/><br/>

  A lot of times, our work is as simple as wiring up a PowerBI workbook that
  tells a story with data, and allows users to explore the data using that modality. 
  For a lot of users, that works very well.<br/><br/>

  Sometimes we make custom PowerBI visuals that help us tell those stories, we have 
  several of our own published on the PowerBI marketplace.<br/><br/>

  Sometimes we get to do one off experiments, to see what mixes of technologies work 
  well, and how well they scale with input data<br/><br/>

  And sometimes we get to make applications - in the web and on mobile, usually in React, - that deliver 
  a custom experience and tell a very specific story.
  <br/><br/><br/>
  `,

	uiemphasis: `
  Now this is all just to emphasize that for us, data visualization is absolutely essential to what we do. 
  It's ofter our first method for understanding nuance in data that's hard to discern in its raw form.<br/><br/>

  A lot of times when we work with teams, they're seeing their data visualized for the first time and it can be illuminating for them. <br/><br/>

  I would wager that data visualization is important for you too. Maybe not all of the time, and maybe it's not super complex, but we're all UI developers, and it's a problem space we all run into<br/><br/>
  Usually, this takes the form of charting...
  <br/><br/><br/>
  `,

	usingANewChartingLibrary: `
  These are the common steps we always run into when using a new charting library
  `,

	charting: `
  Charting and dataviz are basically synonymous, but when we use charts in our applications, we're usually talking about including one of a few very common types of visualizations.<br/><br/>

  There are your basic bar charts, line chart, pie charts (as gross as they are), and area charts.<br/><br/>

  If you're getting fancy, maybe you'll want a radar chart, or a box plot, or violin plot<br/><br/> 

  There are a lot more, but you'll find the basics in pretty much any charting library you download.
  <br/><br/><br/>
  `,

	stepsForUsingNewLibrary: `
  Let's take a moment to talk about what our experience is mostly like with 
  Charting libraries.<br/><br/>

  This section is a little unfair, so bear with me, but I hope it paints a picture 
  of a specific type of problem that people have when they use charting libraries
  
  <br/><br/><br/>
  `,

	npmsearch: `
  So we're making an application, and we want to include a chart. It's nothing fancy, just a bar-chart.<br/><br/>
  So we head to NPM and search for something simple that matches our use case. <br/><br/>
  And we find fancy charts (w00t!), which appears to be super popular, has lots of downloads and stars, 
  and has a clean up-front API. We just pass our data in and charts pop out.
  <br/><br/><br/>
  `,
	yarninstall: `
  So we install our new charting library, and we're stoked!!<br/><br/>
  Nothing's going wrong today, we can feel it.
  <br/><br/><br/>
  `,
	useFancyCharts: `
  And now it's time to put it into our app<br/><br/>

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
  Your boss has discussed new requirements with your customer, and your new, fancy, chart needs a little work...<br/><br/>
  `,
	smallchange: `but it's no big deal`,
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
  At this point, we have fallen off of the abstraction cliff<br/><br/>
  The abstraction we're using is brittle. 
  It's not expressive enough to adapt to subtle changes in our requirements<br/><br/>
  At this point, you may be so jaded with your fancy-charts experience that you eject it, 
  not use any abstraction at all, and rewrite the chart from scratch using custom code<br/><br/>
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
  <br/><br/><br/>
  `,

	backtobasics: `
  At this point, we're going down the road of writing our own data visualization.<br/><br/>
  We're either going to get deep the guts of scaling and drawing, or we're 
  going to look for a reliable, general purpose tool for authoring data visualization.<br/><br/>
  And if you're using Javascript at all, that means using d3...<br/><br/>
  d3 is basically the foundation of all data visualization in Javascript, so we're going to 
  break off some rust and use d3 in our application.
  <br/><br/><br/>
  `,

	react_and_d3: `  
  Because we're using React, now we have an interesting decision to make. 
  How do we integrate d3 with React? <br/><br/>
  
  The problem here is that d3 wants to handle DOM management, and so does react.<br/><br/>
  This is a problem that has been approached 
  from a few different ways. The basic approaches are <br/><br/>

  1 - We can let d3 manage its own rendering, and set up a container bridge between
  d3-land and react-land.<br/><br/>  
  
  This has the advantage that you can re-use a lot of existing d3 code, and work your 
  way up from a published examples.<br/><br/>

  But we basically have two systems rendering out data to the dom, which is a little weird<br/><br/>

  Events, when they are coming from d3 land, are going to be different that what you get in React, which affects consistency for you<br/><br/>

  It also solidly binds us into using the DOM, so this isn't 
  going to be portable when we start trying to implement this same chart in react-native.<br/><br/>

  2 - we can use the non-dom capabilities of d3 to give us a utility-bag of scaling, drawing, and 
  data manipulation utilities.<br/><br/>  

  d3 is essentially a collection of small libraries that perform different jobs, such as scaling, 
  drawing shape paths, etc.. We can use these to help us author SVG using React, to help us avoid using the Path APIs for instance
  <br/><br/>

  This makes rendering and eventing more consistent<br/><br/>
  However, we miss out on some d3 niceties such as drawing axes, legends, scrubbing, etc.., any of that nice stuff that comes
  pre-packaged with the DOM-management parts of d3
  <br/><br/><br/>
  `,

	missingAbstraction: `
  This path we've taken has led us to the zone of the missing abstraction.<br/><br/>
  We want to be able to author visualizations in higher-level terms, 
  but we run into brittle apis that force us into diving down into low-level
  rendering.<br/><br/>
  The "missing abstraction" is being able to develop visualizations using elements of a chart. Something
  that's more verbose than a top-level chart component, but fits nicely in a component ecosystem, 
  is pleasant to author with and read, and something we can be productive with.<br/><br/>

  Maybe 90% of the time, we use high-level components. But once in a while, when we need something custom,
  we can "eject" out of that, and author our visuals with lower-level components.
  <br/><br/><br/>
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
  - data transformation elements for things like aggregation, statistics, and layout computes<br/>
  - data scales to map your data to view boundaries or to colors<br/>
  - coordinate systems for drawing shapes<br/>
  - shapes to draw<br/>
  - and guide components for things like axes and legends<br/><br/>

  PUSH<br/><br/>

  As an example, we may want to encode a rectagular mark into cartesian space for every data point we encounter.<br/>
  It will have an x,y start position, width and height parameters and a color encoding.<br/><br/>

  PUSH<br/><br/>
  Now this is basically how components work, we parameterize elements that encapsulate behavior of some kind. 
  They may or may not interact with each other to coordinate their functional behavior. And we compose them
  in our applications to express something that solves a problem for us.
  <br/><br/><br/>
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

  * second, we need to assemble a scenegraph. This means taking our data 
  sources, flowing them through our specification and emitting a resultant scene that 
  expresses a abstract notion of a chart. Ideally, this should be platform agnostic.<br/><br/>

  * And finally, render it out into whatever output our system supports. 
  <br/><br/><br/>
  `,

	gogImpls: `
  So this is a cool idea, it fits nicely with our component-based awy of thingking. <br/><br/>
  Let's talk about what implementations exist for this idea.<br/><br/>
  `,

	gogGrounded: `
  First, let's talk about implementations that are grounded in the theory of the grammar of graphics. 
  These all explicitly reference the Book and attempt to implement the ideas envisioned.<br/><br/>

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
  And there's Plotly, which is an open source product with some applications and consultancy business designed around it.<br/>
  They have some great online tooling for designing charts and editing charts designed by their community members.
  
  <br/><br/><br/>
  `,

	composableLibrariesSplash: `
  Now there are other charting libraries that are not based on the Grammar of Graphics system (at least as far as I can tell), but are
  flexible and composable by virtue of being component-based.<br/><br/>

  The React development community has made some very compelling charting libraries that get us into that sweet spot of 
  being able to customize charts without making them from scratch.<br/><br/>

  <br/><br/><br/>
  `,

	composableLibraries: `  
  
  One great option is victory-charts by Formidable labs<br/><br/>

  Another great option is React-Vis by Uber. We've used this in some of our own React applications<br/><br/>
  
  Finally, there's Recharts, which is pretty popular and has a great API.<br/><br/>
  <br/><br/><br/>
  `,

	composableApis: `
  Let's take a look at their APIs.<br/><br/>

  One thing we'll see out of the gate is how taxonomic they are. What this means is   
  `,

	composableVictoryPage: `
  Victory supports a wide variety of chart types - the all look great and they're all stylable and customizable. <br/><br/>
  I'm a big fan, and I especially love that they support charting on mobile as well.
  `,

	victoryTaxonomical: `
  Their API for charting elements is kind of taxonomical in nature. <br/><br/>
  What that means is that each Victory component is basically a different kind of chart<br/><br/> 
  And the language we use to express our own charts is kind of limited by kinds of chart types they provide<br/><br/>
  
  Some libraries, even the theory-grounded ones, provide a catalogue of chart types instead of low-level primitives.<br/><br/>
  They still work well, but it's analogous to talking in prebuilt sentences instead of words.<br/><br/>

  <br/><br/><br/>
  `,

	victoryCustomizable: `
  One really nice thing about Victory is that they've thought about how users would develop custom components.<br/><br/>
  A lot of the "grammar of graphics" implementations are envisioned as closed systems that contain all the visual 
  elements you'll ever want.
  `,

	composableVictory2: `
  And even though it's taxonomical in nature, you can compose these taxonomical charts to really cool effect. 
  Here they have a pie chart expressing a breakdown of given points on an area chart.
  `,

	victoryCircle: `
  If you want to add one-off elements, like our mean line from the example, the mechanism for doing that is thunking down to SVG. <br/><br/>
  In this example from their documentation, they're composing a chart with a drawn circle using an SVG circle element.<br/><br/>
  This is still usable, but the abstraction leaks a little bit. It means we're tightly coupled to SVG, and this is why you have to use their sister library Victory-Native for drawing native charts.
  <br/><br/>
  `,

	reactVisApi: `
  The components of the react-vis API are named really well. The component types are expressed as series of mark types being drawn instead of taxonomical chart types.<br/><br/>
  This is basically just a difference in naming, but conceptually it gets us closer to the ideas in the grammar of graphics.<br/><br/>
  Instead of thinking in coarse-grained terms, we're starting to think in finer grained, more expressive terms.
  <br/><br/><br/>
  `,

	reactVisCanvasApi: `
  Switching rendering in react-vis is done by implementing a canvas-based component. <br/><br/>
  This is better than having nothing in terms of being able to switch rendering engines, but we can start to see 
  that not having a scenegraph in these libraries makes implementing alternate rendering engines difficult.`,

	rechartsDatabind: `
  The mechanism for getting data into Recharts componts is a little different than react-vis or victory<br/><br/>
  You set data at the top-level chart component, and then the elements databind to attributes of the dataset.<br/><br/>
  This may seem a little wonky at first from a component-based, but it's how other libraries such as Vega work, and they have a good reason for doing in that way, which we'll talk about in a little bit.
  <br/><br/><br/>
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
  There's a lot to like about it<br/><br/>

  But there's one kind of weird thing about recharts, and you may have noticed it, is that its API uses taxonomical chart container components.<br/><br/>

  You wrap your chart in a component describing what kind of chart it is (e.g. bar or area), and that determines what kinds of children are allowed.<br/><br/>

  There is a ComposedChart container that allows you to mix bar, area, and line pieces, but the nature of the top-level API is artificially of constraining.<br/><br/>

  A more grammar-of-graphics-ish approach would be to define a chart wrapper, set a coordinate space, and then allow any element components to be included.
  <br/><br/><br/>
  `,

	commonThemes: `
  We've talked briefly about the grammar-of-graphics theory, and we've taken a look at a few component-based charting libraries. <br/><br/>
  Let's talk about some common themes that have arisen from looking at these things together.
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
  Another concept to consider is how flexible our rendering system is - are we 
  rendering directly to a view technology (like all the libraries we've seen), 
  or are we emitting an intermediate scenegraph?<br/><br/>
  
  Scenegraph-based charting libraries, by their nature, are going to be easier to apply to different rendering technologies.<br/><br/>
  This probably has some implications for extensibility<br/><br/>
  how would render-prop based components enter into the chart?<br/><br/>
  <br/><br/><br/>
  `,
	directVsScenegraphAst: `
  I think it's useful to think of a scenegraph as having the same role in charting as abstract-syntax-trees have in programming languages.<br/><br/>
  In compilers, the front-end is turning whatever language you're writing into a generic tree of instructions, and the back-end is turning that into bits for your CPU<br/><br/>
  This allows compiler authors to switch languages or target environments fairly easily without writing a system from scratch.<br/><br/>
  <br/><br/><br/>
  `,
	dataInjectionVsDataBinding: `
  We've briefly mentioned this, but one thing we haven't dug into much is how we deal with data in our charts. 
  We've talked about different ways of injecting data into our chart components (namely direct or bound), 
  but we haven't really discussed what that means.<br/><br/>

  In all of the libraries we've seen so far, the onus for data aggregation, faceting, statistical computation, is put on the developer. 
  It's up to you to do  that performantly and inject it into the right places in your chart components. <br/><br/>
  In the "grammar of graphics", the data computation is a part of the pipeline of creating a visual.
  There are some interesting ideas on how to do this effectively, but in component-land, as far as I can tell it's kind of an open problem. 
  <br/><br/><br/>
  `,
	dataflowProblem: `
  Vega has the interesting concept of a dataflow graph. You define a reactive graph of processing steps, which my be configured up front or on the fly, pump your data through that graph, and your rendering elements use what comes out on the other side<br/><br/>
  It's unfortunately kind of hard to use outside of Vega, although they did publish a library called the "dataflow-api" that wraps up some basic functionality.<br/><br/>
  It would be nice if we could express this at the component level, or even in Javascript with a friendly API that's maybe based on Observables, and have that wire into our charts.<br/><br/> 
  <br/><br/><br/>
  `,
	showcaseVegaPage: `
  Now, going back to the theory-grounded implementations - being Javascript people, the implementation we've worked the most with is Vega<br/><br/>
  We first learned about these ideas from a talk that Dominik Moretz and Ham Wongsuphasawat from the UW IDL gave about Vega-Lite.<br/><br/>
  These tools are part of the same ecosystem, but they have slightly different philosophies.<br/><br/> 
  
  Vega-Lite is a higher-level abstraction that gives your charts some rails so that you land on nicer looking charts more quickly, and Vega is a more of a low-level, element-based, grammar-of-graphics engine.<br/><br/>

  In both of these libraries though, you author your visuals using static JSON, and the whole thing is a closed-off, seamless unit.<br/><br/>
  
  Let's look at how you'd write some charts in Vega.
  <br/><br/><br/>
  `,

	vegaBarChart: `
  Vega in practice is like a super structured d3. So there's a little bit of plumbing that goes along with it.<br/><br/>

  To start, we need to set our chart options, here's where we'd select what renderer to use - svg or canvas, and what the dimensions will be.<br/><br/>
  Axes will kind of stretch that size out, so be careful of that.<br/><br/>

  Next, we wire in our data tables. Each table has a name, and either a static definition like we have here or a source URL. <br/>
  You can also define data transformation steps that will perform aggregation or layout transform on the input data. This is the start of the 
  vega-dataflow pipeline.<br/><br/>

  Next we'll define some event handling. This sets up an internal "signaling system".<br/><br/>
  The signalling system is basically a set of named variables that the charts bind to, and are updated in response to interaciton<br/><br/>
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

  So our question, since first learning about Vega, and trying ot integrate it into our own React applications, has been - what if were were to have access to Vega's abstraction level,<br/><br/>

  But you expressed it with a component-based API instead?<br/><br/>

  And being incredibly naieve and full of hubris, we made our own library...
  <br/><br/><br/>
  `,

	chartPartsPage: `
  We're calling it chart-parts, and it's our love-letter to Vega. I hope they're not too mad.<br/><br/>
  We had a better name, but legal said no.<br/><br/>
  So I'll start off with some caveats - this is only used and developed by my team at the moment, and it's in very nascent stages<br/><br/>
  Don't expect vscode level support<br/><br/>
  `,

	chartPartsArchitectureBackend: `
  We started out by using vega's scenegraph.<br/><br/>
  Their specification is built out into a scenegraph json object that's then drawn out using your selected renderer.<br/><br/>

  We started with these objects and built a transform pipeline out into React virtual-dom. This piece of the library came up really quickly: 
  we made a few transformation functions that turn this scenegraph into a pseodo-svg model, and then that model into React-Dom-based SVG.<br/><br/>

  By leaning on React's reconciliation algorithm, we've been able to avoid dealing with DOM updates in response to scenegraph changes.<br/><br/>

  This will probably change in the future, especially as we start taking a hard look at how to resolve some performance issues, 
  but it was encouraging to see that part happen quickly<br/><br/>

  This technique also allows us to wire in react event handlers in our chart components' eventing, which makes them feel normal in a React appliaction.
  <br/><br/><br/>
  `,

	chartPartsArchitectureFrontend: `
  The specification of charts is done via our component layer. We use renderless components, which do not emit any actual DOM, but instead interact with 
  APIs as they mount. We learned about this technique from a talk Ken Wheeler gave at react-europe, and it's worked out really well, and it's had some interesting ramifications.<br/><br/>
  
  First, although our library is kind of designed around our use case of using react, it's not tightly coupled to it. 
  We made a scene-specification API that our Renderless layer is interacting with. So if React ever goes the way of Angular 1, we don't necessarily lose everything</br></br>

  And second, because there's no tacit structure between renderless components, you can combine them any way you want and insert fragments and functional components anywhere in your 
  chart structure. <br/><br/>
  This means that you have a way of managing structural complexity using your own named components
  <br/><br/><br/>
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
  If we're not bound to a table, this only renders a single instance, and the context would contain whatever datum the parent was bound to.<br/><br/>

  Here's how we encode attributes of the drawn elements. We define an encoding function for each attribute of the element we want to set. 
  This encoding function is has a single parameter: a context object containing the current view size, the named scales and data tables, the datum being rendered, and the index it appears at.<br/><br/>

  We can also encode them as static values that don't modulate based on data. <br/><br/>

  And finally, we can add event handlers for any event fired by the rendered view elements. We wanted to be able to integrate these charts into apps we were building, so we wanted to 
  be able to opt-out of the built-in signal system that Vega has and handle our own events and state management.<br/><br/>
  `,

	managingComplexity: `
  I've mentioned that Renderless Components have given us a way to manage complexity in our chart. The reason for that is that there is no tacit parent/child relationship between our elements.<br/><br/>

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
  So let's try to add that mean line element we were talking about in our example before <br/><br/>

  First, we'll extend our charting component so that it will render child elements out. We could use render props if we wanted, and that would be great for more complex situations where we want to include elements at different parts of a specification graph, but 
  in this case this will give us the effect we want<br/><br/>

  And then we simply render the children elements into the chart.<br/><br/>

  We can now define a new component for our meanLine. You'll notice that we're not binding this to a table, so it will render as a singleton instance. <br/><br/>

  PUSH<br/><br/>
  The x parameters will use the current view bounds, so it it will be the full width of the chart. 
  This lets us avoid having to define a new scale, since our X scale is categorical.<br/><br/>

  PUSH<br/><br/>
  And the y value will be the computed mean of the data.<br/><br/>
  `,

	composableComposed: `
  Now we have the basic elements that we want, and we can compose them pretty easily.<br/><br/>
  Now we're dealing with exactly the abstraction level we want - we can make meaningful component types out of our system of primitives.
  `,

	accessibility: `
  Now let's talk about accessibility. It's not normally something we consider when writing visualizations, since we normally assume that our 
  users are sighted.<br/><Br/>

  But SVG does support aria tags, and by using them in our charts, we can tell the same data stories to users who are visually impaired and use screen-readers<br/><br/>
  
  This is an area that probably needs some good feedback, and it only works with our web SVG renderer, but here's our current take on it:
  <br/><br/>
  `,

	accessibilityCode: `
  First off, we can add aria description and title tags to our chart at the top level. This would give screen reader users a high-level description of what 
  the chart is about<br/><br/>

  Next, we can encode tab indexes into our marks - this will allow screen-reader users to use keyboard navigation through elements in the chart and navigate them in sequence.<br/><br/>

  And finally we can add aria tags to individual mark elements. We can encode them like any other parameter to let them reflect the data this mark is bound to.
  `,

	accessibleLiveChart: `
  TURN ON CHROMEVOX<br/><br/>

  And now we can tab through our chart and hear descriptions of all the important data points
  `,

	mobile: `
  Now, by virtue of being scenegraph-based, we can change the target rendering technology to whatever we want, 
  provided that we have an implementation of the renderer.<br/><br/>
  
  Our react renderer is just emitting React virtual-dom, and one nice thing about this means that we can emit 
  react-native virtual-dom instead, and very easily have parity between native and mobile (at least in Javascript) 
  <br/><br/><br/>  
  `,

	mobileCode: `
  We just switch our rendere to the react-native rendere, and we can run on mobile devices.
  <br/><br/>
  
  Our react-native-svg renderer is using the component types from react-native-svg to easily implement our charts on 
  mobile devices.

  <br/><br/><br/>
  `,

	showcaseWinchester: `
  And with that, we've solved our problem, and the pint is back on.
   `,

	conclusion: `
  And that's about it!<br/><br/>
  
  I'm not going to try and sell you on the idea that our charting library is the best one you can use. 
  They all involve various engineering, stylistic, performance and theoretical tradeoffs.<br/><br/>

  But I hope you try it out and give us some feedback<br/><br/>

  But even if you decide not to, I hope you found this helpful in being able to discriminate about some different aspects of charts that maybe
  you haven't thought of before. I hope you'll gravitate towards composable, flexible libraries intead of brittle ones. <br/><br/>

  If you're thinking about making your own charting library - I hope you'll lean towards composable primitive elements and then build taxonomical 
  elements on top of those, and that you'll let your users mix and match them.<br/><br/>

  `,
}
