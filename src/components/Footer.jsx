import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8  block bottom-0 w-full">
      <div className="container mx-auto px-6">
        {/* Footer Content Container */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Admin Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Admin Information</h3>
            <p className="text-lg">Admin: Muhammad Arslan</p>
            <p className="mt-2 text-md">Location: Faisalabad, Pakistan</p>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-md">
              Have any questions? <br />
              Feel free to get in touch with us!
            </p>
            <a
              href="mailto:arslan7644539@gmail.com"
              className="text-purple-400 hover:text-purple-600 mt-4 inline-block"
            >
              arslan7644539@gmail.com
            </a>
          </div>

          {/* Column 3: Copyright & Social Media Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <p className="text-md">
              &copy; {new Date().getFullYear()} DG Garner. All rights reserved.
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://github.com/arslan-7644539" target="_blank" >
                <i>
                  <FaGithub />
                </i>
              </a>

              <a href="https://www.facebook.com/profile.php?id=100023987348426" target="_blank" >
                <i>
                  <FaFacebook />
                </i>
              </a>

              <a href="#">
                <i>
                  <IoLogoLinkedin />
                </i>
              </a>

              <a href="#">
                <i>
                  <BsTwitterX />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
