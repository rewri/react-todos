import React, { useState, useEffect } from 'react';

import * as api from './api/apiService';
import Spinner from './components/Spinner';
import ButtonContainer from './components/ButtonContainer';
import Button from './components/Button';
import Summary from './components/Summary';
import Todos from './components/Todos';
import Todo from './components/Todo';

export default function App() {

    const FILTER_YEARS = [2019, 2020, 2021];
    const FILTER_MONTHS = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

    const [allTasks, setAllTasks] = useState([]);
    const [selectedYear, setSelectedYear] = useState(2019);
    const [selectedMonth, setSelectedMonth] = useState(1);

    useEffect(() => {
        
        const getTasks = async () => {
            const tasks = await api.getAllTasks(selectedYear, selectedMonth);
            setAllTasks(tasks);
            console.log(tasks);        }
        getTasks();
    }, [selectedYear, selectedMonth]);
    
    const done = allTasks.filter((task) => {
        return task.done === true;
    });

    function handleYearFilter(newYear) {
        setSelectedYear(newYear);
    }

    function handleMonthFilter(newMonth) {
        setSelectedMonth(newMonth);
    }

    return <div className="container">
        <h1 className="center">React ToDos</h1>

        {allTasks.length === 0 && <Spinner /> }

        { allTasks.length > 0 && 
            <div> 
                <ButtonContainer >          
                    {FILTER_YEARS.map((year, index) => {
                        return (<Button key={index} label={year} value={year} selected={selectedYear} onChange={handleYearFilter}></Button>);
                    })}
                </ButtonContainer > 
                <ButtonContainer >
                    {FILTER_MONTHS.map((month, index) => {
                        return (<Button key={index} label={month} value={index + 1} selected={selectedMonth} onChange={handleMonthFilter}></Button>);
                    })}
                </ButtonContainer > 

                <Summary total={allTasks.length} done={done.length} /> 

                <Todos> 
                    {allTasks.map(({ id, date, description, done }) => {
                        return (
                            <Todo key={id} date={date.split('-').reverse().join('/')} description={description} status={done}></Todo>
                        );
                    })}
                </Todos>
            </div> 
        }

    </div>

}
