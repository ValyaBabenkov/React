import { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
	const [count, setCount] = useState(0)

	return (
		<div>
			<div>{count}</div>
			<button
				className={classes.button}
				onClick={() => setCount(prev => prev + 1)}
			>
				{+1}
			</button>
		</div>
	)
}
