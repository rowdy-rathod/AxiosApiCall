import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RadioButton = ({ data }) => {
    const [isChecked, setIsChecked] = useState(0);

    const onSelectValue = (key) => {
        setIsChecked(key)
        console.log(key);
        return key;
    }
    return (
        <View style={styles.container}>
            {
                data.map((data, key) => {
                    return (
                        <View key={key}>
                            {
                                isChecked == key ?
                                    <View>
                                        <TouchableOpacity style={styles.radioButtonContaner}>
                                            <Image
                                                style={styles.img}
                                                source={require('../images/radio_button_checked.jpg')} />
                                            <Text>{data}</Text>
                                        </TouchableOpacity>
                                    </View> :
                                    < View >
                                        <TouchableOpacity
                                            onPress={() => onSelectValue(key)}
                                            style={styles.radioButtonContaner}>
                                            <Image
                                                style={styles.img}
                                                source={require('../images/radio_button_un_checked.jpg')} />
                                            <Text>{data}</Text>
                                        </TouchableOpacity>
                                    </View>
                            }
                        </View>
                    )
                })
            }
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 12
    },
    radio: {
        flexDirection: 'row',
    },
    img: {
        height: 20,
        width: 20,
        marginHorizontal: 5,
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioButtonContaner: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export { RadioButton };