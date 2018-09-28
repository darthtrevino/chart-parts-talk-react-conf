import React from 'react'
import {
	Axis,
	Chart,
	Rect,
	LinearScale,
	BandScale,
	Rule,
	Text,
} from '@chart-parts/react'
import {
	AxisOrientation,
	VerticalTextAlignment,
	HorizontalAlignment,
} from '@chart-parts/interfaces'
import { Renderer } from '@chart-parts/react-svg-renderer'
import { mean } from 'd3-array'

const renderer = new Renderer()

const data = [
	{ category: 'A', amount: 28 },
	{ category: 'B', amount: 55 },
	{ category: 'C', amount: 43 },
	{ category: 'D', amount: 91 },
	{ category: 'E', amount: 81 },
	{ category: 'F', amount: 53 },
	{ category: 'G', amount: 19 },
	{ category: 'H', amount: 87 },
]

export default class BarChart extends React.Component {
	state = { hoverRowIndex: undefined }

	render() {
		const { hoverRowIndex } = this.state
		return (
			<div style={{ backgroundColor: 'white' }}>
				<Chart
					width={800}
					height={400}
					renderer={renderer}
					data={{ data }}
					background="white"
					title="Bar Chart"
					description="An example bar chart"
				>
					<LinearScale name="y" domain="data.amount" range="height" nice zero />
					<BandScale
						name="x"
						bandWidth="band"
						domain="data.category"
						padding={0.05}
						range="width"
					/>
					<Axis orient="bottom" scale="x" />
					<Axis orient="left" scale="y" />
					<Rect
						table="data"
						ariaDescription={({ d }) =>
							`Category ${d.category} value is ${d.amount}`
						}
						tabIndex={1}
						onMouseEnter={({ index }) => {
							if (hoverRowIndex !== index) {
								this.setState({ hoverRowIndex: index })
							}
						}}
						onMouseLeave={({ index }) => {
							if (hoverRowIndex === index) {
								this.setState({ hoverRowIndex: undefined })
							}
						}}
						x={({ d, x }) => x(d.category)}
						y={({ d, y }) => y(d.amount)}
						width={({ band }) => band()}
						y2={({ y }) => y(0)}
						fill={({ index }) =>
							hoverRowIndex === index ? 'firebrick' : 'steelblue'
						}
					/>
					{hoverRowIndex !== undefined && (
						<Text
							text={d => d.data[hoverRowIndex].amount}
							fill="black"
							x={({ data, x, band }) =>
								x(data[hoverRowIndex].category) + band() / 2
							}
							y={({ data, y }) => y(data[hoverRowIndex].amount) - 3}
							baseline="bottom"
							align="center"
						/>
					)}
					<Rule
						x={0}
						x2={({ view }) => view.width}
						y={({ y, data }) => y(mean(data, d => d.amount))}
						stroke="firebrick"
					/>
				</Chart>
			</div>
		)
	}
}
