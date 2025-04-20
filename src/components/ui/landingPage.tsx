
"use client"
import Link from "next/link"
import Image from 'next/image'

 

export default function LandingPage() {
  return (
    <div className='flex flex-col'>
      <section id='home' className='min-h-fit w-full scroll-mt-28 flex flex-col'>
        <div className="flex flex-row py-16 px-6">
          <section className='flex flex-col items-start justify-center w-1/2 lg:ml-20 sm:ml-10'>
              <h1 className="text-3xl italic font-bold">Welcome to E-Market</h1>
              <p className="text-base font-light p-1 mt-2">E-Market is your one-stop destination for all your shopping needs. We offer a wide range of products, from electronics and fashion to home essentials and groceries. Enjoy a seamless shopping experience with fast delivery, secure payments, and exclusive deals.</p>

            <button className='w-32 mt-7 p-2 border rounded-3xl text-white bg-black hover:transform-[translateY(-2px)] transition-transform'>
              <Link href='/buy'>Shop Now</Link>
            </button>
          </section>

          <section className="text-center bg-white w-1/2">
            <h3 className="text-3xl italic font-bold">Why Shop with Us?</h3>
              <ul className="mt-4 space-y-4 max-w-3xl mx-auto text-base font-light">
                <li><strong className="font-bold">Wide Selection:</strong> Thousands of products from top brands.</li>
                <li><strong className="font-bold">Best Prices:</strong> Competitive pricing with regular discounts.</li>
                <li><strong className="font-bold">Fast & Secure Delivery:</strong> Reliable shipping and secure transactions.</li>
                <li><strong className="font-bold">24/7 Support:</strong> Our customer service team is here to help anytime.</li>
              </ul>
          </section>

        </div>

        <section className="mt-9 mx-20">
          <h3 className="text-3xl font-bold text-center mb-6">Featured Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="font-bold">Electronics</h4>
              <p>Smartphones, Laptops, Accessories</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="font-bold">Fashion</h4>
              <p>Clothing, Shoes, Accessories</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="font-bold">Home & Kitchen</h4>
              <p>Appliances, Décor, Furniture</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h4 className="font-bold">Groceries</h4>
              <p>Fresh Produce, Beverages, Snacks</p>
            </div>
          </div>
        </section> 
      </section>

      <section id="about" className="flex flex-col mt-24 py-16 px-6 bg-sky-50 scroll-mt-24">
        <h3 className="text-3xl italic font-bold text-center">About Us</h3>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
          <div className='bg-white shadow-sm rounded-md p-4 min-h-36'>
            <h3 className="text-2xl font-bold text-center">Who We Are</h3>
            <p className="mt-4 max-w-2xl mx-auto mb-10 text-base font-light">E-Market is an innovative online marketplace that connects buyers with quality products at unbeatable prices. Founded with the vision of making online shopping easy and accessible for everyone, we strive to bring you a diverse collection of items with excellent customer service.</p>
          </div>

          <div className='bg-white shadow-sm rounded-md p-4 min-h-36 sm:hidden md:block'>
            <h3 className="text-2xl font-bold text-center">Our Mission</h3>
            <p className="mt-4 max-w-2xl mx-auto mb-10 text-base font-light">To provide a convenient, affordable, and enjoyable shopping experience with quality products, secure payments, and reliable customer support.</p>
          </div>

          <div className='bg-white shadow-sm rounded-md p-4 min-h-36 sm:hidden lg:block'>
            <h3 className="text-2xl font-bold text-center">Our Vision</h3>
            <p className="mt-4 max-w-2xl mx-auto mb-10 text-base font-light">To become the leading e-commerce platform known for its exceptional service and diverse product range.</p>
          </div>
        </div>
      </section>

      <section id='team' className='scroll-mt-40 mx-20 mt-20'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-y-6 shadow-sm border-gray-200 rounded-md p-3">
            <div className="relative w-28 h-28 rounded-full bg-sky-100 flex items-center justify-center -top-16 left-1/2 transform-[translateX(-50%)]">
              <span className='text-center text-3xl font-black'>01</span>
            </div>
            <p className="text-base font-light text-center -mt-7">Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read.</p>
            <div className="flex flex-col items-center justify-center gap-y-2 p-2">
              <h3 className="text-2xl text-bold">Josh Larson</h3>
              <Image 
                src="/assets/test.jpg"
                width={212}
                height={180}
                alt="Person 1"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-6 shadow-sm border-gray-200 rounded-md p-3">
            <div className="relative w-28 h-28 rounded-full bg-sky-100 flex items-center justify-center -top-16 left-1/2 transform-[translateX(-50%)]">
              <span className='text-center text-3xl font-black'>01</span>
            </div>
            <p className="text-base font-light text-center -mt-7">Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read.</p>
            <div className="flex flex-col items-center justify-center gap-y-2 p-2">
              <h3 className="text-2xl text-bold">Josh Larson</h3>
              <Image 
                src="/assets/test.jpg"
                width={212}
                height={180}
                alt="Person 1"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-6 shadow-sm rounded-md p-3">
            <div className="relative w-28 h-28 rounded-full bg-sky-100 flex items-center justify-center -top-16 left-1/2 transform-[translateX(-50%)]">
              <span className='text-center text-3xl font-black'>01</span>
            </div>
            <p className="text-base font-light text-center -mt-7">Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read.</p>
            <div className="flex flex-col items-center justify-center gap-y-2 p-2">
              <h3 className="text-2xl text-bold">Josh Larson</h3>
              <Image 
                src="/assets/test.jpg"
                width={212}
                height={180}
                alt="Person 1"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
