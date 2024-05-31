import { type Variants } from 'framer-motion'

export const menuCollapse: Variants = {
  open: (negValue) => ({
    y: !negValue
      ? [null, '0.75rem', '0.75rem', '0.75rem']
      : [null, '-0.75rem', '-0.75rem', '-0.75rem'],
    width: ['0.5rem', '0.5rem', '0.5rem', '2.5rem'],
    rotate: !negValue ? [null, 0, 45, 45] : [null, 0, -45, -45],
  }),
  closed: (negValue) => ({
    y: !negValue ? ['0.75rem', '0.75rem', '0.75rem', 0] : ['-0.75rem', '-0.75rem', '-0.75rem', 0],
    width: ['2.5rem', '0.5rem', '0.5rem', '0.5rem'],
    rotate: !negValue ? [45, 45, 0, 0] : [-45, -45, 0, 0],
  }),
}
