import React from 'react';
import { Tabs, Tab } from '@mui/material';

const Filter = ({ filters, selectedFilter, setSelectedFilter }) => {
    const handleTabChange = (event, newValue) => {
        setSelectedFilter(newValue);
    };

    return (
        <Tabs value={selectedFilter} onChange={handleTabChange}>
            {filters.map((filter, index) => (
                <Tab 
                    key={index} 
                    label={filter.label} 
                    sx={{
                        color: 'white',
                        fontFamily: 'Poppins',
                    }}
                />
            ))}
        </Tabs>
    );
};

export default Filter;
