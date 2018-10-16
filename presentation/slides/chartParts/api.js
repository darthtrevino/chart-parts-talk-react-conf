import React from 'react'
import {
	Text,
	Fill,
	List,
	ListItem,
	Heading,
	Layout,
} from 'spectacle'
import posed from 'react-pose'

import notes from '../../notes'

import WalkableSlide from '../../components/WalkableSlide'

const itemSize = 25

const Revealed = posed.div({
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
})

const colStyle = {
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
}

export default (
	<WalkableSlide
		key="showcase_api"
		notes={notes.chartPartsApi}
		transition={['fade']}
		numSteps={8}
		renderContent={step => {
			return (
				<div>
					<Text textColor="secondary" style={{ fontWeight: 200 }}>
						API Components
					</Text>
					<Fill>
						<Layout>
							<div style={colStyle}>
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
							</div>
							<div style={colStyle}>
								<Revealed pose={step >= 1 ? 'visible' : 'hidden'}>
									<Heading textSize={30} textColor="crimson">
										Marks
									</Heading>
								</Revealed>
								<Revealed pose={step >= 3 ? 'visible' : 'hidden'}>
									<List>
										<ListItem textSize={itemSize}>Arc</ListItem>
										<ListItem textSize={itemSize}>Rect</ListItem>
										<ListItem textSize={itemSize}>Rule</ListItem>
										<ListItem textSize={itemSize}>Text</ListItem>
										<ListItem textSize={itemSize}>Symbol</ListItem>
										<ListItem textSize={itemSize}>Path</ListItem>
										{step >= 4 && [
											<ListItem textSize={itemSize}>Area</ListItem>,
											<ListItem textSize={itemSize}>Line</ListItem>
										]}
										{step >= 5 && <ListItem textSize={itemSize}>Group</ListItem>}
										{step >= 7
											&& [
												<ListItem textSize={itemSize} textColor="yello" key="trail">
													Trail
													</ListItem>,
												<ListItem textSize={itemSize} textColor="yello" key="shape">
													Shape
													</ListItem>,
												<ListItem textSize={itemSize} textColor="yello" key="image">
													Image
													</ListItem>,
											]}
									</List>
								</Revealed>
							</div>
							<div style={colStyle}>
								<Revealed pose={step >= 1 ? 'visible' : 'hidden'}>
									<Heading textSize={30} textColor="crimson">
										Guides
									</Heading>
								</Revealed>
								<Revealed pose={step >= 6 ? 'visible' : 'hidden'}>
									<List>
										<ListItem textSize={itemSize}>Axis</ListItem>
										<ListItem textSize={itemSize} textColor={step >= 7 ? 'yello' : 'transparent'}> Legend</ListItem>
									</List>
								</Revealed>
							</div>
							<div style={colStyle}>
								<Revealed pose={step >= 7 ? 'visible' : 'hidden'}>
									<Heading textSize={30} textColor="crimson">
										TODO
									</Heading>
									<List>
										<ListItem textSize={itemSize} textColor="yello">
											Dataflow
										</ListItem>
										<ListItem textSize={itemSize} textColor="yello">
											Animation
										</ListItem>
									</List>
								</Revealed>
							</div>
						</Layout>
					</Fill>
				</div >
			)
		}}
	/>
)
