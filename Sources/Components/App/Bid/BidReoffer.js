import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { RNButton, RNStyles, RNText } from '../../../Common';
import { LOBid } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../../Theme';
import { useState } from 'react';
import { DummyData, Functions } from '../../../Utils';

const { dummyBid } = DummyData.bid;

export default function BidReoffer() {
  const [State, setState] = useState({ refresh: false });

  const onRefresh = async () => {
    setState(p => ({ ...p, refresh: true }));
    await Functions.wait(1000);
    setState(p => ({ ...p, refresh: false }));
  };

  return (
    <View style={RNStyles.container}>
      <FlatList
        data={Array.from({ length: 10 }).map((_, i) => dummyBid)}
        keyExtractor={(v, i) => String(i)}
        refreshControl={
          <RefreshControl
            refreshing={State.refresh}
            onRefresh={onRefresh}
            tintColor={Colors.primary}
            colors={[Colors.primary]}
          />
        }
        contentContainerStyle={{ paddingVertical: 10 }}
        renderItem={({ item }) => (
          <LOBid item={item}>
            <View style={styles.buttonContentContainer}>
              <View style={styles.buttonContainer}>
                <RNText style={styles.title}>{'Your Bid'}</RNText>
                <RNText style={styles.text}>{item.price}</RNText>
                <RNButton title={'Accept'} style={styles.button} />
              </View>

              <View style={styles.buttonContainer}>
                <RNText style={styles.title}>{'Re-offer Bid'}</RNText>
                <RNText style={styles.text}>{item.price}</RNText>
                <RNButton
                  title={'Decline'}
                  style={[styles.button, { backgroundColor: Colors.decline }]}
                />
              </View>
            </View>
          </LOBid>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContentContainer: {
    ...RNStyles.flexRowBetween,
  },
  buttonContainer: {
    ...RNStyles.container,
    marginHorizontal: wp(1),
  },
  button: {
    marginHorizontal: 0,
    paddingVertical: hp(1.5),
  },
  title: {
    fontSize: FontSize.font12,
    paddingLeft: wp(1),
  },
  text: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.SemiBold,
    paddingLeft: wp(1),
  },
});
