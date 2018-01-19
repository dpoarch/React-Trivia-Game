import { GET_ALL_DATA, GET_FIRST_DATA, GET_I, QUESTION_IS_TRUE, QUESTION_IS_FALSE, GET_SCORE, PLAY_AGAIN } from "./types";
import axios from "react-native-axios";

const URL = "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";
var arrayList = [];
export const getAllData = () => {
    return dispatch => {
        axios.get(URL)
            .then(function (response) {
                console.log(response.data.results)
            })
    };
}

export const getFirstData = ({ navigation }) => {
    return (dispatch, getState) => {
        const { navigate } = navigation;
        const { question } = getState();
        axios.get(URL)
            .then(function (response) {
                if (question.i <= 9) {
                    // console.log(response.data.results)

                    for (var key in response.data.results) {
                        var obj = response.data.results[key];
                        arrayList.push(obj)
                        // ...
                    }
                    // console.log(question.i);
                    // console.log(arrayList[question.i]);
                    dispatch({ type: GET_FIRST_DATA, payload: arrayList[question.i] })
                } else {
                    navigate("Results");
                    // alert("dsadasdsadas");
                }
            })
            .catch(function (response) {
                console.log(response)
            })
    };
}


export const getData = ({ navigation }) => {
    return (dispatch, getState) => {
        const { navigate } = navigation;
        const { question } = getState();

        if (question.i <= 9) {

            dispatch({ type: GET_FIRST_DATA, payload: arrayList[question.i] })
        } else {
            navigate("Results");
            // alert("dsadasdsadas");
        }

    };
}
export const clickButtonTrue = ({ navigation }) => {
    return (dispatch, getState) => {
        const { navigate } = navigation;
        var ans = "True";
        const { question } = getState();
        console.log(Object.values(question.data)[4]);
        if (ans == Object.values(question.data)[4]) {
            question.array.push(['correct', Object.values(question.data)[3]])
            dispatch({ type: GET_I, payload: question.i + 1 });
            dispatch({ type: GET_SCORE, payload: question.score + 1 });
            // dispatch({ type: QUESTION_IS_TRUE, payload: ans });
            dispatch(getData({ navigation }))
        } else {
            question.array.push(['incorrect', Object.values(question.data)[3]])
            dispatch({ type: GET_I, payload: question.i + 1 });
            dispatch(getData({ navigation }))


        }

    };



};

export const clickButtonFalse = ({ navigation }) => {
    return (dispatch, getState) => {
        const { navigate } = navigation;
        var ans = "False";
        const { question } = getState();

        if (ans == Object.values(question.data)[4]) {
            question.array.push(['correct', Object.values(question.data)[3]])
            dispatch({ type: GET_I, payload: question.i + 1 });
            dispatch({ type: GET_SCORE, payload: question.score + 1 });
            // dispatch({ type: QUESTION_IS_TRUE, payload: ans });
            dispatch(getData({ navigation }))
        } else {
            question.array.push(['incorrect', Object.values(question.data)[3]])
            dispatch({ type: GET_I, payload: question.i + 1 });
            dispatch(getData({ navigation }))


        }

    };

};


export const onPlayAgain = ({ navigation }) => {
    return (dispatch, getState) => {
        const { navigate } = navigation;
        dispatch({ type: PLAY_AGAIN })
        navigate("Intro");
    };

};