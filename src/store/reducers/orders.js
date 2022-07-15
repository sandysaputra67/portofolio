import * as actionTypes from "../actions/order/actionsTypes";
import { addOrder } from "../actions/order";
const initialstate ={
    orders:[],
    order:{},
};
const orders = (state = initialstate,action) =>{
    console.log("addorder",addOrder )
    switch(action.type){
        case actionTypes.ADD_ORDER:
            return{
                ...state,
                order: action.payload.data.data.rows,
            };
            case actionTypes.GET_LIST_ORDER:
                return{
                    ...state,
                    orders: action.payload.data.data.rows,
                };
                case actionTypes.GET_ORDER_BY_ID:
                    return{
                        ...state,
                        orders: action.payload.data.data.rows,
                    };
                    default:
                        console.log("initialstate", initialstate)
                        return state;
    }
}
export default orders;