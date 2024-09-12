import { FlatList, RefreshControl, View } from 'react-native';
import { RNStyles } from '../../../Common';
import { LOBid } from '../../Common';
import { useState } from 'react';
import { DummyData, Functions } from '../../../Utils';
import { Colors } from '../../../Theme';

const { dummyBid } = DummyData.bid;

export default function BidWin() {
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
        renderItem={({ item }) => <LOBid item={item} />}
      />
    </View>
  );
}
