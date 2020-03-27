import { Platform } from 'react-native';
import tw from './tw';

const IOS = Platform.OS === 'ios';

enum THEME {
  DARK = 'dark',
  LIGHT = 'light',
}

const HOUR_12_FORMAT = 'hh:mm a';

export { IOS, HOUR_12_FORMAT, THEME, tw };
