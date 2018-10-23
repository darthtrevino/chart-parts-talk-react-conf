import React from 'react'
import { Slide, Heading, Anim } from 'spectacle'
import images from '../images'
import notes from '../notes'
import WalkableSlide from '../components/WalkableSlide'

// export default (
// 	<WalkableSlide
// 		numSteps={6}
// 		renderContent={step => {
// 			return (
// 				<>
// 					<Heading fill textColor="pcontrast">
// 						Visualization is how we communicate complex data
// 					</Heading>
// 				</>
// 			)
// 		}}
// 	/>
// )
export default [
	<Slide
		transition={['fade']}
		bgImage={images.visualSurvey}
		notes={notes.uiwork}
		key="chartsimportant1"
	/>,
	<Slide
		notes={notes.uiemphasis}
		transition={['fade']}
		bgImage={images.visualSurvey}
		bgDarken={0.8}
		key="chartsimportant2"
	>
		<Heading fill textColor="pcontrast">
			Visualization is how we communicate complex data
		</Heading>
	</Slide>,
]
