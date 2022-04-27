import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './Stack'

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default RootNavigation
