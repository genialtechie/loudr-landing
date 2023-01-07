import React, { useState } from 'react';

const Newsletter = ({ reference, status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function suscribeToMailchimp(e) {
    email && onValidated({ EMAIL: email });
  }

  function handleSuscribe() {
    if (!validateEmail(email)) setError('Please enter a valid email');
    else if (status === 'error') setError(message);
    else {
      setError(null);
      suscribeToMailchimp();
      setEmail('');
    }
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col text-sm m-2 mb-2 lg:mb-0"
    >
      <p className="mb-1">Suscribe to our newsletter</p>
      <input
        ref={reference}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="example@email.com"
        className="w-64 h-10 border-b-[3px] border-gray-400 p-2 bg-inherit placeholder:text-gray-400 outline-none focus:border-[#ffc843] mb-1 v"
      />
      {error && <p className="text-red-500 mb-3 text-xs">{error}</p>}
      {status === 'sending' && (
        <p className="text-[#ffc843] text-xs mb-2">Sending...</p>
      )}
      {status === 'success' && (
        <p className="text-[#ffc843] text-xs mb-2">Subscribed!</p>
      )}
      <button
        onClick={handleSuscribe}
        className="hover:bg-white transition-all duration-200 ease-in-out bg-[#ffc843] text-black
        text-md font-bold uppercase py-4 px-10 rounded"
      >
        Suscribe
      </button>
    </form>
  );
};

export default Newsletter;
