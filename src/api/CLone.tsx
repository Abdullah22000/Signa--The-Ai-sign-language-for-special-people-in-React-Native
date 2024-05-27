import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Camera, CameraDevice, useCameraDevice } from 'react-native-vision-camera';
import Header from '../components/Header';

const CameraScreen = () => {
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [device, setDevice] = useState<CameraDevice | null>(null);

  useEffect(() => {
    const prepareCamera = async () => {
      await Camera.requestCameraPermission();
      const availableDevices = await Camera.getAvailableCameraDevices();
      // Select the desired camera position here
      const desiredPosition = 'front'; // or 'front' for the front camera
      const desiredDevice = availableDevices.find(device => device.position === desiredPosition);
      if (desiredDevice) {
        setDevice(desiredDevice);
        setIsCameraReady(true);
      } else {
        console.error(`No ${desiredPosition} camera available.`);
      }
    };

    prepareCamera();
  }, []);

  return (
    <View style={styles.container}>
      {isCameraReady && device ? (
        <Camera
          style={styles.camera}
          device={device}
          isActive={true}
        />
      ) : (
        <Text>Loading camera...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop:20,
  },
  camera: {
    width: '100%',
    height: '100%',
  },
});

export default CameraScreen;
