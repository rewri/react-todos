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
    const [selectedTodos, setSelectedTodos] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            const tasks = await api.getAllTasks();
            setAllTasks(tasks);
        }
        getTasks();
    }, []);

    return <div className="container">
        <h1 className="center">React ToDos</h1>

        {allTasks.length === 0 && <Spinner /> }

        { allTasks.length > 0 && 
            <div> 
                <ButtonContainer >          
                    {FILTER_YEARS.map((year, index) => {
                        return (<Button key={index} label={year} value={year}></Button>);
                    })}
                </ButtonContainer > 
                <ButtonContainer >
                    {FILTER_MONTHS.map((month, index) => {
                        return (<Button key={index} label={month} value={month + 1}></Button>);
                    })}
                </ButtonContainer > 

                <Summary /> 

                <Todos> 
                    {allTasks.map(({ id, date, description, done }) => {
                        return (<Todo key={id} date={date} description={description} status={done}></Todo>);
                    })}
                </Todos>
            </div> 
        }

    </div>

}
