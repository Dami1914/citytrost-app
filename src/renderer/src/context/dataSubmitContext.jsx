import { createContext, useContext } from "react";

const DataSubmitContext = createContext({})

const DataSubmitProvider = ({children}) => {

    function handleImageUpload(event,setPostingUrl) {
        event.preventDefault();
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          setPostingUrl(prev=>{
            return {...prev,["imageUrl"]:reader.result}
          });
          console.log(reader.result);
        };
        reader.readAsDataURL(file);
      }
    function handleSubmit(event,body){
        event.preventDefault()
        console.log(event.target)
        console.log(body)
    }
    function handleChange(event,setdata){
        const {value, name} = event.target
        setdata(prev=>{
            return {...prev,[name]:value}
        })
    }

  return (
     <DataSubmitContext.Provider value={{handleSubmit,handleChange,handleImageUpload}}>
        {children}
     </DataSubmitContext.Provider>
  )
}


export function HandleSubmitDataContext(){
    return useContext(DataSubmitContext)
}
export default DataSubmitProvider