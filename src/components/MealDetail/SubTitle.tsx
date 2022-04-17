import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Color } from '../../constants/colors'

type Props = {
  title: string
}
const SubTitle: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{title}</Text>
    </View>
  )
}

export default SubTitle

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.primary_300,
    textAlign: 'center',
    marginTop: 20
  },
  subTitleContainer: {
    borderBottomColor: Color.primary,
    borderBottomWidth: 1,
    paddingBottom: 4,
    width: '100%',
    marginTop: 12
  }
})
