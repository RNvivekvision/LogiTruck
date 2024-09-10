import { StyleSheet, View } from 'react-native';
import { RNButton, RNContainer, RNHeader } from '../../../Common';
import { LOInput } from '../../../Components';
import { hp } from '../../../Theme';

export default function AddVehical() {
  return (
    <RNContainer>
      <RNHeader title={'Add Vehicle'}>
        <LOInput
          title={'Vehicle number'}
          placeholder={'Please enter your Vehicle number'}
        />
        <LOInput
          title={'RC number'}
          placeholder={'Please enter your RC number'}
        />
        <LOInput
          title={'Chasis number'}
          placeholder={'Please enter your Chasis number'}
        />
        <LOInput
          title={'Engine number'}
          placeholder={'Please enter your Engine number'}
        />

        <LOInput
          title={'Number of tires'}
          placeholder={'Please enter your number of tires'}
          maxLength={1}
          keyboardType={'numeric'}
        />
        <LOInput
          title={'Vehical Capacity'}
          placeholder={'Please enter your vehical capacity'}
          maxLength={1}
          keyboardType={'numeric'}
        />

        <RNButton title={'Submit'} style={{ marginTop: hp(3) }} />
      </RNHeader>
    </RNContainer>
  );
}

const styles = StyleSheet.create({});
