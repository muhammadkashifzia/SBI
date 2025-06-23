// utils/locationUtils.js
import { locationData } from '../data/locationData';

export const getAreasForSelection = (selectedRegion, selectedPrefecture) => {
  if (selectedRegion === '北海道') {
    return locationData['北海道'].areas;
  }
  return locationData[selectedRegion].prefectures[selectedPrefecture];
};

export const getAreaCount = (selectedRegion) => {
  return selectedRegion === '北海道' ? '20' : '5';
};

export const updateLocationValue = (locationValue, updatedTags) => {
  if (updatedTags.length === 0) {
    return '';
  }

  if (locationValue.includes('北海道')) {
    return `北海道 (${updatedTags.length}エリア選択)`;
  } else {
    const prefectureName = locationValue.split(' ')[0];
    return `${prefectureName} (${updatedTags.length}エリア選択)`;
  }
};

// utils/constants.js
export const STEPS = {
  REGION: 'region',
  PREFECTURE: 'prefecture',
  AREA: 'area'
};

export const REGIONS = {
  HOKKAIDO: '北海道'
};

// utils/searchConfig.js
export const searchInputs = [
  {
    placeholder: "キーワード",
    iconSrc: "/assets/svg/search-icon.svg",
    iconAlt: "searchIcon",
    iconWidth: 32,
    iconHeight: 32
  },
  {
    placeholder: "カテゴリ―",
    iconSrc: "/assets/svg/knife-icon.svg",
    iconAlt: "knifeIcon",
    iconWidth: 31,
    iconHeight: 32
  },
  {
    placeholder: "星レビュー",
    iconSrc: "/assets/svg/star-icon.svg",
    iconAlt: "starIcon",
    iconWidth: 31,
    iconHeight: 32
  }
];