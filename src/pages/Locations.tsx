import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Locations: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LocationsList />} />
      <Route path="/neighborhood" element={<Neighborhood />} />
      <Route path="/city" element={<City />} />
      <Route path="/county" element={<County />} />
      <Route path="/state" element={<State />} />
      <Route path="/inspection" element={<InspectionJurisdiction />} />
    </Routes>
  );
};

const LocationsList: React.FC = () => (
  <div>
    <h1 className="text-2xl font-bold text-gray-900">Locations</h1>
  </div>
);

const Neighborhood: React.FC = () => (
  <div>
    <h1 className="text-2xl font-bold text-gray-900">Neighborhoods</h1>
  </div>
);

const City: React.FC = () => (
  <div>
    <h1 className="text-2xl font-bold text-gray-900">Cities</h1>
  </div>
);

const County: React.FC = () => (
  <div>
    <h1 className="text-2xl font-bold text-gray-900">Counties</h1>
  </div>
);

const State: React.FC = () => (
  <div>
    <h1 className="text-2xl font-bold text-gray-900">States</h1>
  </div>
);

const InspectionJurisdiction: React.FC = () => (
  <div>
    <h1 className="text-2xl font-bold text-gray-900">Inspection Jurisdictions</h1>
  </div>
);

export default Locations;