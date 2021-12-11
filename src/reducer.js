export const initialState={
    basket: [],
};

export const getBasketTotal=(basket)=>{

    const fun=(amount, item)=>{

        return parseFloat(item.price) + amount;

    }

   const total= basket?.reduce(fun,0.00);

   console.log(basket,total,"hello subtotal");

   return total;
}

const reducer = (state, action ) => {

    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket,action.item],
                
                
            };

        default:
            return state;
    }
};

export default reducer;