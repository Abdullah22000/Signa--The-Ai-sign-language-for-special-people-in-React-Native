import React, { useState } from 'react';
import { View, Button, StyleSheet, StatusBar } from 'react-native';

const DarkModeButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    
  };

  return (
    <View style={styles.darkModeButtonContainer}>
      <Button
        title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        onPress={toggleDarkMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  darkModeButtonContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default DarkModeButton;
