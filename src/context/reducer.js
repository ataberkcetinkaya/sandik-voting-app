
// Tuttuğumuz Dataların Saklandığı Alan
const initialState = {
    text: 'Merhaba De'
};

// Alacağımız aksiyonun tipini tanımlıyoruz
const actionTypes = {
    SAY_HELLO: 'SAY_HELLO',
};

// Global Fonksiyonlarımızın Tanımlandığı Alan
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SAY_HELLO:
            return {
                ...state,
                text: 'hello'
            };
        default:
            return {
                ...state
            };
    }
};

export { initialState, actionTypes };
export default reducer;