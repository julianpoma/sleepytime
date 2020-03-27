import React, { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import { tw } from '../../utils';
import { StyleSheet, Text, View } from 'react-native';
import { Linking } from 'expo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from '../../components';

const InfoScreen = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView style={[styles.safeArea, colorTheme[theme].safeArea]}>
      <ScrollView style={styles.scroll}>
        <View>
          <View style={styles.infoContainer}>
            <Text style={[styles.infoTitle, colorTheme[theme].text]}>
              Wake up at...
            </Text>
            <Text style={[styles.infoText, colorTheme[theme].text]}>
              Select when you want to wake up, and you should fall asleep in one
              of the suggested times. Please keep in mind that you should be
              falling asleep at these times. The average human takes fourteen
              minutes to fall asleep, so plan accordingly!
            </Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.infoTitle, colorTheme[theme].text]}>
              Fall asleep at...
            </Text>
            <Text style={[styles.infoText, colorTheme[theme].text]}>
              Select when you want to fall asleep, and set your alarm at one of
              the suggested times.
            </Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.infoTitle, colorTheme[theme].text]}>
              Go to bed now
            </Text>
            <Text style={[styles.infoText, colorTheme[theme].text]}>
              Same thing as "Fall asleep at", but we auto-complete the time for
              you.
            </Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.infoTitle, colorTheme[theme].text]}>
              Power nap
            </Text>
            <Text style={[styles.infoText, colorTheme[theme].text]}>
              Power naps are the best weapon to recover energy when you feeling
              with low energy in the afternoon.
            </Text>
          </View>
        </View>

        <View style={styles.creditContainer}>
          <View style={styles.author}>
            <Text style={[styles.text, colorTheme[theme].text]}>
              Made with ❤️ by Neucoas
            </Text>

            <Button.Link
              text="Source code"
              onPress={() => Linking.openURL('https://github.com/julianpoma/')}
            />
          </View>

          <Text style={colorTheme[theme].text}>
            All credits for the idea goes to the original site.
          </Text>

          <Button.Link
            text="sleepyti.me"
            onPress={() => Linking.openURL('https://sleepyti.me')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const colorTheme = {
  dark: {
    safeArea: { backgroundColor: tw.color.gray900 },
    text: { color: tw.color.primary100 },
  },
  light: {
    safeArea: { backgroundColor: tw.color.gray100 },
    text: { color: tw.color.gray900 },
  },
};

const styles = StyleSheet.create({
  author: {
    alignItems: 'center',
    marginBottom: tw.margin.m4,
  },
  creditContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: tw.margin.m6,
  },
  infoContainer: {
    marginVertical: tw.margin.m3,
  },
  infoText: {
    fontSize: tw.text.base,
  },
  infoTitle: {
    fontSize: tw.text.lg,
    fontWeight: 'bold',
    marginBottom: tw.margin.m1,
  },
  safeArea: {
    flex: 1,
    paddingTop: tw.padding.none,
  },
  scroll: {
    marginBottom: tw.margin.m4,
    paddingHorizontal: tw.padding.p6,
  },
  text: {
    fontSize: tw.text.xl,
  },
});

export default InfoScreen;
