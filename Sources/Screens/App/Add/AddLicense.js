import { StyleSheet, View } from 'react-native';
import { RNButton, RNContainer, RNHeader } from '../../../Common';
import { LOInput, LOUpload } from '../../../Components';
import { hp } from '../../../Theme';
import { useState } from 'react';

export default function AddLicense() {
  const [State, setState] = useState({ name: '', license: '', photo: null });

  return (
    <RNContainer>
      <RNHeader title={'Add License'}>
        <LOInput
          title={'Name'}
          placeholder={'Please enter your name'}
          value={State.name}
          onChangeText={v => setState(p => ({ ...p, name: v }))}
        />
        <LOInput
          title={'License number'}
          placeholder={'Please enter your License number'}
          value={State.license}
          onChangeText={v => setState(p => ({ ...p, license: v }))}
        />
        <LOUpload
          title={'License photo'}
          img={State.photo}
          onPhoto={v => setState(p => ({ ...p, photo: v }))}
        />

        <RNButton title={'Submit'} style={{ marginTop: hp(3) }} />
      </RNHeader>
    </RNContainer>
  );
}

const styles = StyleSheet.create({});
