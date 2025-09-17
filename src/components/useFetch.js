import { useEffect, useState } from 'react';
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030/";

function validateField(value, fieldName, minLength = 3, maxLength = 20) {
    const trimmed = value.trim();

    if (!trimmed) {
        return `Field '${fieldName}' cannot be empty`;
    }
    if (trimmed.length < minLength) {
        return `Minimum number of characters — ${minLength}`;
    }
    if (trimmed.length > maxLength) {
        return `Maximum number of characters — ${maxLength}`;
    }

    return ""; 
}

export const useFetch = (url) => {
    const [input, setInput] = useState('');
    const [secondInput, setSecondInput] = useState('');
    const [error, setError] = useState('');
    const [secondError, setSecondError] = useState('');
    const [isPostLoading, setIsPostLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [addDone, setAddDone] = useState(false);

    const addUsers = async () => {
        const nameError = validateField(input, "Name");
        const phoneError = validateField(secondInput, "Phone number");

        setError(nameError);
        setSecondError(phoneError);

        if (nameError || phoneError) return;

        setIsPostLoading(true);

        try {
            const payload = { name: input.trim(), mobilePhone: secondInput.trim() };
            const response = await axios.post(url, payload);
            setUsers((prev) => [...prev, response.data]);

            setInput('');
            setSecondInput('');
            setError('');
            setSecondError('');
            setAddDone(true)
        } catch (error) {
            console.error("Error adding users:", error);
        } finally {
            setIsPostLoading(false); 
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => setAddDone(false), 3000);
        return () => clearTimeout(timer);
    }, [addDone])

    return {input, addUsers, secondInput, setSecondInput, setInput, isPostLoading, error, secondError, setSecondError, setError, addDone};
}

