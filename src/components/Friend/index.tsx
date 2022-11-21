import { memo } from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

export interface IFriend {
  id: number
  name: string
  likes: number
}

interface Props {
  data: IFriend
}

function FriendComponent({ data, ...rest }: Props) {
  return (
    <Text style={styles.container} {...rest}>
      {data.name} - Likes:  {data.likes}
    </Text>
  );
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data)
})