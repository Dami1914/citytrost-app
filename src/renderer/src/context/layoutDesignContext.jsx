import { createContext,useContext, useState } from 'react'

const LayoutDesignContext = createContext({})

const LayoutDesignProvider = ({ children }) => {
  const [mode, setMode] = useState(true)
  const dark = '#2b2b2b'
  const semiDark = '#3c3c3c'
  const light = 'rgba(248,250,252,1)'
  const semiLight = 'rgb(241 245 249 / 1)'

  async function handleModeChange() {
    const theme = await window.api.toggleTheme()
    setMode(mode)
  }

  function handleExpand(element, setState, state) {
    setState((prev) => !prev)
    state ? element.current.classList.add('expand') : element.current.classList.remove('expand')
    console.log(element)
  }

  return (
    <LayoutDesignContext.Provider
      value={{ handleModeChange, handleExpand, mode, dark, light, semiDark, semiLight }}
    >
      {children}
    </LayoutDesignContext.Provider>
  )
}

export default LayoutDesignProvider

export function HandleLayoutDesign() {
  return useContext(LayoutDesignContext)
}
