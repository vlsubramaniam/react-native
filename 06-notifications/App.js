import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Alert, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';

async function requestPermissionsAsync() {
  return await Notifications.requestPermissionsAsync({
    android: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
      allowAnnouncements: true,
    },
  });
}

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

export default function App() {
  // Push Notification
  useEffect(() => {
    async function configurePushNotifications() {
      const { status } = await Notifications.getPermissionsAsync();
      let finalStatus = status;

      if (finalStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        Alert.alert(
          'Permission required',
          'Push notifications need appropriate permissions'
        );
        return;
      }
      const pushToken = await Notifications.getExpoPushTokenAsync();
      console.log(pushToken);

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.DEFAULT,
        });
      }
    }
    configurePushNotifications();
  }, []);

  // Local Notification
  useEffect(() => {
    requestPermissionsAsync();
    const subscription1 = Notifications.addNotificationReceivedListener(
      (notification) => {
        const user = notification.request.content.data.user;
        console.log(user);
      }
    );
    const subscription2 = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      }
    );

    return () => {
      subscription1.remove();
      subscription2.remove();
    };
  }, []);

  function scheduleNotoficationHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'First Local Notification',
        body: 'This is the body of the local notification',
        data: { user: 'Rajan' },
      },
      trigger: {
        seconds: 1,
      },
    });
  }

  function sendPushNotificationHandler() {
    fetch(`https://exp.host/--/api/v2/push/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'ExponentPushToken[7t1zDNKyXhGuf2yzN8PSlQ]',
        title: 'Push Test - sent from a device',
        body: 'This is a Push Notifcation test body message',
      }),
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title='Local Notification'
          onPress={scheduleNotoficationHandler}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title='Push Notification'
          onPress={sendPushNotificationHandler}
        />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
  },
});
