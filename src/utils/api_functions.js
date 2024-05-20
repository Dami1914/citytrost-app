import { ipcRenderer } from 'electron'

const defaultExport = {
  toggleTheme() {
    ipcRenderer.send('ping')
  },
}


export default defaultExport
