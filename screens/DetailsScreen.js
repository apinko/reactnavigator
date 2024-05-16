import * as React from 'react';
import { Button, View, Text, Alert } from 'react-native';


export default  function DetailsScreen({ navigation, route }) {
    React.useEffect(() => {
      console.log(route.params?.name)
    if (route.params?.name) {
      console.log(route.params?.name)
    }
    else
    {
          Alert.alert('Name alert!', 'You did not provide a NAME!', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
    }
  }, [route.params?.name]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{JSON.stringify(route.params)}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />

    <Button
        title="Create post"
        onPress={() => navigation.navigate('Create')}
      />
    </View>
  );
}