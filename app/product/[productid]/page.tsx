import { IPrams } from "@/types/type";
import { Container } from "@mui/material";
import ProductDetails from "./productDetails";
import { product } from "@/utils/product";

const Product = ({ params } : {params : IPrams}) => {
    return (
        <div className="p-8">  
            <Container>
                <ProductDetails product= {product} />
            </Container>
             </div>
    )
}
export default Product;