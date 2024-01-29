import { IPrams } from "@/types/type";
import { Container } from "@mui/material";
import { products } from "@/utils/products";
import ProductDetails from "./productDetails";

const Product = ({ params } : {params : IPrams}) => {
    const product = products.find((item) => item.id === params.productId)
    return (
        <div className="p-8">  
            <Container>
                <ProductDetails product= {product} />
            </Container>
             </div>
    )
}
export default Product;