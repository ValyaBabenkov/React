import { lazy } from 'react'
export const AboutPageLazy = lazy(
	() =>
		new Promise(resolve =>
			setTimeout(() => {
				//@ts-ignore
				resolve(import('./AboutPage'))
			}, 1500)
		)
)
