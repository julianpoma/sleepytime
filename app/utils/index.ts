import { Platform } from 'react-native';
import tw from './tw';

const IOS = Platform.OS === 'ios';

const HOUR_12_FORMAT = 'hh:mm a';

export { IOS, HOUR_12_FORMAT, tw };
