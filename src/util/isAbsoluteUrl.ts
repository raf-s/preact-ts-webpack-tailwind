const absUrlExp = /^(https?:)?\/\//m;

export const isAbsoluteUrl = (url: string) => absUrlExp.test(url);
