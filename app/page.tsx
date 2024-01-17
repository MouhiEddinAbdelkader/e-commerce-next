import Image from 'next/image'
import Container from './componants/Container'
import HomeBanner from './componants/HomeBanner'

export default function Home() {
  return (
    <div className='p-8'>
   <Container>
    <div>
          <HomeBanner />
    </div>
   </Container>
    </div>
  )
}
