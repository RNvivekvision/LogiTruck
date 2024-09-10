import { StyleSheet, View } from 'react-native';
import { RNButton, RNContainer, RNHeader } from '../../../Common';
import { LOInput } from '../../../Components';
import { hp } from '../../../Theme';

export default function AddService() {
  return (
    <RNContainer>
      <RNHeader title={'Add Service'}>
        <LOInput title={'Area'} placeholder={'ABCD Street, Pune...'} />
        <LOInput title={'City'} placeholder={'Please enter your city'} />

        <RNButton title={'Submit'} style={{ marginTop: hp(3) }} />
      </RNHeader>
    </RNContainer>
  );
}

const styles = StyleSheet.create({});
