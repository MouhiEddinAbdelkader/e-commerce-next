'use client';
import { createContext, useState } from "react";

type CartContextType = {
    cartTotalQty : number;
}
interface Props{
    [propsName : string] : any;

}

export const CartContext = 
createContext<CartContextType | null >(null);


export const CartContextProvider = (props : Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(10);
    const value = {
        cartTotalQty
    }

    return <CartContext.Provider  value={value} 
    {...props} />

  
}

export const useCart = () => {
    const context = createContext(CartContext);

    if (context ===  null) {
        throw new Error("useCart must be used within a CartContextProvider");
    }

    return context;
}