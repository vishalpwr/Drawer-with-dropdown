import { View, ViewStyle } from "react-native";
import { styles } from "./styles";

interface ContainerProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  style?: ViewStyle;
}
export const Container = ({
  children,
  backgroundColor,
  style,
}: ContainerProps) => {
  return (
    <View style={[styles.container, { backgroundColor }, style]}>{children}</View>
  )
};
