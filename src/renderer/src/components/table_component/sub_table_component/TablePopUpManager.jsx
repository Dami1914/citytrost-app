import React, { Suspense, useState, useEffect } from "react";
import { HandleLayoutDesign } from "../../../context/layoutDesignContext";

const TablePopUpManager = ({ popUpTypePath, elem, state, nodeRef }) => {
  const [PopupComponent, setPopUpComponent] = useState(null);
  const [filePath, setFilePath] = useState("");
  const { mode } = HandleLayoutDesign()
  useEffect(() => {
    const loadPopupComponent = async () => {
      try {
        const module = await import(/* @vite-ignore */ `${popUpTypePath}`);
        setPopUpComponent(module);
      } catch (error) {
        console.error("Error importing popup component:", error);
      }
    };
    loadPopupComponent();
  }, [popUpTypePath]);

  return (
    <div ref={nodeRef} id={`${state}`} className={`popups ${mode?"dark":""} ${state}`}>
      <div className={`w-full h-full dark:bg-darkmode-1 bg-lightmode-1  text-lightmode-light dark:text-darkmode-dark rounded-lg dark:border-slate-800 border border-slate-300`}>
        <Suspense fallback={<div>Loading...</div>}>
          {PopupComponent && typeof PopupComponent.default === "function" ? (
            <PopupComponent.default elem={elem}/>
          ) : null}
        </Suspense>
      </div>
    </div>
  );
};

export default TablePopUpManager;
