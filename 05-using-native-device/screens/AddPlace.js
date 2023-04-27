import { View, StyleSheet } from 'react-native';

import PlaceForm from '../components/Places/PlaceForm';

function AddPlace({ navigation }) {
  function createPlaceHandler(place) {
    navigation.navigate('AllPlaces', {
      place,
    });
  }
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

const styles = StyleSheet.create({});

export default AddPlace;
