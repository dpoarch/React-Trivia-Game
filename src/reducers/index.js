import { combineReducers } from "redux";
import QuestionReducer from "./questionsReducer";


export default combineReducers({
    question: QuestionReducer
});
