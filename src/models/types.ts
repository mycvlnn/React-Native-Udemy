export type RootStackPamramList = {
  AllExpense: undefined

  RecentExpense: undefined
  ManageExpense: {
    id?: string
  }
  BottomTab: undefined
  Drawer: undefined
}

export interface Expense {
  id: string
  description?: string
  date: Date
  amount: number
}
