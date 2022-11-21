import { useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.likes}>
        Total de likes: {likesAmount}
      </Text>

      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Friend data={item} follow={follow} />}
      />
    </View>
  );
}