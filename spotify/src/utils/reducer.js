export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    _token:null,
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return{
                ...state,
                _token: action._token,
            }
        default:
            return state;
    }
}

export default reducer;