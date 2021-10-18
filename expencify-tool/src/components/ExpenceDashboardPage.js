import React from "react";
import ExpenceList from "./ExpenceList";
import ExpenceListFilters from "./ExpenceListFilters";

const ExpenceDashboardPage = () => (
    <div>
        <ExpenceListFilters /> 
        <ExpenceList />
        
    </div>
);

export default ExpenceDashboardPage;