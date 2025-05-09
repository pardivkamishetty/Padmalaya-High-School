import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Check,  } from 'lucide-react';
import { RegistrationFormData } from '../../types';

const RegistrationForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  

  const onSubmit = (data: RegistrationFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', data);
     
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

 

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-3 rounded-full">
            <Check className="h-10 w-10 text-green-600" />
          </div>
        </div>
        <h3 className="text-2xl font-display font-bold text-green-800 mb-2">Registration Successful!</h3>
        <p className="text-green-700 mb-6">
          Thank you for registering with Padmalaya High School. We have sent a confirmation email with further instructions.
        </p>
        <p className="text-gray-600">
          Our admissions team will review your application and contact you within 2-3 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-md p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Student Name */}
        <div>
          <label htmlFor="studentName" className="form-label">
            Student's Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="studentName"
            type="text"
            className={`form-input ${errors.studentName ? 'border-red-500' : ''}`}
            placeholder="Enter student's full name"
            {...register('studentName', { required: 'Student name is required' })}
          />
          {errors.studentName && (
            <p className="mt-1 text-sm text-red-500">{errors.studentName.message}</p>
          )}
        </div>

        {/* Parent Name */}
        <div>
          <label htmlFor="parentName" className="form-label">
            Parent/Guardian's Name <span className="text-red-500">*</span>
          </label>
          <input
            id="parentName"
            type="text"
            className={`form-input ${errors.parentName ? 'border-red-500' : ''}`}
            placeholder="Enter parent/guardian's name"
            {...register('parentName', { required: 'Parent/Guardian name is required' })}
          />
          {errors.parentName && (
            <p className="mt-1 text-sm text-red-500">{errors.parentName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="form-label">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            className={`form-input ${errors.email ? 'border-red-500' : ''}`}
            placeholder="Enter email address"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please enter a valid email address'
              }
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="form-label">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
            placeholder="Enter phone number"
            {...register('phone', { 
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Please enter a valid 10-digit phone number'
              }
            })}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label htmlFor="address" className="form-label">
            Address <span className="text-red-500">*</span>
          </label>
          <textarea
            id="address"
            className={`form-input ${errors.address ? 'border-red-500' : ''}`}
            rows={3}
            placeholder="Enter complete address"
            {...register('address', { required: 'Address is required' })}
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>
          )}
        </div>

        {/* Grade */}
        <div>
          <label htmlFor="grade" className="form-label">
            Grade Applying For <span className="text-red-500">*</span>
          </label>
          <select
            id="grade"
            className={`form-input ${errors.grade ? 'border-red-500' : ''}`}
            {...register('grade', { required: 'Grade is required' })}
          >
            <option value="">Select Grade</option>
            <option value="6">6th Grade</option>
            <option value="7">7th Grade</option>
            <option value="8">8th Grade</option>
            <option value="9">9th Grade</option>
            <option value="10">10th Grade</option>
          </select>
          {errors.grade && (
            <p className="mt-1 text-sm text-red-500">{errors.grade.message}</p>
          )}
        </div>

        {/* Academic Year */}
        <div>
          <label htmlFor="academicYear" className="form-label">
            Academic Year <span className="text-red-500">*</span>
          </label>
          <select
            id="academicYear"
            className={`form-input ${errors.academicYear ? 'border-red-500' : ''}`}
            {...register('academicYear', { required: 'Academic year is required' })}
          >
            <option value="">Select Academic Year</option>
            <option value="2024-2025">2024-2025</option>
            <option value="2025-2026">2025-2026</option>
          </select>
          {errors.academicYear && (
            <p className="mt-1 text-sm text-red-500">{errors.academicYear.message}</p>
          )}
        </div>

        {/* Previous School */}
        <div className="md:col-span-2">
          <label htmlFor="previousSchool" className="form-label">
            Previous School (if applicable)
          </label>
          <input
            id="previousSchool"
            type="text"
            className="form-input"
            placeholder="Enter previous school name"
            {...register('previousSchool')}
          />
        </div>

        
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full py-3 text-lg"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;