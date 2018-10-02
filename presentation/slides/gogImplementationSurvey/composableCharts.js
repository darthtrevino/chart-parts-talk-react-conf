import React from 'react'
import {
	ListItem,
	List,
	Slide,
	Appear,
	Layout,
	Fill,
	Image,
	Text,
	Heading,
} from 'spectacle'
import CommonHeader from './CommonHeader'
import notes from '../../notes'
import images from '../../images'

export default [
	<Slide
		key="survery_comp_list_front"
		bgImage={images.halloweenBG}
		notes={notes.composableLibrariesSplash}
	>
		<div style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
			<Heading size={1} textColor="yello">
				Component-Based Libraries
			</Heading>
		</div>
	</Slide>,
	<Slide
		key="surv_comp_list"
		notes={notes.composableLibraries}
		transition={['fade']}
	>
		<CommonHeader />
		<Layout>
			<Appear>
				<Fill>
					<List>
						<Appear>
							<ListItem textColor="yello">victory</ListItem>
						</Appear>
						<Appear>
							<ListItem textColor="yello">react-vis</ListItem>
						</Appear>
						<Appear>
							<ListItem textColor="yello">recharts</ListItem>
						</Appear>
					</List>
				</Fill>
			</Appear>
		</Layout>
	</Slide>,
	<Slide
		key="surv_comp_victax"
		notes={notes.victoryTaxonomical}
		transition={['fade']}
	>
		<CommonHeader />
		<Layout>
			<Fill style={{ flex: 1 }}>
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
				<Image src={images.victoryApi} height={350} />
			</Fill>
		</Layout>
	</Slide>,
	<Slide
		key="surv_comp_viccomp"
		notes={notes.composableVictory2}
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
							<ListItem>composable</ListItem>
							<ListItem>customizable</ListItem>
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
		key="surv_comp_viccust"
		notes={notes.victoryCustomizable}
		transition={['fade']}
	>
		<CommonHeader />
		<Layout>
			<Fill style={{ flex: 1 }}>
				<List>
					<ListItem textColor="yello">
						Victory
						<List style={{ marginLeft: 10 }}>
							<ListItem>taxonomical</ListItem>
							<ListItem>composable</ListItem>
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
		key="surv_comp_singletons"
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
							<ListItem>composable</ListItem>
							<ListItem>custom elements</ListItem>
							<ListItem>svg-bound</ListItem>
						</List>
					</ListItem>
				</List>
			</Fill>
			<Fill>
				<Image src={images.victoryCircle} />
			</Fill>
		</Layout>
	</Slide>,
	<Slide key="surv_comp_rv_api" notes={notes.reactVisApi} transition={['fade']}>
		<CommonHeader />
		<Layout>
			<Fill>
				<List>
					<ListItem textColor="yello">
						react-vis
						<List style={{ marginLeft: 20 }}>
							<ListItem>mark series api</ListItem>
						</List>
					</ListItem>
				</List>
			</Fill>
			<Fill>
				<Image src={images.reactVisApi} height={350} />
			</Fill>
		</Layout>
	</Slide>,
	<Slide
		key="surv_comp_rv_canvas"
		notes={notes.reactVisCanvasApi}
		transition={['fade']}
	>
		<CommonHeader />
		<Layout>
			<Fill>
				<List>
					<ListItem textColor="yello">
						react-vis
						<List style={{ marginLeft: 20 }}>
							<ListItem>mark series api</ListItem>
							<ListItem>canvas support</ListItem>
						</List>
					</ListItem>
				</List>
			</Fill>
			<Fill>
				<Image src={images.reactVisCanvas} height={350} />
			</Fill>
		</Layout>
	</Slide>,
	<Slide
		key="surv_comp_recharts_overview"
		notes={notes.rechartsDatabind}
		transition={['fade']}
	>
		<CommonHeader />
		<Layout>
			<Fill>
				<List>
					<ListItem textColor="yello">
						recharts
						<List style={{ marginLeft: 20 }}>
							<ListItem>data-binding</ListItem>
						</List>
					</ListItem>
				</List>
			</Fill>
			<Fill>
				<Image style={{ marginTop: 50 }} src={images.rechartsDatabind} />
			</Fill>
		</Layout>
	</Slide>,
	<Slide
		key="surv_comp_recharts_overview_1"
		notes={notes.rechartsCustomizability}
		transition={['fade']}
	>
		<CommonHeader />
		<Layout>
			<Fill>
				<List>
					<ListItem textColor="yello">
						recharts
						<List style={{ marginLeft: 20 }}>
							<ListItem>data-binding</ListItem>
							<ListItem>customizable</ListItem>
						</List>
					</ListItem>
				</List>
			</Fill>
			<Fill>
				<Image src={images.rechartsCustomChart} height={350} />
			</Fill>
		</Layout>
	</Slide>,
	<Slide
		key="surv_comp_recharts_overview_2"
		notes={notes.rechartsTooltips}
		transition={['fade']}
	>
		<CommonHeader />
		<Layout>
			<Fill>
				<List>
					<ListItem textColor="yello">
						recharts
						<List style={{ marginLeft: 20 }}>
							<ListItem>data-binding</ListItem>
							<ListItem>customizable</ListItem>
							<ListItem>tooltips</ListItem>
						</List>
					</ListItem>
				</List>
			</Fill>
			<Fill>
				<Image src={images.rechartsCustom} height={350} />
			</Fill>
		</Layout>
	</Slide>,
	<Slide
		key="surv_comp_recharts_overview_3"
		notes={notes.rechartsTaxonomical}
		transition={['fade']}
	>
		<CommonHeader />
		<Layout>
			<Fill>
				<List>
					<ListItem textColor="yello">
						recharts
						<List style={{ marginLeft: 20 }}>
							<ListItem>data-binding</ListItem>
							<ListItem>customizable</ListItem>
							<ListItem>tooltips</ListItem>
							<ListItem>taxonomical</ListItem>
						</List>
					</ListItem>
				</List>
			</Fill>
			<Fill>
				<Image src={images.rechartsTaxonomical} height={350} />
			</Fill>
		</Layout>
	</Slide>,
]
