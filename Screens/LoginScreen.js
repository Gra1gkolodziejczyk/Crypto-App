import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { authentification } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {

    const [isSignedIn, setIsSignedIn] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signInUser = () => {
        signInWithEmailAndPassword(authentification, email, password)
        .then((re) => {
            console.log(re);
            setIsSignedIn(true);
            navigation.navigate('Home');
        })
        .catch((re) => {
            console.log(re);
        });
    };

  return (
    <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
    >
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
            >
            </TextInput>
            <TextInput
                placeholder='Mot de passe'
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
            >
            </TextInput>
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={() => signInUser(authentification, email, password)} 
                style={styles.button}
            >
                <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
            
            <View style={styles.viewRegister}>
                <Text>Vous n'avez pas encore de compte ? </Text>
                <TouchableOpacity
                onPress={() => navigation.navigate('Register')}>
                <Text style={styles.buttonOutlineText}>S'enregistrer</Text>
                </TouchableOpacity>
            </View>
        </View>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
    },
    viewRegister: {
        flexDirection: 'row',
        marginTop: 10,
    },
})