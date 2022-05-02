export const formattedDate = (date?: Date) => {
  if (!date) return ''

  return date.toISOString().slice(0, 10) //the same logic below
  // return `${date.getFullYear()} - ${date.getMonth() + 1} - ${date.getDate()}`
}
