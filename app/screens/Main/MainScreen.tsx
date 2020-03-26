import React from 'react';
import { Button, Container } from '../../components';
import { RootStackParamList } from '../../types';
import { tw } from '../../utils';
import { AntDesign } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const Main: React.FC<IProps> = ({ navigation }) => {
  const chevron = (
    <AntDesign name="right" size={tw.text.xl} color={tw.color.light.gray100} />
  );

  return (
    <Container>
      <Text style={styles.title}>I would like to...</Text>
      <View style={styles.options}>
        <Button.Primary
          margin={styles.button}
          icon={chevron}
          label="Wake up at..."
          onPress={() => {}}
        />
        <Button.Primary
          margin={styles.button}
          icon={chevron}
          label="Fall asleep at..."
          onPress={() => navigation.navigate('FallAsleepPicker')}
        />
        <Button.Primary
          margin={styles.button}
          icon={chevron}
          label="Go to bed now"
          onPress={() => navigation.navigate('SleepNow')}
        />
        <Button.Primary
          margin={styles.button}
          icon={chevron}
          label="Take a power nap"
          onPress={() => navigation.navigate('PowerNap')}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: tw.margin.none,
    marginVertical: tw.margin.m2,
  },
  options: {
    width: '70%',
  },
  title: {
    color: tw.color.light.gray900,
    fontSize: tw.text.xl,
    marginBottom: tw.margin.m4,
  },
});

export default Main;
