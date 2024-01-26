import { truncateText } from '@/utils/truncateText';
import Container from './componants/Container'
import HomeBanner from './componants/HomeBanner'
import { products } from '@/utils/products'
import ProductCard from './componants/products/ProductCard';
import Categories from './componants/nav/Categories';

export default function Home() {
  return (
    <div className='p-8'>
   <Container>
    <div>
           <Categories />
          <HomeBanner />
    </div>
    
        <div className='grid grid-cols-2 
        sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
        2x1:grid-cols-6 gap-8 '>
         {products.map((product : any) => {
          return <div>
            {<ProductCard  data={product}/>}
          </div>
         })}    
    </div>
   </Container>
    </div>
  )
}
