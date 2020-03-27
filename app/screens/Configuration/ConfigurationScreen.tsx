import React from 'react';
import { Container } from '../../components';
import { tw } from '../../utils';
import { StyleSheet, Switch, View, Text } from 'react-native';
import { ThemeContext } from '../../providers/ThemeProvider';

function ThemeTogglerButton() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        return (
          <>
            <Switch
              onValueChange={toggleTheme}
              value={theme === 'dark'}
              thumbColor={tw.color.primary}
              trackColor={{
                false: tw.color.gray300,
                true: tw.color.gray800,
              }}
            />
            <Text style={[styles.text, colorTheme[theme].text]}>Dark mode</Text>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
}

const ConfigurationScreen = () => {
  return (
    <Container>
      <View style={styles.container}>
        <ThemeTogglerButton />
      </View>
    </Container>
  );
};

const colorTheme = {
  dark: { text: { color: tw.color.primary100 } },
  light: { text: { color: tw.color.gray900 } },
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: tw.text.xl,
    marginLeft: tw.margin.m3,
  },
});

export default ConfigurationScreen;
