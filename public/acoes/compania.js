export const novaCompania = (compannie) => {
    return {
        type: 'nova compania',
        compannie: Object.assing({
            categories: [],
            created_at: new Date(),
            description: '',
            id: new Date().getTime(),
            name: '',
            phones: [],
            products: [],
            requests_number: 0,
            updated_at: ""
        },compannie)
    };
};
export const carregarCompanias = (companias) => {
    return {
        type: 'carregar companias',
        companias
    }; 
};