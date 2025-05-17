import React from 'react';
import PlaceCardItem from './PlaceCardItem';

export default function PlacesToVisit({ trip }) {
  // 1️⃣ Raw itinerary (could be array, object, or undefined)
  const raw = trip?.tripData?.itinerary;

  // 2️⃣ Normalize into an array
  const itinerary = Array.isArray(raw)
    ? raw
    : raw && typeof raw === 'object'
      ? Object.entries(raw).map(([key, value]) => ({
          day: value.day ?? key,   // preserve day number or key
          ...value                // include plan, etc.
        }))
      : [];

  // 3️⃣ Fallback UI
  if (!itinerary.length) {
    return <p className="text-gray-500">No itinerary available.</p>;
  }

  // 4️⃣ Render
  return (
    <div>
      <h2 className="font-bold text-lg">Places to Visit</h2>

      {itinerary.map((item, idx) => (
        <div key={idx} className="mt-5">
          <h3 className="font-medium text-lg">
            Day {item.day ?? idx + 1}
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {/* Only map if plan is an array */}
            {(Array.isArray(item.plan) ? item.plan : []).map((place, i) => (
              <div key={i}>
                <h4 className="font-medium text-sm text-orange-600">
                  {place.time}
                </h4>
                <PlaceCardItem place={place} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
