import {useCounterStore} from "../global-store/useCounterStore";

export const DummyComp = () => {

    const [count] = useCounterStore()

    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
}