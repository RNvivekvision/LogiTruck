import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  RNButton,
  RNContainer,
  RNDropDown,
  RNHeader,
  RNStyles,
  RNText,
} from '../../../Common';
import { LOInput, LOUpload } from '../../../Components';
import { Colors, FontSize, hp, wp } from '../../../Theme';
import { useState } from 'react';
import { DummyData } from '../../../Utils';

export default function AddVehical() {
  const [State, setState] = useState({
    vehical: '',
    RC: '',
    chasis: '',
    engine: '',
    insurance: { value: '', date: null, open: false },
    puc: { value: '', date: null, open: false },
    typeOfVehical: null,
    numOfTires: '',
    capacity: '',
    vehicalImage: null,
  });

  return (
    <RNContainer>
      <RNHeader title={'Add Vehicle'}>
        <LOInput
          title={'Vehicle number'}
          placeholder={'Please enter your Vehicle number'}
          value={State.vehical}
          onChangeText={v => setState(p => ({ ...p, vehical: v }))}
        />
        <LOInput
          title={'RC number'}
          placeholder={'Please enter your RC number'}
          value={State.RC}
          onChangeText={v => setState(p => ({ ...p, RC: v }))}
        />
        <LOInput
          title={'Chasis number'}
          placeholder={'Please enter your Chasis number'}
          value={State.chasis}
          onChangeText={v => setState(p => ({ ...p, chasis: v }))}
        />
        <LOInput
          title={'Engine number'}
          placeholder={'Please enter your Engine number'}
          value={State.engine}
          onChangeText={v => setState(p => ({ ...p, engine: v }))}
        />
        <LOInput
          title={'Insurance number with validity date'}
          placeholder={'56789 908765'}
          keyboardType={'numeric'}
          value={State.insurance.value}
          onChangeText={v =>
            setState(p => ({ ...p, insurance: { ...p.insurance, value: v } }))
          }
          open={State.insurance.open}
          date={State.insurance.date}
          onDateChange={d =>
            setState(p => ({ ...p, insurance: { ...p.insurance, date: d } }))
          }
          toggleDatePicker={() =>
            setState(p => ({
              ...p,
              insurance: { ...p.insurance, open: !p.insurance.open },
            }))
          }
        />
        <LOInput
          title={'PUC number with validity date'}
          placeholder={'56789 908765'}
          keyboardType={'numeric'}
          value={State.puc.value}
          onChangeText={v =>
            setState(p => ({ ...p, puc: { ...p.puc, value: v } }))
          }
          open={State.puc.open}
          date={State.puc.date}
          onDateChange={d =>
            setState(p => ({ ...p, puc: { ...p.puc, date: d } }))
          }
          toggleDatePicker={() =>
            setState(p => ({ ...p, puc: { ...p.puc, open: !p.puc.open } }))
          }
        />
        <RNDropDown
          title={'Type of vehical'}
          placeholder={'Type of vehical'}
          data={DummyData.addVehical.typeOfVehical}
          onChange={v => setState(p => ({ ...p, typeOfVehical: v }))}
          value={State.typeOfVehical?.value}
          containerStyle={{ marginHorizontal: wp(4) }}
        />

        <LOInput
          title={'Number of tires'}
          placeholder={'Please enter your number of tires'}
          maxLength={1}
          keyboardType={'numeric'}
          value={State.numOfTires}
          onChangeText={v => setState(p => ({ ...p, numOfTires: v }))}
        />
        <LOInput
          title={'Vehical Capacity'}
          placeholder={'Please enter your vehical capacity'}
          maxLength={1}
          keyboardType={'numeric'}
          value={State.capacity}
          onChangeText={v => setState(p => ({ ...p, capacity: v }))}
        />

        <LOUpload
          title={'Vehical Image'}
          img={State.vehicalImage}
          onPhoto={v => setState(p => ({ ...p, vehicalImage: v }))}
        />

        <RNButton title={'Submit'} style={{ marginTop: hp(3) }} />
      </RNHeader>
    </RNContainer>
  );
}

const styles = StyleSheet.create({});
