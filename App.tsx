// In App.js in a new project

import { StatusBar } from 'expo-status-bar'
import React from 'react'
import RootNavigation from './src/navigation'
import ExpenseProvider from './src/store/expenses-context'

function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpenseProvider>
        <RootNavigation />
      </ExpenseProvider>
    </>
  )
}

export default App
