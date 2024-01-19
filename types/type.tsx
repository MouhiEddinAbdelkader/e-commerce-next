import { CartProductType, SelectedImgType } from "@/app/product/[productid]/productDetails";

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
    cartproduct: CartProductType,
    handColorSelect : (value : SelectedImgType ) => void,
}

export interface setQtyProps {
    cartCounter? : boolean,
    cartProduct : CartProductType,
    handleQtyIncrease : () => void,
    handleQtyDeacrease : () => void,

}