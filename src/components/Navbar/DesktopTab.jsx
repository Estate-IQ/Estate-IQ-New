import React from "react";
import { Link } from "react-router-dom";
import SVGs from "../../assets/svg/SVGs";

const DesktopTab = (props) => {
  return (
    <section className="control_view">
      <div className="desktop_nav">
        <img src={SVGs.brand_name} alt="Estate IQ" className="for_desktops" />
        <img src={SVGs.brand_logo} alt="Estate IQ" className="for_phone" />
        <Link to="/">
          <div id="option" className={props.overview}>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.73358 1.33309L3.66647 1.33305C3.36187 1.33276 3.0993 1.33251 2.86668 1.38836C2.13539 1.56392 1.5644 2.1349 1.38884 2.8662C1.333 3.09881 1.33325 3.36138 1.33354 3.66598L1.33358 3.73309V6.93309L1.33354 7.0002C1.33325 7.3048 1.333 7.56738 1.38884 7.79998C1.5644 8.53128 2.13539 9.10226 2.86668 9.27784C3.0993 9.33368 3.36187 9.33342 3.66647 9.33313L3.73358 9.33309H6.93358L7.00068 9.33313C7.30528 9.33342 7.56787 9.33368 7.80047 9.27784C8.53176 9.10226 9.10275 8.53128 9.27832 7.79998C9.33416 7.56738 9.33391 7.3048 9.33362 7.0002L9.33358 6.93309V3.73309L9.33362 3.66598C9.33391 3.36138 9.33416 3.09881 9.27832 2.8662C9.10275 2.1349 8.53176 1.56392 7.80047 1.38836C7.56787 1.33251 7.30528 1.33276 7.00068 1.33305L6.93358 1.33309H3.73358ZM3.17795 2.68485C3.23534 2.67106 3.3232 2.66642 3.73358 2.66642H6.93358C7.34396 2.66642 7.43183 2.67106 7.4892 2.68485C7.73298 2.74337 7.9233 2.93369 7.98183 3.17746C7.9956 3.23485 8.00024 3.32272 8.00024 3.73309V6.93309C8.00024 7.34348 7.9956 7.43134 7.98183 7.48872C7.9233 7.73249 7.73298 7.92281 7.4892 7.98134C7.43183 7.99512 7.34396 7.99976 6.93358 7.99976H3.73358C3.3232 7.99976 3.23534 7.99512 3.17795 7.98134C2.93418 7.92281 2.74386 7.73249 2.68534 7.48872C2.67155 7.43134 2.66691 7.34348 2.66691 6.93309V3.73309C2.66691 3.32272 2.67155 3.23485 2.68534 3.17746C2.74386 2.93369 2.93418 2.74337 3.17795 2.68485ZM13.0669 1.33309L12.9998 1.33305C12.6952 1.33276 12.4326 1.33251 12.2 1.38836C11.4687 1.56392 10.8977 2.1349 10.7222 2.8662C10.6663 3.09881 10.6666 3.36138 10.6669 3.66598L10.6669 3.73309V6.93309L10.6669 7.0002C10.6666 7.3048 10.6663 7.56738 10.7222 7.79998C10.8977 8.53128 11.4687 9.10226 12.2 9.27784C12.4326 9.33368 12.6952 9.33342 12.9998 9.33313L13.0669 9.33309H16.2669L16.334 9.33313C16.6386 9.33342 16.9012 9.33368 17.1338 9.27784C17.865 9.10226 18.4361 8.53128 18.6117 7.79998C18.6674 7.56738 18.6673 7.3048 18.6669 7.0002V6.93309V3.73309V3.66598C18.6673 3.36138 18.6674 3.09881 18.6117 2.8662C18.4361 2.1349 17.865 1.56392 17.1338 1.38836C16.9012 1.33251 16.6386 1.33276 16.334 1.33305L16.2669 1.33309H13.0669ZM12.5113 2.68485C12.5687 2.67106 12.6565 2.66642 13.0669 2.66642H16.2669C16.6773 2.66642 16.7652 2.67106 16.8225 2.68485C17.0662 2.74337 17.2566 2.93369 17.3152 3.17746C17.3289 3.23485 17.3336 3.32272 17.3336 3.73309V6.93309C17.3336 7.34348 17.3289 7.43134 17.3152 7.48872C17.2566 7.73249 17.0662 7.92281 16.8225 7.98134C16.7652 7.99512 16.6773 7.99976 16.2669 7.99976H13.0669C12.6565 7.99976 12.5687 7.99512 12.5113 7.98134C12.2675 7.92281 12.0772 7.73249 12.0187 7.48872C12.0049 7.43134 12.0002 7.34348 12.0002 6.93309V3.73309C12.0002 3.32272 12.0049 3.23485 12.0187 3.17746C12.0772 2.93369 12.2675 2.74337 12.5113 2.68485ZM3.66647 10.6664L3.73358 10.6664H6.93358L7.00068 10.6664C7.30528 10.6661 7.56787 10.6658 7.80047 10.7217C8.53176 10.8972 9.10275 11.4682 9.27832 12.1995C9.33416 12.4321 9.33391 12.6947 9.33362 12.9993L9.33358 13.0664V16.2664L9.33362 16.3335C9.33391 16.6382 9.33416 16.9007 9.27832 17.1334C9.10275 17.8646 8.53176 18.4356 7.80047 18.6112C7.56787 18.667 7.30528 18.6668 7.00068 18.6664H6.93358H3.73358H3.66647C3.36187 18.6668 3.0993 18.667 2.86668 18.6112C2.13539 18.4356 1.5644 17.8646 1.38884 17.1334C1.333 16.9007 1.33325 16.6382 1.33354 16.3335L1.33358 16.2664V13.0664L1.33354 12.9993C1.33325 12.6947 1.333 12.4321 1.38884 12.1995C1.5644 11.4682 2.13539 10.8972 2.86668 10.7217C3.0993 10.6658 3.36187 10.6661 3.66647 10.6664ZM3.73358 11.9998C3.3232 11.9998 3.23534 12.0044 3.17795 12.0182C2.93418 12.0767 2.74386 12.267 2.68534 12.5108C2.67155 12.5682 2.66691 12.656 2.66691 13.0664V16.2664C2.66691 16.6768 2.67155 16.7647 2.68534 16.822C2.74386 17.0658 2.93418 17.2562 3.17795 17.3147C3.23534 17.3284 3.3232 17.3331 3.73358 17.3331H6.93358C7.34396 17.3331 7.43183 17.3284 7.4892 17.3147C7.73298 17.2562 7.9233 17.0658 7.98183 16.822C7.9956 16.7647 8.00024 16.6768 8.00024 16.2664V13.0664C8.00024 12.656 7.9956 12.5682 7.98183 12.5108C7.9233 12.267 7.73298 12.0767 7.4892 12.0182C7.43183 12.0044 7.34396 11.9998 6.93358 11.9998H3.73358ZM13.0669 10.6664L12.9998 10.6664C12.6952 10.6661 12.4326 10.6658 12.2 10.7217C11.4687 10.8972 10.8977 11.4682 10.7222 12.1995C10.6663 12.4321 10.6666 12.6947 10.6669 12.9993L10.6669 13.0664V16.2664L10.6669 16.3335C10.6666 16.6382 10.6663 16.9007 10.7222 17.1334C10.8977 17.8646 11.4687 18.4356 12.2 18.6112C12.4326 18.667 12.6952 18.6668 12.9998 18.6664H13.0669H16.2669H16.334C16.6386 18.6668 16.9012 18.667 17.1338 18.6112C17.865 18.4356 18.4361 17.8646 18.6117 17.1334C18.6674 16.9007 18.6673 16.6382 18.6669 16.3335V16.2664V13.0664V12.9993C18.6673 12.6947 18.6674 12.4321 18.6117 12.1995C18.4361 11.4682 17.865 10.8972 17.1338 10.7217C16.9012 10.6658 16.6386 10.6661 16.334 10.6664L16.2669 10.6664H13.0669ZM12.5113 12.0182C12.5687 12.0044 12.6565 11.9998 13.0669 11.9998H16.2669C16.6773 11.9998 16.7652 12.0044 16.8225 12.0182C17.0662 12.0767 17.2566 12.267 17.3152 12.5108C17.3289 12.5682 17.3336 12.656 17.3336 13.0664V16.2664C17.3336 16.6768 17.3289 16.7647 17.3152 16.822C17.2566 17.0658 17.0662 17.2562 16.8225 17.3147C16.7652 17.3284 16.6773 17.3331 16.2669 17.3331H13.0669C12.6565 17.3331 12.5687 17.3284 12.5113 17.3147C12.2675 17.2562 12.0772 17.0658 12.0187 16.822C12.0049 16.7647 12.0002 16.6768 12.0002 16.2664V13.0664C12.0002 12.656 12.0049 12.5682 12.0187 12.5108C12.0772 12.267 12.2675 12.0767 12.5113 12.0182Z"
                  fill="#1737E6"
                />
              </svg>
              <h4>Overview</h4>
            </div>
          </div>
        </Link>
        <Link to="/superadmin-estate">
          <div id="option" className={props.estate}>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.16943 9.99939C1.16943 5.12247 5.12296 1.16895 9.99988 1.16895C14.8767 1.16895 18.8303 5.12247 18.8303 9.99939C18.8303 14.8762 14.8767 18.8298 9.99988 18.8298C5.12296 18.8298 1.16943 14.8762 1.16943 9.99939ZM9.99988 2.43561C5.82252 2.43561 2.43609 5.82203 2.43609 9.99939C2.43609 11.9622 3.18374 13.7504 4.40977 15.0946C5.58773 13.2545 7.65099 12.0329 10.0004 12.0329C12.3495 12.0329 14.4125 13.2542 15.5906 15.094C16.8162 13.7498 17.5637 11.9618 17.5637 9.99939C17.5637 5.82203 14.1771 2.43561 9.99988 2.43561ZM14.6425 15.9712C13.7119 14.3722 11.981 13.2995 10.0004 13.2995C8.01952 13.2995 6.2884 14.3725 5.35801 15.9717C6.63944 16.9692 8.25028 17.5632 9.99988 17.5632C11.7498 17.5632 13.3609 16.9689 14.6425 15.9712ZM6.86673 8.67271C6.86673 6.94222 8.26957 5.53938 10.0001 5.53938C11.7306 5.53938 13.1334 6.94222 13.1334 8.67271C13.1334 10.4032 11.7306 11.806 10.0001 11.806C8.26957 11.806 6.86673 10.4032 6.86673 8.67271ZM10.0001 6.80605C8.96913 6.80605 8.1334 7.64178 8.1334 8.67271C8.1334 9.70365 8.96913 10.5394 10.0001 10.5394C11.031 10.5394 11.8667 9.70365 11.8667 8.67271C11.8667 7.64178 11.031 6.80605 10.0001 6.80605Z"
                  fill="#F6F6F6"
                />
              </svg>
              <h4>Estate</h4>
            </div>
          </div>
        </Link>
        <Link to="/superadmin-task">
          <div id="option" className={props.message}>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.33333 2.66699C0.596953 2.66699 0 3.26395 0 4.00033V16.0003C0 16.7367 0.596953 17.3337 1.33333 17.3337H18.6667C19.4031 17.3337 20 16.7367 20 16.0003V4.00033C20 3.26395 19.4031 2.66699 18.6667 2.66699H1.33333ZM1.33333 4.00033H18.6667V5.23358C18.5565 5.23347 18.4451 5.26367 18.3452 5.32706L10 10.623L1.65483 5.32706C1.55495 5.26367 1.44347 5.23347 1.33333 5.23358V4.00033ZM1.33333 6.54428V16.0003H18.6667V6.54428L10.3215 11.8403C10.1253 11.9648 9.87475 11.9648 9.67851 11.8403L1.33333 6.54428Z"
                  fill="#F6F6F6"
                />
              </svg>
              <h4>Messaging</h4>
            </div>
          </div>
        </Link>
        <Link to="/superadmin-tasks">
          <div id="option" className={props.task}>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.99984 4.00033H15.9998V16.0003H3.99984V4.00033ZM2.6665 4.00033C2.6665 3.26394 3.26346 2.66699 3.99984 2.66699H15.9998C16.7362 2.66699 17.3332 3.26395 17.3332 4.00033V16.0003C17.3332 16.7367 16.7362 17.3337 15.9998 17.3337H3.99984C3.26345 17.3337 2.6665 16.7367 2.6665 16.0003V4.00033ZM13.7996 7.34839C14.0078 7.04482 13.9306 6.62982 13.627 6.42148C13.3235 6.21314 12.9085 6.29034 12.7002 6.59391L8.85381 12.1984L6.92961 9.87884C6.69453 9.59546 6.27424 9.55631 5.99086 9.79138C5.70748 10.0265 5.66833 10.4468 5.9034 10.7301L8.39104 13.7289C8.52448 13.8898 8.72566 13.9787 8.93446 13.9693C9.14326 13.9597 9.33553 13.8529 9.4538 13.6805L13.7996 7.34839Z"
                  fill="#F6F6F6"
                />
              </svg>
              <h4>Task</h4>
            </div>
          </div>
        </Link>
        <Link to="/superadmin-estate">
          <div id="option" className={props.permit}>
            <div>
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14 1.77778C11.4227 1.77778 9.33333 4.56356 9.33333 8C9.33333 11.4364 11.4227 14.2222 14 14.2222C16.5773 14.2222 18.6667 11.4364 18.6667 8C18.6667 4.56356 16.5773 1.77778 14 1.77778ZM10.2284 14.2222C8.86911 12.7556 8 10.5131 8 8C8 5.48688 8.86911 3.24441 10.2284 1.77778H6C3.42267 1.77778 1.33333 4.56356 1.33333 8C1.33333 11.4364 3.42267 14.2222 6 14.2222H10.2284ZM0 8C0 3.58172 2.68629 0 6 0H14C17.3137 0 20 3.58172 20 8C20 12.4183 17.3137 16 14 16H6C2.68629 16 0 12.4183 0 8Z"
                  fill="#F6F6F6"
                />
              </svg>
              <h4>Permission</h4>
            </div>
          </div>
        </Link>
        <Link to="/superadmin-estate">
          <div id="option" className={props.complain}>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1083 2.5H6.89167L2.5 6.89167V13.1083L6.89167 17.5H13.1083L17.5 13.1083V6.89167L13.1083 2.5ZM15.8333 12.4167L12.4167 15.8333H7.58333L4.16667 12.4167V7.58333L7.58333 4.16667H12.4167L15.8333 7.58333V12.4167Z"
                  fill="#F6F6F6"
                />
                <path
                  d="M10 14.1667C10.4602 14.1667 10.8333 13.7936 10.8333 13.3333C10.8333 12.8731 10.4602 12.5 10 12.5C9.53976 12.5 9.16667 12.8731 9.16667 13.3333C9.16667 13.7936 9.53976 14.1667 10 14.1667Z"
                  fill="#F6F6F6"
                />
                <path
                  d="M9.16667 5.83333H10.8333V11.6667H9.16667V5.83333Z"
                  fill="#F6F6F6"
                />
              </svg>
              <h4>Complaint</h4>
            </div>
          </div>
        </Link>
        <div className="loging_out">
          <Link to="/superadmin-estate">
            <div id="option" className={props.complain}>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.99984 1.33301C3.26345 1.33301 2.6665 1.92997 2.6665 2.66634V17.333C2.6665 18.0694 3.26346 18.6663 3.99984 18.6663H13.9998C14.368 18.6663 14.6665 18.3678 14.6665 17.9997C14.6665 17.6315 14.368 17.333 13.9998 17.333H3.99984V2.66634H13.9998C14.368 2.66634 14.6665 2.36786 14.6665 1.99967C14.6665 1.63149 14.368 1.33301 13.9998 1.33301H3.99984ZM16.8046 6.52827C16.5442 6.26791 16.1221 6.26791 15.8617 6.52827C15.6014 6.78862 15.6014 7.21073 15.8617 7.47107L17.7237 9.33301H8.6665C8.29832 9.33301 7.99984 9.63149 7.99984 9.99967C7.99984 10.3679 8.29832 10.6663 8.6665 10.6663H17.7237L15.8617 12.5283C15.6014 12.7886 15.6014 13.2107 15.8617 13.4711C16.1221 13.7314 16.5442 13.7314 16.8046 13.4711L19.8046 10.4711C20.0649 10.2107 20.0649 9.78862 19.8046 9.52827L16.8046 6.52827Z"
                    fill="#FFE4E4"
                  />
                </svg>
                <h4>Logout</h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DesktopTab;
