import Loader from "../components/UI/Loader/Loader.tsx";
import {CardItem} from "../components/UI/Card/CardItem.tsx";
import useApiGetByArrayIds from "../hooks/useApiGetByArrayIds.ts";
import './index.css'
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


const Favorite = () => {
    const navigate = useNavigate();
    const ids = JSON.parse(localStorage.getItem('ids') || '[]');
    const {data, loading, error} = useApiGetByArrayIds(ids);
    error && console.error(error)

    useEffect(() => {
        if (ids.length === 0) {
            navigate("/home");
        }
    }, [ids, navigate]);
    return (
        <div className="container-list">
            {
                loading ? <Loader isLoading={loading}/> :
                    data.map(item => (
                            <CardItem key={item.id} data={item} detail/>
                        )
                    )
            }
        </div>
    )
}

export default Favorite;