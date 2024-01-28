import React, { useState } from "react";
import styleSheet from "./style.module.css";
import { RiUpload2Line } from "react-icons/ri";
import { PiMicrosoftExcelLogoLight } from "react-icons/pi";
import { IoCloseSharp } from "react-icons/io5";
import { BsCloudDownload } from "react-icons/bs";
import Link from "next/link"
import { useRouter } from "next/router";

const ImportLeads = ({ handleShowImportedLeads}) => {
  const router= useRouter()
  const [files, setFiles] = useState(["file1", "file2", "file3"]);
  //* handle remove item from files */
  const handleFileItem = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  //** handle link to imported page  */
  const handleLinkToImportedPage = () => {
     handleShowImportedLeads()
    router.push("/leads/showImported");
  };

  return (
    <div className={styleSheet.popUpContainer}>
      <div className={styleSheet.popUp}>
        <IoCloseSharp
          fontSize={25}
          className={styleSheet.closePopUp}
          onClick={()=>handleShowImportedLeads()}
        />
        <h5>Import Leads</h5>
        <div className={styleSheet.inputContainer}>
          <RiUpload2Line fontSize={25} />
          <label htmlFor="file">
            Drag-and-drop documents or <span>Browse Your Device</span>
          </label>

          <input type="file" multiple id="file" />
        </div>
        <div className={styleSheet.files}>
          {files.map((file, index) => (
            <>
              <button className={styleSheet.file}>
                <IoCloseSharp fontSize={20} className={styleSheet.closeIcon}  onClick= {handleFileItem}/>
                <PiMicrosoftExcelLogoLight fontSize={30} color="green" />
                <span>{file}</span>
              </button>
            </>
          ))}
        </div>

        <div className={styleSheet.btnCon}>
          <button>Cancel</button>
          <div className={styleSheet.downAndNext}>
            <button className={styleSheet.downloadBtn}>
              <BsCloudDownload fontSize={20} />
              <span>Download sample file</span>
            </button>

            <button onClick={handleLinkToImportedPage}>Next</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportLeads;


