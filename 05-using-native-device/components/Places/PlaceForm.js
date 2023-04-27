import { useCallback, useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';

import { Colors } from '../../constants/Colors';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';
import Button from '../ui/Button';
import { Place } from '../../models/place';

function PlaceForm({ onCreatePlace }) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [pickedImage, setPickedImage] = useState('');
  const [pickedLocation, setPickedLocation] = useState('');

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  function onPickedImageHandler(imageUri) {
    setPickedImage(imageUri);
  }

  const onPickedLocationHandler = useCallback((location) => {
    setPickedLocation(location);
  }, []);

  function savePlaceHandler() {
    const placeData = new Place(enteredTitle, pickedImage, pickedLocation);
    onCreatePlace(placeData);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>TITLE</Text>
        <TextInput
          value={enteredTitle}
          onChangeText={changeTitleHandler}
          style={styles.input}
        />
      </View>
      <ImagePicker onPickedImage={onPickedImageHandler} />
      <LocationPicker onPickedLocation={onPickedLocationHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});

export default PlaceForm;
