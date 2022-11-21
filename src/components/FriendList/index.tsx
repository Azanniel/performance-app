import { useMemo } from 'react';
import { ScrollView, Text } from 'react-native';
import { Friend, IFriend } from '../Friend';

import { styles } from './styles';

export interface FriendProps extends IFriend {}

interface Props {
  data: FriendProps[],
  follow: () => void
}

export function FriendList({ data, follow }: Props) {
  const likesAmount = useMemo(() => {
    return data.reduce((likes, friend) => {
      return likes + Number(friend.likes)
    }, 0)
  }, [data]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.likes}>
        Total de likes: {likesAmount}
      </Text>

      {
        data.map(friend => (
          <Friend 
            key={String(friend.id)} 
            data={friend}
            follow={follow}
          />
        ))
      }
    </ScrollView>
  );
}