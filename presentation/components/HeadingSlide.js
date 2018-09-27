import React from 'react'
import { Slide, Heading } from 'spectacle'

const HeadingSlide = ({
	text,
	children,
	size = 2,
	textColor = 'pcontrast',
}) => (
	<Slide>
		<Heading size={size} textColor={textColor}>
			{text}
		</Heading>
		{children}
	</Slide>
)

export default HeadingSlide
