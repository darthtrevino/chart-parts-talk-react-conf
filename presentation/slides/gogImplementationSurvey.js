import React from 'react'
import {
	Heading,
	ListItem,
	List,
	Slide,
	Appear,
	Image,
	CodePane,
} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'

import code from '../code'
import images from '../images'
import notes from '../notes'

export default [
	<Slide transition={['fade']} key="survey_whatimpls">
		<Heading size={5} textColor="pcontrast" fit>
			What implementations exist?
		</Heading>
		<Appear>
			<Image src={images.altairpage} />
		</Appear>
	</Slide>,
	<Slide transition={['fade']} key="survey_whatimpls">
		<Heading size={5} textColor="pcontrast" fit>
			What implementations exist?
		</Heading>
		<Image src={images.rechartspage} />
	</Slide>,
	<Slide transition={['fade']}>
		<Heading size={5} textColor="pcontrast" fit>
			What implementations exist?
		</Heading>
		<Image src={images.vegapage} />
	</Slide>,
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
	/>,
	<Slide>
		{/*TODO: add live bar chart*/}
		<Image src={images.barchart2} />
	</Slide>,
	<Slide>
		<div style={{ overflowY: 'scroll', height: '500px' }}>
			<CodePane fill source={code.vegaBarleyChart} lang="javascript" />
		</div>
	</Slide>,
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
	</Slide>,
]
