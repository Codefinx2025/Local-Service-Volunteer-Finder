import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const ManageServicesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Manage Services</Text>
      <Text style={styles.placeholder}>Coming soon...</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  placeholder: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
});

export default ManageServicesScreen;
