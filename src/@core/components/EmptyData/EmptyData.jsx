import React from "react";
import styleSheet from "./EmptyData.module.css";
import Image from "next/image";

const EmptyData = ({ message }) => {
  return (
    <div className={styleSheet.emptyData}>
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBal8a2K2y_RxQ0nVJkGDtINM9uEzzLf6GNg&snpm Z"
        alt="emptyData"
        width={300}
        height={300}
      />
    </div>
  );
};

export default EmptyData;
