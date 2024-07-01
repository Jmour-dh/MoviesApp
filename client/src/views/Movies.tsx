import React, { useState } from 'react';
import AllMovies from '../components/AllMovies';
import Filter from '../components/Filter';

const Movies: React.FC = () => {
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
            <Filter onCategoryChange={handleCategoryChange} onDateRangeChange={handleDateRangeChange} />
            <div className="flex-grow ml-4">
                <AllMovies selectedCategory={selectedCategory} startDate={startDate} endDate={endDate} />
            </div>
        </div>
    );
};

export default Movies;
