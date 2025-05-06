import React from 'react';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterSectionProps {
  title: string;
  options: FilterOption[];
  selected: string;
  onChange: (value: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  options,
  selected,
  onChange
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium text-gray-700 mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selected === option.value
                ? 'bg-primary-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;