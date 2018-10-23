import React from 'react'
import PropTypes from 'prop-types'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'
import { hot } from 'react-hot-loader'

import Presentation from './presentation'

const CustomErrorReporter = ({ error }) => <Redbox error={error} />
CustomErrorReporter.propTypes = {
	error: PropTypes.instanceOf(Error).isRequired,
}

const App = () => (
	<AppContainer errorReporter={CustomErrorReporter}>
		<Presentation />
	</AppContainer>
)

export default hot(module)(App)
