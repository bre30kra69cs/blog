import {guardString} from './guards';

type Styles = Record<string, string>;

type Mods = Record<string, boolean | undefined | null>;

const root = 'Main';

export const bem = (styles: Styles) => {
  return (block?: string, mods?: Mods) => {
    const target = !block ? root : `${root}--${block}`;
    if (!mods) return styles[target];

    const targetMods = Object.entries(mods)
      .filter(([, value]) => !!value)
      .map(([key]) => `${target}__${key}`);

    return [target, ...targetMods].map((key) => styles[key]).join(' ');
  };
};

type ClassName = string | boolean | undefined | null | number;

export const cn = (...classNames: ClassName[]) => {
  return classNames.filter(guardString(false)).join(' ');
};
