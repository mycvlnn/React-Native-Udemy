//lay ra 7 ngay truoc do

export const getDate7DaysAgo = (today: Date) => {
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)
}
