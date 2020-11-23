import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.labelStyle}>
                {label}
            </Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={styles.inputStyle}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        color: '#333333',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        color: '#333333',
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }
});

export { Input };