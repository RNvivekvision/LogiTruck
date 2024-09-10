import { StyleSheet, View } from 'react-native';
import { RNButton, RNContainer, RNHeader } from '../../../Common';
import { LOInput } from '../../../Components';
import { hp } from '../../../Theme';

export default function AddLicense() {
  return (
    <RNContainer>
      <RNHeader title={'Add License'}>
        <LOInput title={'Name'} placeholder={'Please enter your name'} />
        <LOInput
          title={'License number'}
          placeholder={'Please enter your License number'}
        />

        <RNButton title={'Submit'} style={{ marginTop: hp(3) }} />
      </RNHeader>
    </RNContainer>
  );
}

const styles = StyleSheet.create({});
