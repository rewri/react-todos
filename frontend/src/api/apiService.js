import axios from 'axios';

const API_URL = 'http://localhost:3001/todos/';

async function getAllTasks(year, month) {
    const selectedYear = year || 2020;
    const selectedMonth = month || 3;
    const res = await axios.get(`${API_URL}?year=${selectedYear}&month=${selectedMonth}`);
    const tasks = res.data.map((task) => { return { ...task } });
    return tasks.sort(function (a, b) {
        const dateA = new Date(a.date), dateB = new Date(b.date);
        return dateA - dateB;
    });
}

export { getAllTasks };