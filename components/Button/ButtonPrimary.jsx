import { View, Text } from "react-native";

const ButtonPrimary = ({ children, onClick }) => {
  return (
    <View>
      <Text onPress={onClick}>{children}</Text>
    </View>
  );
};

export default ButtonPrimary;
