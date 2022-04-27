import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootStackPamramList } from '../models'
import RecentExpenses from '../screens/RecentExpense'
import { AntDesign } from '@expo/vector-icons'
import { Colors } from '../constants/colors'
import AllExpenses from '../screens/AllExpenses'
import IconButton from '../components/UI/IconButton'

const BottomTab = createBottomTabNavigator<RootStackPamramList>()

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.accent500,
        headerTintColor: Colors.accent500,
        tabBarLabelStyle: { fontSize: 10 },
        tabBarStyle: {
          backgroundColor: Colors.primary500
        },
        headerStyle: { backgroundColor: Colors.primary500 }
      }}
    >
      <BottomTab.Screen
        name="RecentExpense"
        component={RecentExpenses}
        options={{
          title: 'Recent Expense',
          tabBarIcon: ({ color, focused, size }) => (
            <AntDesign name="clockcircle" color={color} size={size} />
          )
        }}
      />
      <BottomTab.Screen
        name="AllExpense"
        component={AllExpenses}
        options={({ navigation }) => ({
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" color={color} size={size} />
          ),
          headerRight: ({ tintColor }) => (
            <IconButton
              onPress={() => navigation.navigate('ManageExpense')}
              name="add"
              size={30}
              color={tintColor}
            />
          )
        })}
      />
    </BottomTab.Navigator>
  )
}
export default BottomTabNavigator
