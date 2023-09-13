import './App.css'
import {Navigation} from "./routes/Navigation.tsx";
import {useColorContext} from "./components/Context/Context.tsx";

const App = () => {
    const { backgroundColor } = useColorContext();
    return (
        <div style={{backgroundColor: backgroundColor}}>
            <Navigation/>
        </div>
    )
}

export default App
