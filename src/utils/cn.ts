import classNames from 'classnames'

export const cn = (...classes: (string | undefined | null | false)[]): string =>
  classNames(classes)
