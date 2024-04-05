export const thousandSeparator = (
  number: number,
  signDisplay?: 'auto' | 'never' | 'always' | 'exceptZero'
) =>
  new Intl.NumberFormat('en-En', {
    signDisplay,
  }).format(number)
