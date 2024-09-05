import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { CountryPicker } from 'react-native-country-codes-picker';
import {
  RNButton,
  RNContainer,
  RNImage,
  RNScrollView,
  RNText,
} from '../../Common';
import { Images } from '../../Constants';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { LOInput } from '../../Components';
import { Functions } from '../../Utils';
import { NavRoutes } from '../../Navigation';

export default function Login({ navigation }) {
  const [State, setState] = useState({
    showCountry: false,
    countryCode: '+91',
    isLoading: false,
    input: '',
  });

  const onLoginPress = async () => {
    setState(p => ({ ...p, isLoading: true }));
    try {
      await Functions.wait(2000);
      setState(p => ({ ...p, isLoading: false }));
      navigation.navigate(NavRoutes.Otp, {
        countryCode: State.countryCode,
        number: State.input,
      });
    } catch (e) {
      console.log('Error onLoginPress -> ', e);
    } finally {
      setState(p => ({ ...p, isLoading: false }));
    }
  };

  return (
    <RNContainer isLoading={State.isLoading}>
      <RNScrollView>
        <RNImage source={Images.login} style={styles.image} />

        <RNText style={styles.title}>{'Log In'}</RNText>
        <RNText style={styles.text}>
          {'Enter your mobile no. and get 4 digit verification code'}
        </RNText>

        <LOInput
          title={'Mobile Number'}
          placeholder={'9876543210'}
          containerStyle={styles.inputContainer}
          value={State.input}
          onChangeText={input => setState(p => ({ ...p, input }))}
          maxLength={10}
          keyboardType={'numeric'}
          country={
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setState(p => ({ ...p, showCountry: true }))}
              style={styles.countryContainer}>
              <RNText size={FontSize.font12}>{State.countryCode}</RNText>
            </TouchableOpacity>
          }
        />
        <RNButton title={'Generate OTP'} onPress={onLoginPress} />
      </RNScrollView>

      <CountryPicker
        show={State.showCountry}
        style={{ modal: { height: hp(80) } }}
        searchMessage="Search"
        onRequestClose={() => setState(p => ({ ...p, showCountry: false }))}
        pickerButtonOnPress={item =>
          setState(p => ({
            ...p,
            showCountry: false,
            countryCode: item.dial_code,
          }))
        }
      />
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    height: hp(30),
    width: '75%',
    alignSelf: 'center',
    marginVertical: hp(12),
  },
  title: {
    fontSize: FontSize.font24,
    fontFamily: FontFamily.SemiBold,
    paddingHorizontal: wp(4),
  },
  text: {
    fontSize: FontSize.font12,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },
  inputContainer: {
    marginBottom: hp(6),
    marginTop: hp(2),
  },
  countryContainer: {
    paddingRight: wp(2),
    borderRightWidth: wp(0.5),
    borderColor: Colors.placeholder,
    marginRight: wp(2),
  },
});
