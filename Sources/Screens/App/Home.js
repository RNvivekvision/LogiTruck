import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { useState } from 'react';
import { DummyData, Functions } from '../../Utils';
import { Colors } from '../../Theme';
import { LOBid } from '../../Components';

const { dummyBid } = DummyData.bid;

export default function Home() {
  const [State, setState] = useState({ refresh: false });

  const onRefresh = async () => {
    setState(p => ({ ...p, refresh: true }));
    await Functions.wait(1000);
    setState(p => ({ ...p, refresh: false }));
  };

  return (
    <RNContainer>
      <RNHeader title={'Home'} back={false} noScroll>
        <FlatList
          data={Array.from({ length: 20 }).map((_, i) => dummyBid)}
          keyExtractor={(v, i) => String(i)}
          refreshControl={
            <RefreshControl
              refreshing={State.refresh}
              onRefresh={onRefresh}
              tintColor={Colors.primary}
            />
          }
          contentContainerStyle={{ paddingVertical: 10 }}
          renderItem={({ item }) => <LOBid item={item} />}
        />
      </RNHeader>
    </RNContainer>
  );
}

const styles = StyleSheet.create({});
