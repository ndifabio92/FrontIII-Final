import {Action, State} from "../../type";
import {useReducer} from "react";

export const initialState: State = {
    ids: JSON.parse(localStorage.getItem('ids') || '[]')
}

export const reducer = (state: State, action: Action) => {
    const {type, payload} = action;
    if (type === "ADD_ID") {
        const id = payload;

        if (!state.ids.includes(id)) {
            const newIds = [...state.ids, id];
            const oldIds = JSON.parse(localStorage.getItem('ids') || '[]');
            localStorage.setItem("ids", JSON.stringify(oldIds.concat(newIds)));

            return { ...state, ids: newIds };
        }
        return state;
    }

    if (type === "REMOVE_ID") {
        const idToRemove = payload;
        const newIds = state.ids.filter((id) => id !== idToRemove);
        localStorage.setItem("ids", JSON.stringify(newIds));

        return { ...state, ids: newIds };
    }

    return state;

};



export const useStore = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addId = (payload: string) => {
        dispatch({ type: "ADD_ID", payload });
    };

    const removeId = (payload: string) => {
        dispatch({ type: "REMOVE_ID", payload });
    };

    return {
        state,
        addId,
        removeId,
    };
}