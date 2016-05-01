const ESTADO_INICIAL = {
    compannies: []
};

export const compania = (state = ESTADO_INICIAL, action) => {
    if (action === undefined) return state;
    switch (action.type) {
        case "carregar companias":
            return Object.assign({}, state, {
                compannies: action.companias
            });
        case "nova compania":
            return Object.assign({}, state, {
                compannies: [
                    ...state.compannies,
                    action.compannie
                ]
            });
        default:
            return state;
    }

};

export default compania;