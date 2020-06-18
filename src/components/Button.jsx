import React from "react";
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Platform,
} from "react-native";
import MaterialRipple from "react-native-material-ripple";

import Text from "./Text";
import Theme from "constants/Theme";
import Colors from "constants/Colors";

const Button = ({
  disabled,
  loading,
  variant,
  text,
  onPress,
  buttonStyle,
  textVariant = "button",
  bare,
  color,
  containerStyle,
  secondary,
  icon,
}) => {
  const variantProps = Theme.buttonVariants[variant];
  const disabledProps = disabled ? variantProps.disabled || {} : {};
  const themedStyles = { ...variantProps, ...disabledProps };
  const textColor = bare
    ? Colors.primary50
    : color
    ? color
    : themedStyles.textColor;

  const onPressHandler = loading ? () => {} : onPress;

  const allStyles = bare
    ? [styles.button, buttonStyle]
    : [styles.button, themedStyles, buttonStyle];
  const content = secondary ? (
    <View style={allStyles}>{icon}</View>
  ) : (
    <View style={allStyles}>
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <>
          <Text style={{ color: textColor }} variant={textVariant}>
            {text}
          </Text>
          {/* { <Icon name={externalArrowIcon} />} */}
        </>
      )}
    </View>
  );
  if (Platform.OS === "android") {
    return (
      <MaterialRipple
        rippleContainerBorderRadius={4}
        rippleDuration={500}
        style={containerStyle}
        onPress={onPressHandler}
        {...{ disabled }}
      >
        {content}
      </MaterialRipple>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={[styles.stretch, containerStyle]}
      {...{ disabled }}
    >
      {content}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
  },
  stretch: {
    alignSelf: "stretch",
  },
  content: {
    textAlign: "center",
  },
});
