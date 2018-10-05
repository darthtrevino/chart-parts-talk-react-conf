import {
	Heading,
	Slide,
	Text,
	Appear,
	Image,
	Layout,
	CodePane,
} from 'spectacle'
import front from './front'
import pageSplash from './pageSplash'
import api from './api'
import architecture from './architecture'
import grouping from './grouping'
import conclusion from './conclusion'
import basicExample from './basicExample'
import mobileExample from './mobileExample'
import accessibilityExample from './a11yExample'
import sfcExample from './sfcExample'
import composabilityExample from './composabilityExample'

export default [
	// Lead up & theoretical groundwork
	front,
	pageSplash,
	api,
	grouping,
	architecture,

	// Examples
	...basicExample,
	...mobileExample,
	...sfcExample,
	...accessibilityExample,
	...composabilityExample,

	conclusion,
]
