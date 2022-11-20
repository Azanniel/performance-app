import { Text } from 'react-native';

import { styles } from './styles';

export interface IFriend {
  name: string
  likes: number
}

interface Props {
  data: IFriend
}

export function Friend({ data, ...rest }: Props) {
  return (
    <Text style={styles.container} {...rest}>
      {data.name} - Likes:  {data.likes}
    </Text>
  );
}