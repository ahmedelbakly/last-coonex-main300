import styleSheet from "./style.module.css";
import { LuLink } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { InputLayout } from "src/properties/shared-components/input-layout";
import { useState } from "react";

export const MenuItemContainer = ({itemIndex}) => {

const [itemEdit, setItemEdit] = useState(null);

///////////////////////////////////////////////////////////////////////////////////
// handle show edit item
function handleShowEdit(index) {
if (itemEdit===index) {
setItemEdit(null)
}else{
setItemEdit(index)
}
}






  return (
    <div className={styleSheet.container}>
      <div className={styleSheet.head}>
        <div className={styleSheet.title}>
          <LuLink/>
          <h5>About</h5>

        </div>
        <div className={styleSheet.edit}>
       <FiEdit onClick={()=>handleShowEdit(itemIndex)}/>
       <RiDeleteBinLine/>

        </div>
      </div>
      <div className={ itemEdit === itemIndex ? styleSheet.contentShow :styleSheet.contentHide}>
      <InputLayout>
        <label>Name</label>
        <input
          name="videoLink"
          value={""}
          onChange={""}
         type="text" />
      </InputLayout>
      <InputLayout>
        <label>Link</label>
        <input
          name="videoLink"
          value={""}
          onChange={""}
         type="url"/>
      </InputLayout>
      <div className={styleSheet.nextAndPrev}>
      <button>Cancel</button>
      <button onClick={""}>Confirm</button>
      </div>
        </div>
    </div>
  );
};
