import {useEffect, useState} from 'react';
import {Dentist} from "../../type";

const useApiCall = () => {
    const [data, setData] = useState<Dentist[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL_API}`);
                const jsonData = await response.json();

                setData(jsonData);
                setLoading(false);

            } catch (error) {
                console.error(error);
                setError(String(error));
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return {data, loading, error};
};

export default useApiCall;