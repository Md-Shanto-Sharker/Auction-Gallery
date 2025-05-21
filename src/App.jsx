import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Card from "./components/Main/Card";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [likedItems, setLikedItems] = useState([]);
  const handldAdd = (likedItem) => {
    const newArray = [...likedItems, likedItem];
    setLikedItems(newArray);
  };

  const handleRemove = (id) => {
    const remainingBookMark = likedItems.filter((like) => like.id !== id);
    setLikedItems(remainingBookMark);
    toast.success("Item Remove  for favorite items");
  };
  return (
    <>
      <Toaster position="right-top"></Toaster>
      <header>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>

      <main className="bg-gray-300">
        <div className="w-11/12 mx-auto pt-10 pb-96 ">
          {/* hero section header text */}
          <div className="mb-5">
            <h1 className="text-[#001f50] text-[32px] font-bold">
              Active Auctions
            </h1>
            <p className="text-[16px]">
              Discover and bid on extraordinary items
            </p>
          </div>

          {/* Tables */}
          <div className="main-container flex justify-center gap-20">
            {/* Left container */}

            <div className="left-container w-[70%] text-center">
              <Main handldAdd={handldAdd} handleRemove={handleRemove}></Main>
            </div>

            {/* right container */}
            <div className="right-container w-[30%] text-center">
              <Card likedItems={likedItems} handleRemove={handleRemove}></Card>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
