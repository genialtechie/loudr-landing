import React from 'react';
import { ReactComponent as Github } from '../assets/github.svg';

const About = () => {
  return (
    <div>
      <h1 className="font-bold text-xl mb-3">About loudronline</h1>
      <p className="text-sm mb-5">
        Loudr is a creative company that is dedicated to a new generation of
        young and influential creators. We find and share the finest of what
        culture has to offer, unite a community via a mutual appreciation of
        these tales, and offer a platform to a community of emerging creators.
      </p>

      <h1 className="font-bold text-sm mb-1 text-gray-400 uppercase">
        Privacy
      </h1>
      <p className="text-sm mb-5">
        At Loudr, we value your privacy. We collect your email address and use
        this information to send you marketing emails about our products and
        services. We do not share your personal information with any third
        parties without your consent.
      </p>
      <h1 className="font-bold text-sm mb-2 text-gray-400 uppercase">
        Resources
      </h1>
      <div className="flex flex-row h-fit w-fit">
        <span className="p-2 bg-[#ffc843] rounded-l-lg">
          <Github className="h-10 w-10" />
        </span>

        <span className="py-2 px-4 bg-[#24272a] text-xs text-white rounded-r-lg">
          <p className="font-bold">Codebase</p>
          <p>Coming soon</p>
        </span>
      </div>
    </div>
  );
};

export default About;
