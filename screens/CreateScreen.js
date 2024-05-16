import * as React from 'react';
import { Text, TextInput, View, Button } from 'react-native';


export default function CreatePostScreen({ navigation, route }) {
  const [name, setName] = React.useState('');

  return (
    <>
      <TextInput
        placeholder="Name"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={name}
        onChangeText={setName}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Details',
            params: { name: name },
            merge: true,
          });
        }}
      />
    </>
  );
}