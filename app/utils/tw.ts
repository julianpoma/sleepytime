/* eslint-disable sort-keys */
/**
 * Custom CSS based on Tailwind CSS
 *
 * https://tailwindcss.com/docs/font-size/#app
 */

const tw = {
  color: {
    gray100: '#F7FAFC',
    gray200: '#EDF2F7',
    gray300: '#E2E8F0',
    gray400: '#CBD5E0',
    gray500: '#A0AEC0',
    gray600: '#718096',
    gray700: '#4A5568',
    gray800: '#2D3748',
    gray900: '#1A202C',
    primary100: '#EBF4FF',
    primary200: '#C3DAFE',
    primary300: '#A3BFFA',
    primary400: '#7F9CF5',
    primary: '#667EEA',
    primary600: '#5A67D8',
    primary700: '#4C51BF',
    primary800: '#434190',
    primary900: '#3C366B',
  },
  borderRadius: {
    none: 0,
    full: 9999,
    rounded: 4,
    md: 6,
    lg: 8,
  },
  borderWidth: {
    none: 0,
    base: 1,
    border2: 2,
    border4: 4,
    border8: 8,
  },
  letterSpacing: {
    none: 0,
    wide: 0.4,
    wider: 0.8,
    widest: 1.6,
  },
  margin: {
    none: 0,
    m1: 4,
    m2: 8,
    m3: 12,
    m4: 16,
    m5: 20,
    m6: 24,
    m8: 32,
  },
  padding: {
    none: 0,
    p1: 4,
    p2: 8,
    p3: 12,
    p4: 16,
    p5: 20,
    p6: 24,
    p8: 32,
  },
  text: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    xl2: 24,
    xl3: 30,
    xl4: 36,
    xl5: 48,
    xl6: 64,
  },
};

const shadow = {
  defaultButtonShadow: {
    elevation: 2, // Android
    shadowColor: tw.color.gray900,
    shadowOffset: {
      height: 1,
      width: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 24,
  },
};

export default { ...tw, ...shadow };
