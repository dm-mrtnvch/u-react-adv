type Mods = Record<string, boolean | string>

function classNames(cls: string, mods: Mods, additional: string[]): string {

  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className)
  ]
    .join(' ')
};

export default classNames;
