import { View, Text, StyleSheet } from 'react-native';

function PrimaryButton({ children }) {
  return (
    <View style={styles.button}>
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    // borderColor: 'red',
    // // backgroundColor: 'blue',
    // borderRadius: 5,
    // borderWidth: 2,
  },
});

export default PrimaryButton;
