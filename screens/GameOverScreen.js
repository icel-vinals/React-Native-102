import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/Colors';

const GameOverScreen = props => {

    return (
        <View style={styles.screen}>
            <Card>
                <Text style = {styles.info}>The game is over</Text>
                <Text style = {styles.info}>Number of rounds: {props.roundsNumber}</Text>
                <Text style = {styles.info}>Number was: {props.userNumber}</Text>
                <Button color={Colors.primary} title='NEW GAME' onPress={props.onRestart} />
            </Card>
        </View>


    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    info:{
        marginBottom:10,
        fontSize:18
        
    }

});

export default GameOverScreen;