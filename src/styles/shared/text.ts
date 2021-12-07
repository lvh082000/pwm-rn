const RobotoSlab = {
  Black: 'RobotoSlab-Black' as const,
  Bold: 'RobotoSlab-Bold' as const,
  ExtraBold: 'RobotoSlab-ExtraBold' as const,
  ExtraLight: 'RobotoSlab-ExtraLight' as const,
  Light: 'RobotoSlab-Light' as const,
  Medium: 'RobotoSlab-Medium' as const,
  Regular: 'RobotoSlab-Regular' as const,
  SemiBold: 'RobotoSlab-SemiBold' as const,
  Thin: 'RobotoSlab-Thin' as const,
}

export const t = {
  h0: {
    fontSize: 30,
  },
  h1: {
    fontSize: 24,
  },
  h2: {
    fontSize: 22,
  },
  h3: {
    fontSize: 20,
  },
  h4: {
    fontSize: 18,
  },
  h5: {
    fontSize: 16,
  },
  p: {
    fontSize: 14,
  },
  pSM: {
    fontSize: 13,
  },
  pXS: {
    fontSize: 10,
  },
  fontFamily: {
    RobotoSlab,
  },
  textCtr: {
    textAlign: 'center' as const,
  },
  textLeft: {
    textAlign: 'left' as const,
  },
  textRight: {
    textAlign: 'right' as const,
  },
  underline: {
    textDecorationLine: 'underline' as const,
  },
}
