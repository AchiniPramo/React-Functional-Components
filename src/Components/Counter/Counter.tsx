import './Counter.css'
import {Message} from "../Message/Message";
import {useDispatch, useSelector} from "react-redux";
import {CounterState} from "../../slices/counterSlice";
import {decrement, increment} from "../../actions/counterActions";

export function Counter() {
    /*const [count, setCount] = useState(0);

    useEffect(() => {
        alert("ComponentDidMount: " +
            "Component has been mounted! Props: " + props.data)

        return () => {
            alert("ComponentWillUnmount: " +
                "Component is being removed!")
        }

    }, []); //Run only once

    useEffect(() => {
        alert("ComponentDidUpdate: " +
        "Count has been updated! ")
    }, [count]); // Run each time when count changes

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    }

    const [state, dispatch] = useReducer(counterReducer, {
        count: 0,
        error: null
    });*/

    const dispatch = useDispatch();

    const count = useSelector((state: CounterState) => state.count);
    const error = useSelector((state: CounterState) => state.error);

    return (
        <div className="counter">
            <h1>React Counter (Functional Components)</h1>
            <h2>Count: {count}</h2>
            {error && <p className="error">{error}</p>}
            <div>
                <button className="button"
                        onClick={() => dispatch(increment())}> +
                </button>
                <button className="button"
                        onClick={() => dispatch(decrement())}> -
                </button>
            </div>
            <Message/>
        </div>
    );
}
