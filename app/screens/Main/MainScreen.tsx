import React, { useContext } from 'react';
import { Button, Container } from '../../components';
import { RootStackParamList } from '../../types';
import { tw } from '../../utils';
import { AntDesign, Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../../providers/ThemeProvider';

interface IProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const Main: React.FC<IProps> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  const chevron = (
    <AntDesign name="right" size={tw.text.xl} color={tw.color.gray100} />
  );

  const settingsGear = (
    <AntDesign
      name="setting"
      size={tw.text.xl}
      color={tw.color.primary}
    />
  );

  const info = (
    <Feather name="info" size={tw.text.xl} color={tw.color.primary} />
  );

  return (
    <Container>
      <Text style={[styles.title, colorTheme[theme].title]}>
        I would like to...
      </Text>
      <View style={styles.screens}>
        <Button.Primary
          margin={styles.button}
          icon={chevron}
          text="Wake up at..."
          onPress={() => navigation.navigate('WakeUpPicker')}
        />
        <Button.Primary
          margin={styles.button}
          icon={chevron}
          text="Fall asleep at..."
          onPress={() => navigation.navigate('FallAsleepPicker')}
        />
        <Button.Primary
          margin={styles.button}
          icon={chevron}
          text="Go to bed now"
          onPress={() => navigation.navigate('SleepNow')}
        />
        <Button.Primary
          margin={styles.button}
          icon={chevron}
          text="Take a power nap"
          onPress={() => navigation.navigate('PowerNap')}
        />
      </View>
      <View style={styles.options}>
        <Button.Secondary
          icon={info}
          onPress={() => navigation.navigate('Info')}
        />
        <Button.Secondary
          icon={settingsGear}
          onPress={() => navigation.navigate('Configurations')}
        />
      </View>
    </Container>
  );
};

const colorTheme = {
  dark: {
    title: {
      color: tw.color.primary100,
    },
  },
  light: {
    title: {
      color: tw.color.gray900,
    },
  },
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: tw.margin.none,
    marginVertical: tw.margin.m2,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: tw.margin.m6,
    width: '50%',
  },
  screens: {
    width: '70%',
  },
  title: {
    fontSize: tw.text.xl,
    letterSpacing: tw.letterSpacing.wide,
    marginBottom: tw.margin.m4,
  },
});

export default Main;
