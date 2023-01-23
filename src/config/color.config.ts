const Colors = {
  variant_1: '#778FD2',
  variant_2: '#FD292F',
  variant_3: '#058240',
  variant_4: '#F3AE5F',
  variant_5: '#847aae'
} as const

export type ColorsInterface = keyof typeof Colors

/**
 * GET RANDOM COLOR
 */
const getRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * 5) + 1
  return Colors[`variant_${randomNumber}` as ColorsInterface]
}

export default Colors
