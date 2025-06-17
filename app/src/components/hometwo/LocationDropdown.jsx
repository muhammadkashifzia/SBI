// components/LocationDropdown.js
import React, { useState, useRef, useEffect } from 'react';
import RegionSelection from './RegionSelection';
import PrefectureSelection from './PrefectureSelection';
import AreaSelection from './AreaSelection';
import { locationData } from '../../data/locationData';

const LocationDropdown = ({ 
  isOpen, 
  onClose, 
  onLocationSelect,
  dropdownRef 
}) => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedPrefecture, setSelectedPrefecture] = useState('');
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [currentStep, setCurrentStep] = useState('region');

  const handleRegionSelect = (regionKey) => {
    setSelectedRegion(regionKey);
    if (regionKey === '北海道') {
      setCurrentStep('area');
    } else {
      setCurrentStep('prefecture');
    }
  };

  const handlePrefectureSelect = (prefecture) => {
    setSelectedPrefecture(prefecture);
    setCurrentStep('area');
  };

  const handleAreaToggle = (area) => {
    setSelectedAreas((prev) => {
      if (prev.includes(area)) {
        return prev.filter((a) => a !== area);
      } else {
        return [...prev, area];
      }
    });
  };

  const handleConfirm = () => {
    let locationText = '';
    let tags = [];

    if (selectedRegion === '北海道') {
      if (selectedAreas.length > 0) {
        locationText = `北海道 (${selectedAreas.length}エリア選択)`;
        tags = selectedAreas;
      } else {
        locationText = '北海道';
      }
    } else if (selectedPrefecture && selectedAreas.length > 0) {
      locationText = `${selectedPrefecture} (${selectedAreas.length}エリア選択)`;
      tags = selectedAreas;
    } else if (selectedPrefecture) {
      locationText = selectedPrefecture;
      tags = [selectedPrefecture];
    } else if (selectedRegion) {
      locationText = locationData[selectedRegion].name;
    }

    onLocationSelect(locationText, tags);
    onClose();
  };

  const handleBack = () => {
    if (currentStep === 'prefecture') {
      setCurrentStep('region');
      setSelectedRegion('');
    } else if (currentStep === 'area') {
      if (selectedRegion === '北海道') {
        setCurrentStep('region');
        setSelectedRegion('');
      } else {
        setCurrentStep('prefecture');
        setSelectedPrefecture('');
      }
      setSelectedAreas([]);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full left-0 md:left-[22%] right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-full md:w-[67%] lg:w-[62%] max-w-full overflow-y-auto"
    >
      {currentStep === 'region' && (
        <RegionSelection onRegionSelect={handleRegionSelect} />
      )}
      {currentStep === 'prefecture' && (
        <PrefectureSelection
          selectedRegion={selectedRegion}
          onPrefectureSelect={handlePrefectureSelect}
          onBack={handleBack}
        />
      )}
      {currentStep === 'area' && (
        <AreaSelection
          selectedRegion={selectedRegion}
          selectedPrefecture={selectedPrefecture}
          selectedAreas={selectedAreas}
          onAreaToggle={handleAreaToggle}
          onBack={handleBack}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
};

export default LocationDropdown;