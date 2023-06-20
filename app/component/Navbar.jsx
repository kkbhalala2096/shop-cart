import Image from "next/image";
import React from "react";
import logo from "assets-shopcart/asset1.svg";
import { MdOutlineCall } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import account_image from "assets-shopcart/asset13.png";
import cart_image from "assets-shopcart/asset14.png";

const Navbar = () => {
  return (
    <>
      <nav className="bg-green-900 py-2">
        <div className="container mx-auto">
          <div className="head flex justify-between">
            <div className="contact">
              <p className="text-white flex items-center text-sm">
                <MdOutlineCall className="mx-2 text-lg" />
                +0123456789
              </p>
            </div>
            <div className="offer_shop flex text-sm">
              <p className="text-white">Get 50% off on Selected Items</p>
              <p className="text-white mx-2">|</p>
              <p className="text-white">Shop Now</p>
            </div>
            <div className="traslate_country flex text-sm">
              <p className="text-white mx-2">English</p>
              <p className="text-white mx-2">India</p>
            </div>
          </div>
        </div>
      </nav>

      <nav className="bg-white py-5">
        <div className="container mx-auto">
          <div className="navbar flex items-center justify-between">
            <div className="logo">
              <Image src={logo} alt="logo" />
            </div>
            <div className="menu ms-4">
              <ul className="flex text-lg font-medium">
                <li className="mx-3">Category</li>
                <li className="mx-3">Deals</li>
                <li className="mx-3">What's New</li>
                <li className="mx-3">Delivery</li>
              </ul>
            </div>
            <div className="search ">
              <form className="flex items-center">
                <div className="search-input relative flex items-center justify-end">
                  <button className="absolute">
                    <MdOutlineSearch className="text-2xl mx-2" />
                  </button>
                  <input
                    type="text"
                    className="text-sm border border-gray-400 rounded-full px-3 py-2 w-72"
                    placeholder="Search Product"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="account flex items-center">
              <Image src={account_image} alt="image" className="mx-2" />
              <p className="text-lg font-medium">Account</p>
            </div>
            <div className="cart flex items-center">
              <Image src={cart_image} alt="image" className="mx-2   "/>
              <p className="text-lg font-medium">Cart</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
