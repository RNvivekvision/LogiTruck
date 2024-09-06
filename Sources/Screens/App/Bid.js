import { RNContainer, RNHeader } from '../../Common';
import { BidTopTabs } from '../../Components';

export default function Bid() {
  return (
    <RNContainer>
      <RNHeader title={'Bid'} back={false} noScroll>
        <BidTopTabs />
      </RNHeader>
    </RNContainer>
  );
}
