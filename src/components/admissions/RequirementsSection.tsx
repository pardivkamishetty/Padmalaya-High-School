import React from 'react';
import { CheckCircle, FileText,  Clock } from 'lucide-react';

const RequirementsSection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-display font-semibold mb-6 text-primary-blue-900">
        Admission Requirements
      </h3>
      
      <div className="space-y-6">
        {/* Required Documents */}
        <div>
          <div className="flex items-start mb-4">
            <FileText className="text-primary-blue-600 mr-3 mt-1 flex-shrink-0" />
            <h4 className="text-lg font-medium text-primary-blue-800">Required Documents</h4>
          </div>
          <ul className="ml-9 space-y-2 text-gray-700">
          
            <li className="flex items-center">
              <CheckCircle className="text-green-500 h-4 w-4 mr-2" />
              Transfer certificate from previous school
            </li>
            
            <li className="flex items-center">
              <CheckCircle className="text-green-500 h-4 w-4 mr-2" />
              Passport-sized photographs (4 copies)
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-500 h-4 w-4 mr-2" />
              Aadhar card of student (photocopy)
            </li>
          </ul>
        </div>
        
        
        
        {/* Important Dates */}
        <div>
          <div className="flex items-start mb-4">
            <Clock className="text-primary-blue-600 mr-3 mt-1 flex-shrink-0" />
            <h4 className="text-lg font-medium text-primary-blue-800">Important Dates</h4>
          </div>
          <div className="ml-9 text-gray-700 space-y-3">
            <div className="flex justify-between pb-2 border-b border-gray-100">
              <span>Registration Opens</span>
              <span className="font-medium">January 15, 2025</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-gray-100">
              <span>Last Date for Registration</span>
              <span className="font-medium">March 31, 2025</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementsSection;