//**import react */
import React from "react";
//** import StyleSheet */
import StyleSheet from "./style.module.css";
//** import useAuth that contain all shared data */
import { useAuth } from "src/hooks/useAuth";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi";
import avatar from "../../../../../public/images/cms/avatar.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
//** import leadSource icons */
import {
  dropdownIcon,
  editIcon,
  facebook,
  googleAds,
  instagram,
  phoneIcon,
  snapchat,
  userIcon,
  whatsUp,
} from "src/@core/leadsData/leadsSourceIcon";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import Image from "next/image";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
//**history icon */
const historyIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="58"
    height="58"
    viewBox="0 0 58 58"
    fill="none"
  >
    <path
      d="M50.7192 50.3792H9.20168C8.74014 50.2511 8.32002 50.0175 7.97927 49.6995C7.63852 49.3816 7.38788 48.9892 7.25 48.558L7.25 9.8204C7.30204 9.70982 7.36 9.59924 7.40732 9.48866C7.58334 9.04637 7.90147 8.66586 8.31805 8.39937C8.73463 8.13287 9.22923 7.99345 9.73395 8.00024C23.2183 8.00024 36.7026 8.00024 50.1869 8.00024C50.6999 7.99342 51.2023 8.13721 51.6233 8.41136C52.0443 8.68552 52.3627 9.07623 52.5337 9.52846C52.5751 9.62799 52.6271 9.72309 52.6732 9.8204V48.558C52.5349 48.9894 52.2839 49.3818 51.9427 49.6998C51.6016 50.0177 51.1811 50.2513 50.7192 50.3792ZM51.2515 15.9742H8.6694V47.6601C8.6694 48.7371 9.01361 49.0523 10.1787 49.0523H49.7422C50.9061 49.0523 51.2515 48.7316 51.2515 47.6556V15.9742ZM8.6694 14.592H51.2515C51.2515 13.265 51.2515 11.9723 51.2515 10.6763C51.2515 9.65674 50.8907 9.32278 49.7859 9.32278H10.1349C10.0013 9.32278 9.86761 9.31725 9.73514 9.32278C9.12953 9.36591 8.68951 9.73746 8.68005 10.2992C8.65757 11.7235 8.6694 13.1422 8.6694 14.592Z"
      fill="#575B60"
    />
    <path
      d="M37.7413 29.4721C36.9761 30.1942 36.2522 30.8831 35.5212 31.5654C35.119 31.9425 34.7192 31.9834 34.3939 31.6959C34.0686 31.4084 34.0947 31.0037 34.5122 30.6155C35.2444 29.9344 35.9825 29.2576 36.7679 28.5333L35.339 27.2119C35.067 26.9597 34.7914 26.7087 34.5252 26.4511C34.1621 26.0994 34.1467 25.7212 34.472 25.4326C34.7973 25.144 35.1734 25.1683 35.5365 25.499C36.2723 26.1757 36.9962 26.8624 37.7697 27.5867L39.499 25.9656C39.6871 25.7898 39.8705 25.6084 40.0656 25.4404C40.3992 25.1528 40.8061 25.1385 41.0971 25.3939C41.388 25.6494 41.4046 26.0696 41.0758 26.3891C40.4382 27.0018 39.7829 27.6055 39.1359 28.206C39.033 28.3033 38.9336 28.4028 38.7905 28.5433L40.7375 30.3501C40.8558 30.4607 40.974 30.5603 41.0805 30.6742C41.3596 30.9782 41.3573 31.3376 41.0805 31.6052C40.8037 31.8728 40.3791 31.8994 40.0538 31.6052C39.4056 31.0203 38.7751 30.4187 38.1364 29.8249C38.0217 29.7176 37.9034 29.6159 37.7413 29.4721Z"
      fill="#575B60"
    />
    <path
      d="M23.1534 28.5165C23.9223 29.2319 24.658 29.8888 25.3535 30.581C25.5226 30.7502 25.6646 31.0466 25.6362 31.2633C25.5629 31.8162 24.8685 31.9843 24.4167 31.5785C23.778 31.0057 23.157 30.4141 22.5348 29.8258C22.4102 29.6898 22.2941 29.5473 22.1871 29.3989C21.6335 29.9319 21.1544 30.3942 20.673 30.8542C20.4365 31.0809 20.1928 31.3031 19.9515 31.5265C19.502 31.9423 19.0904 31.992 18.7604 31.6725C18.4304 31.3529 18.4942 30.9924 18.9224 30.5921C19.5485 30.0023 20.1751 29.417 20.802 28.8361C20.9037 28.741 20.9995 28.6392 21.1272 28.5121C20.3785 27.8187 19.6522 27.1375 18.9212 26.4586C18.6717 26.2275 18.5416 25.9687 18.7001 25.6425C18.9201 25.188 19.4926 25.1051 19.9077 25.4866C20.6435 26.1644 21.3638 26.8567 22.1338 27.5876C22.29 27.4461 22.4224 27.3277 22.5537 27.2061C23.1452 26.6609 23.7224 26.1136 24.3102 25.5695C24.7396 25.1714 25.1323 25.1272 25.4647 25.4523C25.7971 25.7774 25.7462 26.1257 25.3109 26.5305C24.6107 27.1774 23.9045 27.8243 23.1534 28.5165Z"
      fill="#575B60"
    />
    <path
      d="M36.4836 39.0193C36.2896 39.1995 36.1287 39.4306 35.8922 39.5501C35.5752 39.7148 35.2842 39.5501 35.0855 39.3035C34.3391 38.3624 33.3112 37.825 32.1343 37.5176C30.3045 37.041 28.5125 37.1427 26.7796 37.8836C25.9613 38.2158 25.268 38.7692 24.7889 39.4727C24.5239 39.8685 24.1312 39.9681 23.774 39.7646C23.4168 39.5611 23.3127 39.1542 23.58 38.7616C24.5263 37.3838 25.9185 36.6009 27.5721 36.2094C30.3518 35.5526 32.9611 35.8777 35.2771 37.5552C35.6213 37.8062 35.9005 38.1402 36.1843 38.4553C36.3026 38.5847 36.3547 38.7683 36.4836 39.0193Z"
      fill="#575B60"
    />
    <path
      d="M42.7395 11.9876C42.7362 12.1197 42.6908 12.248 42.609 12.3558C42.5272 12.4637 42.4128 12.5462 42.2805 12.5929C42.1481 12.6395 42.0039 12.6482 41.8663 12.6177C41.7287 12.5872 41.604 12.519 41.5082 12.4217C41.4123 12.3245 41.3497 12.2028 41.3284 12.0721C41.3071 11.9414 41.328 11.8077 41.3885 11.6882C41.4491 11.5687 41.5464 11.4688 41.668 11.4014C41.7896 11.334 41.93 11.302 42.0712 11.3097C42.1628 11.3128 42.2529 11.3329 42.3362 11.3687C42.4194 11.4046 42.4943 11.4554 42.5564 11.5185C42.6186 11.5815 42.6667 11.6554 42.6982 11.7359C42.7296 11.8164 42.7436 11.902 42.7395 11.9876Z"
      fill="#575B60"
    />
    <path
      d="M44.8398 11.3089C44.981 11.3047 45.1204 11.3401 45.24 11.4104C45.3596 11.4807 45.4541 11.5828 45.5113 11.7036C45.5685 11.8244 45.5858 11.9584 45.561 12.0885C45.5362 12.2185 45.4704 12.3387 45.3721 12.4336C45.2738 12.5285 45.1474 12.5938 45.0092 12.6212C44.871 12.6485 44.7271 12.6367 44.5961 12.5871C44.4651 12.5376 44.3529 12.4526 44.2739 12.3431C44.1949 12.2336 44.1526 12.1045 44.1526 11.9724C44.1502 11.8864 44.1662 11.8009 44.1996 11.7208C44.233 11.6407 44.2832 11.5676 44.3472 11.5058C44.4112 11.444 44.4877 11.3948 44.5723 11.361C44.6569 11.3272 44.7478 11.3095 44.8398 11.3089Z"
      fill="#575B60"
    />
    <path
      d="M47.7076 12.6316C47.5662 12.6327 47.4277 12.5943 47.3099 12.5213C47.1921 12.4483 47.1002 12.344 47.0461 12.2219C46.9921 12.0998 46.9783 11.9654 47.0064 11.8359C47.0346 11.7064 47.1035 11.5877 47.2043 11.4951C47.3051 11.4024 47.4332 11.34 47.5722 11.3159C47.7112 11.2917 47.8547 11.3069 47.9844 11.3595C48.1141 11.4121 48.224 11.4997 48.3001 11.6111C48.3761 11.7225 48.4149 11.8526 48.4114 11.9847C48.4115 12.0707 48.3934 12.1558 48.3579 12.2351C48.3225 12.3143 48.2704 12.3862 48.2049 12.4465C48.1393 12.5067 48.0616 12.5541 47.9762 12.5859C47.8908 12.6177 47.7995 12.6333 47.7076 12.6316Z"
      fill="#575B60"
    />
  </svg>
);
const fakeStreamData = [1, 2, 3, 4];
const LeadsProfile = () => {
  //**HANDLE LEAD SOURCE ICON */

  //**handle icon of leads profile */
  const handleLeadSourceIcon = (lead) => {
    if (lead === "facebook") {
      return facebook;
    } else if (lead === "whatsUp") {
      return whatsUp;
    } else if (lead === "snapchat") {
      return snapchat;
    } else if (lead === "instagram") {
      return instagram;
    } else if (lead === "googleAds") {
      return googleAds;
    }
  };

  const auth = useAuth();
  //**HANDLE PAGE NAME */
  auth.setPages("Lead Profile");

  return (
    <div style={{ marginBottom: "100px" }}>
      {/** START TITLE OF PAGE */}
      <div className={StyleSheet.title}>
        <h5 className={StyleSheet.titleName}>Mohamed Ahmed Mohamed</h5>
        <div className={StyleSheet.buttons}>
          <button className={StyleSheet.btnFollow}>Followed</button>
          <button className={StyleSheet.btnConvert}>Convert</button>
          <button className={StyleSheet.btnEdit}>
            <span>Edit</span>
            <RiArrowDropDownLine fontSize={30} />
          </button>
        </div>
      </div>
      {/** END TITLE OF PAGE */}
      <div className={StyleSheet.leadsProfileContainer}>
        <div className={StyleSheet.rightContainer}>
          {/*start overview */}
          <div className={StyleSheet.top}>
            {/* start overview*/}
            <div className={StyleSheet.item}>
              <h6 className={StyleSheet.title}>Overview</h6>
              <div className={StyleSheet.subItem}>
                <div className={StyleSheet.subSubItem}>
                  <div className={StyleSheet.iconAndTitle}>
                    <HiOutlinePhone fontSize={20} />
                    <h6>phone</h6>
                  </div>
                  <p>01092487660</p>
                </div>
                <div className={StyleSheet.subSubItem}>
                  <div className={StyleSheet.iconAndTitle}>
                    <AiOutlineMail fontSize={20} />
                    <h6>Email</h6>
                  </div>
                  <p>ahmedelbakly@gmail.com</p>
                </div>
              </div>
            </div>
            {/* End overview*/}
            {/* start Details*/}
            <div className={StyleSheet.item}>
              <h5 className={StyleSheet.title}>Details</h5>
              {/*start status and lead source */}
              <div className={StyleSheet.subItem}>
                <div className={StyleSheet.subSubItem}>
                  <h6>Status</h6>
                  <p>pending</p>
                </div>
                <div className={StyleSheet.subSubItem}>
                  <h6>Lead Source</h6>
                  <p>{googleAds}</p>
                </div>
              </div>
              {/*End status and lead source */}

              {/*start companies  */}
              <div className={StyleSheet.subItem}>
                <div className={StyleSheet.subSubItem}>
                  <h6>Campaign</h6>
                  <p>none</p>
                </div>
                <div className={StyleSheet.subSubItem}>
                  <h6>Opportunity Amount</h6>
                  <p>none</p>
                </div>
              </div>
            </div>

            {/*End companies */}
            {/*Start stream */}
            <div className={`${StyleSheet.item} ${StyleSheet.stream} `}>
              {/** start stream title */}
              <div className={StyleSheet.streamTitle}>
                <h6 className={StyleSheet.text}>Stream</h6>
                <TfiLayoutMenuSeparated className={StyleSheet.icon} />
              </div>
              {/** End stream title */}
              {/** start stream input */}
              <form className={StyleSheet.streamForm}>
                <input
                  type="text"
                  className={StyleSheet.input}
                  placeholder="Write your comment here"
                />
                <button type="submit" className={StyleSheet.btn}>
                  Post
                </button>
              </form>
              {/** End stream input */}
              {/* Start Stream list */}

              <div className={StyleSheet.streamList}>
                {fakeStreamData.map((item, index) => (
                  <div className={StyleSheet.streamItem}>
                    <div className={StyleSheet.streamNameIcon}>
                      <LocalPhoneIcon className={StyleSheet.icon} />
                      <p className={StyleSheet.text}>
                        <span className={StyleSheet.name}>Ahmed Elbakly</span>{" "}
                        linked the meeting New website design presentation with
                        this lead
                      </p>
                    </div>
                    <p className={StyleSheet.time}>December 7, 2023, 2:14 pm</p>
                  </div>
                ))}
              </div>
              {/* End Stream list */}
            </div>

            {/*End stream */}
          </div>
          {/**start target List */}
          <div className={StyleSheet.targetLists}>
            {/** targetHeader*/}
            <div className={StyleSheet.targetHeader}>
              <h6 className={StyleSheet.text}>Target Lists</h6>
              <TfiLayoutMenuSeparated className={StyleSheet.icon} />
            </div>
            {/** targetHeader*/}
            {/** start name and target status*/}
            <div
              className={`${StyleSheet.targetItem} ${StyleSheet.first}`}
              style={{
                background: "rgba(188, 188, 188, 0.12)",
              }}
            >
              <div className={`${StyleSheet.subItem}`}>
                <span className={StyleSheet.text}>Name</span>
                <RiArrowDropDownLine fontSize={25} />
              </div>
              <div className={StyleSheet.subItem}>
                <span className={StyleSheet.text}>Target Status</span>
                <RiArrowDropDownLine fontSize={25} />
              </div>
            </div>
            {/** end name and target status*/}
            {/** start name and target status*/}
            <div
              className={`${StyleSheet.targetItem} ${StyleSheet.itemWithOption}`}
            >
              <h6 className={StyleSheet.subItem}>
                Marketing Promo October 2020
              </h6>
              <div className={StyleSheet.subItemOption}>
                {" "}
                <span className={StyleSheet.text}>Opted Out</span>
                <RiArrowDropDownLine fontSize={25} />
              </div>
            </div>
            {/** end name and target status*/}
            {/** start name and target status*/}
            <div
              className={`${StyleSheet.targetItem} ${StyleSheet.itemWithOption}`}
              style={{
                background: "rgba(188, 188, 188, 0.12)",
              }}
            >
              <div className={StyleSheet.subItem}>
                Marketing Promo October 2020
              </div>
              <div className={StyleSheet.subItemOption}>
                <span className={StyleSheet.text}>Opted Out</span>
                <RiArrowDropDownLine fontSize={25} />
              </div>
            </div>
            {/** end name and target status*/}
          </div>
          {/**start target List */}
        </div>
        {/*End right */}
        {/* Start Left Container */}
        <div className={StyleSheet.leftContainer}>
          <div className={`${StyleSheet.item} ${StyleSheet.assignTo}`}>
            {/**start assign to  */}
            <div className={StyleSheet.itemColumn}>
              <div className={StyleSheet.between}>
                <p className={StyleSheet.text}>Assigned To</p>
                <span className={StyleSheet.icon}>{editIcon}</span>
              </div>
              <div className={StyleSheet.start}>
                <Image src={avatar} alt="avatar" className={StyleSheet.img} />
                <p className={StyleSheet.text}>Ahmed Elbakly</p>
              </div>
            </div>
            {/**End assign to  */}
            {/**start terms */}
            <div className={StyleSheet.itemColumn}>
              <div className={StyleSheet.between}>
                <p className={StyleSheet.text}>Terms</p>
                <span className={StyleSheet.icon}>{editIcon}</span>
              </div>
              <div className={StyleSheet.start}>
                <p className={StyleSheet.text}>none</p>
              </div>
            </div>
            {/**start terms */}
            <div className={StyleSheet.itemRow}>
              <div className={StyleSheet.itemColumn}>
                <div className={StyleSheet.itemTop}>
                  <IoCalendarClearOutline />
                  <p className={StyleSheet.text}>Created At</p>
                </div>
                <div className={StyleSheet.itemButton}>
                  <p className={StyleSheet.text}>2/1/2023 11:01:00</p>
                </div>
              </div>
              <div className={StyleSheet.itemColumn}>
                <div className={StyleSheet.itemTop}>
                  <IoCalendarClearOutline />
                  <p className={StyleSheet.text}>Updated At</p>
                </div>
                <div className={StyleSheet.itemButton}>
                  <p className={StyleSheet.text}>7 hrs ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${StyleSheet.item} ${StyleSheet.activity}`}>
            <div className={StyleSheet.title}>
              <p className={StyleSheet.text}>Activity</p>
              <TfiLayoutMenuSeparated className={StyleSheet.icon} />
            </div>
            <div className={StyleSheet.activityData}>
              <div className={StyleSheet.activityItem}>
                <MdPhone className={StyleSheet.phoneIcon} />
                <div className={StyleSheet.data}>
                  <p className={StyleSheet.text}>
                    Phone marketing for in-process+assigned leads
                  </p>
                  <div className={StyleSheet.timeAndUser}>
                    <p className={StyleSheet.user}>Ahmed Elbakly</p>
                    <p className={StyleSheet.time}>December 7, 2023, 2:14 pm</p>
                  </div>
                </div>
                <span className={StyleSheet.icon}>{dropdownIcon}</span>
              </div>
              <div className={StyleSheet.activityItem}>
                <MdPhone className={StyleSheet.phoneIcon} />
                <div className={StyleSheet.data}>
                  <p className={StyleSheet.text}>
                    Phone marketing for in-process+assigned leads
                  </p>
                  <div className={StyleSheet.timeAndUser}>
                    <p className={StyleSheet.user}>Ahmed Elbakly</p>
                    <p className={StyleSheet.time}>December 7, 2023, 2:14 pm</p>
                  </div>
                </div>
                <span className={StyleSheet.icon}>{dropdownIcon}</span>
              </div>
              <div className={StyleSheet.activityItem}>
                <MdPhone className={StyleSheet.phoneIcon} />
                <div className={StyleSheet.data}>
                  <p className={StyleSheet.text}>
                    Phone marketing for in-process+assigned leads
                  </p>
                  <div className={StyleSheet.timeAndUser}>
                    <p className={StyleSheet.user}>Ahmed Elbakly</p>
                    <p className={StyleSheet.time}>December 7, 2023, 2:14 pm</p>
                  </div>
                </div>
                <span className={StyleSheet.icon}>{dropdownIcon}</span>
              </div>
            </div>
          </div>
          <div className={`${StyleSheet.item} ${StyleSheet.history}`}>
            <div className={StyleSheet.title}>
              <p className={StyleSheet.text}>History</p>
              <TfiLayoutMenuSeparated className={StyleSheet.icon} />
            </div>
            <div className={StyleSheet.historyData}>
              <span className={StyleSheet.icon}>{historyIcon}</span>
              <p className={StyleSheet.text}>No History</p>
            </div>
          </div>
          <div className={`${StyleSheet.item} ${StyleSheet.task}`}>
            <div className={StyleSheet.title}>
              <p className={StyleSheet.text}>History</p>
              <TfiLayoutMenuSeparated className={StyleSheet.icon} />
            </div>
            <div className={StyleSheet.historyData}>
              <span className={StyleSheet.icon}>{historyIcon}</span>
              <p className={StyleSheet.text}>No History</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsProfile;

////////////////////
