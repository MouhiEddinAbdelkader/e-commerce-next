import { CartProductType, SelectedImgType } from "@/app/product/[productId]/productDetails";
import {  UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

export interface productCardProps {
    data : any;
}

export interface IPrams {
    productId?: string;
}
export interface productDetailsProps {
    product: any;
}
export interface setColorProps {
    images : SelectedImgType,
    cartProduct: CartProductType,
    handColorSelect : (value : SelectedImgType ) => void,
}
export interface setQtyProps {
    cartCounter? : boolean,
    cartProduct : CartProductType,
    handleQtyIncrease : () => void,
    handleQtyDecrease : () => void,
}



export interface   ProductImageProps {
    cartProduct: CartProductType;
    product: any;
    handleColorSelect : (value : SelectedImgType) => void;
}

export interface InputProps {
    id:string;
    label: string;
    type?:string;
    disabled?:boolean;
    required? : boolean;
    register : UseFormRegister<FieldValues>;
    errors : FieldErrors; 
}