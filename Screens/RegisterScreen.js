import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import { authentification } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterScreen = ({ navigation }) => {
    
    const [isRegisterUser, setRegisterUser] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const RegisterUser = () => {
        createUserWithEmailAndPassword(authentification,email,password)
        .then((re) => {
            console.log(re);
            setRegisterUser(true);
            navigation.navigate('Home');
        })
        .catch((re) => {
            console.log(re);
        });
    };

  return (
    <KeyboardAvoidingView 
        style={styles.container}
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
                onPress={() => RegisterUser(authentification, email, password)} 
                style={styles.button}
            >
                <Text style={styles.buttonText}>S'enregistrer</Text>
            </TouchableOpacity>
            
            <View style={styles.viewRegister}>
                <Text>Vous avez déjà un compte ? </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonOutlineText}>Se connecter</Text>
                </TouchableOpacity>
            </View>
        </View>
    </KeyboardAvoidingView>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
});