import Image from "next/image";
import React from "react";
import home_bg_image from "assets-shopcart/asset86.png";
import banner_bg_image from "assets-shopcart/asset15.png";
import banner_bg_product_1 from "assets-shopcart/asset16.png";
import se_1_product_1 from "assets-shopcart/asset20.png";
import se_1_product_2 from "assets-shopcart/asset21.png";
import se_1_product_3 from "assets-shopcart/asset22.png";
import se_1_product_4 from "assets-shopcart/asset23.png";
import se_1_product_5 from "assets-shopcart/asset24.png";
import se_1_product_6 from "assets-shopcart/asset25.png";
import { AiOutlineStar } from "react-icons/ai";
import se_2_product_1 from "assets-shopcart/asset26.png";


const ShopCart_Home = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="shopCart_home">
        <div className="banner-section relative flex items-center">
          <div className=" banner-text absolute ms-72">
            <h1 className="text-6xl font-bold text-green-900 my-10">
              Shopping And <br />
              Department Store.
            </h1>
            <p className="text-2xl my-10">
              Shopping is a bit of a relaxing hobby for me, which is
              <br /> sometimes troubling for the bank balance.
            </p>
            <button className="text-lg rounded-full bg-green-900 text-white px-6 py-3 my-5">
              Learn More
            </button>
          </div>

          {/* <div className="baner-bg-image absolute ms-96">
            <Image src={banner_bg_image} alt="image" />
          </div> */}

          {/* <div className="banner-product-image absolute">
            <Image src={banner_bg_product_1} alt="image"/>
          </div> */}

          <Image src={home_bg_image} alt="image" className="" />
        </div>
      </div>

      {/* Section-1 */}
      <div className="section-1 my-20">
        <div className="container mx-auto">
          <div className="title-Text">
            <h1 className="text-2xl font-semibold">Shop Our Top Categories</h1>
          </div>
          <div className="grid grid-cols-6">
            <div className="product-cart pt-14 relative flex justify-center">
              <div className="text absolute mt-5">
                <p className="text-2xl text-white font-semibold">Furniture</p>
              </div>
              <div className="iamge">
                <Image
                  src={se_1_product_1}
                  alt="image"
                  className="bg-image rounded-xl"
                />
              </div>
            </div>

            <div className="product-cart pt-14 relative flex justify-center">
              <div className="text absolute mt-5">
                <p className="text-2xl text-white font-semibold">Hand Bag</p>
              </div>
              <div className="iamge">
                <Image
                  src={se_1_product_2}
                  alt="image"
                  className="rounded-xl"
                />
              </div>
            </div>

            <div className="product-cart pt-14 relative flex justify-center">
              <div className="text absolute mt-5">
                <p className="text-2xl text-white font-semibold">Books</p>
              </div>
              <div className="iamge">
                <Image
                  src={se_1_product_3}
                  alt="image"
                  className="rounded-xl"
                />
              </div>
            </div>

            <div className="product-cart pt-14 relative flex justify-center">
              <div className="text absolute mt-5">
                <p className="text-2xl text-white font-semibold">Tech</p>
              </div>
              <div className="iamge">
                <Image
                  src={se_1_product_4}
                  alt="image"
                  className="rounded-xl"
                />
              </div>
            </div>

            <div className="product-cart pt-14 relative flex justify-center">
              <div className="text absolute mt-5">
                <p className="text-2xl text-white font-semibold">Sneakers</p>
              </div>
              <div className="iamge">
                <Image
                  src={se_1_product_5}
                  alt="image"
                  className="rounded-xl"
                />
              </div>
            </div>

            <div className="product-cart pt-14 relative flex justify-center">
              <div className="text absolute mt-5">
                <p className="text-2xl text-white font-semibold">Travel</p>
              </div>
              <div className="iamge">
                <Image
                  src={se_1_product_6}
                  alt="image"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section-2 */}
      <div className="section-2 my-10">
        <div className="container mx-auto">
          <div className="title-Text">
            <h1 className="text-2xl font-semibold">
              Todays Best Deals For You!
            </h1>
          </div>

          <div className="grid grid-cols-3">
            <div className="section-2_product my-10">
              <div className="sec_2-image bg-slate-200 rounded-xl flex justify-center">
                <Image src={se_2_product_1} alt="image" />
              </div>
              <div className="product_name-price flex justify-between px-5 py-2">
                <h1 className="text-xl font-semibold">HomePod mini</h1>
                <p className="text-lg font-semibold"><sup>$</sup>239<sup>.00</sup></p>
              </div>
              <div className="product-dis px-5 py-2">
                <p className="text-sm">Table with air purifier, stained veneer/black</p>
                <AiOutlineStar className="my-2" />   
              </div>
              <div className="addToCartButton px-5 py-2">
                <button className="text-lg font-medium border border-black rounded-full px-4 py-2">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCart_Home;
