import { useState } from 'react';
import { ActivityIndicator, Button, Text, TextInput, View } from 'react-native';
import { FriendList, FriendProps } from '../../components/FriendList';

import { styles } from './styles';

export function Home() {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [friends, setFriends] = useState<FriendProps[]>([]);

  async function handleSearch() {
    setIsLoading(true);

    const response = await fetch(`http://192.168.1.9:3333/friends?q=${name}`);
    const data = await response.json();

    setFriends(data);
    setIsLoading(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amigos</Text>

      <TextInput
        style={styles.input}
        placeholder='Nome do amigo'
        placeholderTextColor='white'
        onChangeText={setName}
      />

      <Button
        title='Buscar' 
        onPress={handleSearch}
      />

      {
        isLoading && <ActivityIndicator />
      }

      <FriendList
        data={friends}
      />
    </View>
  );
}