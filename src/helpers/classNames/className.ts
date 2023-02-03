export type TMods = Record<string, boolean | string>

export const classNames = (
	app: string,
	mods: TMods,
	additional: string[]
): string => {
	return [
		app,
		...additional,
		...Object.entries(mods)
			.filter(([className, value]) => Boolean(value))
			.map(([className, value]) => className),
	].join(' ')
}
