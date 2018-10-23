const line = '<br/><br/>'
const end = '<br/><br/><br/>'
const tab = `&nbsp;&nbsp;&nbsp;&nbsp;`
const bulletab = `${tab}•&nbsp;`
const separator = `---------------${line}`

export default {
	slide1: `
    Hello everyone
    ${line}

    Let's talk about charting!
  `,
	aboutMe: `
    I'm Chris Trevino${line}
    ${bulletab}Software engineer with Microsoft Research in Silverdale, WA.${line}
    ${bulletab}JS for 5 years${line}
    ${bulletab}Before, I did a bunch of backend and embedded work - C++, C#, Java${line}
    ${bulletab}So I use classes a lot${line}
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
    ${bulletab}data-analytics${line}
    ${bulletab}machine learning${line}
    ${bulletab}and visual analytic processes${line}
    ${bulletab}to large sets of textual data${line}
    ${bulletab}and trying to convey insights that data${line}
    ${end}    
  `,

	uiwork: `
    Our team builds a lot of interactive visualizations to try and ${line}
    ${bulletab}communicate key insights in data${line}
    ${bulletab}and give users freedom and control to explore their data${line}

    ${separator}

    A lot of times, our work is as simple as wiring up a PowerBI notebooks with ready-to-go visualizations${line}

    ${separator}
    Other times we get to dig into custom visualizations and one-off experiments${line}

    ${separator}
    And sometimes we get to make applications${line}
    ${bulletab}in the web and on mobile, usually in React${line}
    ${bulletab}that deliver a custom experience and tell a very specific story.
    ${end}
  `,

	uiemphasis: `
    Now all this background is just to emphasize that${line} 
    ${bulletab}for us, data visualization and visual analytics${line}
    (applying analytical processes to interactive visualizations)${line}
    is absolutely essential to what we do.${line}
    ${bulletab}our primary mechanism for understanding nuance in data${line}
    ${bulletab}hard to discern in its raw form.${line}

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
    So we're knee-deep into making our application${line}
    ${bulletab}and we need to include a chart for our metrics page${line}
    ${bulletab}fortunately it's nothing fancy, we just a bar-chart.${line}

    ${separator}

    So we head to NPM and search for something simple that matches our use case. ${line}
    ${bulletab}And we find this cool library called fancy-charts${line}
    ${bulletab}which appears to be super popular${line}
    ${bulletab}it has lots of downloads and stars${line}

    ${separator}

    After that, we check the docs, and the API looks pretty decent${line}
    ${bulletab}and has a clean up-front props interface${line}
    ${bulletab}We just pass our data in and charts pop out${line}

    ${separator}
    And we install this sweet new charting library${line}
    ${bulletab}and we're stoked!${line}
    ${bulletab}Nothing's going wrong today, we can feel it.${line}
    ${end}

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
    Your boss has discussed the charting requirements with your customer,${line}
    and your bar-chart chart needs a little work...${line}
  `,

	smallchange: `
    but it's no big deal, you definitely shouldn't freak out
  `,

	barchartwithmean: `
    According to the requirements, all we need to do is add a mean-line to our bar chart.${line}
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

  At this point, you may be so frustrated with your experience that you eject it and go straight down into 2D apis.${line}
  And maybe that means using d3, and figuring out how to make that work with react${line}
  ${end}
  `,

	missingAbstraction: `
    Our team calls this the problem of the missing abstraction${line}
    We want to be able to author visualizations in higher-level terms${line}
    ${bulletab}but we run into brittle abstractions that force us into low-level rendering.${line}
    ${bulletab}it feels like there should be something in the middle of those options.${line}
    ${bulletab}Something more verbose than a chart tag${line}
    ${bulletab}Something higher-level than 2d instances${line}
    ${bulletab}Productivity and expressivity${line}
    ${bulletab}minimize design-to-test${line}
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
    So let's look at what may fit this abstraction gap.${line}
    We're going to look at this from a couple of different angles.${line}
    In a second, we'll look at what's in academia.${line}    
    ${bulletab}So first, let's look at the composable charting options in the react community.${line}
    ${end}
  `,

	composableLibraries: `  
    One great option is victory-charts${line}
    ${bulletab}Victory has some pretty great qualities${line}
    ${bulletab}one thing I love is that they're the only library with mobile parity${line}

    ${separator}
    Another great option is React-Vis${line}
    ${bulletab}Their API is pretty flexible and low-level${line}
    ${bulletab}We've used this in some of our own React applications${line}
    
    ${separator}
    
    Finally, there's Recharts${line}
    ${bulletab}we haven't tried this in our applications yet${line}
    ${bulletab}pretty popular and has a great api${line}
    
    ${end}
  `,

	composableLibraryIssues: `
    There are some issues you may run into using these${line}
    ${bulletab}I don't want to trash these libraries, because they're all pretty great${line}
    ${bulletab}And maybe these aren't really deal-breakers for your use case${line}
    ${bulletab}But they're things that we have run into${line}
    ${end}
  `,

	composableLibrariesTaxonomic: `
    One thing you'll notice is that to varying degrees, their APIs are taxonomic${line}
    
    A purely taxonomic API reflects a fixed series of chart-types (e.g. linechart, piechart)${line}
    ${bulletab}these might be composable, and you can make some really creative charts with that${line}
    ${bulletab}but it's kind of like using pre-made sentences to express our language instead of words${line}

    ${separator}

    So let's look at the APIs for these charts${line}
    Victory's top-level API is taxonomic, but if you look deeper into their docs,${line}
    you'll find that they provide a couple of levels of lower-level charting elements. ${line}
    They actually do a pretty good job of glissading between abstraction levels.${line}
    
    ${separator}
    Here's the top-level Recharts API, which has taxonomic chart containers${line}
    What this means is that your top level chart is taxonomic - e.g. LineChart or BarChart, and that limits what legal children the chart can have${line}
    Which feels arbitrarily retrictive${line}

    ${separator}
    
    Finally, let's look at the React-Vis API${line}
    The react-vis API provides a set of shape-series components.${line}
    Which makes this the least taxonomic API of the libraries here${line}
    But it's the only abstraction level${line}
    So one-off elements require some manual work in SVG${line}
    Which brings us to our next concern...
    

    ${end}
  `,

	coupledToRendering: `
  Another issue we run into is that we're often coupled to a specific rendering technology${line}
  
  ${separator}
  In Victory, this is how we can add low-level elements to our chart.${line}
  ${bulletab}In this piece of code, an Area chart is rendered with an adjaced circle by thunking down to raw SVG${line}
  ${bulletab}This gives us pretty nice flexibility, and the ability to do wild things with our SVG${line}
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

	gogFront: `
  So let's back up and look at this problem from a theoretical perspective${line}
  One idea that we've heard about, being adjacent to well-read visualization researchers is that of the "Grammar of Graphics".${line}
  It's an idea that we've found kind of exciting and satisfies a lot of our expressibility wants${line}

  ${end}
  `,

	gogWalk: `
  This idea comes from a book that was published in 1999 titled "The Grammar of Graphics" by Leland Wilkinson, 
  who's a well-know visualization researcher and VP of Tableau Software${line}
  These ideas have a handful of explicit implementations, in various programming ecosystems${line}
  ${separator}

  The grammar of graphics envisions a
  ${bulletab}system of OO charting elements${line}
  ${bulletab}that operate together to form charts, like Voltron.${line}
  ${bulletab}It's called a grammar becasue these elements are analogous to words used together in sentences${line}
  ${bulletab}You can combine them in expressive ways, but there's also rules on how to use them${line}

  This was diametrically opposed to charting technologies of the time which were taxonomic in nature${line}
  A major emphasis in the grammar of graphics is to eschew taxonomies for recombinable, expressive lego pieces${line}

  ${separator}
  
  These elements consist of the basic pieces of charts we're all familiar with:${line}
  ${bulletab}shapes to draw${line}
  ${bulletab}scales to map data to view dimensions${line}
  ${bulletab}coordinate systems for your shapes to draw into${line}
  ${bulletab}guide components to help users understand what we're looking at${line}
  ${bulletab}and data transformation elements for things like aggregation, statistics, and layout computes${line}

  ${separator}
  
  As an example, say we have a rectangle component, 
  and we want to encode an instance of it into our chart in cartesian space${line}
  Our rectangle will encode some properties based on the data it's bound to${line}
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
  First, specify a scene using chart-element components${line}
  
  ${separator}
  Next, we need to assemble an abstract scenegraph.${line}
  ${bulletab}This means taking our data sources and walking them through our specification${line}
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

	gogImpls: `
  So this is a cool idea, it fits nicely with our component-based way of thinking. ${line}
  What are our options for implementations of this?${line}
  If you're in Python or R, you have ggplot and altair, which are widely used${line}
  But we're javascript developers${line}
  And being Javascript people, the 800lb gorilla, the primary implementation, is Vega${line}
  ${end}  
  `,

	showcaseVegaPage: `
  Vega is made by the University of Washington's Interactive Data Lab.${line} 
  Our first exposure to the ideas of thyae Grammar of Graphics was when Dominik Moretz came to our campus and gave a talk on Vega-Lite${line}
  which is a lighter-weight specification for Vega${line}
  ${separator}

  So let's look at how you'd write a bar chart in Vega.
  ${end}
  `,

	vegaBarChart: `
    In both Vega and Vega-Lite, you author visuals using static JSON definitions.${line}

    Vega is basically super structured d3 with a notion of scene nodes.${line}
    
    To start, we need to set our chart options,${line}
    ${bulletab}here's where we'd select whether to use svg or canvas,${line}
    ${bulletab}the background color${line}
    ${bulletab}and the dimensions and padding${line}

    ${separator}

    Next, we wire in our data tables.${line}
    ${bulletab}Each table has a name${line}
    ${bulletab}and can be a static array of obs${line}
    ${bulletab}or a remote URL${line}

    ${separator}

    For event handling, vega has an internal "signaling system".${line}

    In Vega,${line}
    ${bulletab}signals are named variables that the charts cand bind to${line}
    ${bulletab}and update when interactions happen${line}
    ${bulletab}It's basically an embedded, declarative Redux${line}

    ${separator}
    Next you define your scales.${line}
    Scales are how we map your data to UI dimensions, such as width, height, and color.${line}
    Each scale here is a named object so we can reference it later${line}

    ${separator}
    Then we'll define our axis components, oriented to the edges of our view-space${line}
    The axis won't land in the scenegraph, but it's a higher-order component that spits out low-level scenegraph elements${line}

    ${separator}
    Finally, we'll define our visual components.${line}
    ${bulletab}We can bind these to a table; this will cause one mark to be emitted per row in the data table.${line}
    ${bulletab}And the attributes of each marks can be bound to a data/scale combination ${line} 
    ${bulletab}Or to static values ${line}
    ${end}  
  `,

	vegaBarChartLive: `
  And now we have a bar-chart in Vega.${line}

  ${bulletab}There's some component-based thinking going on here.${line}
  ${bulletab}It's incredibly expressive and can describe a broad variety of charts${line}
  ${bulletab}But a declarative JSON-based API is kind of a pain to work with.${line}
  ${bulletab}You don't have great debugging seams${line}
  ${bulletab}And it can be difficult to reason about the structure of a chart.${line}
  ${bulletab}And this is only exacerbated as the complexity of a chart grows.${line}

  We really like the ideas here, but prefer the ergonomics 👀of the composable charting libraries we looked at before.${line}  
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
  This project is fairly experimental${line}
  and it's an experiment for my team${line}
  It solves some specific problems for us${line}
  And we're going to be working over the next several months${line}
  To get community feedback and make this a great tool for you too${line}
  `,

	chartPartsApi: `
  Let's look at our top-level React API${line}
  We provide a series of charting components based on the Vega API.${line}
  The basic component types are scales, view marks, and guides.${line}
  
  ${separator}

  There's a bunch of scale components, and these all thunk down to D3 scales.${line}

  ${separator}

  We implement our most commonly used mark-types from Vega.${line}
  ${bulletab}there are basic shapes such as lines, wedges, and rectangles${line}
  ${bulletab}some data-series shapes for things like line and area charts${line}
  ${bulletab}and there's a special group mark that lets us subdivide our charting area.${line}
  ${bulletab}this basically acts as a scene node and lets us pull off combined-chart and data-faceting${line}

  ${separator}
  We provide an axis guide type${line}

  ${separator}
  And there are some components in the TODO bucket${line}
  ${bulletab}like legends${line}
  ${bulletab}dataflow${line}
  ${bulletab}animation${line}
  ${bulletab}geospatial marks${line}
  ${bulletab}and image marks${line}

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

  ${separator}
  On interesting thing about this architecture as a whole is that we are only in React-land at the very beginning and end of this process${line}
  So if we ever want to target another framework (for some reason),${line}
  or another rendering environment,${line}
  we don't have to swap out the whole library${line}
  ${end}
  `,

	chartPartsBarChart: `
  Let's make a bar-chart with chart-parts!${line}
  
  First, we'll import our charting components.${line}
  
  Next we'll pick a renderer. In this case, we'll render out to an SVG${line}

  Next we'll write the top-level chart.${line}
  ${bulletab}set dimensions${line}
  ${bulletab}inject tables${line}
  ${bulletab}wire in renderer${line}

  ${separator}
  Next we'll define some scales components. These can be described at each scene node${line}
  
  ${bulletab}Each scale has a name.${line}
  ${bulletab}We can bind the domain to a column of the data${line}
  ${bulletab}And we can also bind the range to a view dimension.${line}
  ${bulletab}The available space will automatically be pruned to account for axes${line}
  
  ${separator}
  Next we'll add Axis components${line}
  At a minimum, these need to be 
  ${bulletab}anchored to an edge of the view-space and ${line}
  ${bulletab}bound to a scale.${line}
  
  ${separator}
  And finally, we'll define our graphical marks.${line}

  We can bind to a data table in our dataset.${line}
  And then for each row in that  table we'll emit a rectangle into our scenegraph${line}
  If we're not bound to a table, this will only render a single instance${line}

  🚨And then we encode the attributes of the mark.${line}
  This can either be a static value or an _encoding function_${line}
  🚨🚨🚨Encoding functions have a single parameter: a context object containing${line}
  ${bulletab}the named scales and data tables in scope${line}
  ${bulletab}the current view,${line}
  ${bulletab}the row being bound, called d${line}
  ${bulletab}and it's index in the table.${line}

  And finally, we can add our event handlers.${line}
  Being application developers, we're used to managing our state with tools like Redux, so we
  opted out of the signal system here in favor of native events${line}
  `,

	managingComplexity: `
  I've mentioned that using Renderless Components${line}
  
  One nice side-effect of that is that we can use Functional Components to organize API interactions,${line}
  Which makes this easier to grok than Vega${line}

  In some component libraries (of any type, not just charts), ${line}
  you'll see that there's some work done to ensure that parents have only valid children,${line}
  and that kind of precludes the ability to insert your own organizational structure.${line}

  So let's look at something slightly more complex than a bar-chart
  ${end}
  `,

	populationPyramid: `
  Here is a population pyramid${line}
  It's basically two bar charts,${line}
  There is a mirrored layout, each reflecting a different facet of the data${line}
  In this case, the facets are birth gender, and the bar chart is broken out by year,${line}
  So you can see the relative population of men and women${line}

  ${separator}
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
  And the genderPerYear components${line} 
  which share an underlying low-level definition${line}
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
  Let's look at a few more examples${line}
  First, let's talk about accessibility.${line}
  Accessibily is extremely important to Microsoft, and it should be important for all of us.${line}
  Non-sighted users tend to be underserved in datavis${line}
  
  One of the questions we asked ourselves when making this was how accessible could we make it.${line}

  SVG supports aria tags${line}
  By using that, we can deliver interpretable charts to non-sighted users.${line}
  
  This is an area that needs feedback from screen-reader users,${line}
  and it presently only works with our web SVG renderer,${line}
  but here's our current take on it:
  ${line}
  `,

	accessibilityCode: `
  First off, we can add aria description to our chart at the top level.${line}
  This would give screen reader users a high-level description of what the chart is about before diving into details${line}

  Next, we can encode tab indexes into our marks - this will allow screen-reader users to use keyboard navigation through key elements.${line}

  And finally we can add aria tags to individual mark elements. We can encode them like any other parameter to let them reflect the data this mark is bound to.
  `,

	accessibleLiveChart: `
  TURN ON CHROMEVOX${line}

  And now we can tab through our chart and hear descriptions of all the important data points.
  `,

	mobile: `
  Our library uses an abstract scenegraph,${line}
  and that means we can change the target rendering technology to whatever we want,${line}
  
  Our react renderer is just emitting React virtual-dom.${line}
  We can emit react-native virtual-dom just as easily${line}
  So now it's possible to share charting definitions between native and mobile${line}
  ${end}  
  `,

	mobileCode: `
  The first thing we'll do is use the react-native-svg renderer
  ${line}
  And then we'll handle native touch events instead of click events.
  ${line}
  👀That's it
  ${end}
  `,

	showcaseWinchester: `
  And with that, we've solved our problem, and the pint is back on.
   `,

	conclusion: `
  The grammar of graphics is an idea that my team believes in.${line}
  We plan on continuing to develop this tool and taking this experiment as far as we can${line}
  We welcome your feedback, and your contributions and perspectives.${line}
  We hope this becomes a valuable tool for the community.${line}

  Check us out on github, or hit me up on Twitter${line}

  Thank you so much!
  ${end}
  `,
}
