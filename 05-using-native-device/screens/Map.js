import { useCallback, useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import IconButton from '../components/ui/IconButton';

function Map({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState();
  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({
      latitude: lat,
      longitude: lng,
    });
  }

  const savePickedLlocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        'No Location!',
        'You have to pick a location by tapping on the map'
      );
      return;
    }
    navigation.navigate('AddPlace', {
      pickedLat: selectedLocation.latitude,
      pickedLng: selectedLocation.longitude,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon='save'
          size={24}
          color={tintColor}
          onPress={savePickedLlocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLlocationHandler]);

  return (
    <MapView
      initialRegion={region}
      onPress={selectLocationHandler}
      style={styles.map}
    >
      {selectedLocation && (
        <Marker title='Picked Location' coordinate={selectedLocation} />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default Map;
