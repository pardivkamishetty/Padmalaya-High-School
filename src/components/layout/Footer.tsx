import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Logo from '../../assets/logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-blue-950 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* School Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo className="w-12 h-12 mr-3" />
              <div>
                <h4 className="font-display text-lg font-bold text-white">PADMALAYA HIGH SCHOOL</h4>
                <p className="text-xs text-secondary-yellow-300">Estd. 2001</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Recognized by the Government of Telangana, providing quality education since 2001.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-secondary-yellow-300 transition-colors">Home</Link></li>
              <li><Link to="/admissions" className="text-gray-300 hover:text-secondary-yellow-300 transition-colors">Admissions</Link></li>
              <li><Link to="/school-achievements" className="text-gray-300 hover:text-secondary-yellow-300 transition-colors">School Achievements</Link></li>
              <li><Link to="/academic-achievements" className="text-gray-300 hover:text-secondary-yellow-300 transition-colors">Academic Achievements</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-secondary-yellow-300 transition-colors">Events</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-secondary-yellow-300 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Downloads */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-white">Downloads</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-secondary-yellow-300 transition-colors">School Prospectus</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary-yellow-300 transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary-yellow-300 transition-colors">Holiday List</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary-yellow-300 transition-colors">Fee Structure</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary-yellow-300 transition-colors">Admission Form</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-3 text-secondary-yellow-400 flex-shrink-0" size={20} />
                <span className="text-gray-300">Srinivasa Colony Park, near maisamma temple, Srinivasa Colony, Mahbubnagar, Telangana 509001</span>
              </li>
              <li className="flex">
                <Phone className="mr-3 text-secondary-yellow-400 flex-shrink-0" size={20} />
                <span className="text-gray-300">+91 9676967638</span>
              </li>
              <li className="flex">
                <Mail className="mr-3 text-secondary-yellow-400 flex-shrink-0" size={20} />
                <a href="mailto:info@padmalayaschool.edu" className="text-gray-300 hover:text-secondary-yellow-300">
                  info@padmalayaschool.edu
                </a>
              </li>
              <li className="flex">
                <Clock className="mr-3 text-secondary-yellow-400 flex-shrink-0" size={20} />
                <span className="text-gray-300">Monday - Saturday: 8:00 AM - 4:00 PM</span>
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