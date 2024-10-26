import HabotLogo from "../assets/HabotLogo2.png";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="bg-blue-950 py-6 px-8 lg:px-44">
      <div className="flex flex-col md:flex-row gap-12 justify-between items-center border-y border-grey py-4 px-4">
        <div className="mt-4 flex flex-col gap-3">
          <img src={HabotLogo} className="h-fit md:w-40 object-contain" alt="" />
          <span className="text-grey text-sm">© R Singhania</span>
        </div>

        <div className="flex gap-6  lg:gap-16 items-start justify-center">

          <div className="flex flex-col gap-2">
            <h6 className="font-medium text-white">Company</h6>
            <ul className="text-gray-400 text-xs flex flex-col gap-1">
              <li>About</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="font-medium text-white">Terms</h6>
            <ul className="text-gray-400 text-xs flex flex-col gap-1">
              <li>Data privacy</li>
              <li>Terms</li>
              <li>Accessibility</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h6 className="font-medium text-white">Related</h6>
            <ul className="text-gray-400 text-xs flex flex-col gap-1">
              <li>Find Buyer</li>
              <li>Feedback</li>
            </ul>
          </div>

        </div>

        <div className="grid grid-cols-4 text-white gap-3">
          <div className="border border-white rounded-full p-2 w-fit">
            <FaLinkedinIn className="scale-125 object-cover " />
          </div>
          <div className="border border-white rounded-full p-2 w-fit">
            <TiSocialTwitter className="scale-125 object-cover " />
          </div>
          <div className="border border-white rounded-full p-2 w-fit">
            <TiSocialFacebook className="scale-150 object-cover " />
          </div>
          <div className="border border-white rounded-full p-2 w-fit">
            <SlSocialInstagram className="scale-125 object-cover " />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;