import React from 'react'
import {
	Slide,
	Text,
	Fill,
	Image,
	List,
	ListItem,
	Appear,
	Heading,
	Layout,
} from 'spectacle'
import posed from 'react-pose'

import notes from '../../notes'
import images from '../../images'

import WalkableSlide from '../../components/WalkableSlide'

const itemSize = 30

const Revealed = posed.div({
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
})

export default (
	<WalkableSlide
		key="showcase_api"
		notes={notes.chartPartsApi}
		transition={['fade']}
		numSteps={5}
		renderContent={step => {
			return (
				<div>
					<Text textColor="secondary" style={{ fontWeight: 200 }}>
						API Components
					</Text>
					<Fill>
						<Layout>
							<Fill>
								<Revealed pose={step >= 1 ? 'visible' : 'hidden'}>
									<Heading textSize={30} textColor="crimson">
										Scales
									</Heading>
								</Revealed>
								<Revealed pose={step >= 2 ? 'visible' : 'hidden'}>
									<List>
										<ListItem textSize={itemSize}>Linear</ListItem>
										<ListItem textSize={itemSize}>Log</ListItem>
										<ListItem textSize={itemSize}>Pow</ListItem>
										<ListItem textSize={itemSize}>Sqrt</ListItem>
										<ListItem textSize={itemSize}>Time</ListItem>
										<ListItem textSize={itemSize}>UTC</ListItem>
										<ListItem textSize={itemSize}>Band</ListItem>
										<ListItem textSize={itemSize}>Point</ListItem>
										<ListItem textSize={itemSize}>Ordinal</ListItem>
										<ListItem textSize={itemSize}>Sequential</ListItem>
										<ListItem textSize={itemSize}>Quantize</ListItem>
										<ListItem textSize={itemSize}>Quantile</ListItem>
									</List>
								</Revealed>
							</Fill>
							<Fill>
								<Revealed pose={step >= 1 ? 'visible' : 'hidden'}>
									<Heading textSize={30} textColor="crimson">
										View Marks
									</Heading>
								</Revealed>
								<Revealed pose={step >= 3 ? 'visible' : 'hidden'}>
									<List>
										<ListItem textSize={itemSize}>Arc</ListItem>
										<ListItem textSize={itemSize}>Area</ListItem>
										<ListItem textSize={itemSize}>Group</ListItem>
										<ListItem textSize={itemSize}>Line</ListItem>
										<ListItem textSize={itemSize}>Path</ListItem>
										<ListItem textSize={itemSize}>Rect</ListItem>
										<ListItem textSize={itemSize}>Rule</ListItem>
										<ListItem textSize={itemSize}>Symbol</ListItem>
										<ListItem textSize={itemSize}>Text</ListItem>
										{step >= 4
											? [
													<ListItem textSize={itemSize} textColor="yello">
														Trail
													</ListItem>,
													<ListItem textSize={itemSize} textColor="yello">
														Shape
													</ListItem>,
													<ListItem textSize={itemSize} textColor="yello">
														Image
													</ListItem>,
											  ]
											: null}
									</List>
								</Revealed>
							</Fill>
							<Fill>
								<Revealed pose={step >= 1 ? 'visible' : 'hidden'}>
									<Heading textSize={30} textColor="crimson">
										Axes
									</Heading>
								</Revealed>
							</Fill>
							<Fill>
								<Revealed pose={step >= 4 ? 'visible' : 'hidden'}>
									<Heading textSize={30} textColor="crimson">
										TODO
									</Heading>
									<List>
										<ListItem textSize={itemSize} textColor="yello">
											Legend
										</ListItem>
										<ListItem textSize={itemSize} textColor="yello">
											Dataflow
										</ListItem>
									</List>
								</Revealed>
							</Fill>
						</Layout>
					</Fill>
				</div>
			)
		}}
	/>
)
