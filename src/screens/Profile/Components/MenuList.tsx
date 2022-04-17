import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'
import MenuItemProfile from './MenuItemProfile'

type DataType = {
  name: string
  nameIcon: keyof typeof Ionicons.glyphMap
  id: number
}
const MenuList = (props: { data: DataType[] }) => {
  const data = props.data

  return (
    <View style={styles.container}>
      {data.map((item) => {
        const { name, nameIcon, id } = item
        return <MenuItemProfile key={id} name={name} nameIcon={nameIcon} />
      })}
    </View>
  )
}

export default MenuList

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 26,
    marginHorizontal: 8
  }
})
