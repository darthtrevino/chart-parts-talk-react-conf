// Import React
import React from "react";

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
  Fit
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#403F4C",
    secondary: "#BA3B50",
    dark: "#222222",
    light: "#DAD2D8",
    highlight: "#0F8B8D"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  barchart: require("../assets/bar_chart.png"),
  linechart: require("../assets/line_chart.png"),
  radial_chart: require("../assets/radial_chart.png"),
  streamgraph: require("../assets/streamgraph.png"),
  mapBase: require("../assets/map.png"),
  mapMs: require("../assets/map-ms.png"),
  mapMsSilverdale: require("../assets/map-ms-silverdale.png"),
  healthcare: require("../assets/healthcare.png"),
  narcissism: require("../assets/narcissism.jpg"),
  dcu: require("../assets/dcu.jpg"),
  network: require("../assets/network.png"),
  healthcare: require("../assets/healthcare.png")
};

const notes = {
  slide1: `
    Good morning! My name is Chris Trevino, and I'm an engineer in Microsoft Research. 
    
    To set up some context, I'd like to tell you a bit about my team's work.
  
  `,
  usingANewChartingLibrary: `
  These are the common steps we always run into when using a new charting library
  `
};
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={["zoom"]}
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
              background: "-webkit-linear-gradient(#eee, #222)",
              ["-webkit-background-clip"]: "text",
              ["-webkit-text-fill-color"]: "transparent"
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
        <Slide transition={["fade"]}>
          <Image fill src={images.mapBase.replace("/", "")} />
        </Slide>
        <Slide transition={["fade"]}>
          <Image fill src={images.mapMs.replace("/", "")} />
        </Slide>
        <Slide transition={["fade"]}>
          <Image fill src={images.mapMsSilverdale.replace("/", "")} />
        </Slide>

        {/* Discuss details of our work */}
        <Slide>
          <Layout>
            <Fill>
              <Appear>
                <Image
                  fill
                  src={images.narcissism.replace("/", "")}
                  height={325}
                />
              </Appear>
              <Appear>
                <Image
                  fill
                  src={images.network.replace("/", "")}
                  height={325}
                />
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Image fill src={images.dcu.replace("/", "")} height={300} />
              </Appear>
              <Appear>
                <Image
                  fill
                  src={images.healthcare.replace("/", "")}
                  height={325}
                />
              </Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" notes={notes.slide1}>
          <Heading size={1} fill caps lineHeight={1} textColor="secondary" />
        </Slide>

        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          notes={notes.usingANewChartingLibrary}
        >
          <Heading size={6} textColor="secondary" caps>
            Using a new charting library
          </Heading>
          <List>
            <Appear>
              <ListItem>`yarn install`</ListItem>
            </Appear>
            <Appear>
              <ListItem>Item 2</ListItem>
            </Appear>
            <Appear>
              <ListItem>Item 3</ListItem>
            </Appear>
            <Appear>
              <ListItem>Item 4</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
