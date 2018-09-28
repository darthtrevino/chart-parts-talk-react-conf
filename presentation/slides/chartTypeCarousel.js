import React from 'react'
import { Slide, Anim, Text, Image } from 'spectacle'

import notes from '../notes'
import images from '../images'

export default (animIndex, setAnimIndex) => {
	console.log('ANIMINDEX', animIndex)
	return (
		<Slide notes={notes.charting} key="chartsimportant3">
			<Anim
				onAnim={(forwards, animIndex) =>
					animIndex >= 0 && setAnimIndex(animIndex)
				}
				fromStyle={{}}
				toStyle={[{}, {}, {}, {}, {}, {}, {}]}
				easing={'bounceOut'}
				transitionDuration={500}
			>
				{renderChartType(animIndex)}
			</Anim>
		</Slide>
	)
}

function renderChartType(animIndex) {
	if (animIndex === 0) {
		return <Image src={images.barChart} height={500} />
	} else if (animIndex === 1) {
		return <Image src={images.lineChart} height={500} />
	} else if (animIndex === 2) {
		return <Image src={images.pieChart} height={500} />
	} else if (animIndex === 3) {
		return <Image src={images.areaChart} height={500} />
	} else if (animIndex === 4) {
		return <Image src={images.radarChart} height={500} />
	} else if (animIndex === 5) {
		return <Image src={images.boxPlots} height={500} />
	} else if (animIndex === 6) {
		return <Image src={images.violinChart} height={500} />
	} else {
		return <Text />
	}
}
