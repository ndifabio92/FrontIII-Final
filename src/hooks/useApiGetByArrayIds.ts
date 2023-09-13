import {useEffect, useState} from 'react';
import {Dentist} from "../../type";

const useApiGetByArrayIds = (ids: string[]) => {
    const [data, setData] = useState<Dentist[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const fetchDataForUrl = async (id: string) => {
                    const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL_API}/${id}`);
                    return await response.json();
                };

                const fetchDataArray = async () => {
                    const dataArray: Dentist[] = [];
                    for (const id of ids) {
                        const jsonData = await fetchDataForUrl(id);
                        dataArray.push(jsonData);
                    }
                    setData(dataArray);
                };

                await fetchDataArray();
                setLoading(false);

            } catch (error) {
                setError(String(error));
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};

export default useApiGetByArrayIds;