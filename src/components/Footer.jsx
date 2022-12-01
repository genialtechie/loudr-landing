import React from 'react';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="w-full h-fit p-7 lg:p-14 bg-[#141818] flex flex-col md:flex-row justify-around">
      <div className="flex flex-col m-2 mb-2 lg:mb-0">
        <div className="flex flex-row items-center">
          <img
            src={Logo}
            alt="logo"
            className="w-14 h-14 inline-block"
          />
          <span className="font-bold text-2xl ml-4">loudronline</span>
        </div>
        <p className="text-sm text-gray-400 mt-2">&copy; loudronline 2022</p>
      </div>
      <div className="flex flex-col text-sm m-2 mb-2 lg:mb-0">
        <p className="text-gray-400 mb-2">Find Us</p>
        <ul>
          <li className="p-1 transition-all duration-150 ease-in-out hover:text-[#ffc843]">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/loudronline?s=21&t=4VyljR8hroJAQQevVbRdFQ"
            >
              Twitter
            </a>
          </li>
          <li className="p-1 transition-all duration-150 ease-in-out hover:text-[#ffc843]">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/loudronline?igshid=YmMyMTA2M2Y="
            >
              Instagram
            </a>
          </li>
          <li className="p-1 transition-all duration-150 ease-in-out hover:text-[#ffc843]">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://open.spotify.com/playlist/2RyqK3ZGMn6gK8ob5rI42U?si=yWY4GN5vTHOk7xvmI4yuHQ"
            >
              Spotify
            </a>
          </li>
          <li className="p-1 transition-all duration-150 ease-in-out hover:text-[#ffc843]">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://youtube.com/channel/UC5RsaqmLUpwLvsW6xoJC1Bg?sub_confirmation=1"
            >
              Youtube
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col text-sm m-2 mb-2 lg:mb-0">
        <p className="text-gray-400 mb-2">Quick Links</p>
        <ul>
          <li className="p-1 transition-all duration-150 ease-in-out hover:text-[#ffc843]">
            <a href="mailto:salesteam@magpollo.com">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col text-sm m-2 mb-2 lg:mb-0">
        <p className="text-gray-400 mb-2">Support</p>
        <ul>
          <li className="p-1 transition-all duration-150 ease-in-out hover:text-[#ffc843]">
            <a href="/#">API Docs</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col text-sm m-2 mb-2 lg:mb-0">
        <p className="mb-1">Suscribe to our newsletter</p>
        <input
          type="text"
          placeholder="example@email.com"
          className="w-64 h-10 border-b-[3px] border-gray-400 p-2 bg-inherit placeholder:text-gray-400 outline-none focus:border-[#ffc843] mb-5"
        />
        <button
          className="hover:bg-slate-400 transition-all duration-200 ease-in-out bg-[#ffc843] hover:text-[#ffc843] text-black
        text-md font-bold uppercase py-4 px-10 rounded"
        >
          Suscribe
        </button>
      </div>
    </footer>
  );
};

export default Footer;
