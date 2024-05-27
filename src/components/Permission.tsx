import React from 'react';
import { View, Text, Button, Linking } from 'react-native';

// Component to display when camera permission is not granted
const PermissionsPage = () => {
  return (
    <View>
      <Text>Camera permission is required to use this feature.</Text>
      <Button title="Grant Permission" onPress={() => Linking.openSettings()} />
    </View>
  );
};

// Component to display when no camera device is available
const NoCameraDeviceError = () => {
  return (
    <View>
      <Text>No camera device found.</Text>
    </View>
  );
};

export { PermissionsPage, NoCameraDeviceError };
