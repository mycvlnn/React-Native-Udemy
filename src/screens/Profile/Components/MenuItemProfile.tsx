import { Ionicons } from '@expo/vector-icons'
import { Text, View, StyleSheet } from 'react-native'
import Icon from '../../../components/Icon/Icon'

interface Props {
  name: string
  nameIcon: keyof typeof Ionicons.glyphMap
}

const MenuItemProfile: React.FC<Props> = ({ name, nameIcon }) => {
  return (
    <View style={styles.container}>
      <Icon size={20} name={nameIcon} color="black" />
      <Text style={styles.txtName}>{name}</Text>
    </View>
  )
}
export default MenuItemProfile

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24
  },
  txtName: {
    marginLeft: 16,
    fontSize: 16,
    lineHeight: 18
  }
})
