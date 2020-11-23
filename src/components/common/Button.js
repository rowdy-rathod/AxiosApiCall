import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.buttonStyle}>
            <Text style={styles.buttonTitleStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#003778',
        flex: 1,
        marginHorizontal: 16,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 6
    },
    buttonTitleStyle: {
        fontSize: 18,
        textAlign: 'center',
        padding: 10,
        color: '#fff'
    }
});

export { Button };