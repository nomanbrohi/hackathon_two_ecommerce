import Image from 'next/image'

export default function TopHeader() {
    return (
      <div className="md:flex bg-black justify-center">
        <div className="h-[38px] md:w-[1240px] flex justify-center items-center">
          <div className="w-[100%] flex items-center justify-center gap-2">
            <p className="md:text-[14px] text-xs text-[#FAFAFA] font-light">
              Sign up and get 20% off to your first order.
            </p>
            <button className="md:text-base text-xs text-[#FAFAFA] font-[500] underline font-poppins">
              Sign Up Now
            </button>
          </div>
          <div className='hidden md:block'>
            <Image src="/images/Frame.png" width={20} height={20} alt='frame icon'>

            </Image>
          </div>
        </div>
      </div>
    );
  }
  