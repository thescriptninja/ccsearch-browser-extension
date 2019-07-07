export const elements = {
  inputField: document.getElementById('section-search-input'),
  searchIcon: document.getElementById('search-icon'),
  filterIcon: document.getElementById('filter-icon'),
  errorMessage: document.getElementById('error-message'),
  spinner: document.getElementById('spinner'),
  useCaseChooser: document.querySelector('#choose-usecase'),
  licenseChooser: document.querySelector('#choose-license'),
  providerChooser: document.querySelector('#choose-provider'),
  licenseChooserWrapper: document.querySelector('.section-filter__filter-wrapper--choose-license'),
  useCaseChooserWrapper: document.querySelector('.section-filter__filter-wrapper--choose-usecase'),
  providerChooserWrapper: document.querySelector(
    '.section-filter__filter-wrapper--choose-provider',
  ),
  providerChooserLoadingMessage: document.querySelector('.section-filter__provider-loading-mes'),
  filterResetButton: document.querySelector('.section-filter--reset-button'),
  filterApplyButton: document.querySelector('.section-filter--apply-button'),
  noMoreImagesMessage: document.querySelector('.no-more-images-mes'),
  popup: document.getElementById('popup'),
  downloadImageButton: document.getElementById('download-image'),
  downloadImageAttributionButton: document.getElementById('download-image-attribution'),
  popupCloseButton: document.querySelector('.popup__close-button'),
  grid: document.querySelector('.grid'),
  filterSection: document.querySelector('.section-filter'),
  popupTabLinks: document.getElementsByClassName('popup__tab-links'),
  popupTabContent: document.getElementsByClassName('popup__tab-content'),
};

export const attributionTabLink = elements.popupTabLinks[0];
