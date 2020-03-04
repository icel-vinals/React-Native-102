import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {

    const [enteredValue, setEneteredValue] = useState('');
    const [confirmed,setConfirmed] = useState(false);
    const [chosenNumber,setChosenValue] = useState();

    const numberHandler = inputText => {
        setEneteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEneteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                'Invalid number',
                'the number must be a number between 1 and 99',
                [{text:'Okay',style:'destructive',onPress:resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setChosenValue(chosenNumber);
        setEneteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if(confirmed){
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                 <Text>You selected:</Text>
                 <NumberContainer>{chosenNumber}</NumberContainer>
                 <Button color= {Colors.primary} title="START GAME" onPress={() => props.onStartGame(chosenNumber)}/>
            </Card>
        );
    };


    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
            <View style={styles.screen}>

                <Text style={styles.title}>Start a new game!</Text>
                <Card style={styles.inputContainer} >
                    <Text>Select a number</Text>
                    <Input
                        style={styles.Input}
                        blurOnSubmit autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={numberHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonStyle}><Button title="Reset" onPress={resetInputHandler} color={Colors.secondary} /></View>
                        <View style={styles.buttonStyle}><Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} /></View>
                    </View>

                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>

    );

};

const styles = StyleSheet.create({

    screen: {

        flex: 1,
        padding: 10,
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        marginVertical: 10,

    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },

    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15

    },
    buttonStyle: {
        width: '40%'
    },
    Input: {
        width: 50,
        textAlign: 'center'
    },

    summaryContainer:{
        marginTop:20,
        alignItems:'center'
    }




});


export default StartGameScreen;