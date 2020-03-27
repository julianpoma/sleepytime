import React, { useContext } from 'react';
import { Container } from '../../components';
import { tw } from '../../utils';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../../providers/ThemeProvider';

const InfoScreen = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <View style={styles.container}>
        <Text style={[styles.text, colorTheme[theme].text]}>
          Made with ❤️ by Julian Poma
        </Text>
      </View>
    </Container>
  );
};

const colorTheme = {
  dark: { text: { color: tw.color.light.primary100 } },
  light: { text: { color: tw.color.light.gray900 } },
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: tw.text.xl,
  },
});

export default InfoScreen;
