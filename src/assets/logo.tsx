import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  return (
    <img
      src="https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/1%20school%20logo/1%20Padmalaya-High-School-Logo.png?updatedAt=1746513026783"
      alt="Padmalaya High School Logo"
      className={className}
    />
  );
};

export default Logo;