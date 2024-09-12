import { useState } from 'react';
import { RNButton, RNContainer, RNHeader, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { LOInput } from '../../Components';

export default function ContactUs() {
  const [State, setState] = useState({ name: '', input: '' });

  const onSubmitPress = async () => {};

  return (
    <RNContainer>
      <RNHeader title={'Contact Us'}>
        <RNText
          family={FontFamily.Medium}
          pHorizontal={wp(4)}
          pTop={hp(3)}
          size={FontSize.font18}>
          {'Write Us'}
        </RNText>
        <RNText
          family={FontFamily.SemiBold}
          size={FontSize.font18}
          pHorizontal={wp(4)}
          color={Colors.primary}>
          {'Contact Us'}
        </RNText>
        <RNText
          pVertical={hp(1)}
          pHorizontal={wp(4)}
          family={FontFamily.Medium}
          size={FontSize.font12}>
          {`Have a question or suggestion? We're here to help!`}
        </RNText>

        <LOInput
          title={'Name'}
          placeholder={'Enter your name'}
          value={State.name}
          onChangeText={v => setState(p => ({ ...p, name: v }))}
        />
        <LOInput
          title={'Message'}
          placeholder={'Type your message here...'}
          multiline={true}
          value={State.input}
          onChangeText={v => setState(p => ({ ...p, input: v }))}
        />

        <RNButton
          title={'Submit'}
          style={{ marginTop: hp(4) }}
          onPress={onSubmitPress}
        />
      </RNHeader>
    </RNContainer>
  );
}
