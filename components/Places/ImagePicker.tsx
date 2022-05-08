import React, { useState } from 'react'
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'

import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus
} from 'expo-image-picker'
import { Colors } from '../../constants/colors'
import OutlinedButton from '../UI/OutlinedButton'

const ImagePicker = () => {
  const [cameraPermissionInfo, requestPermission] = useCameraPermissions()
  const [pickedImage, setPickedImage] = useState('')

  //Xác nhận đã có quyền. Và lần sau thì không hỏi lại nữa.
  const verifyPermissions = async () => {
    if (cameraPermissionInfo?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission()

      return permissionResponse.granted //trả về true nếu được phép ngược lại trả về false.
    }

    if (cameraPermissionInfo?.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insuffecient Permission!',
        "You won't be able to take a picture unless you enable the camera permission",
        [
          {
            text: 'Allow Access',
            onPress: () => {
              cameraPermissionInfo.status = PermissionStatus.UNDETERMINED
              takeImageHandler()
            },
            style: 'default'
          },
          {
            text: 'Cancel',
            style: 'cancel'
          }
        ],
        {
          cancelable: true
        }
      )
      return false
    }

    return true
  }

  const takeImageHandler = async () => {
    const hasPermisson = await verifyPermissions()
    if (!hasPermisson) {
      return
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    })
    if (!image.cancelled) {
      console.log(image)
      setPickedImage(image.uri)
    }
  }

  let imagePreview = <Text style={styles.text}>No image Taken yet.</Text>

  if (pickedImage) {
    imagePreview = <Image source={{ uri: pickedImage }} style={styles.image} />
  }

  return (
    <View>
      <View style={styles.previewImage}>{imagePreview}</View>
      <OutlinedButton
        icon="camera-outline"
        onPress={takeImageHandler}
        color={Colors.primary500}
        size={16}
        sizeIcon={22}
      >
        Take Image
      </OutlinedButton>
    </View>
  )
}

export default ImagePicker

const styles = StyleSheet.create({
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 4,
    marginVertical: 10,
    backgroundColor: Colors.primary800,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  text: {
    color: Colors.primary50
  }
})
