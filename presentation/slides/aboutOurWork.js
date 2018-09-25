import React from 'react'
import { Slide, Image, Layout, Fill, Appear } from 'spectacle'
import notes from '../notes'
import images from '../images'

export default [
	<Slide notes={notes.ourwork} key={'ourwork1'}>
		<Layout>
			<Fill>
				<Image fill src={images.narcissism} height={325} />
				<Appear>
					<Image fill src={images.network} height={325} />
				</Appear>
			</Fill>
			<Fill>
				<Appear>
					<Image fill src={images.dcu} height={300} />
				</Appear>
				<Appear>
					<Image fill src={images.healthcare} height={325} />
				</Appear>
			</Fill>
		</Layout>
	</Slide>,
	<Slide transition={['fade']} notes={notes.ourteam} key={'ourwork2'}>
		<Image fill src={images.ourteam} />
	</Slide>,
	<Slide transition={['fade']} notes={notes.ourteam2} key={'ourwork3'}>
		<Image fill src={images.ourteam2} />
	</Slide>,
]
