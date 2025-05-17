import React from 'react';
import HotelCardItem from './HotelCardItem';

export default function Hotels({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>

      <div className="grid grid-cols-2 my-5 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {trip?.tripData?.hotels?.map((hotel, idx) => (
          <HotelCardItem
            key={hotel.id ?? idx}    // ← added key prop
            hotel={hotel}
          />
        ))}
      </div>
    </div>
  );
}
