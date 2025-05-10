// import React from 'react';
// import { Link } from 'react-router-dom';
// import { MapPin, Phone, Mail, Clock,  Instagram, Youtube } from 'lucide-react';
// import Logo from '../../assets/logo';

// const Footer: React.FC = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-primary-blue-950 text-white pt-16 pb-8">
//       <div className="container-custom">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           {/* School Info */}
//           <div>
//             <div className="flex items-center mb-4">
//               <Logo className="w-12 h-12 mr-3" />
//               <div>
//                 <h4 className="font-display text-lg font-bold text-white">PADMALAYA HIGH SCHOOL</h4>
//                 <p className="text-xs text-secondary-yellow-300">Estd. 2001</p>
//               </div>
//             </div>
//             <p className="text-gray-300 mb-4">
//               Recognized by the Government of Telangana, providing quality education since 2001.
//             </p>
//             <div className="flex space-x-3 mt-4">
              
//               <a href="https://www.instagram.com/padmalayahighschool?igsh=cGs0aHp4bzQ2cHJv&utm_source=qr" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
//                 <Instagram size={18} />
//               </a>
//               <a href="https://youtube.com/@padmalayahighschool?si=-x6nOvzVNAlti8q6" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors">
//                 <Youtube size={18} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-display text-lg font-semibold mb-6 text-white">Quick Links</h4>
//             <ul className="space-y-3">
//               <li><Link to="/" className="text-gray-300 hover:text-secondary-yellow-300 transition-colors">Home</Link></li>
//               <li><Link to="/admissions" className="text-gray-300 hover:text-secondary-yellow-300 transition-colors">Admissions</Link></li>
//               <li><Link to="/school-achievements" className="text-gray-300 hover:text-secondary-yellow-300 transition-colors">School Achievements</Link></li>
//               <li><Link to="/academic-achievements" className="text-gray-300 hover:text-secondary-yellow-300 transition-colors">Academic Achievements</Link></li>
//               <li><Link to="/events" className="text-gray-300 hover:text-secondary-yellow-300 transition-colors">Events</Link></li>
//               <li><Link to="/about" className="text-gray-300 hover:text-secondary-yellow-300 transition-colors">About Us</Link></li>
//             </ul>
//           </div>

//           {/* Developed By Section */}
// <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
//   <h4 className="font-display text-xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Developed By</h4>
//   <ul className="space-y-4">
//     <li className="flex items-center space-x-3 hover:text-secondary-yellow-300 transition-all duration-200">
//       <span className="text-secondary-yellow-300 text-lg">👨‍💻</span>
//       <h5 className="text-gray-300 text-base font-medium">Gali Sujan Reddy</h5>
//     </li>
//     <li className="flex items-center space-x-3 hover:text-secondary-yellow-300 transition-all duration-200">
//       <span className="text-secondary-yellow-300 text-lg">👨‍💻</span>
//       <h5 className="text-gray-300 text-base font-medium">Kamishetty Pardiv</h5>
//     </li>
//   </ul>
// </div>


          

//           {/* Contact Info */}
//           <div>
//             <h4 className="font-display text-lg font-semibold mb-6 text-white">Contact Us</h4>
//             <ul className="space-y-4">
//               <li className="flex">
//                 <MapPin className="mr-3 text-secondary-yellow-400 flex-shrink-0" size={20} />
//                 <span className="text-gray-300">Srinivasa Colony Park, near maisamma temple, Srinivasa Colony, Mahbubnagar, Telangana 509001</span>
//               </li>
//               <li className="flex">
//                 <Phone className="mr-3 text-secondary-yellow-400 flex-shrink-0" size={20} />
//                 <span className="text-gray-300">+91 9676967638</span>
//               </li>
//                <li className="flex">
//                 <Phone className="mr-3 text-secondary-yellow-400 flex-shrink-0" size={20} />
//                 <span className="text-gray-300">+91 9676967681</span>
//               </li>
//                <li className="flex">
//                 <Phone className="mr-3 text-secondary-yellow-400 flex-shrink-0" size={20} />
//                 <span className="text-gray-300">+91 9441725960</span>
//               </li>
//               <li className="flex">
//                 <Mail className="mr-3 text-secondary-yellow-400 flex-shrink-0" size={20} />
//                 <a href="mailto:info@padmalayaschool.edu" className="text-gray-300 hover:text-secondary-yellow-300">
//                   info@padmalayaschool.edu
//                 </a>
//               </li>
//               <li className="flex">
//                 <Clock className="mr-3 text-secondary-yellow-400 flex-shrink-0" size={20} />
//                 <span className="text-gray-300">Monday - Saturday: 8:00 AM - 4:00 PM</span>
//               </li>
//             </ul>
//           </div>
//         </div>

        

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
//           <p>© {currentYear} Padmalaya High School. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Youtube } from 'lucide-react';
import Logo from '../../assets/logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1B49] text-white pt-16 pb-8">
      <div className="container-custom px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* School Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo className="w-12 h-12 mr-3" />
              <div>
                <h4 className="font-bold text-lg leading-tight text-white">PADMALAYA HIGH<br />SCHOOL</h4>
                <p className="text-sm text-yellow-400 font-semibold">Estd. 2001</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Recognized by the Government of Telangana, providing quality education since 2001.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/padmalayahighschool?igsh=cGs0aHp4bzQ2cHJv&utm_source=qr"
                className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com/@padmalayahighschool?si=-x6nOvzVNAlti8q6"
                className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-yellow-400 transition">Home</Link></li>
              <li><Link to="/admissions" className="text-gray-300 hover:text-yellow-400 transition">Admissions</Link></li>
              <li><Link to="/school-achievements" className="text-gray-300 hover:text-yellow-400 transition">School Achievements</Link></li>
              <li><Link to="/academic-achievements" className="text-gray-300 hover:text-yellow-400 transition">Academic Achievements</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-yellow-400 transition">Events</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 transition">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex">
                <MapPin className="text-yellow-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-300">
                  Srinivasa Colony Park, near Maisamma Temple,<br />
                  Srinivasa Colony, Mahbubnagar, Telangana 509001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-yellow-400 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-300">+91 9676967638</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-yellow-400 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-300">+91 9676967681</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-yellow-400 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-300">+91 9441725960</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-yellow-400 mr-3 flex-shrink-0" size={20} />
                <a href="mailto:info@padmalayaschool.edu" className="text-gray-300 hover:text-yellow-400 transition">
                  info@padmalayaschool.edu
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="text-yellow-400 mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-300">Mon - Sat: 9:30 AM - 4:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Developed By */}
          <div className="bg-[#111C3B] p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-bold mb-4 text-white border-b border-gray-700 pb-2">Developed By</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-4">
                <img
                  src="https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/Screenshot%202025-05-10%20165026.png?updatedAt=1746876169112"
                  alt="Gali Sujan Reddy"
                  className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                />
                <span className="text-gray-300 font-medium">Gali Sujan Reddy</span>
              </li>
              <li className="flex items-center space-x-4">
                <img
                  src="https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/WhatsApp%20Image%202025-05-10%20at%2016.54.59_ca6d878d.jpg?updatedAt=1746876358685"
                  alt="Kamishetty Pardiv"
                  className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                />
                <span className="text-gray-300 font-medium">Kamishetty Pardiv</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {currentYear} Padmalaya High School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
