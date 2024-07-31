import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
        <h1
          className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-5xl"
          style={{ color: '#ffde59', fontFamily: 'Isidora Soft, sans-serif' }}
        >
          Contact Page
        </h1>
        </div>
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4614.823628367474!2d120.93434667577662!3d14.84957237093133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ad1d3a4bea31%3A0x6fb76d501967fc32!2sLeonida&#39;s%20Private%20Pool!5e1!3m2!1sen!2sph!4v1722063066252!5m2!1sen!2sph"
                width="100%" height="480" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3
                    className="text-lg font-medium"
                    style={{ color: '#ffde59', fontFamily: 'Isidora Soft, sans-serif' }}
                  >
                    Resort Address
                  </h3>
                  <p
                    className="mt-1"
                    style={{ color: 'white', fontFamily: 'Isidora Soft, sans-serif' }}
                  >
                    Ilang-Ilang Street Extension, Malibong Matanda, Pandi, Philippines
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                <h3
                    className="text-lg font-medium"
                    style={{ color: '#ffde59', fontFamily: 'Isidora Soft, sans-serif' }}
                  >
                    Hours
                  </h3>
                  <p
                    className="mt-1"
                    style={{ color: 'white', fontFamily: 'Isidora Soft, sans-serif' }}
                  >
                    Monday - Sunday: 8 hours minimum with room anytime of the day start.
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                <h3
                    className="text-lg font-medium"
                    style={{ color: '#ffde59', fontFamily: 'Isidora Soft, sans-serif' }}
                  >
                    Contact Information
                  </h3>
                  <p
                    className="mt-1"
                    style={{ color: 'white', fontFamily: 'Isidora Soft, sans-serif' }}
                  >
                    Facebook Page: Leonida's Private Pool
                  </p>
                  <p
                    className="mt-1"
                    style={{ color: 'white', fontFamily: 'Isidora Soft, sans-serif' }}
                  >
                    Phone: (63) 917-315-0844
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
