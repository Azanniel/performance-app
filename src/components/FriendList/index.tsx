import { ScrollView } from 'react-native';
import { Friend, IFriend } from '../Friend';

import { styles } from './styles';

export interface FriendProps extends IFriend {
  id: number
}

interface Props {
  data: FriendProps[]
}

export function FriendList({ data }: Props) {
  return (
    <ScrollView style={styles.container}>
      {
        data.map(friend => (
          <Friend 
            key={String(friend.id)} 
            data={friend}
          />
        ))
      }
    </ScrollView>
  );
}