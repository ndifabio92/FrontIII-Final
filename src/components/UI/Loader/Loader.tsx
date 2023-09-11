import logo from '../../../assets/images/loader.jpg'
import './loader.css';

const Loader = ({ isLoading }: {isLoading?: boolean})  => isLoading && (
    <div className="loaderContainer">
        <img src={logo} alt="" className='spinner img' />
    </div>
);

export default Loader;