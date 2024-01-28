import React, { useState } from "react";
//** IMPORT STYLE */
import styleSheet from "./style.module.css";
//** IMPORT REACT ICON */
import { RiUpload2Line } from "react-icons/ri";
import { PiMicrosoftExcelLogoLight } from "react-icons/pi";
import { IoCloseSharp } from "react-icons/io5";
import { BsCloudDownload } from "react-icons/bs";
//** IMPORT NEXT  */
import Link from "next/link"
//** IMPORT NEXT  */
import { useRouter } from "next/router";

const ImportLeads = ({ handleShowImportedLeads}) => {
  //**IMPORT LEADS STATE */
  const [files, setFiles] = useState(["file1", "file2", "file3"]);
  const router= useRouter()
  //* handle remove item from files */
  //**HANDLE DELETE FILE */
  const handleFileItem = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  //** handle link to imported page  */
  const handleLinkToImportedPage = () => {
     handleShowImportedLeads()
    router.push("/crm/leads/showImported");
  };

  return (

    <div className={styleSheet.popUpContainer}>
      {/* START IMPORTED POPUP OVERLAY */}
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
        {/** START SHOW FILES */}
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
  {/** END SHOW FILES */}
        <div className={styleSheet.btnCon}>
          <button onClick ={()=> {
            handleShowImportedLeads()
            router.push("/crm/leads");

            }}>Cancel</button>
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


