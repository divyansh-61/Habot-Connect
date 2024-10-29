import * as React from "react";
// import { RiMenu3Line } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import Menu from "@mui/material/Menu";
// import { CgMenuRound } from "react-icons/cg";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import HabotLogo from "/habot-logo.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ITEM_HEIGHT = 48;

  return (
    <div className="md:h-20 flex items-center w-full justify-between px-4 md:px-16">
      <div className="">
        <img
          src={HabotLogo}
          className="h-16 w-24 md:w-44 mix-blend-multiply object-cover"
        />
      </div>

      {/* Mobile-View Navigation Menu */}
        <div className="block lg:hidden">
          <IoMenu
          className="scale-150 text-2xl text-[#271555]"
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            {/* <MoreVertIcon /> */}
          </IoMenu>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              paper: {
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              },
            }}
          >
            <MenuItem>
              <Link>Find Suppliers</Link>
            </MenuItem>
            <MenuItem>
              <Link className="flex gap-1 justify-center items-center">
                Find Service Tags{" "}
                <MdKeyboardArrowDown className="h-fit scale-125 text-grey" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="text-green-800 border-green-800 font-bold">
                Login/Sign Up
              </Link>
            </MenuItem>
          </Menu>
        </div>
        {/* Mobile View Navigation Menu Ends */}

      <div className="text-sm hidden lg:flex items-center gap-10 text-grey tracking-wider">
        <Link>Find Suppliers</Link>
        <Link className="flex gap-1 justify-center items-center">
          Find Service Tags{" "}
          <MdKeyboardArrowDown className="h-fit scale-125 text-grey" />
        </Link>
        <Link className="text-green-800 border-2 rounded px-8 py-2 border-green-800 font-bold">
          Login/Sign Up
        </Link>
      </div>
    </div>
  );
};
export default Header;
