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

import front from './front'
import theoryGrounded from './theoryGrounded'
import composableCharts from './composableCharts'
import lessons from './lessons'

export default [front, theoryGrounded, ...composableCharts, ...lessons]
