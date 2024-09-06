import { useState } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { RNStyles } from '../../../Common';
import { LOBid } from '../../Common';
import { Colors } from '../../../Theme';
import { DummyData, Functions } from '../../../Utils';

const { dummyBid } = DummyData.bid;

export default function BidActive({ navigation }) {
  const [State, setState] = useState({ refresh: false });

  const onRefresh = async () => {
    setState(p => ({ ...p, refresh: true }));
    await Functions.wait(1000);
    setState(p => ({ ...p, refresh: false }));
  };

  return (
    <View style={RNStyles.container}>
      <FlatList
        data={Array.from({ length: 20 }).map((_, i) => dummyBid)}
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
