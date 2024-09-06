import { StyleSheet, Text, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';

export default function Orders() {
  return (
    <RNContainer>
      <RNHeader title={'Orders'} back={false}></RNHeader>
    </RNContainer>
  );
}

const styles = StyleSheet.create({});
