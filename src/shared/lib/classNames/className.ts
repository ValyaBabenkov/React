export type TMods = Record<string, boolean | string>

export const classNames = (
    app: string,
    mods: TMods = {},
    additional: string[] = [],
): string => [
    app,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className),
].join(' ');
