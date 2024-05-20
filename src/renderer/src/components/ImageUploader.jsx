import React from "react";

const ImageUploader = ({ properties, marketerData,handleImageUpload,setMarketerData}) => {
  return (
    <>
      <div className="w-full rounded-xl bg-green-600 h-[5px]"></div>
      <section className="w-full flex flex-col justify-center items-center gap-4">
        <div className="w-[11em] overflow-hidden rounded-[50%] border-green-600 border-2 h-[11em]">
          {marketerData.imageUrl ? (
            <img
              className="w-full h-full"
              src={marketerData.imageUrl}
              alt="marketer image"
            />
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="marketerimage">Marketer Image</label>
          <input
            type="file"
            onChange={(event) => handleImageUpload(event, setMarketerData)}
            name={properties.name}
            id={properties.id}
            accept="image/*"
          />
        </div>
      </section>
    </>
  );
};

export default ImageUploader;
