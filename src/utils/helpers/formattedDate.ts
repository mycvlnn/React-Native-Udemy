export const formattedDate = (date?: Date) => {
  if (!date) return
  return `${date.getFullYear()} - ${date.getMonth() + 1} - ${date.getDate()}`
}
