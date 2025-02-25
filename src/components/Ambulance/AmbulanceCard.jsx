/* eslint-disable react/prop-types */
const AmbulanceCard = ({ ambulance }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 transition duration-300 hover:shadow-xl">
      <img
        src={ambulance.image}
        alt={`Image of ${ambulance.ambulancename}`}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">{ambulance.name}</h3>
        <div className="mb-4 flex items-center text-gray-600">
          <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {ambulance.location}
        </div>
        <div className="space-y-2 text-gray-700">
          <p><span className="font-semibold">Address:</span> {ambulance.address}</p>
          <p><span className="font-semibold">Assigned Hospital:</span> {ambulance.assignedHospital}</p>
          <p><span className="font-semibold">Driver:</span> {ambulance.drivername}</p>
          <p><span className="font-semibold">Vehicle Number:</span> {ambulance.vehiclenumber}</p>
          <p><span className="font-semibold">Service Type:</span> {ambulance.typeOfambulanceservice}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-blue-600 font-bold">{ambulance.drivercontactnumber}</p>
          <button
            onClick={() => window.location.href = `tel:${ambulance.drivercontactnumber}`}
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmbulanceCard;