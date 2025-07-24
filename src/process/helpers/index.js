import Jsona from 'jsona';

const classNames = (...classes) => classes.filter(Boolean).join(' ');

const dataFormatter = new Jsona();

const mock = () => {};

export { classNames, dataFormatter, mock };
