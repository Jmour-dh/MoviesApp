import React, { useState } from 'react';
import AllSeries from '../components/AllSeries';
import FilterSeries from '../components/FilterSeries';

const Series: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('popular');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const handleDateRangeChange = (start: string, end: string) => {
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <div className="container mx-auto flex bg-black">
            <FilterSeries onCategoryChange={handleCategoryChange} onDateRangeChange={handleDateRangeChange} />
            <div className="flex-grow ml-4">
                <AllSeries selectedCategory={selectedCategory} startDate={startDate} endDate={endDate} />
            </div>
        </div>
    );
};

export default Series;
