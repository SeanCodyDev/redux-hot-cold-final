import React from 'react';
import {
    connect
} from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
import {restartGame, makeGuess, generateAuralUpdate} from '../actions';



//no longer the default export
export class Game extends React.Component {


    restartGame() {
        this.props.dispatch(restartGame());
    }

    makeGuess(guess) {
        this.props.dispatch(makeGuess(guess));
    }

    generateAuralUpdate() {
        this.props.dispatch(generateAuralUpdate())
    }

    render() {
        const {
            feedback,
            guesses,
            auralStatus
        } = this.props;

        const guessCount = guesses.length;

        return ( <
            div >
            <
            Header onRestartGame = {
                () => this.restartGame()
            }
            onGenerateAuralUpdate = {
                () => this.generateAuralUpdate()
            }
            /> <
            main role = "main" >
            <
            GuessSection feedback = {
                feedback
            }
            guessCount = {
                guessCount
            }
            onMakeGuess = {
                guess => this.makeGuess(guess)
            }
            /> <
            StatusSection guesses = {
                guesses
            }
            auralStatus = {
                auralStatus
            }
            /> <
            InfoSection / >
            <
            /main> <
            /div>
        );
    }
}

//added mapStateToProps
//props include what was in the initial constructor
const mapStateToProps = state => ({
    guesses: state.guesses,
    feedback: state.feedback,
    auralStatus: state.auralStatus,
    correctAnswer: state.correctAnswer
});

//default export is connected Game Component
export default connect(mapStateToProps)(Game);