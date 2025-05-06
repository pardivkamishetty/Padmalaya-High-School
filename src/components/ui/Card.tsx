import React from 'react';

interface CardProps {
  title?: string;
  image?: string;
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, image, className = '', children }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title || 'Card image'} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>}
        {children}
      </div>
    </div>
  );
};

export default Card;