import React from 'react';

const Hero = () => {
    return (
       <div className='bg-[url("/photos/Banner-min.jpg")] sora bg-cover bg-center py-50 '>
            <div className='w-11/12 mx-auto'>
            <h1 className='text-white font-bold text-6xl mb-5'>Bid on Unique Items from <br /> Around the World</h1>
            <p className='text-white text-2xl mb-5 font-light'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>

            <button className='bg-white rounded-3xl p-2 px-6 sora font-bold'>Explore Auction</button>
            </div>
        </div>
    );
};

export default Hero;