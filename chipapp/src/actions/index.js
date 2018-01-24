export const SET_GAME_MESSAGE = "SET_GAME_MESSAGE";

export function setGameMessage(message){
    return{
        type:SET_GAME_MESSAGE,
        message
    }
}