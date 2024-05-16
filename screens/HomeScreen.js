import * as React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {
    const [name, setName] = React.useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TextInput
        placeholder="Name"
        style={{ height: 100, padding: 10, backgroundColor: 'white' }}
        value={name}
        onChangeText={setName}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {id : 16, name : name})}
      />
    </View>
  );
}
