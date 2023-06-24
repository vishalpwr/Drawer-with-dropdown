import { View, ViewStyle } from "react-native";
import { styles } from "./styles";
import { ReactNode } from "react";

interface RowProps {
  children?: ReactNode | ReactNode[];
  backgroundColor?: string;
  style?: ViewStyle | ViewStyle[];
}

export const Row = ({
  children,
  backgroundColor,
  style,
}: RowProps) => {
  return (
    <View style={[styles.row, { backgroundColor }, style]}>
      {children}
    </View>
  )
};
