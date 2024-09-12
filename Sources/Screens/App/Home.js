import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import {
  RNContainer,
  RNDropDown,
  RNHeader,
  RNStyles,
  RNText,
} from '../../Common';
import { useState } from 'react';
import { DummyData, Functions } from '../../Utils';
import { Colors, FontSize, hp, wp } from '../../Theme';
import { LOBid } from '../../Components';
import { NavRoutes } from '../../Navigation';

const { dummyBid, cities } = DummyData.bid;

export default function Home({ navigation }) {
  const [State, setState] = useState({
    refresh: false,
    cities: [...cities],
    from: cities[0],
    to: cities[1],
  });

  const onAddBid = item => {
    console.log('item -> ', JSON.stringify(item, null, 2));
    navigation.navigate(NavRoutes.AddBid, { item });
  };

  const onRefresh = async () => {
    setState(p => ({ ...p, refresh: true }));
    await Functions.wait(1000);
    setState(p => ({ ...p, refresh: false }));
  };

  const RenderDropDown = () => {
    return (
      <View style={styles.renderDropDownContainer}>
        <View style={RNStyles.flexRow}>
          <RNText size={FontSize.font12} pTop={hp(1)}>
            {'From  '}
          </RNText>
          <RNDropDown
            placeholder={'Select city'}
            data={State.cities}
            onChange={v => setState(p => ({ ...p, from: v }))}
            value={State.from?.value}
            containerStyle={styles.containerStyle}
            dropdownStyle={styles.dropdownStyle}
          />
        </View>
        <View style={RNStyles.flexRow}>
          <RNText size={FontSize.font12} pTop={hp(1)}>
            {'To  '}
          </RNText>
          <RNDropDown
            placeholder={'Select city'}
            data={State.cities}
            onChange={v => setState(p => ({ ...p, to: v }))}
            value={State.to?.value}
            dropDownContainerStyle={styles.dropDownContainerStyle}
            containerStyle={styles.containerStyle}
            dropdownStyle={styles.dropdownStyle}
          />
        </View>
      </View>
    );
  };

  return (
    <RNContainer>
      <RNHeader title={'Home'} back={false} noScroll isHome>
        <FlatList
          data={Array.from({ length: 10 }).map((_, i) => dummyBid)}
          keyExtractor={(v, i) => String(i)}
          ListHeaderComponent={<RenderDropDown />}
          stickyHeaderIndices={[0]}
          renderItem={({ item }) => <LOBid item={item} onAddBid={onAddBid} />}
          refreshControl={
            <RefreshControl
              refreshing={State.refresh}
              onRefresh={onRefresh}
              tintColor={Colors.primary}
              colors={[Colors.primary]}
            />
          }
        />
      </RNHeader>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  renderDropDownContainer: {
    ...RNStyles.flexRowBetween,
    paddingHorizontal: wp(5),
    paddingTop: hp(0.5),
    paddingBottom: hp(1.5),
    backgroundColor: Colors.white,
  },
  containerStyle: {
    width: wp(35),
    marginVertical: 0,
    paddingTop: 0,
    marginHorizontal: 0,
  },
  dropdownStyle: {
    paddingRight: wp(2),
    paddingVertical: 0,
  },
});
