import { ArrowPathIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAddress } from '../features/address/addressSlice';
import { closeLocationModal } from '../features/app/appSlice';
import useRestaurants from '../hooks/useRestaurants';
import { getLocation } from '../utils/getLocaltion';
import { GET_RESTAURANTS_URL } from '../utils/constants';

const LocationModal = () => {
  const modalRef = useRef();
  const [isLoading, setisLoading] = useState(false);
  const { triggerGetRestaurants } = useRestaurants(GET_RESTAURANTS_URL);
  const dispatch = useDispatch();

  const getGeoLocation = async () => {
    try {
      setisLoading(true);

      const res = await getLocation();

      if (res) {
        dispatch(setAddress(res));

        const restaurants = await triggerGetRestaurants();

        if (restaurants && restaurants.length === 0) {
          const defaultLocation = { mumbai: {
            latitude: 19.0760,
            longitude: 72.8777,
            address: 'Mumbai, Maharashtra, India'
          } };
          dispatch(setAddress(defaultLocation));
          await triggerGetRestaurants();
        }
      }

      setisLoading(false);
      dispatch(closeLocationModal());
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  const handleModalClose = (e) => {
    if (!modalRef.current.contains(e.target)) dispatch(closeLocationModal());
  };

  return (
    <div
      onClick={handleModalClose}
      className='bg-gray-900/70 fixed top-0 left-0 w-full h-full flex justify-center items-center'
    >
      <div
        ref={modalRef}
        className='w-[90%] flex flex-col justify-center items-center max-w-[600px] m-auto p-8 bg-white rounded-md min-h-[240px]'
      >
        <h1 className='text-2xl font-semibold'>
          Please provide your location
        </h1>
        <button
          onClick={getGeoLocation}
          className='w-full max-w-[360px] flex justify-center items-center gap-2 border p-2 px-4 my-4 bg-gray-50  shadow-sm rounded-md'
        >
          {isLoading ? (
            <p className='flex items-center gap-2'>
              Accessing...Please wait <ArrowPathIcon className='w-4 h-4' />
            </p>
          ) : (
            <p className='flex items-center gap-2'>
              Access my location <MapPinIcon className='w-4 h-4' />
            </p>
          )}
        </button>
      </div>
    </div>
  );
};

export default LocationModal;
