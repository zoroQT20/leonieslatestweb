import React from 'react';

interface ContactFormProps {
  closeModal: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ closeModal }) => {
  // Handler to close the modal when clicking outside
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLDivElement).classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 modal-overlay"
      onClick={handleClickOutside}
    >
      <div
        className="relative bg-gray-600 border border-gray-300 rounded-lg p-12 w-full max-w-[550px] mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <form action="https://formbold.com/s/9Exkp" method="POST" encType="multipart/form-data">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#ffde59]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#ffde59] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#ffde59] focus:shadow-md"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#ffde59]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="sample@gmail.com"
              className="w-full rounded-md border border-[#ffde59] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#ffde59] focus:shadow-md"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="mb-3 block text-base font-medium text-[#ffde59]"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
              className="w-full rounded-md border border-[#ffde59] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#ffde59] focus:shadow-md"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-[#ffde59]"
            >
              Message
            </label>
            <textarea
              rows={4}
              name="message"
              id="message"
              placeholder="Type your message"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#ffde59] focus:shadow-md"
              required
            ></textarea>
          </div>
          <div>
          <button
            type="submit"
            className="relative rounded-md bg-[#ffde59] py-3 px-8 text-base font-semibold text-white outline-none transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
