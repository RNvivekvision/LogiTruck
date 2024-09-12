import { useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader, RNImage, RNStyles, RNText } from '../../Common';
import { DummyData, Functions } from '../../Utils';
import { LOBid, LOInput } from '../../Components';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Images } from '../../Constants';

export default function Orders() {
  const [State, setState] = useState({ refresh: false });
  const date = Functions.formatDate({ date: new Date() });
  const time = Functions.formatDate({ date: new Date(), format: 'hh:mm A' });
  const status = 1;

  const onRefresh = async () => {
    setState(p => ({ ...p, refresh: true }));
    await Functions.wait(1000);
    setState(p => ({ ...p, refresh: false }));
  };

  const Header = () => {
    return (
      <View>
        <RNText style={styles.title}>{'Active Orders'}</RNText>
      </View>
    );
  };

  const Footer = () => {
    return (
      <View style={{ marginBottom: hp(4) }}>
        <LOInput
          title={'Vehical'}
          value={'Truck'}
          disable={true}
          titleStyle={{
            fontFamily: FontFamily.SemiBold,
            fontSize: FontSize.font16,
          }}
        />

        <RNText style={styles.title}>{'Expected Delivery'}</RNText>
        <View style={styles.dateContentContainer}>
          <View style={styles.dateContainer}>
            <RNText style={styles.text}>{date}</RNText>
            <RNImage source={Images.calendar} style={RNStyles.icon} />
          </View>
          <RNText style={styles.text}>{time}</RNText>
        </View>

        <RNText style={styles.title} pBottom={hp(1)}>
          {'Order Status'}
        </RNText>
        <View style={styles.statusContainer}>
          <View style={styles.lineContainer}>
            {DummyData.order.status.map((v, i) => {
              return (
                <View key={i}>
                  <View
                    style={[
                      styles.circle,
                      {
                        backgroundColor:
                          i <= status ? Colors.primary : Colors.black + '10',
                      },
                    ]}
                  />
                  <View
                    style={[
                      styles.line,
                      {
                        height:
                          i !== DummyData.order.status.length - 1 ? wp(10) : 0,
                        backgroundColor:
                          i < status ? Colors.primary : Colors.black + '10',
                      },
                    ]}
                  />
                </View>
              );
            })}
          </View>
          {DummyData.order.status.map((v, i) => (
            <View key={i} style={styles.renderStatusContainer}>
              <RNImage
                source={v.image}
                style={[
                  styles.icon,
                  {
                    tintColor:
                      i <= status ? Colors.primary : Colors.black + '99',
                  },
                ]}
              />
              <View style={{ ...RNStyles.container, height: '70%' }}>
                <View style={styles.textContainer}>
                  <RNText
                    family={
                      i <= status ? FontFamily.SemiBold : FontFamily.Regular
                    }
                    size={FontSize.font12}
                    color={i <= status ? Colors.primary : Colors.black}>
                    {v.title}
                  </RNText>
                  <RNText size={FontSize.font10}>
                    {Functions.formatDate({
                      date: new Date(),
                      format: 'hh:mm A',
                    })}
                  </RNText>
                </View>
                <View style={styles.textContainer}>
                  <RNText size={FontSize.font10}>{v.text}</RNText>
                  <RNText size={FontSize.font10}>
                    {Functions.formatDate({ date: new Date() })}
                  </RNText>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <RNContainer>
      <RNHeader title={'Orders'} back={false} noScroll>
        <FlatList
          data={Array.from({ length: 1 }).map((_, i) => DummyData.bid.dummyBid)}
          keyExtractor={(v, i) => String(i)}
          ListHeaderComponent={<Header />}
          ListFooterComponent={<Footer />}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <LOBid item={item} containerStyle={styles.bid} />
          )}
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

const size = { icon: wp(7) };
const styles = StyleSheet.create({
  bid: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    borderWidth: 0,
    marginVertical: 0,
  },
  title: {
    fontFamily: FontFamily.SemiBold,
    paddingTop: hp(2),
    paddingHorizontal: wp(4),
  },
  dateContentContainer: {
    ...RNStyles.flexRow,
    marginHorizontal: wp(4),
    marginVertical: hp(1),
    borderRadius: wp(3),
    backgroundColor: Colors.primary + '10',
  },
  dateContainer: {
    ...RNStyles.flexRowBetween,
    width: '50%',
    paddingVertical: hp(1.2),
    paddingHorizontal: wp(4),
    marginRight: wp(5),
    borderRightWidth: wp(0.5),
    borderColor: Colors.black + '10',
  },
  text: {
    fontSize: FontSize.font12,
  },
  statusContainer: {},
  renderStatusContainer: {
    ...RNStyles.flexRow,
    marginHorizontal: wp(4),
    height: wp(12),
    paddingLeft: wp(12),
  },
  icon: {
    width: size.icon,
    height: size.icon,
    marginRight: wp(3),
  },
  textContainer: {
    ...RNStyles.flexRowBetween,
    flex: 1,
  },
  lineContainer: {
    position: 'absolute',
    left: wp(4),
    height: '90%',
    width: '10%',
    marginTop: hp(1),
    alignItems: 'center',
  },
  circle: {
    width: wp(3),
    height: wp(3),
    borderRadius: 100,
    backgroundColor: Colors.primary,
  },
  line: {
    width: wp(1),
    backgroundColor: Colors.primary,
    marginLeft: wp(1),
  },
});
