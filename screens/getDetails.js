import React from 'react';
import { View, StyleSheet, Image, Text, TextInput, Button } from 'react-native';

export default function GetDetails({ route }) {
    // Extract the photo from the route parameters
    const photo = route.params.photo;
    const [name, setName] = React.useState('');

    function handleClick() {
        console.log(name);
    }

    return (
        <View style={styles.container}>
            {/* Render the image */}
            <View>
                <Text style={styles.header}>Your image is ready to be Inspected👩‍🔬!</Text>
                <View style={styles.card}>
                    <Image source={{ uri: photo && photo.uri }} style={styles.image} />
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={onChangeText = (text) => { setName(text) }}
                        placeholder="Enter the name of the crop"
                        keyboardType="default"
                    />
                    <Button title="submit" color="#50c878" style={styles.button} onPress={() => { handleClick() }} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    card: {
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#E4F5E3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 250, // Set the width to fill the container
        height: 200, // Set the height to fill the container
    },
    header: {
        paddingVertical: 25,
        fontSize: 18,
        fontWeight: 'medium',
        alignSelf: 'center'
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: '#50c878',
        padding: 10,
        width: 200
    },
    button: {
        width: 30,
        borderRadius: 20,
    }
});