/* eslint-disable sort-keys */
/**
 * Custom CSS based on Tailwind CSS
 *
 * https://tailwindcss.com/docs/font-size/#app
 */

const tw = {
  color: {
    dark: {
      backgrounColor: '#1A202C',
      primary: '#667EEA',
    },
    light: {
      backgrounColor: '#F7FAFC',
      gray100: '#F7FAFC',
      gray900: '#1A202C',
      primary: '#667EEA',
    },
  },
  borderRadius: {
    none: 0,
    full: 9999,
  },
  borderWidth: {
    none: 0,
    base: 1,
    border2: 2,
    border4: 4,
    border8: 8,
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
  },
};

const shadow = {
  defaultButtonShadow: {
    elevation: 2, // Android
    shadowColor: tw.color.light.backgrounColor,
    shadowOffset: {
      height: 1,
      width: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 24,
  },
};

export default { ...tw, ...shadow };
