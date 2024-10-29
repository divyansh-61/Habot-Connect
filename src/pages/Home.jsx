import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { IoBagHandleSharp } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import YoutubeLogo from "/YoutubeLogo.png";
import Checked from "/checked.png";
import AddFriend from "/AddFriend.png";
import DealDone from "/DealDone.png";
import DocumentCheck from "/Document Check.png";
import DocumentSearch from "/Document Search.png";
import EditDetail from "/EditDetail.png";
import EditDocument from "/EditDocument.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="w-full h-full">
        {/* Top image section */}
        <div className="bg-Rectangle w-full h-[40rem] md:h-[30rem] bg-cover">
          <div className="text-white text-center flex flex-col gap-3 justify-center items-center h-full w-full bg-gradient-to-t from-[#072f57e4] from-0% via-[#072f5767] via-45% to-[#072f57d2] to-90%">
            <span className="font-bold text-3xl md:text-4xl lg:text-5xl">Are You a Supplier?</span>
            <span className="text-2xl md:text-4xl lg:text-5xl">Explore Matching Opportunities.</span>

            <div className="flex flex-col items-center lg:flex-row gap-2 py-6 h-fit">
              {/* Desires Service */}
              <div className="flex items-center justify-center gap-4 p-3 bg-white rounded w-72 md:min-w-80">
                {/* Icon */}
                <div className="w-fit">
                  <IoBagHandleSharp className="text-orange-500 scale-125 w-fit" />
                </div>
                <input
                  className="w-full outline-none text-sm text-black"
                  type="text"
                  name=""
                  id=""
                  placeholder="Search your required service here"
                />
              </div>

              {/* Desires Loaction */}
              <div className="flex items-center justify-center gap-4 p-3 bg-white rounded w-72 md:min-w-80">
                {/* Icon */}
                <div className="w-fit">
                  <FaLocationDot className="text-orange-500 scale-125 w-fit" />
                </div>
                <input
                  className="w-full outline-none text-sm text-black "
                  type="text"
                  name=""
                  id=""
                  placeholder="Search your required location here"
                />
              </div>

              <button className="bg-green-700 rounded-md h-full py-2 w-fit px-8 text-sm font-bold tracking-wide">
                Search
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="font-bold">Are you a buyer?</span>
              <Link className="underline">
                Click here if you are looking to post a requirements
              </Link>
            </div>
          </div>
        </div>
        {/* Top Image Section Ends */}

        <div className="m-4 md:m-8 lg:m-20 flex flex-col gap-20">
          {/* Ready to dive into Habot? */}
          <div className="flex flex-col gap-8 lg:flex-row justify-between">
            <div className="flex flex-col gap-8 md:w-3/4 lg:w-2/5">
              <h2 className="font-extrabold text-3xl md:text-4xl tracking-tight">
                Ready to dive into <span className="text-[#271555]">HABOT?</span>
              </h2>
              <span className="h-full">
                Signing up with HABOT opens the door to a world of new
                opportunities and potential for business growth. Gain access to
                a vibrant community of like-minded individuals, unlock valuable
                resources, and take the first step towards realizing your
                entrepreneurial dreams.
              </span>
              <button className="bg-green-800 text-white flex gap-6 items-center justify-center w-fit rounded h-full px-12 py-3 text-sm font-bold tracking-wide">
                <span>Sign Up Today!</span>
                <BsArrowRight className="scale-150 font-bold" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <span className="text-nowrap border-2 text-center border-orange-400 h-fit font-medium rounded px-1.5 md:px-16 py-3">
                Abu Dhabi
              </span>
              <span className="text-nowrap border-2 text-center border-orange-400 h-fit font-medium rounded px-1.5 md:px-16 py-3">
                Dubai
              </span>
              <span className="text-nowrap border-2 text-center border-orange-400 h-fit font-medium rounded px-1.5 md:px-16 py-3">
                Sharjah & Ajman
              </span>
              <span className="text-nowrap border-2 text-center border-orange-400 h-fit font-medium rounded px-1.5 md:px-16 py-3">
                Fujairah
              </span>
              <span className="text-nowrap border-2 text-center border-orange-400 h-fit font-medium rounded px-1.5 md:px-16 py-3">
                Ras Al Khaimah
              </span>
              <span className="text-nowrap border-2 text-center border-orange-400 h-fit font-medium rounded px-1.5 md:px-16 py-3">
                Umm Al Quwain
              </span>
            </div>
          </div>
          {/* Ready to dive into HABOT? Ends */}

          {/* POST YOUR REQUIREMENTS */}
          <div className="bg-[#072F57] flex flex-col md:flex-row justify-between gap-6 md:gap-8 lg:gap-14 items-start py-10 md:py-20 px-3.5 md:px-10 lg:px-16 w-full">
            <div className="bg-YoutubeVideo flex justify-center items-center h-60 md:h-96 w-full md:w-1/2 bg-no-repeat bg-center bg-cover">
              <img
                src={YoutubeLogo}
                alt=""
                className="h-16 w-16 object-contain md:h-fit md:w-fit bg-white overflow-hidden md:rounded-3xl"
              />
            </div>

            <div className="md:w-1/2 w-full h-full">
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <Box sx={{}}>
                    <TabList onChange={handleChange} aria-label="">
                      <Tab className="orangeText" label="Buyer" value="1" />
                      <Tab className="orangeText" label="Supplier" value="2" />
                    </TabList>
                  </Box>
                  <TabPanel className="text-white tracking-wide" value="1">
                    <div className="flex flex-col gap-5">
                      <div className="flex gap-2 items-center">
                        <img src={Checked} alt="" />
                        <span>Post your requirements.</span>
                      </div>

                      <div className="flex gap-2 items-center">
                        <img src={Checked} alt="" />
                        <span>
                          Sit back for multiple suppliers to contact you.
                        </span>
                      </div>

                      <div className="flex gap-2 items-center">
                        <img src={Checked} alt="" />
                        <span>
                          Choose among the suppliers based on the ratings and
                          reviews.
                        </span>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel className="text-white tracking-wide" value="2">
                    <div className="flex flex-col gap-5">
                      <div className="flex gap-2 items-center">
                        <img src={Checked} alt="" />
                        <span>Supplier Point 1.</span>
                      </div>

                      <div className="flex gap-2 items-center">
                        <img src={Checked} alt="" />
                        <span>Supplier Point 2.</span>
                      </div>

                      <div className="flex gap-2 items-center">
                        <img src={Checked} alt="" />
                        <span>Supplier Point 3.</span>
                      </div>
                    </div>
                  </TabPanel>
                </TabContext>
              </Box>
            </div>
          </div>
          {/* POST YOUR REQUIREMENTS Ends */}
        </div>

        {/* Let Supplier Find You */}
        <div className="bg-[#E8FBFF] flex flex-col md:flex-row gap-8 justify-between items-center px-10 md:px-40 py-14">
          <span className="text-2xl text-nowrap md:text-3xl font-bold">
            Let Suppliers
            <span className="border-b-4 border-orange-600"> Find You</span>
          </span>
          <button className="text-white bg-orange-500 text-nowrap font-semibold rounded-md px-14 py-3">
            Get Verified
          </button>
        </div>
        {/* Let Supplier Find You Ends */}

        {/* How it works? */}
        <div className="mx-4 md:px-20 lg:mx-40 my-20 flex flex-col items-center text-center">
          <h3 className="text-3xl font-extrabold">How it works?</h3>
          <p className="md:w-2/3 my-6">
            Buyers post their needs and review top suppliers, while suppliers
            complete profiles, connect with potential buyers, and build
            successful business relationships, sharing valuable feedback.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 my-8">

            {/* Columns */}
            <div className="bg-[#E8FBFF] px-4 md:px-10 py-14 gap-8 flex flex-col items-center text-center">
              <div className="h-fit">
                <img src={AddFriend} className="h-12 w-12" />
              </div>
              <span className="font-semibold md:w-4/5">Spend Your Role and Sign Up</span>
            </div>

            <div className=" px-4 md:px-10 py-14 gap-8 flex flex-col items-center text-center">
              <div className="h-fit">
                <img src={DocumentCheck} className="h-12 w-12" />
              </div>
              <span className="font-semibold md:w-4/5">Buyers Post Your Requirements</span>
            </div>

            <div className="md:bg-[#E8FBFF] bg-white px-4 md:px-10 py-14 gap-8 flex flex-col items-center text-center">
              <div className="h-fit">
                <img src={DocumentSearch} className="h-12 w-12" />
              </div>
              <span className="font-semibold md:w-4/5"> Review, Select, and Contact the Best Suppliers</span>
            </div>

            <div className="bg-[#E8FBFF] md:bg-white px-4 md:px-10 py-14 gap-8 flex flex-col items-center text-center">
              <div className="h-fit">
                <img src={EditDetail} className="h-12 w-12" />
              </div>
              <span className="font-semibold md:w-4/5"> Suppliers Complete your profile and get notified for opportunities</span>
            </div>

            <div className="bg-[#E8FBFF] px-4 md:px-10 py-14 gap-8 flex flex-col items-center text-center">
              <div className="h-fit">
                <img src={EditDocument} className="h-12 w-12" />
              </div>
              <span className="font-semibold md:w-4/5">Contact to Buyers and Share your Quote for the service</span>
            </div>

            <div className=" px-4 md:px-10 py-14 gap-8 flex flex-col items-center text-center">
              <div className="h-fit">
                <img src={DealDone} className="h-12 w-12" />
              </div>
              <span className="font-semibold md:w-4/5">Both the Parties can Connect and Make Business Leave a Feedback</span>
            </div>

          </div>
        </div>
        {/* How it works? Ends */}
      </div>
    </>
  );
};
export default Home;
