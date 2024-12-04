import {  View, Button } from 'react-native';

import * as Location from 'expo-location';

import * as TaskManager from 'expo-task-manager';

TaskManager.defineTask('GEOFENCING_TASK', async ({ data, error }) => {
  console.log('GEOFENCING_TASK', data, error)
})


export default function HomeScreen() {

    const getLocationPermissions = async () => {
      await Location.requestForegroundPermissionsAsync()
      await Location.requestBackgroundPermissionsAsync()
      console.log('Location permissions granted')
    }

    const startGeofencing = async () => {
      Location.startGeofencingAsync('GEOFENCING_TASK', [
        {
          identifier: 'test',
          latitude: 37.3371536,
          longitude: -122.0310964,
          radius: 100,
          notifyOnEnter: true,
          notifyOnExit: true,
      },
      ])
      console.log('Geofencing started')
    }

  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Get Location Permissions" onPress={getLocationPermissions} />
        <Button title="Start Geofencing" onPress={startGeofencing} />
      </View>
  );
}
