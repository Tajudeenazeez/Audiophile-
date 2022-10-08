import { products } from '../utils/data'
import image9 from "../assets/images/ZX9 SPEAKER.png"
import image2 from "../assets/images/XX99 Mark I Headphones.png"
import image5 from "../assets/images/YX1 WIRELESS EARPHONES.png"

const ProductCatergory = () => {
  return (
    <>
        <div className='flex justify-evenly items-center bg-white h-[90vh] pl-[60px] pr-[20px]'>
            <div className='bg-[#f1f1f1] grow h-[35%] text-center flex flex-col justify-end m-2 pb-[8px] relative'>
                <img className='absolute shadow-[0px_31px_14px_-12px_rgba(0,0,0,0.1)] w-[80px] h-[80px] left-[30%] top-[-40%]' src={image2} alt="headphone" />
                <h3 className='uppercase text-xs font-black'>Headphone</h3>
                <p className='text-[0.6rem] uppercase text-gray-500 text-bold p-2 '>shop <span className='text-orange-500  font-black'>&gt; </span></p>
            </div>
            <div className='bg-[#f1f1f1] grow h-[35%] text-center flex flex-col justify-end m-2 pb-[8px] relative '>
                <img className='absolute shadow-[0px_31px_14px_-12px_rgba(0,0,0,0.1)] w-[80px] h-[80px] left-[30%] top-[-40%]' src={image9} alt="headphone" />
                    <h3 className='uppercase text-xs font-black'>Speaker</h3>
                    <p className='text-[0.6rem] uppercase text-gray-500 text-bold p-2 '>shop <span className='text-orange-500  font-black'>&gt; </span></p>
            </div>
            <div className='bg-[#f1f1f1] grow h-[35%] text-center flex flex-col justify-end m-2 pb-[8px] relative'>
            <img className='absolute shadow-[0px_31px_14px_-12px_rgba(0,0,0,0.1)] w-[80px] h-[80px] left-[30%] top-[-40%]' src={image5} alt="headphone" />
                <h3 className='uppercase text-xs font-black'>Earphone</h3>
                <p className='text-[0.6rem] uppercase text-gray-500 text-bold p-2 '>shop <span className='text-orange-500  font-black'>&gt; </span></p>
            </div>
        </div>
 
    </>
  )
}

export default ProductCatergory