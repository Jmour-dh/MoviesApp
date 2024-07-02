import React, { useState } from 'react';

interface FilterSeriesProps {
    onCategoryChange: (category: string) => void;
    onDateRangeChange: (startDate: string, endDate: string) => void;
}

const FilterSeries: React.FC<FilterSeriesProps> = ({ onCategoryChange, onDateRangeChange }) => {
    const [category, setCategory] = useState<string>('popular');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = event.target.value;
        setCategory(selectedCategory);
        onCategoryChange(selectedCategory);
    };

    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedStartDate = event.target.value;
        setStartDate(selectedStartDate);
        onDateRangeChange(selectedStartDate, endDate);
    };

    const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedEndDate = event.target.value;
        setEndDate(selectedEndDate);
        onDateRangeChange(startDate, selectedEndDate);
    };

    return (
        <div className="flex flex-col mt-12 m-3 h-[200px]  bg-gray-200 p-4 rounded-md w-1/5">
            <div className="mb-4">
                <label className="mr-2">Category:</label>
                <select
                    value={category}
                    onChange={handleCategoryChange}
                    className="px-2 py-1 border border-gray-300 rounded-md"
                >
                    <option value="popular">Popular</option>
                    <option value="airing_today">Airing Today</option>
                    <option value="on_the_air">On the Air</option>
                    <option value="top_rated">Top Rated</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="mr-2">Air Date:</label>
                <input
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    className="px-2 py-1 border border-gray-300 rounded-md mb-2"
                />
                <input
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    className="px-2 py-1 border border-gray-300 rounded-md"
                />
            </div>
        </div>
    );
};

export default FilterSeries;
