import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const CusBtn = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={{ padding: 16 }} onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}