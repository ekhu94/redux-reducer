export function manageFriends(state={friends: []}, action){
    if (action.type === 'ADD_FRIEND') {
        const newFriends = [...state.friends, action.friend];
        return { friends: newFriends };
    } else if (action.type === 'REMOVE_FRIEND') {
        const updatedFriends = [...state.friends.filter(f => f.id !== action.id)];
        return { friends: updatedFriends };
    }
    return state;
}
