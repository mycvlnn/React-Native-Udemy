import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/colors'
import { fontFamily } from '../../constants/fonts'

const deviceWidth = Dimensions.get('window').width

const ButtonPrimary = ({ children, onClick }) => {
  console.log('deviceWidth', deviceWidth)
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        android_ripple={{ color: Colors.primary800 }}
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnerContainer, styles.pressed]
            : styles.btnInnerContainer
        }
        onPress={onClick}
      >
        <Text style={styles.btnText} onPress={onClick}>
          {children}
        </Text>
      </Pressable>
    </View>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({
  btnOuterContainer: {
    overflow: 'hidden',
    borderRadius: 28
  },
  btnInnerContainer: {
    paddingVertical: 10,
    backgroundColor: Colors.primary500,
    elevation: 4
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: deviceWidth <= 360 ? 12 : 15,
    fontWeight: '500',
    fontFamily: fontFamily.open_sans_bold
  },
  pressed: {
    opacity: 0.8
  }
})
