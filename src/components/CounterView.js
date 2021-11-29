import {useCounterStore} from "../global-store/useCounterStore";

export default function CounterView() {

    const [count] = useCounterStore();
    return (
        <p>You clicked {count} times</p>
    );

}