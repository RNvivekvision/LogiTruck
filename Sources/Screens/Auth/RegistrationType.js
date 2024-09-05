import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  RNButton,
  RNContainer,
  RNImage,
  RNRadio,
  RNScrollView,
  RNText,
} from '../../Common';
import { Images } from '../../Constants';
import { FontFamily, FontSize, hp, wp } from '../../Theme';
import { Functions } from '../../Utils';
import { NavRoutes } from '../../Navigation';

export default function RegistrationType({ navigation }) {
  const [State, setState] = useState({
    isLoading: false,
    selected: 0,
  });

  const onNextPress = async () => {
    setState(p => ({ ...p, isLoading: true }));
    try {
      await Functions.wait(2000);
      setState(p => ({ ...p, isLoading: false }));
      navigation.reset({
        index: 0,
        routes: [{ name: NavRoutes.Home }],
      });
    } catch (e) {
      console.log('Error onNextPress -> ', e);
    } finally {
      setState(p => ({ ...p, isLoading: false }));
    }
  };

  return (
    <RNContainer isLoading={State.isLoading}>
      <RNScrollView>
        <RNImage source={Images.registrationType} style={styles.image} />

        <RNText style={styles.title}>{'Registration Type'}</RNText>
        <RNText style={styles.text}>{'Please select registration type'}</RNText>

        <View style={styles.typeContainer}>
          <RNRadio
            selected={State.selected === 0}
            onPress={() => setState(p => ({ ...p, selected: 0 }))}
            text={'Registered as transporter or truck owner'}
          />
          <RNRadio
            selected={State.selected === 1}
            onPress={() => setState(p => ({ ...p, selected: 1 }))}
            text={'Shipper or booking agent'}
          />
        </View>

        <RNButton title={'Next'} onPress={onNextPress} />
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
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },
  typeContainer: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(2),
    paddingBottom: hp(8),
  },
});
