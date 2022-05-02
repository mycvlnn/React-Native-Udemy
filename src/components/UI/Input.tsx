import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle
} from 'react-native'
import { Colors } from '../../constants/colors'

interface IProps {
  label: string
  textInputConfig?: TextInputProps
  style?: ViewStyle
  invalid?: boolean
}

const Input: React.FC<IProps> = ({
  label,
  textInputConfig,
  style,
  invalid
}) => {
  const inputStyles: ViewStyle[] = [styles.input]

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiple)
  }

  if (invalid) {
    inputStyles.push(styles.inputInvalid)
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput {...textInputConfig} style={inputStyles} />
    </View>
  )
}

export default React.memo(Input)

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8
  },
  label: {
    color: Colors.primary100,
    marginBottom: 4
  },
  input: {
    backgroundColor: Colors.primary100,
    fontSize: 16,
    color: Colors.primary700,
    borderRadius: 8,
    padding: 8
  },
  inputMultiple: {
    minHeight: 100,
    textAlignVertical: 'top'
  },
  labelInvalid: {
    color: Colors.error500
  },
  inputInvalid: {
    backgroundColor: Colors.error50
  }
})
