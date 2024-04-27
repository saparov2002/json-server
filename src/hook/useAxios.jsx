import axios from 'axios';
import { useEffect, useState } from 'react';

const env = process.env.REACT_ENV_FILE;

const useAxios = (URL) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`${env}${URL}`)
            .then(res => setData(res.data)) // res.data deb o'zgartirdik
            .catch(err => console.error('Error fetching data:', err)); // Errorni console.error orqali chiqaramiz
    }, []);
    return data;
};

export default useAxios;