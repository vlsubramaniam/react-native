import { View, Text, Pressable, StyleSheet } from 'react-native';

function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{ color: '#210644' }} // This is only applicable for Android devices
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={(pressedData) => pressedData.pressed && styles.iosPressedStyle} // This is to have the styles for both Android & IOS devices
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
  iosPressedStyle: {
    opacity: 0.5,
  },
});
