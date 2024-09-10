import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  RNButton,
  RNContainer,
  RNHeader,
  RNRadio,
  RNStyles,
  RNText,
} from '../../../Common';
import { FontSize, hp } from '../../../Theme';
import { LOBid, LOInput } from '../../../Components';

export default function AddBid({ route }) {
  const { item } = route.params;
  const [State, setState] = useState({
    isBilled: true,
    addBid: '',
    remark: '',
  });

  return (
    <RNContainer>
      <RNHeader title={'Add Bid'}>
        <LOBid
          item={{ ...item, price: null }}
          containerStyle={{ marginTop: hp(3) }}>
          <View style={styles.likeToPayContainer}>
            <RNText size={FontSize.font14} pBottom={hp(0.5)}>
              {'How would you like to pay ?'}
            </RNText>

            <View style={RNStyles.flexRow}>
              <RNRadio
                text={'To be Billed'}
                containerStyle={{ paddingLeft: 0 }}
                selected={State.isBilled}
                onPress={() => setState(p => ({ ...p, isBilled: true }))}
              />
              <RNRadio
                text={'To Pay'}
                selected={!State.isBilled}
                onPress={() => setState(p => ({ ...p, isBilled: false }))}
              />
            </View>
          </View>

          <LOInput
            title={'Add Bid'}
            containerStyle={styles.inputContainer}
            placeholder={'35,000'}
            value={State.addBid}
            onChangeText={v => setState(p => ({ ...p, addBid: v }))}
            keyboardType={'numeric'}
          />

          <LOInput
            title={'Add Remark'}
            containerStyle={styles.inputContainer}
            placeholder={'Add remark here...'}
            multiline={true}
            value={State.remark}
            onChangeText={v => setState(p => ({ ...p, remark: v }))}
          />

          <RNButton disable={false} title={'Add'} style={styles.button} />
        </LOBid>
      </RNHeader>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 0,
    marginBottom: hp(1),
    paddingTop: 0,
    maxHeight: hp(15),
  },
  likeToPayContainer: {
    marginVertical: hp(1),
  },
  button: {
    marginTop: hp(4),
    marginHorizontal: 0,
  },
});
