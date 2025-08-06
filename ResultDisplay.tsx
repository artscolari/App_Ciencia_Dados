// components/ResultDisplay.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ResultDisplayProps = {
  title: string;
  value: number | string;
};

const ResultDisplay = ({ title, value }: ResultDisplayProps) => {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultTitle}>{title}</Text>
      <Text style={styles.resultValue}>
        {typeof value === 'number' ? value.toFixed(2) : value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  resultTitle: {
    fontSize: 18,
    color: '#fff',
  },
  resultValue: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ResultDisplay;