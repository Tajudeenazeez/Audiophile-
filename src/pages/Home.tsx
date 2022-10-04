import ProductCatergory from '../components/ProductCatergory'
// import Products from '../components/Products'
// import { products } from '../utils/data'
import Button from '../components/Button'
// import image1 from '../assets/images/speaker-in-sitting-room.png'
import image3 from "../assets/images/XX99 Mark II Headphones.png"
import image11 from "../assets/images/guy-with-headpone.png"

const Home = () => {
  return (

   <>
     <div className='h-[100vh]  bg-black py-8'>
       <div className='flex justify-evenly text-white' >
          <div className='w-1/3 mt-8'>
            <h2 className='tracking-[6px] leading-[12px] text-neutral-600 uppercase text-[8px]'>New Product</h2>
            <h1 className='text-white text-[36px] leading-10 font-bold uppercase mt-4'>xx99 mark ii headphones</h1>
            <p className='text-[9px] py-4 text-neutral-600'>Experience natural, lifelike audio and exceptional
             build quality made for the passionate music enthusiast.</p>
            <Button/>
          </div>
          <img className='w-[300px]' src={image3} alt='catton'/>
       </div>
    </div>
    <div className='flex flex-wrap  h-[100%]'></div>
      <ProductCatergory/>
    
    <div className='flex h-[100vh] justify-evenly items-center m-[20px] '>
      <div className='px-[90px]'>
        <h1 className='text-[1.5rem] font-black uppercase mb-[10px] '>
        Bringing you the <span className='text-[#d87d4a]'>best</span> audio gear
        </h1>
        <p className='text-[9px] text-gray-600'>
        Located at the heart of New York City, Audiophile is the premier store 
        for high end headphones, earphones, speakers, and audio accessories.
         We have a large showroom and luxury demonstration rooms available for you to
          browse and experience a wide range of our products. 
        Stop by our store to meet some of the fantastic people who make Audiophile
         the best place to buy your portable audio equipment.
        </p>
      </div>
      <div>
       <img className='w-[1900px] h-[340px] rounded'  src={image11} alt="headphone" />
      </div>
    </div>
    
   </>
  )
}

export default Home
