import { StyleSheet, View } from 'react-native';
import { RNButton, RNContainer, RNDropDown, RNHeader } from '../../../Common';
import { LOInput } from '../../../Components';
import { hp, wp } from '../../../Theme';
import { useState } from 'react';
import { DummyData } from '../../../Utils';

export default function AddService() {
  const [State, setState] = useState({ area: '', city: null });

  return (
    <RNContainer>
      <RNHeader title={'Add Service'}>
        <LOInput
          title={'Area'}
          placeholder={'ABCD Street, Pune...'}
          containerStyle={styles.inputContainer}
          multiline={true}
          value={State.city}
          onChangeText={v => setState(p => ({ ...p, city: v }))}
        />
        <RNDropDown
          title={'City'}
          placeholder={'Select your city'}
          data={DummyData.bid.cities}
          onChange={v => setState(p => ({ ...p, city: v }))}
          value={State.city?.value}
        />

        <RNButton title={'Submit'} style={{ marginTop: hp(3) }} />
      </RNHeader>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: hp(1),
    maxHeight: hp(15),
  },
});
