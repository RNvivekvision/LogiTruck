import { useRef, useState } from 'react';
import { Keyboard, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  RNButton,
  RNContainer,
  RNImage,
  RNScrollView,
  RNStyles,
  RNText,
} from '../../Common';
import { Images } from '../../Constants';
import { Functions } from '../../Utils';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { OtpInput } from 'react-native-otp-entry';

export default function Otp({ navigation, route }) {
  const otpRef = useRef();
  const { countryCode, number } = route.params;
  const [State, setState] = useState({
    isLoading: false,
    otp: '',
    verifyPressed: false,
  });

  const onResendOtp = async () => {
    setState(p => ({ ...p, isLoading: true }));
    try {
      await Functions.wait(2000);
      setState(p => ({ ...p, isLoading: false }));
      Functions.Toast.success('OTP send successfully');
    } catch (e) {
      console.log('Error onResendOtp -> ', e);
    } finally {
      setState(p => ({ ...p, isLoading: false }));
    }
  };

  const onVerifyPress = async () => {
    setState(p => ({ ...p, isLoading: true }));
    try {
      await Functions.wait(2000);
      setState(p => ({ ...p, isLoading: false }));
      Functions.Toast.success(State.otp);
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

        <RNText style={styles.title}>{'OTP Verification'}</RNText>
        <View style={RNStyles.flexRow}>
          <RNText style={styles.text}>{`Enter the OTP sent to `}</RNText>
          <RNText size={FontSize.font12}>{`${countryCode} ${number}`}</RNText>
        </View>

        <OtpInput
          ref={otpRef}
          numberOfDigits={4}
          onTextChange={otp =>
            setState(p => ({ ...p, otp, verifyPressed: false }))
          }
          autoFocus={false}
          onFilled={Keyboard.dismiss}
          theme={{
            containerStyle: {
              paddingVertical: hp(3),
              paddingHorizontal: wp(6),
            },
            pinCodeContainerStyle: {
              width: wp(15),
              height: wp(15),
              borderRadius: wp(3),
              backgroundColor: Colors.white,
              borderColor: Colors.placeholder,
            },
            pinCodeTextStyle: {
              fontSize: FontSize.font24,
              fontFamily: FontFamily.SemiBold,
              color: Colors.primary,
            },
            focusStickStyle: {
              backgroundColor: Colors.primary,
            },
            focusedPinCodeContainerStyle: {
              borderColor: Colors.primary,
            },
            filledPinCodeContainerStyle: {
              borderColor: Colors.primary,
            },
          }}
        />

        <View style={styles.resend}>
          <RNText
            size={FontSize.font14}
            color={Colors.grey}
            pLeft={wp(4)}>{`Didn't receive OTP? `}</RNText>
          <TouchableOpacity activeOpacity={0.6} onPress={onResendOtp}>
            <RNText color={Colors.primary} family={FontFamily.SemiBold}>
              {'RESEND'}
            </RNText>
          </TouchableOpacity>
        </View>

        <RNButton title={'Verify & Continue'} onPress={onVerifyPress} />
      </RNScrollView>
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
    paddingLeft: wp(4),
    paddingVertical: hp(1),
    color: Colors.grey,
  },
  resend: {
    ...RNStyles.flexRow,
    paddingBottom: hp(4),
  },
});
