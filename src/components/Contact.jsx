import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import { Mail, MapPin, Phone } from "lucide-react";
import MapEmbed from "./Map.jsx";
import Subscribe from "./Subscribe.jsx";

const Contact = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white py-12 mb-5">
        {/* Consistent max width & padding */}
        {/* <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-1 my-10"> */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-1 space-y-6">
          {/* Page Title */}
          <div className="text-center mb-18">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-2">
              Contact Us
            </h2>
            <p className="text-sm text-gray-600">
              <Link to="/" className="hover:text-[#3574b8] font-medium">
                Home
              </Link>{" "}
              &nbsp;–&nbsp; Contact us
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 rounded-lg overflow-hidden shadow-xl gap-8 justify-items-center lg:justify-items-stretch">
            {/* Contact Info */}
            <div className="bg-[#14243d] text-white p-6 sm:p-8 space-y-8 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-semibold">
                Contact Information
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin size={24} />,
                    title: "Corporate Office",
                    desc: "0233 Brisbane Cir.\nShiloh, Australia 81063",
                  },
                  {
                    icon: <MapPin size={24} />,
                    title: "Main Warehouse",
                    desc: "10445 Brisbane Cir.\nShiloh, Australia 81063",
                  },
                  {
                    icon: <Mail size={24} />,
                    title: "Email Address",
                    desc: "support@example.com\ncontact@example.com",
                  },
                  {
                    icon: <Phone size={24} />,
                    title: "Phone Number",
                    desc: "+(208) 544 -0141\n+(208) 544 -0142",
                  },
                ].map((item, idx) => (
                  <div className="flex items-start gap-4" key={idx}>
                    <div className="bg-[#3574b8] p-3 rounded-full text-[#e6edf8]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold">{item.title}</p>
                      {item.desc.split("\n").map((line, i) => (
                        <p className="text-sm" key={i}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-span-2 bg-white p-6 sm:p-10 rounded-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm mb-1">Name *</label>
                    <input
                      type="text"
                      className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-full text-black hover:bg-white hover:border-[#3574b8] focus:outline-none focus:border-[#3574b8] active:border-[#3574b8] transition"/>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Phone *</label>
                    <input
                      type="text"
                      className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-full text-black hover:bg-white hover:border-[#3574b8] focus:outline-none focus:border-[#3574b8] active:border-[#3574b8] transition"/>
                  </div>
                </div>

                  <div>
                    <label className="block text-sm mb-1">Email Address *</label>
                    <input
                      type="email"
                      className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-full text-black hover:bg-white hover:border-[#3574b8] focus:outline-none focus:border-[#3574b8] active:border-[#3574b8] transition"/>
                  </div>

                <div>
                  <label className="block text-sm mb-1">Subject *</label>
                  <input
                    type="text"
                    className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-full text-black hover:bg-white hover:border-[#3574b8] focus:outline-none focus:border-[#3574b8] active:border-[#3574b8] transition"/>
                </div>

                <div>
                  <label className="block text-sm mb-1">Write Message *</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl resize-none focus:outline-none flex items-center  justify-center gap-2 border border-gray-300 py-2 text-black hover:bg-white hover:border-[#3574b8] focus:outline-none focus:border-[#3574b8] active:border-[#3574b8] transition"
                  ></textarea>
                </div>

                <button
                  className="mb-6 relative h-12 w-38 bg-[#3574b8] text-[#e6edf8] shadow-2xl rounded-full flex items-center justify-center text-sm font-medium overflow-hidden transition-all
                    before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500
                    after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500
                    hover:before:w-1/2 hover:before:bg-[#14243d]
                    hover:after:w-1/2 hover:after:bg-[#14243d]
                    hover:text-white"
                >
                  <span className="relative z-10">Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map and Subscribe use same width wrapper */}
      <MapEmbed />
      <Subscribe />
    </>
  );
};

export default Contact;
