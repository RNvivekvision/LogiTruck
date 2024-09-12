import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  RNButton,
  RNContainer,
  RNHeader,
  RNRadio,
  RNStyles,
  RNText,
} from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { useState } from 'react';
import { LOInput } from '../../Components';

export default function HelpFeedback() {
  const [State, setState] = useState({ selectedSubject: 0, input: '' });

  const onSubmitPress = () => {};

  return (
    <RNContainer>
      <RNHeader title={'Help & Feedback'} style={styles.container}>
        <RNText family={FontFamily.Medium} size={FontSize.font18}>
          {'Send us'}
        </RNText>
        <RNText
          family={FontFamily.SemiBold}
          size={FontSize.font18}
          color={Colors.primary}>
          {'Your Feedback'}
        </RNText>
        <RNText
          pVertical={hp(1)}
          family={FontFamily.Medium}
          size={FontSize.font12}>
          {
            'Your input helps us enhance the app and provide a better user experience. Thank you for your time!'
          }
        </RNText>

        <RNText
          size={FontSize.font14}
          family={FontFamily.Medium}
          pTop={hp(1)}
          color={Colors.welcome}>
          {'Subjects'}
        </RNText>
        <View style={styles.subjectContainer}>
          {['Features', 'Issues', 'Performance', 'Others'].map((v, i) => (
            <RNRadio
              key={i}
              text={v}
              selected={State.selectedSubject === i}
              containerStyle={styles.radioContainer}
              textStyle={styles.radio}
              onPress={v => setState(p => ({ ...p, selectedSubject: i }))}
            />
          ))}
        </View>

        <RNText
          size={FontSize.font14}
          family={FontFamily.Medium}
          pTop={hp(2)}
          color={Colors.welcome}>
          {'What type of feature do you require?'}
        </RNText>
        <LOInput
          placeholder={'Type your message here...'}
          multiline={true}
          containerStyle={{ marginHorizontal: 0, paddingTop: 0 }}
          value={State.input}
          onChangeText={v => setState(p => ({ ...p, input: v }))}
        />

        <RNButton
          title={'Submit'}
          style={styles.submit}
          onPress={onSubmitPress}
        />
      </RNHeader>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  subjectContainer: {
    ...RNStyles.flexRow,
    paddingVertical: hp(1),
  },
  radioContainer: {
    paddingHorizontal: 0,
  },
  radio: {
    fontSize: FontSize.font12,
  },
  submit: {
    marginHorizontal: 0,
    marginTop: hp(4),
  },
});
