export const numberAbbr = (number: number, fraction?: number) =>
  Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: fraction || 1,
  }).format(number)
