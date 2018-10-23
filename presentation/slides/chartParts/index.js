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
	architecture,

	// Examples
	...basicExample,
	...accessibilityExample,
	...sfcExample,
	...mobileExample,
	...composabilityExample,

	conclusion,
]
