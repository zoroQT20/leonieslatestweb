import React, { useState } from 'react';

const About: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="py-24 bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1
            className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-5xl"
            style={{ color: '#ffde59', fontFamily: 'Isidora Soft, sans-serif' }}
          >
            Frequently Asked Questions
          </h1>
        </div>
        <div className="accordion-group" data-accordion="default-accordion">
          {/* Accordion Item 1 */}
          <div
            className={`accordion border border-solid ${
              openAccordion === 'accordion-1' ? 'border-gray-400 bg-gray-400' : 'border-gray-500 bg-gray-600'
            } p-4 rounded-xl transition duration-500 mb-8 lg:p-4`}
          >
            <button
              className={`accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 ${
                openAccordion === 'accordion-1' ? 'text-[#ffde59]' : 'text-[#fcd949]'
              } w-full transition duration-500 hover:text-yellow-300`}
              onClick={() => toggleAccordion('accordion-1')}
              aria-controls="collapse-one"
              aria-expanded={openAccordion === 'accordion-1'}
            >
              <h5 style={{ fontFamily: 'Isidora Soft, sans-serif' }}>Amenities</h5>
              <svg
                className={`w-6 h-6 transition duration-500 ${
                  openAccordion === 'accordion-1' ? 'text-gray-600' : 'text-gray-900'
                } ${
                  openAccordion === 'accordion-1' ? 'hidden' : 'block'
                }`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18M12 18V6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 transition duration-500 ${
                  openAccordion === 'accordion-1' ? 'text-gray-600' : 'text-gray-900'
                } ${
                  openAccordion === 'accordion-1' ? 'block' : 'hidden'
                }`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div
            id="collapse-one"
            className={`accordion-content w-full overflow-hidden pr-4 transition-all duration-500 ${
                openAccordion === 'accordion-1' ? 'max-h-[500px]' : 'max-h-0'
            } sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px] xl:max-h-[800px]`}
            aria-labelledby="accordion-heading-one"
            >
            <ul className="list-disc pl-6 space-y-2 text-gray-700" style={{ fontFamily: 'Isidora Soft, sans-serif' }}>
                <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Capacity: Accommodates up to 20 persons</span>
                </li>
                <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Rooms: A room for up to 10 persons</span>
                </li>
                <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Facilities: Kubo, 2 Rest Rooms, 1 Shower Area</span>
                </li>
                <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Recreational Facilities: Basketball court, Swimming Pool</span>
                </li>
                <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Equipment: Complete cooking facilities</span>
                </li>
                <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Connectivity: Wi-Fi connection</span>
                </li>
                <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Entertainment: Videoke, Smart TV</span>
                </li>
                <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Parking: Available</span>
                </li>
            </ul>
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div
            className={`accordion border border-solid ${
              openAccordion === 'accordion-2' ? 'border-gray-400 bg-gray-400' : 'border-gray-500 bg-gray-600'
            } p-4 rounded-xl transition duration-500 mb-8 lg:p-4`}
          >
            <button
              className={`accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 ${
                openAccordion === 'accordion-2' ? 'text-[#ffde59]' : 'text-[#fcd949]'
              } w-full transition duration-500 hover:text-yellow-300`}
              onClick={() => toggleAccordion('accordion-2')}
              aria-controls="collapse-two"
              aria-expanded={openAccordion === 'accordion-2'}
            >
              <h5 style={{ fontFamily: 'Isidora Soft, sans-serif' }}>Rental Rates</h5>
              <svg
                className={`w-6 h-6 transition duration-500 ${
                  openAccordion === 'accordion-2' ? 'text-gray-600' : 'text-gray-900'
                } ${
                  openAccordion === 'accordion-2' ? 'hidden' : 'block'
                }`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18M12 18V6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 transition duration-500 ${
                  openAccordion === 'accordion-2' ? 'text-gray-600' : 'text-gray-900'
                } ${
                  openAccordion === 'accordion-2' ? 'block' : 'hidden'
                }`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="collapse-two"
              className={`accordion-content w-full overflow-hidden pr-4 transition-all duration-500 ${
                openAccordion === 'accordion-2' ? 'max-h-[250px] text-[#ffde59]' : 'max-h-0'
              }`}
              aria-labelledby="accordion-heading-two"
            >
              <ul className="list-disc pl-6 space-y-2 text-gray-700 style={{ fontFamily: 'Isidora Soft, sans-serif' }}">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Day Use: Starts at ₱4,500 (net)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Overnight Use: Starts at ₱7,000 (net)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Rates are inclusive of all amenities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div
            className={`accordion border border-solid ${
              openAccordion === 'accordion-3' ? 'border-gray-400 bg-gray-400' : 'border-gray-500 bg-gray-600'
            } p-4 rounded-xl transition duration-500 mb-8 lg:p-4`}
          >
            <button
              className={`accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 ${
                openAccordion === 'accordion-3' ? 'text-[#ffde59]' : 'text-[#fcd949]'
              } w-full transition duration-500 hover:text-yellow-300`}
              onClick={() => toggleAccordion('accordion-3')}
              aria-controls="collapse-three"
              aria-expanded={openAccordion === 'accordion-3'}
            >
              <h5 style={{ fontFamily: 'Isidora Soft, sans-serif' }}>Walk-ins</h5>
              <svg
                className={`w-6 h-6 transition duration-500 ${
                  openAccordion === 'accordion-3' ? 'text-gray-600' : 'text-gray-900'
                } ${
                  openAccordion === 'accordion-3' ? 'hidden' : 'block'
                }`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18M12 18V6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 transition duration-500 ${
                  openAccordion === 'accordion-3' ? 'text-gray-600' : 'text-gray-900'
                } ${
                  openAccordion === 'accordion-3' ? 'block' : 'hidden'
                }`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="collapse-three"
              className={`accordion-content w-full overflow-hidden pr-4 transition-all duration-500 ${
                openAccordion === 'accordion-3' ? 'max-h-[250px]' : 'max-h-0'
              }`}
              aria-labelledby="accordion-heading-three"
            >
              <ul className="list-disc pl-6 space-y-2 text-gray-700 style={{ fontFamily: 'Isidora Soft, sans-serif' }}">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Walk-ins are allowed from 8:00 AM to 6:00 PM</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Rates for walk-ins are the same as the day use rates</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Prior reservation is recommended to ensure availability</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Accordion Item 4 */}
          <div
            className={`accordion border border-solid ${
              openAccordion === 'accordion-4' ? 'border-gray-400 bg-gray-400' : 'border-gray-500 bg-gray-600'
            } p-4 rounded-xl transition duration-500 mb-8 lg:p-4`}
          >
            <button
              className={`accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 ${
                openAccordion === 'accordion-4' ? 'text-[#ffde59]' : 'text-[#fcd949]'
              } w-full transition duration-500 hover:text-yellow-300`}
              onClick={() => toggleAccordion('accordion-4')}
              aria-controls="collapse-four"
              aria-expanded={openAccordion === 'accordion-4'}
            >
              <h5 style={{ fontFamily: 'Isidora Soft, sans-serif' }}>Booking and Payment</h5>
              <svg
                className={`w-6 h-6 transition duration-500 ${
                  openAccordion === 'accordion-4' ? 'text-gray-600' : 'text-gray-900'
                } ${
                  openAccordion === 'accordion-4' ? 'hidden' : 'block'
                }`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18M12 18V6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 transition duration-500 ${
                  openAccordion === 'accordion-4' ? 'text-gray-600' : 'text-gray-900'
                } ${
                  openAccordion === 'accordion-4' ? 'block' : 'hidden'
                }`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div
            id="collapse-four"
            className={`accordion-content w-full overflow-hidden pr-4 transition-all duration-500 ${
                openAccordion === 'accordion-4' ? 'max-h-[250px]' : 'max-h-0'
            }`}
            aria-labelledby="accordion-heading-four"
            >
            <ul className="list-disc pl-0 space-y-2 text-gray-700" style={{ fontFamily: 'Isidora Soft, sans-serif' }}>
                <li className="flex items-start">
                <span className="inline-block w-4 mr-2 text-gray-900">•</span>
                <span>Bookings can be made by phone or email</span>
                </li>
                <li className="flex items-start">
                <span className="inline-block w-4 mr-2 text-gray-900">•</span>
                <span>50% deposit is required to secure the reservation</span>
                </li>
                <li className="flex items-start">
                <span className="inline-block w-4 mr-2 text-gray-900">•</span>
                <span>Full payment is due 1 week before the event</span>
                </li>
                <li className="flex items-start">
                <span className="inline-block w-4 mr-2 text-gray-900">•</span>
                <span>Payments are non-refundable</span>
                </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
