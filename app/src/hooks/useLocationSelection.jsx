// hooks/useLocationSelection.js
import { useState } from 'react';
import { locationData } from '../data/locationData';

export const useLocationSelection = () => {
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

  const generateLocationText = () => {
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

    return { locationText, tags };
  };

  const resetSelection = () => {
    setSelectedRegion('');
    setSelectedPrefecture('');
    setSelectedAreas([]);
    setCurrentStep('region');
  };

  return {
    selectedRegion,
    selectedPrefecture,
    selectedAreas,
    currentStep,
    handleRegionSelect,
    handlePrefectureSelect,
    handleAreaToggle,
    handleBack,
    generateLocationText,
    resetSelection
  };
};

// hooks/useClickOutside.js
import { useEffect } from 'react';

export const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, callback]);
};