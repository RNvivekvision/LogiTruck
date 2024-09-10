import { StyleSheet, View } from 'react-native';
import { RNButton, RNContainer, RNHeader } from '../../../Common';
import { hp } from '../../../Theme';
import { LOInput } from '../../../Components';

export default function AddBankDetails() {
  return (
    <RNContainer>
      <RNHeader title={'Add Bank Details'}>
        <LOInput
          title={'Branch Name'}
          placeholder={'Please enter branch name'}
        />
        <LOInput
          title={'Account Number'}
          placeholder={'Please enter bank account number'}
        />
        <LOInput title={'IFSC Code'} placeholder={'Please enter IFSC Code'} />
        <LOInput title={'UPI id'} placeholder={'Please enter UPI id'} />

        <RNButton title={'Submit'} style={{ marginTop: hp(3) }} />
      </RNHeader>
    </RNContainer>
  );
}

const styles = StyleSheet.create({});
