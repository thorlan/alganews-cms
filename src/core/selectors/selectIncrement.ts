import { RootState } from "../store";

export default function selectIncrement(state: RootState){
    return state.post.counter;
}