import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-2 md:gap-y-8 mx-10 my-10 p-8">
        <div className="menu">
          <ul>

            <li className="mb-4">
              <a href="#about" >About</a>
            </li>
            <li className="mb-4">
              <a href="#findUs" >Find Us</a>
            </li>
            <li className="mb-4">
              <a href="#services" >Services</a>
            </li>
            <li className="mb-4">
              <a href="#services" >Trainings</a>
            </li>
            <li className="mb-4">
              <a href="#" >Team</a>
            </li>
            <li className="mb-4">
              <a href="#" >FAQs</a>
            </li>
            <li className="mb-4">
              <a href="#" >Careers</a>
            </li>
          </ul>
        </div>
        <div id="contact">
          <h1 className="text-2xl font-semibold mb-4">Contact</h1>
          <p className="mb-2">Tridevi Marg, Thamel</p>
          <p className="mb-2">Kathmandu, Nepal</p>
          <p className="mb-2"><a href="mailto:info@himalayanjava.com" className="underline">info@himalayanjava.com</a></p>
          <p className="mb-2">+977-[0]1-4435171</p>
        </div>
        <div className="map">
          <div>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.241257826503!2d85.3091550149234!3d27.712336982787973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199cca63eacf%3A0xe5313d4d55f28718!2sTridevi%20Marg%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1606895036582!5m2!1sen!2snp"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen=""
              arial-hidden="false"

            ></iframe>
          </div>
        </div>



      </div>


      {/* Bottom Section: Copyright and Social Media */}
      <div className="col-span-3 flex md:flex-col md:gap-y-4 justify-between items-center  border-t border-gray-200 mx-10 my-10 p-8">
        <p className="text-black text-xs">Copyright © 2021 Himalayan Java </p>
        <div className="flex space-x-4 text-blue-gray-500">
          <a href="#" className="hover:text-gray-800" style={{ color: '#4267B2' }}><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-800" style={{ color: 'red' }}><FaYoutube /></a>
          <a href="#" className="hover:text-gray-800" style={{ color: '#C13584' }}><FaInstagram /></a>
        </div>
        <p className="text-black text-xs">Created by Brandbuilder</p>
      </div>
    </>
  );
};

export default Footer;
