import { View, StyleSheet } from 'react-native';

import PlaceForm from '../components/Places/PlaceForm';
import { insertPlace } from '../util/database';

function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    await insertPlace(place);
    navigation.navigate('AllPlaces', {
      place,
    });
  }
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

const styles = StyleSheet.create({});

export default AddPlace;
