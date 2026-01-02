import { useTheme } from "@react-navigation/native";
import { Text as DefaultText, TextProps } from "react-native";

export function Text(props: TextProps) {
  const { colors } = useTheme();

  return (
    <DefaultText
      {...props}
      style={[
        { fontFamily: "NotoSerifTC_400Regular", color: colors.text },
        props.style,
      ]}
    />
  );
}
