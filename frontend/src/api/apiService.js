import axios from 'axios';

const API_URL = 'http://localhost:3001/todos/';

async function getAllTasks() {
    const res = await axios.get(API_URL);
    const tasks = res.data.map((task) => { return {...task} });
    return tasks;
}

async function getTasksByDate() {

    const year = 2020;
    const month = 3;

    const res = await axios.get(`${API_URL}?year=${year}&month=${month}`);
    const tasks = res.data.map((task) => { return { ...task } });
    return tasks;
}

export { getAllTasks, getTasksByDate };