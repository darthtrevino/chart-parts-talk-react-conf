import React from 'react'
import { Heading, Slide, Image } from 'spectacle'

import notes from '../../notes'
import images from '../../images'

export default [
	<Slide key="lessons-commonthemes" notes={notes.commonThemes}>
		<Heading size={2} caps>
			Common Themes
		</Heading>
	</Slide>,
	<Slide key="lessons-taxonomy-vs-elements" notes={notes.taxonomyVsElements}>
		<Heading size={2} caps>
			Taxonomies vs Pieces
		</Heading>
	</Slide>,
	<Slide key="lessons-direct-vs-scenegraph" notes={notes.directVsScenegraph}>
		<Heading size={2} caps>
			Direct Rendering vs Scenegraph
		</Heading>
	</Slide>,
	<Slide
		key="lessons-direct-vs-scenegraph-ast"
		notes={notes.directVsScenegraphAst}
	>
		<Image src={images.ast} />
	</Slide>,
	<Slide key="lessons-data-injection" notes={notes.dataInjectionVsDataBinding}>
		<Heading size={2} caps>
			Data Injection vs Data Binding
		</Heading>
	</Slide>,
	<Slide key="lessons-dataflow" notes={notes.dataflowProblem}>
		<Image src={images.dataflow} />
	</Slide>,
]
