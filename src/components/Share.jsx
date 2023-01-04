import React, { useState } from 'react';
import { ReactComponent as Twitter } from '../assets/twitter.svg';
import { ReactComponent as Instagram } from '../assets/instagram.svg';
import { ReactComponent as Clone } from '../assets/clone.svg';

const Share = () => {
  const [copied, setCopied] = useState(false);

  async function copyToClipboard() {
    const url = window.location.href;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function shareOnTwitter() {
    const url = window.location.href;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}`;
    window.open(twitterUrl, '_blank');
  }

  return (
    <div>
      <h1 className="font-bold text-xl mb-5">Share loudronline</h1>
      <p className="text-sm font-bold text-gray-400 mb-5">
        Choose your platform
      </p>
      <div className="grid grid-cols-3 gap-4">
        <div
          onClick={shareOnTwitter}
          className="flex flex-col items-center justify-center p-5 rounded-lg group bg-[#24272a] hover:scale-110 cursor-pointer"
        >
          <Twitter className="h-10 w-10 mb-1" />
          <span className="text-xs font-bold group-hover:text-[#ffc843]">
            Twitter
          </span>
        </div>
        <a
          href="https://www.instagram.com/magpollotech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center justify-center p-5 rounded-lg group bg-[#24272a] hover:scale-110 cursor-pointer">
            <Instagram className="h-10 w-10 mb-1" />
            <span className="text-xs font-bold group-hover:text-[#ffc843]">
              Instagram
            </span>
          </div>
        </a>
        <div
          onClick={copyToClipboard}
          className="flex flex-col items-center justify-center p-5 rounded-lg group bg-[#24272a] hover:scale-110 cursor-pointer"
        >
          <Clone className="fill-white h-10 w-10 mb-1 group-hover:fill-[#ffc843]" />
          <span className="text-xs font-bold group-hover:text-[#ffc843]">
            {copied ? 'Copied!' : 'Copy link'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Share;
