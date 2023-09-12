import useApiCall from "../hooks/useApiCall.ts";
import {CardItem} from "../components/UI/Card/CardItem.tsx";
import Loader from "../components/UI/Loader/Loader.tsx";
import './index.css'


const Home = () => {
    const {data, loading, error} = useApiCall();
    error && console.error(error);
    return (
        <div className="container-list">
            {
                loading ? <Loader isLoading={loading}/> :
                data.map(item => (
                        <CardItem key={item.id} data={item}/>
                    )
                )
            }
        </div>
    )
}

export default Home;