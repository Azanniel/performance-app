import { memo } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export interface IFriend {
  id: number
  name: string
  likes: number
}

interface Props {
  data: IFriend,
  follow: () => void
}

function FriendComponent({ data, follow }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.friend}>
        {data.name} - Likes:  {data.likes}
      </Text>

      <TouchableOpacity onPress={follow}>
        <Text style={styles.buttonText}>Deixar de seguir</Text>
      </TouchableOpacity>
    </View>
  );
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data)
})