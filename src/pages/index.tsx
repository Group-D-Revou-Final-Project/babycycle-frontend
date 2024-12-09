import ProductCard from '@/components/ProductCard'
import { PrimaryButton } from '@/components/PrimaryButton'

function Home() {
  return (
    <div className='body-width'>

      <div className='h-[660px] bg-babyBlue flex -z-10 object-contain relative'>
        <div className='w-1/2'>
          <img className='absolute top-[55px] left-[180px] z-[3]' src='/image_2.png'/>
          <img className='absolute top-[96px] left-[144px] z-[1]' src='/Rectangle_42.png'/>
          <img className='absolute top-0 right-0 z-[5]' src='/asset3_1.png'/>
          <img className='absolute' src='/asset2_2.png'/>
          <img className='absolute bottom-0 right-0' src='/asset2_1.png'/>
          <img className='absolute bottom-0 z-[5]' src='/asset1_1.png'/>
        </div>
        
        <div className='w-1/2 flex flex-col justify-center items-center gap-6 z-0'>
          <span className='font-decor text-4xl'>Smart mom, shop recycle</span>
          <PrimaryButton type='button'>Explore</PrimaryButton>
        </div>
      </div>

      <div className='flex gap-6 py-16'>
        <div className='w-[240px] h-[291px] flex flex-col gap-around'>
          <span className='h-1/2 uppercase text-6xl'>Sale & Promo</span>
          <div className='h-1/2 flex justify-center items-center'>
            <PrimaryButton type='button'>See All</PrimaryButton>
          </div>
        </div>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>

      <div className='flex gap-6 py-16'>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>        
        <div className='w-[240px] h-[291px] flex flex-col gap-around'>
          <span className='h-1/2 uppercase text-6xl'>New Arrival</span>
          <div className='h-1/2 flex justify-center items-center'>
            <PrimaryButton type='button'>See All</PrimaryButton>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
