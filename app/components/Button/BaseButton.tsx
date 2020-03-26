import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface IProps {
  activeOpacity?: number;
  buttonStyle: StyleProp<ViewStyle>;
  icon?: JSX.Element;
  margin: {
    marginVertical: number;
    marginHorizontal: number;
  };
  onPress: React.EventHandler<any>;
  textStyle: StyleProp<TextStyle>;
  text?: string;
}

const BaseButton: React.FC<IProps> = ({
  activeOpacity,
  buttonStyle,
  icon,
  margin,
  onPress,
  text,
  textStyle,
}) => (
  <View style={margin}>
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyle}
      activeOpacity={activeOpacity || 0.9}
    >
      {text ? <Text style={textStyle}>{text.toUpperCase()}</Text> : null}
      {icon ? icon : null}
    </TouchableOpacity>
  </View>
);

export default BaseButton;
