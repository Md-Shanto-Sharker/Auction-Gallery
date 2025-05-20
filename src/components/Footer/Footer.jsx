import React from 'react';

const Footer = () => {
    return (
         <div className="mt-20 mb-10">
      <footer className="footer sm:footer-horizontal footer-center  text-base-content p-4">
        <aside>
          <div className="text-center">
            <a>
              <span className="text-[#003EA4] text-4xl font-bold">Auction</span>{" "}
              <span className="text-[#FFD337] text-4xl font-bold">Gallery</span>
            </a>
          </div>

          <div className="sora flex justify-around items-center gap-12  text-xl my-3">
            <h1>Bid.</h1>
            <h1>Win.</h1>
            <h1>Own.</h1>
          </div>

          <div className="flex gap-14 mb-3 poppins">
            <h1>Home</h1>
            <h1>Auctions</h1>
            <h1>Categories</h1>
            <h1>How to works</h1>
          </div>

          <p className="sora">© {new Date().getFullYear()}AuctionHub. All rights reserved.</p>
        </aside>
      </footer>
    </div>
    );
};

export default Footer;