import React from 'react';

const ContactPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <p className="mb-4">
        If you have any questions or need further assistance, please feel free to contact us through the form below.
      </p>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-md">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
