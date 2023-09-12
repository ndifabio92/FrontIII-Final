import Loader from "../components/UI/Loader/Loader.tsx";
import {CardItem} from "../components/UI/Card/CardItem.tsx";
import {useParams} from "react-router-dom";
import useApiGetById from "../hooks/useApiGetById.ts";
import './index.css'

const Dentist = () => {
    const {id} = useParams();
    const {data, loading, error} = useApiGetById(id);
    error && console.error(error);

    return (
        <div className="container-list">
            {
                loading
                    ? <Loader isLoading={loading}/>
                    : data !== undefined
                        ? <CardItem key={data.id} data={data} detail={true}/>
                        : null
            }
        </div>
    )
}

export default Dentist;