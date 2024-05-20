import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI, IpcRenderer } from '@electron-toolkit/preload'

// Custom APIs for renderer
console.log('preload loaded')

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global
const api = {
  async toggleTheme() {
    try {
      const newTheme = await ipcRenderer.invoke('toggle-theme');
      // Update UI based on the received newTheme value
      console.log(`New theme: ${newTheme}`);
      return newTheme; // Optionally return the theme for further processing
    } catch (error) {
      console.error('Error toggling theme:', error);
      // Handle errors appropriately, e.g., display a user-friendly message
    }
  }
};


if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
}
