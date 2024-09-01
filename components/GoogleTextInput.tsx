import { View, Image, Text } from "react-native";

import { icons } from "@/constants";
import { GoogleInputProps } from "@/types/types";

export const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => {
  return (
    <View
      className={`flex flex-row items-center justify-center relative z-50 rounded-xl ${containerStyle}`}
    >
      <Text>Search</Text>
    </View>
  );
};
