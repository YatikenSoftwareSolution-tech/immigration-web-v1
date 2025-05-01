import ThankuCard from '@/components/custom/ThankuCard'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Thanku = () => {
  return (
    <div className="mt-12 px-10 py-16">
          <div className='flex flex-col md:flex-row border rounded-lg items-center justify-center bg-gradient-to-r from-blue-50 to-pink-50 px-6'>
          <Image
            className="p-8 rounded-lg"
            src="/JobPlacement.jpg"
            alt="thank you "
            width={600}
            height={600}
            
          />
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-dark">
              Thank You for filling the consultation form. <br/> Your application will be reviewed in detail. <br/>Our team will contact you via provided email within 24 hours for a 10 min meeting. 
            </h5>
            <h6 className="text-secondary font-semibold mt-4">
                 Or you can schedule a 30 min paid meeting. 
            </h6>
            <Link href="https://buy.stripe.com/00g7vjgm2ctV33W7ss" target="_blank">
                <button className="group mt-6 bg-secondary hover:bg-secondary-dark text-white px-6 py-4 rounded-xl inline-flex items-center gap-3 shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                  <span className="text-lg font-medium">
                    Schedule meeting
                  </span>
                </button>
              </Link>
          </div>
          </div>
        </div>
  )
}

export default Thanku
