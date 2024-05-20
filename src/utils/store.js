let preferenceSettings;

import('electron-store')
  .then((module) => {
    const Store = module.default; // Access the default export of the module
    preferenceSettings = new Store({
      default: {
        theme: false
      }
    });
  })
  .catch((error) => {
    console.error('Unable to import electron-store', error);
  });

export { preferenceSettings };