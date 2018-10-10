const line = '<br/><br/>'
const end = '<br/><br/><br/>'
const tab = `&nbsp;&nbsp;&nbsp;&nbsp;`
const bulletab = `${tab}•&nbsp;`
const separator = `---------------${line}`

export default {
  slide1: `
    Good morning!
    ${line}

    Let's talk about charting
  `,
  aboutMe: `
    I'm Chris Trevino${line}
    ${bulletab}Software engineer with Microsoft Research in Silverdale, WA.${line}
    ${bulletab}Writing Javascript for 5 years${line}
    ${bulletab}Before that, back-end dev (Java, C#, C++)${line}
    ${bulletab}I use classes a lot${line}
    ${bulletab}Please don't kick me out${line}

    ${separator}

    To set context, talk about my team's work${line}
    ${bulletab}We are a newer team at MSR${line}
    ${bulletab}made of researchers${line}
    ${bulletab}data analysts${line}
    ${bulletab}backend developers ${line}
    ${bulletab}UI developers${line}

    ${separator}
    
    Our emphasis is on applying${line}
    ${bulletab}data-analytics and${line}
    ${bulletab}machine learning${line}
    ${bulletab}to large sets of textual data${line}
    ${bulletab}and trying to convey insights that data${line}
    ${end}    
  `,

  uiwork: `
    Our team builds a lot of data visualizations to try and communicate a lot of different kinds of data.${line}
    ${bulletab}We apply data visualization and analytic processes daily${line}

    ${separator}

    A lot of times, our work is as simple as wiring up a PowerBI notebooks with ready-to-go visualizations${line}
    Other times we get to dig into custom visualizations and one-off experiments${line}

    And sometimes we get to make applications${line}
    ${bulletab}in the web and on mobile, usually in React${line}
    ${bulletab}that deliver a custom experience and tell a very specific story.
    ${end}
  `,

  uiemphasis: `
    Now all this background is just to emphasize that${line} 
    ${bulletab}for us, data visualization is absolutely essential to what we do.${line}
    ${bulletab}our primary mechanism for understanding nuance in data${line}
    ${bulletab}hard to discern in its raw form.${line}

    ${separator}

    Sometimes when we work with teams, they're seeing their data visualized for the first time${line}
    ${bulletab}or arranged in a new way${line}
    ${bulletab}and it can be illuminating for them. ${line}

    ${separator}

    I would wager that data visualization is important for you too.${line}
    ${bulletab}Maybe not all of the time${line}
    ${bulletab}and maybe it's not super complex${line}
    ${bulletab}but we're all UI developers, and it's a problem space we all run into${line}
    ${bulletab}Usually, this takes the form of charting...
    ${end}
  `,

  charting: `
    When use charts, we're usually talking about one of a few common types.${line}

    ${separator}

    There are your basic${line}
    ${bulletab}bar charts${line}
    ${bulletab}line chart,${line}
    ${bulletab}pie charts (as gross as they are),${line}
    ${bulletab}and area charts.${line}

    If you're getting fancy, maybe you'll want a${line}
    ${bulletab}radar chart,${line}
    ${bulletab}or a box plot${line}

    ${separator}

    There are a lot more kinds of classical charts
    but you'll find the basics in pretty much any charting library you use.${line}

    ${separator}
    But now and then, these may not solve the your problem, 
    and you may want a custom visual, or even something as tame as a minor variant on an existing visual.${line}

    And to illustrate that, let's walk through an example${line}

    ${end}
  `,

  stepsForUsingNewLibrary: `
    Let's take a moment to talk about our experience with Charting libraries.${line}

    This section is a little unfair, so bear with me but I hope it paints a picture of${line}
    ${bulletab}a specific type of problem that people with charting,${line}
    ${bulletab}or high abstractions in general${line}
    
    ${end}
  `,

  npmsearch: `
    We're knee-deep into making an application${line}
    ${bulletab}and we want to include a chart${line}
    ${bulletab}It's nothing fancy, just a bar-chart.${line}

    ${separator}

    So we head to NPM and search for something simple that matches our use case. ${line}
    ${bulletab}And we find fancy charts (woop woop!)${line}
    ${bulletab}which appears to be super popular${line}
    ${bulletab}it has lots of downloads and stars${line}
    ${bulletab}and has a clean up-front API${line}
    ${bulletab}We just pass our data in and charts pop out${line}
    ${end}
    `,

  yarninstall: `
    So we install our new charting library${line}
    ${bulletab}and we're stoked!${line}
    ${bulletab}Nothing's going wrong today, we can feel it.${line}
    ${end}
  `,

  useFancyCharts: `
    And now it's time to wire the chart it into our app${line}

    ${bulletab}We import the Bar Chart component into our application, easy peasy.${line}
    ${bulletab}Then we add the chart component to our render function${line}
    ${bulletab}And we send pass in our data over the props interface.${line}
    ${bulletab}This is great, couldn't be easier.${line}
    ${end}
  `,

  fancybarchartrendered: `
    And so we have our bar chart, and it's absolutely perfect in every way, and soooo...
  `,

  winchester: `
    We finished something today, so it's time to head to the pub and celebrate....${line}
    However...${line}
  `,

  lumbergh: `
    Your boss has discussed new requirements with your customer, and your new, fancy, chart needs a little work...${line}
  `,

  smallchange: `
    but it's no big deal, you definitely shouldn't freak out
  `,

  barchartwithmean: `
    According to the new requirements, all we need to do is add a mean-line to our bar chart.${line}
    For some reason, it's super important for the analysts, and it's a key metric for them.
  `,

  barchartapi: `
  So we take a look at the API docs. Is there a way of adding a new mark on the chart? 
  Can we add any child components?${line}
  No, no we can not.
  `,
  hans: `
  At this point, we have fallen off of the abstraction cliff${line}
  The abstraction we're using is brittle.${line}
  ${bulletab}It's not expressive enough to adapt to subtle changes in our requirements${line}
  
  ${separator}

  At this point, you may be so jaded with your fancy-charts experience that you eject it.${line}
  Maybe now you don't want to use any abstraction at all, and rewrite from scratch${line}
  ${bulletab}will probably involve d3${line}
  ${bulletab}you have to decide how to make react and d3 work together${line}
  ${bulletab}both of those technologies control what goes to the DOM${line}
  ${end}
  `,

  missingAbstractionFront: `
    We've landed in the zone of the missing abstraction${line}
    It feels like there should be something better, what would it look like?${line}
    ${end}
  `,

  missingAbstraction: `
    We want to be able to author visualizations in higher-level terms${line}
    ${bulletab}but we run into brittle apis that force us into diving down into low-level rendering.${line}
    ${bulletab}it feels like there should be something in the middle of those options.${line}
    ${bulletab}Something more verbose than a chart tag${line}
    ${bulletab}Something higher-level than 2d instances${line}
    ${bulletab}Something that lends us productivity and flexibility${line}
    
    ${separator}
    Maybe 90% of the time, we use high-level components.${line}
    But once in a while${line}
    ${bulletab}if we need to customize a chart${line}
    ${bulletab}we can "eject" out of it, like we can our build systems (with CRA)${line}
    ${bulletab}and tweak it however we want..
    ${end}
  `,

  composableLibrariesSplash: `
  Now there are other charting libraries that are not based on the Grammar of Graphics system (at least as far as I can tell), but are
  flexible and composable by virtue of being component-based.${line}

  The React development community has made some very compelling charting libraries that get us into that sweet spot of 
  being able to customize charts without making them from scratch.${line}

  ${end}
  `,

  composableFront: `
    Instead of using a high-level charting API${line}
    ${bulletab}maybe we decide to look for a composable charting option in react.${line}
    ${bulletab}As it turns out, there are a few pretty nice options available${line}
    ${end}
  `,

  composableLibraries: `  
    One great option is victory-charts by Formidable labs${line}
    ${bulletab}Victory has some pretty great qualities${line}
    ${bulletab}One of the only mobile options${line}
    ${bulletab}custom elements${line}
    ${bulletab}animations api${line}

    ${separator}
    Another great option is React-Vis by Uber.${line}
    ${bulletab}Their API is pretty flexible and low-level${line}
    ${bulletab}We've used this in some of our own React applications${line}
    
    ${separator}
    
    Finally, there's Recharts${line}
    ${bulletab}we haven't tried this in our applications yet${line}
    ${bulletab}pretty popular${line}
    ${bulletab}which is pretty popular and has a great, flexible API.${line}
    
    ${end}
  `,

  composableLibraryIssues: `
    There are some issues you may run into using these${line}
    ${bulletab}I don't want to trash these libraries, because they're all pretty great${line}
    ${bulletab}And maybe these aren't really deal-brakers for your use case${line}
    ${bulletab}But they're things we've run into${line}
    ${end}
  `,

  composableLibrariesTaxonomic: `
    One thing you'll notice is that to varying degrees, their APIs are taxonomic${line}
    
    What this means is that${line}
    ${bulletab}the element API reflects a fixed set of chart-types${line}
    ${bulletab}these might be composable, and you can do really interesting things with that${line}
    ${bulletab}but it's kind of like using pre-made sentences to express our language instead of words${line}

    ${separator}
    On the left, here's the basic chart elements for Victory${line}
    ${bulletab}These are the composable elements we use to put charts together${line}
    
    ${separator}
    And on the right, here's Recharts' top-level API${line}
    ${bulletab}The kinds of components you can use in these charts is determined by the kind of top-level chart you have${line}
    ${end}
  `,

  coupledToRendering: `
  Another issue we run into is that we're often coupled to a specific rendering technology${line}
  
  ${separator}
  In Victory, this is how we can add low-level elements to our chart.${line}
  ${bulletab}In this piece of code, an Area chart is rendered with an adjaced circle by thunking down to raw SVG${line}
  ${bulletab}This gives us pretty nice flexibility${line}
  ${bulletab}but the abstraction is a little leaky${line}

  ${separator}
  In react-vis, this means that for each component type we're interested in${line}
  ${bulletab}there's a canvas implementation and an svg implementation${line}
  ${bulletab}which may be a little weird, and the raw svg approach from the victory example would be brittle${line}

  ${separator}
  In any of these libraries, and in most charting libraries in general, this means that we are solidly coupled 
  to the DOM.${line}

  This is one of the reasons why getting parity on mobile using React-Native is such a pain in the ass${line}
 ${bulletab}Only victory has any kind of mobile library at all${line}
 ${bulletab}And it requires you to use a separate library${line}
 ${bulletab}Which means that the raw svg tricks we're using will not work there${line}
 ${bulletab}Or we have to adapt it to use whatever rendering technology is backing it${line}
  ${end}
  `,

  diyDataflow: `
  One final thing we see is that we are responsible for bringing our own data operations${line}

  For simple charts' this isn't a big deal. But if we have a complex chart with a lot of${line}
  ${bulletab}data filtering, statistical computations, or data faceting${line}
  ${bulletab}this starts to get a little hairier${line}
  ${bulletab}especially if these things interact dynamically and we want to be performant${line}
  ${end}
  `,

  victoryTaxonomical: `
  Their API for charting elements is kind of taxonomical in nature. ${line}
  What that means is that each Victory component is basically a different kind of chart${line} 
  And the language we use to express our own charts is kind of limited by kinds of chart types they provide${line}
  
  Some libraries, even the theory-grounded ones, provide a catalogue of chart types instead of low-level primitives.${line}
  They still work well, but it's analogous to talking in prebuilt sentences instead of words.${line}

  There's no reason these can't co-exist together.${line}
  One pretty normal concept is to build terser, higher abstractions on top of lower abstractions${line}
  which gives us the flexibility to glissade between those different modes of expression${line}
 
  ${end}
  `,

  gogFront: `
  One idea that we've heard about, being adjacent to well-read visualization researchers is that of the "Grammar of Graphics".${line}
  It's an idea that we've found kind of exciting and satisfies a lot of our expressibility wants${line}

  ${end}
  `,

  gogWalk: `
  ${separator}  
  This idea comes from a book that was published in 1999 titled "The Grammar of Graphics" by Leland Wilkinson, 
  who's a well-know visualization researcher${line}
  These ideas have a handful of implementations, in various programming ecosystems${line}

  ${separator}

  The grammar of graphics is named so, because it envisions an system of object-oriented
  charting elements that operate together to form a cohesive chart.${line}
  These elements are analogous to words used together in sentences, syntactically and semantically, to convey meaning.${line}
  This was diametrically opposed to charting technologies of the time which were exclusively taxonomic in nature${line}
  A major emphasis in the grammar of graphics is to eschew taxonomies for recombinable, expressive lego pieces${line}

  ${separator}
  
  These elements consist of the basic pieces of charts we're all familiar with:${line}
  ${bulletab}data transformation elements for things like aggregation, statistics, and layout computes${line}
  ${bulletab}data scales to map your data to view boundaries or to colors${line}
  ${bulletab}coordinate systems for drawing shapes${line}
  ${bulletab}shapes to draw${line}
  ${bulletab}and guide components for things like axes and legends${line}

  ${separator}
  
  As an example, say we have a rectangle component, 
  and we want to encode an instance of it into our chart in cartesian space${line}
  This rectangle will encoded parameters for its ${line}
  ${bulletab}x,y start position${line}
  ${bulletab}width and height${line}
  ${bulletab}and a color.${line}

  ${separator}
  
  Now this is basically how components work${line}
  ${bulletab}we parameterize elements that encapsulate behavior of some kind.${line}
  ${bulletab}They may or may not interact with each other to coordinate their functional behavior.${line}
  ${bulletab}And we compose them in our applications to express something that solves a problem for us.
  ${end}
  `,

  gogPhases: `
  In Wilkinson's book, the grammar-of-graphics is described by a specification language, and then charts are created by working through a process.${line}
  
  The main phases of creating charts using the Grammar of Graphics are described as:${line}

  ${separator}
  First, specify a scene using chart-element components. This specification contains a lot of moving parts, and not all of them are visual.${line}
  ${bulletab}This includes data inputs${line}
  ${bulletab}data transformations and statistical aggregations${line}
  ${bulletab}scale definitions${line}
  ${bulletab}coordinate systems such as cartesian or polar${line}
  ${bulletab}rendered shapes or elements${line}
  ${bulletab}and defining any guides such as axes and legends.${line}

  ${separator}
  Next, we need to assemble an abstract scenegraph.${line}
  ${bulletab}This means taking our data sources${line}
  ${bulletab}flowing them through our specification${line}
  ${bulletab}and emitting a resultant scene that expresses a abstract notion of a chart.${line}

  It's important that this scenegraph is abstract, because it gives us the ability to use the same scenegraph 
  and specification language on different platforms.${line}
  
  You could consider SVG or DOM a scenegraph specification, but they're coupled to technology, and to the browser.${line}

  ${separator}

  And lastly, we render the scenegraph out into whatever output our system supports.${line}

  ${separator}
  If you squint just a little bit, this process looks a lot like the process of a compiler.${line}
  And the abstract scenegraph plays the same role as the abstract syntax tree does for compilers${line}
  
  In compilers${line}
  ${bulletab}the front-end is work before the scenegraph, turning your program specification into a generic tree of instructions${line}
  ${bulletab}and the back-end turns that abstract specification into bits for your computer${line}
  ${bulletab}This allows compiler users to be able to switch languages or target environments fairly easily without needing a whole system from scratch.${line}
  
  ${end}
  `,

  dataflowProblem: `
  In the grammar of graphics, we're not just dealing with rendered view elements, there's also a system of
  filtering, statistical aggregations, data faceting, and general data manipulation, that helps to form our language of specification.${line}

  A feature you may see in Grammar of Graphics implementations is a dataflow graph.${line}
  
  A dataflow graph is a way of describing data transforms as a pipeline of processing nodes.${line}
  Each node can augment, aggregate, or cull data from our source data tables.${line}
  Ideally, they can perform these computations progressively, so that we can support progressive rendering by using streaming data sources${line}
  Or we can respond efficiently to filtering and pivoting operations.${line}

  ${separator}

  So the way these things work, you describe a network of transform nodes that are dependent on each other's output,${line}
  ${bulletab}pump your data into the input nodes${line}
  ${bulletab}and your rendering elements use what comes out on the other side${line}
  ${bulletab}it can even extend beyond this point with data faceting${line}
  ${bulletab}and data operations that dovetail with view specification${line}

  ${separator}

  This is still kind of an open problem in component-land.${line}
  The Vega project, which we'll see in a minute, features a data transform graph as a key concept, but it's difficult to use outside of Vega.${line}  
  
  It would be nice if we could express this at the component level - maybe something that's based on Observables and emerging signal-graph work.${line} 

  Something like this would benefit every Javascript charting library.
  ${end}
  `,

  gogImpls: `
  So this is a cool idea, it fits nicely with our component-based way of thinking. ${line}
  What are our options for implementations of this?${line}
  `,

  showcaseVegaPage: `
  If you're in Python or R, you have ggplot and altair, which are widely used${line}
  But we're javascript developers${line}
  And being Javascript people, the 800lb gorilla, the primary implementation, is Vega${line}
  
  ${separator}
  Vega is made by the University of Washington's Interactive Data Lab.${line} 
  Our first exposure to the ideas of the Grammar of Graphics was when Dominik Moretz came to our campus and gave a talk on Vega-Lite${line}

  ${separator}
  Vega comes in two flavors, Vega and Vega Lite. ${line}
  They're part of the same ecosystem, but with different goals${line}
  Vega is a lower level abstraction on orchestrating scales and primitives${line}
  And Vega-Lite is a higher-level abstraction for making charts that look good and follow best practices${line}
  To lean on the grammar analogy a bit, Vega is concerned with Syntax - the structure of when words can be used.${line}
  And vega-lite is concened with semantics - how can we make words that make sense together${line}

  ${separator}
  In both of these libraries though${line}
  ${bulletab}you author your visuals using static JSON${line}
  ${bulletab}and the whole thing is a closed-off, seamless unit.${line}  
  
  This is great for transport and sharing scenarios, but it makes authoring them kind of difficult.${line}
  Let's look at how you'd write some charts in Vega.
  ${end}
  `,

  vegaBarChart: `
    Vega in practice is like a super structured d3.${line}
    So there's a little bit of plumbing that goes along with it.${line}
    
    To start, we need to set our chart options,${line}
    ${bulletab}here's where we'd select what renderer to use - svg or canvas,
    ${bulletab}the background color of the chart${line}
    ${bulletab}and the dimensions and padding to use${line}
    ${bulletab}axes will stretch that size out, so be careful of that.${line}

    ${separator}

    Next, we wire in our data tables.${line}
    ${bulletab}Each table has a name${line}
    ${bulletab}And it consists of an array of objects${line}
    ${bulletab}and either a static definition like we have here or a URL.${line}

    You can also define data transformation steps that will perform aggregation or layout transform on the input data.${line}
    This is the start of the vega-dataflow pipeline.${line}

    ${separator}

    Next we'll define some event handling. This sets up an internal "signaling system".${line}

    We haven't talked about signals yet, but in Vega,${line}
    ${bulletab}signals are basically a set of named variables that the charts cand bind to${line}
    ${bulletab}and update when interactions happen${line}

    It's basically like an embedded, declarative Redux${line}

    When you instantiate this in JS, there's an API on the view object Vega gives you that will let you ${line}
    ${bulletab}subscribe to changes and ${line}
    ${bulletab}mutate them externally.${line}

    ${separator}

    Next you define your scales, which should be a familiar concept if you've used d3.${line}
    Scales are how we map your data to UI dimensions, such as width, height, and coloring parameters.${line}
    Each scale here is a named object so we can reference it later${line}

    ${separator}
    Then we'll define our axis components, oriented to the edges of our view-space${line}
    The axis won't land in the scenegraph, but it's a higher-order component that spits out low-level scenegraph elements${line}
    When we talk about being able to glissade between low-level rendering and high-level orchestration, axes are a prime example${line}

    ${separator}
    Finally, we'll define our visual components.${line}
    ${bulletab}We can bind these to a table; this will cause one mark to be emitted per row in the data table.${line}
    ${bulletab}And the attributes of each marks can be bound to a data/scale combination ${line} 
    ${bulletab}Or to static values ${line}
    ${end}  
  `,

  vegaBarChartLive: `
  And now we have a bar-chart in Vega.${line}

  There's some component-based thinking going on within Vega.${line}
  And it's incredibly expressive and can describe a broad variety of charts${line}

  But a declarative JSON-based API like that is kind of a pain to work with.${line}
  You don't have great debugging seams, ${line}
  and it can be difficult to reason about the structure of a chart.${line}
  This is only exacerbated as the complexity of a chart grows.${line}

  We really like the ideas here, but prefer the ergonomics of the composable charting libraries we looked at before.${line}  
  `,

  whatif: `
  So our question, since first learning about Vega, and trying to integrate it into our own React applications, has been - what if were were to have access to Vega's abstraction level,${line}

  But you expressed it with a component-based API instead?${line}

  And being incredibly naieve and full of hubris, we made our own library...
  ${end}
  `,

  chartPartsPage: `
  We're calling it chart-parts, and it's our love-letter to Vega.${line}
  I hope they're not too mad.${line}
  We had a better name, but legal said no.${line}
  So I'll start off with some caveats - this is only used and developed by my team at the moment, and it's in very nascent stages${line}
  Don't expect vscode or typescript level support${line}
  `,

  chartPartsApi: `
  Our React API exposes a series of charting components based on the Vega API.${line}
  The basic component types we support at the moment are either scales, view marks, and axes.${line}
  
  ${separator}

  There's a bunch of scale components, and these all thunk down to D3 scales.${line}

  ${separator}

  We implement the most commonly used Mark types in Vega.${line}
  ${bulletab}arcs are angular wedges${line}
  ${bulletab}rects for rectangles${line}
  ${bulletab}rules are lines${line}
  ${bulletab}line and area are for line-chart and area-chart type shapes${line}
  ${bulletab}we can add text${line}
  ${bulletab}symbols are icons like circles that can be drawn.${line}
  ${bulletab}and groups are how we subdivide our charting area. This lets us pull off some combined-chart scenarios and data-faceting${line}

  ${separator}
  There's a single axis component, which can be parameterized with a bunch of different options${line}

  ${separator}
  And there are some components yet to do, like Legends and Dataflow.${line}
  There are also some marks that Vega provides that we don't yet support such as geospatial shapes and images.${line}

  ${end}
  `,

  chartPartsArchitecture: `
  Let's look briefly at the architecture of chart-parts${line}

  ${separator}
  We started out this project by using vega's scenegraph, which is a plain Javascript object that describes a chart at a low-level.${line}

  ${separator}
  Using these scenegraph objects, we built a transform pipeline to turn these scenes into a pseudo-svg and then into React virtual-dom.${line}

  ${separator}
  This piece of the library came up really quickly.${line}
  By leaning onto React's renderer and reconciliation algorithm, we side-stepped a lot of time-consuming work in the guts of dom-manipulation and scene synchronization in response to scenegraph changes.${line}

  This functional pipeline may change in the future as we start taking a look at performance issues, and targeting different renderers like PIXI${line}
  but it was encouraging to see that part happen quickly${line}

  ${separator}
  The next piece of the library, and the most time-consuming piece, was working on the specification and scenegraph generation pieces.${line}
  We have a generic SceneBuilder fluent API that's not framework-dependent that describes scenes.${line}
  And we have a React Renderless-Component-Based API that operates on our SceneBuilder API so that this feels nice in React${line}
  Renderless APIs are an interesting technique we learned from watching a Ken Wheeler video,${line}
  where components' render out null, but interact with APIs as they mount into the virtual dom.${line}

  This has had some interesting ramifications for our API. One of which is that explicit parent/child relationships between component types is kind of muted.${line}
  We can use functional components to organize our charts, and the API is none the wiser.${line}

  ${separator}
  On interesting thing about this architecture as a whole is that we are only in React-land at the very beginning and end of this process${line}
  So if we ever want to target another framework for specifying components, or another rendering environment, we don't have to swap out the whole library${line}
  ${end}
  `,

  chartPartsBarChart: `
  Let's dig into making a chart.${line}
  
  First, we're going to import our charting components.${line}
  
  Next we'll pick a renderer. Right now we have an React SVG and a React-Native-SVG renderer.${line}

  Next we'll render the  to-level chart. This is where we'll set the dimensions, data tables, and renderer of the chart${line}

  Next we'll define some scales components.${line}

  Each scale has a name, which we'll use to reference it in our other components.${line}

  We can bind the scale to to a domain of the source data.${line}
  
  And then we can also bind the range to a view dimension.${line}
  The available space will automatically be pruned to account for axes${line}
  
  ${separator}
  Next we'll add Axis components${line}
  These need to be anchored to an edge of the view-space and bound to a scale.${line}
  There's a lot of other formatting options available for them, but this is the basic setup${line}
  
  ${separator}
  And finally, we'll define our graphical marks.${line}

  We can bind to a data table in our dataset.${line}
  And then for each row in that  table we'll emit a rectangle into our scenegraph${line}
  If we're not bound to a table, this will only render a single instance${line}

  And then we encode the attributes of the mark.${line}
  This can either be a static value or an encoding function${line}
  Encoding functions have a single parameter: a context object containing${line}
  ${bulletab}the current view size,${line}
  ${bulletab}the named scales and data tables,${line}
  ${bulletab}the datum being rendered, and it's index in the table.${line}

  And finally, we can add our event handlers.${line}
  We wanted to be able to integrate these charts into apps we were building, so we opted out of the signal system here in favor of native events${line}
  `,

  managingComplexity: `
  I've mentioned that Renderless Components have given us a way to manage complexity in our chart. The reason for that is that there is no tacit parent/child relationship between our elements.${line}

  In some charting libraries, you'll see that there's some boilerplate work done to ensure that only valid child components are used, and that kind of precludes the ability to insert your own abstraction.${line}

  Since renderless components orchestrate api interactions under the hood, and the nodes in our specification graph all have the same kinds of elements, we can organize these using Function Components pretty easily${line}
  `,

  populationPyramid: `
  Here's a slightly more complex chart.${line}
  It's a population breakdown by year coded by labeled birth-gender.${line}

  It's a lot like a bar-chart, but it's faceted and mirrored.${line}
  This seems like it could share some structure internally.${line}

  So let's look under the hood${line}
  ${end}
  `,

  barChartSFC: `
  At the top-level chart component, we can see a bird's-eye-view of the overall structure.${line}
  ${bulletab}the scale definitions for coloration and vertical positioning${line}
  ${bulletab}the age labels${line}
  ${bulletab}and the males per age bracket${line}
  ${bulletab}and females per age bracket${line}

  ${separator}
  
  If we zoom into this, we can see the scale specifications${line}
  The age label columns${line}
  And the genderPerYear componenths${line} 
  which share an underlying definition${line}

  In this code snippet, we're taking the same bar chart, but we're going to slice it up a little. This is a trivial example, but it demonstrates the idea.${line}
  We have custom components that encapsulate our scale and axis components, and below we have function components that define those elements.
  `,

  composability: `
  The flexibility afforded to us by renderless components also allows us to compose and augment charting elements in a very fluid way.  
  `,
  composabilityCode: `
  So let's try to add that mean line element we were talking about in our example before ${line}
  ${separator}

  First, let's define our meanline component.${line}
  The Rule type will draw a line instance.${line}
  We can now define a new component for our meanLine.${line}
  You'll notice that we're not binding this to a table, so it will render as a singleton instance. ${line}
  The x parameters will use the current view bounds, so it it will be the full width of the chart. ${line}
  This lets us avoid having to define a new scale, since our X scale is categorical.${line}
  And the y value will be the computed mean of the data.${line}

  ${separator}

  And to render this into our chart, we'll extend our barchart component so that it will render child elements.${line}
  We could use render props if we wanted, and that would be great for more complex situations where we want to include elements at different parts of a specification graph,${line}
  but in this case this will give us the effect we want${line}

  And then we simply render the children elements into the chart.${line}
  
  `,

  composableComposed: `
  Now we have the basic elements that we want, and we can compose them pretty easily.${line}
  Now we're dealing with exactly the abstraction level we want - we can make meaningful component types out of our system of primitives.
  `,

  accessibility: `
  Now let's talk about accessibility. It's not normally something we consider when writing visualizations, since we normally assume that our 
  users are sighted.${line}

  But SVG does support aria tags, and by using them in our charts, we can tell the same data stories to users who are visually impaired and use screen-readers${line}
  
  This is an area that probably needs some good feedback, and it only works with our web SVG renderer, but here's our current take on it:
  ${line}
  `,

  accessibilityCode: `
  First off, we can add aria description and title tags to our chart at the top level. This would give screen reader users a high-level description of what 
  the chart is about${line}

  Next, we can encode tab indexes into our marks - this will allow screen-reader users to use keyboard navigation through elements in the chart and navigate them in sequence.${line}

  And finally we can add aria tags to individual mark elements. We can encode them like any other parameter to let them reflect the data this mark is bound to.
  `,

  accessibleLiveChart: `
  TURN ON CHROMEVOX${line}

  And now we can tab through our chart and hear descriptions of all the important data points
  `,

  mobile: `
  Now, by virtue of being scenegraph-based, we can change the target rendering technology to whatever we want, 
  provided that we have an implementation of the renderer.${line}
  
  Our react renderer is just emitting React virtual-dom, and one nice thing about this means that we can emit 
  react-native virtual-dom instead, and very easily have parity between native and mobile (at least in Javascript) 
  ${end}  
  `,

  mobileCode: `
  We just switch our rendere to the react-native rendere, and we can run on mobile devices.
  ${line}
  
  Our react-native-svg renderer is using the component types from react-native-svg to easily implement our charts on 
  mobile devices.

  ${end}
  `,

  showcaseWinchester: `
  And with that, we've solved our problem, and the pint is back on.
   `,

  conclusion: `
  And that's about it!${line}
  
  I'm not going to try and sell you on the idea that our charting library is the best one you can use. 
  They all involve various engineering, stylistic, performance and theoretical tradeoffs.${line}

  But I hope you try it out and give us some feedback${line}

  But even if you decide not to, I hope you found this helpful in being able to discriminate about some different aspects of charts that maybe
  you haven't thought of before. I hope you'll gravitate towards composable, flexible libraries intead of brittle ones. ${line}

  If you're thinking about making your own charting library - I hope you'll lean towards composable primitive elements and then build taxonomical 
  elements on top of those, and that you'll let your users mix and match them.${line}

  `,
}
