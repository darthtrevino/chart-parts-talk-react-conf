import React from 'react'
import { Heading, ListItem, List, Slide, Appear, Layout, Fill } from 'spectacle'
import notes from '../../notes'

export default (
	<Slide key="survey_grounded" notes={notes.gogGrounded}>
		<Heading size={5} caps textColor="highlight">
			Grounded in GoG Theory
		</Heading>
		<Layout>
			<Appear order={2}>
				<Fill>
					<Heading size={6} textColor="secondary">
						Python
					</Heading>
					<List>
						<ListItem textColor="yello">ggplot</ListItem>
						<Appear order={5}>
							<ListItem textColor="yello">altair</ListItem>
						</Appear>

						<Appear order={7}>
							<ListItem textColor="yello">plotly</ListItem>
						</Appear>
					</List>
				</Fill>
			</Appear>
			<Appear order={1}>
				<Fill>
					<Heading size={6} textColor="secondary">
						R
					</Heading>
					<List>
						<ListItem textColor="yello">ggplot2</ListItem>
						<Appear order={7}>
							<ListItem textColor="yello">plotly</ListItem>
						</Appear>
					</List>
				</Fill>
			</Appear>

			<Appear order={3}>
				<Fill>
					<Heading size={6} textColor="secondary">
						Javascript
					</Heading>
					<List>
						<ListItem textColor="yello">vega</ListItem>
						<Appear order={4}>
							<ListItem textColor="yello">vega-lite</ListItem>
						</Appear>
						<Appear order={5}>
							<ListItem textColor="yello">g2</ListItem>
						</Appear>
						<Appear order={7}>
							<ListItem textColor="yello">plotly</ListItem>
						</Appear>
					</List>
				</Fill>
			</Appear>
		</Layout>
	</Slide>
)
