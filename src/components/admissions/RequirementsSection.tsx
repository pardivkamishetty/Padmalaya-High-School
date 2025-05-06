import React from 'react';
import { CheckCircle, FileText, Calendar, Clock } from 'lucide-react';

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
              Birth certificate (original and photocopy)
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-500 h-4 w-4 mr-2" />
              Transfer certificate from previous school
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-500 h-4 w-4 mr-2" />
              Report cards of previous two years
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-500 h-4 w-4 mr-2" />
              Passport-sized photographs (4 copies)
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-green-500 h-4 w-4 mr-2" />
              Aadhar card of student and parents (photocopy)
            </li>
          </ul>
        </div>
        
        {/* Admission Process */}
        <div>
          <div className="flex items-start mb-4">
            <Calendar className="text-primary-blue-600 mr-3 mt-1 flex-shrink-0" />
            <h4 className="text-lg font-medium text-primary-blue-800">Admission Process</h4>
          </div>
          <ol className="ml-9 space-y-4 text-gray-700">
            <li className="flex">
              <span className="bg-primary-blue-100 text-primary-blue-800 h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
              <div>
                <p className="font-medium">Online Registration</p>
                <p className="text-sm text-gray-600">
                  Complete the online registration form with all required details.
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-primary-blue-100 text-primary-blue-800 h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
              <div>
                <p className="font-medium">Document Submission</p>
                <p className="text-sm text-gray-600">
                  Submit all required documents either online or in person.
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-primary-blue-100 text-primary-blue-800 h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
              <div>
                <p className="font-medium">Entrance Assessment</p>
                <p className="text-sm text-gray-600">
                  Student may be required to take an entrance assessment (varies by grade level).
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-primary-blue-100 text-primary-blue-800 h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
              <div>
                <p className="font-medium">Interview</p>
                <p className="text-sm text-gray-600">
                  Parents and student will be called for an interview with the principal.
                </p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-primary-blue-100 text-primary-blue-800 h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">5</span>
              <div>
                <p className="font-medium">Confirmation & Fee Payment</p>
                <p className="text-sm text-gray-600">
                  If selected, complete the admission by paying the required fees.
                </p>
              </div>
            </li>
          </ol>
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
            <div className="flex justify-between pb-2 border-b border-gray-100">
              <span>Entrance Assessments</span>
              <span className="font-medium">April 10-15, 2025</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-gray-100">
              <span>Results Announcement</span>
              <span className="font-medium">April 25, 2025</span>
            </div>
            <div className="flex justify-between">
              <span>Fee Payment Deadline</span>
              <span className="font-medium">May 10, 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementsSection;