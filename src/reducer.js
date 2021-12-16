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
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem)=> basketItem.id === action.id
            );

            let newbasket = [...state.basket];

            if(index>=0)
                newbasket.splice(index,1);
            else
                console.warn('Cannot Remove Product as its not in the basket');
            
            return{

                ...state,
                basket : newbasket,
            }

        default:
            return state;
    }
};

export default reducer;