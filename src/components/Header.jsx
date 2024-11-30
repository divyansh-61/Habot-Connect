import * as React from "react";
// import { RiMenu3Line } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import Menu from "@mui/material/Menu";
// import { CgMenuRound } from "react-icons/cg";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import HabotLogo from "/habot-logo.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";

const Header = () => {

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const services = ["Service 1", "Service 2", "Service 3", "Service 4"]
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ITEM_HEIGHT = 48;

  return (
    <div className="md:h-20 flex items-center w-full z-[999] bg-white shadow-xl justify-between px-4 md:px-16">
      <div className="" onClick={() => navigate("/")}>
        <img
          src={HabotLogo}
          className="h-16 w-24 md:w-44 mix-blend-multiply object-cover cursor-pointer"
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
            <div className="relative find-service-tag">
              <button className="flex gap-1 justify-center items-center bg-white">
                Find Service Tags
                <MdKeyboardArrowDown className="h-fit scale-125 text-grey" />
              </button>
              <div className="absolute bg-white hidden right-0 dropdown h-12 overflow-y-scroll w-fit">
                <ul className="bg-white">
                  <li className="p-1 bg-white cursor-pointer hover:bg-slate-400 hover:text-white">Service 1</li>
                  <Divider />
                  <li className="p-1 bg-white cursor-pointer hover:bg-slate-400 hover:text-white">Service 2</li>
                  <Divider />
                  <li className="p-1 bg-white cursor-pointer hover:bg-slate-400 hover:text-white">Service 3</li>
                </ul>
              </div>
            </div>
          </MenuItem>
          <MenuItem>
            <Link to="/login" className="text-green-800 border-green-800 font-bold">
              Login/Sign Up
            </Link>
          </MenuItem>
        </Menu>
      </div>
      {/* Mobile View Navigation Menu Ends */}

      <div className="text-sm hidden lg:flex items-center gap-10 text-grey tracking-wider">
        <button className="hover:underline transition">Find Suppliers</button>
        <div className="relative find-service-tag">
          <button className="flex gap-1 justify-center items-center">
            Find Service Tags
            <MdKeyboardArrowDown className="h-fit scale-125 text-grey" />
          </button>
          <div className="absolute bg-white hidden right-0 dropdown flex-col">
            {services.map((service, index) =>
              <button key={index} className="text-nowrap px-3 py-2 cursor-pointer hover:bg-slate-400 hover:text-white">{service}</button>
            )}
          </div>
        </div>
        <Link to={"/login"} className="text-green-800 border-2 rounded px-8 py-2 border-green-800 font-bold hover:bg-green-800 hover:text-white transition-all">
          Login/Sign Up
        </Link>
      </div>
    </div>
  );
};
export default Header;
