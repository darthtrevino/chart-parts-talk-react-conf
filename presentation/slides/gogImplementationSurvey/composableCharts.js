import React from 'react'
import {
	Heading,
	ListItem,
	List,
	Slide,
	Appear,
	Layout,
	Fill,
	Image,
} from 'spectacle'

import notes from '../../notes'
import images from '../../images'

const CommonHeader = () => (
	<Heading size={6} caps textColor="highlight" fill>
		Component-Based Charting Libs
	</Heading>
)

export default [
	<Slide
		key="survey_composable_1"
		notes={notes.composableVictory}
		transition={['fade']}
	>
		<CommonHeader />
		<Layout>
			<Appear>
				<Fill>
					<List>
						<ListItem textColor="yello">Victory</ListItem>
					</List>
				</Fill>
			</Appear>
		</Layout>
	</Slide>,
	<Slide
		bgImage={images.victory}
		key="survey_composable_victory_page"
		notes={notes.composableVictoryPage}
	/>,
	<Slide
		key="survey_composable_v1"
		notes={notes.victoryTaxonomical}
		transition={['fade']}
	>
		<CommonHeader />
		<Layout>
			<Fill>
				<List>
					<ListItem textColor="yello">
						Victory
						<List style={{ marginLeft: 20 }}>
							<ListItem>taxonomical</ListItem>
						</List>
					</ListItem>
				</List>
			</Fill>
			<Fill>
				<Image src={images.victoryApi} />
			</Fill>
		</Layout>
	</Slide>,
	<Slide
		key="survey_composable_v2"
		notes={notes.victoryCustomizable}
		transition={['fade']}
	>
		<CommonHeader />
		<Layout>
			<Fill>
				<List>
					<ListItem textColor="yello">
						Victory
						<List style={{ marginLeft: 10 }}>
							<ListItem>taxonomical</ListItem>
							<ListItem>custom elements</ListItem>
						</List>
					</ListItem>
				</List>
			</Fill>
			<Fill>
				<Image src={images.victoryCustom} />
			</Fill>
		</Layout>
	</Slide>,
	<Slide
		key="survey_composable_v3"
		notes={notes.composableVictory}
		transition={['fade']}
	>
		<CommonHeader />
		<Layout>
			<Fill>
				<List>
					<ListItem textColor="yello">
						Victory
						<List style={{ marginLeft: 10 }}>
							<ListItem>taxonomical</ListItem>
							<ListItem>custom elements</ListItem>
							<ListItem>composable</ListItem>
						</List>
					</ListItem>
				</List>
			</Fill>
			<Fill>
				<Image src={images.victoryComposable} />
			</Fill>
		</Layout>
	</Slide>,
	<Slide
		key="survey_composable_v4"
		notes={notes.victoryCircle}
		transition={['fade']}
	>
		<CommonHeader />
		<Layout>
			<Fill>
				<List>
					<ListItem textColor="yello">
						Victory
						<List style={{ marginLeft: 10 }}>
							<ListItem>taxonomical</ListItem>
							<ListItem>custom elements</ListItem>
							<ListItem>composable</ListItem>
						</List>
					</ListItem>
				</List>
			</Fill>
			<Fill>
				<Image src={images.victoryCircle} />
			</Fill>
		</Layout>
	</Slide>,

	<Slide
		key="survey_composable_2"
		notes={notes.gogGrounded}
		transition={['fade']}
	>
		<CommonHeader />
		<List>
			<ListItem textColor="yello">Victory</ListItem>
			<ListItem textColor="yello">React-Vis</ListItem>
		</List>
	</Slide>,
	<Slide
		key="survey_composable_3"
		notes={notes.gogGrounded}
		transition={['fade']}
	>
		<CommonHeader />
		<List>
			<ListItem textColor="yello">Victory</ListItem>
			<ListItem textColor="yello">React-Vis</ListItem>
			<ListItem textColor="yello">Recharts</ListItem>
		</List>
	</Slide>,
]
