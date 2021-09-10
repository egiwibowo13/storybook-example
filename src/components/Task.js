// components/Task.js
import * as React from 'react';
import { TextInput, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { styles } from '../../constants/globalStyles';

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  return (
    <SafeAreaView style={styles.ListItem}>
      <TextInput value={title} editable={false} />
      <TouchableOpacity style={{ paddingHorizontal: 16, paddingVertical: 8, backgroundColor: 'yellow' }}>
        <Text style={{ color: 'red' }}>{title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}