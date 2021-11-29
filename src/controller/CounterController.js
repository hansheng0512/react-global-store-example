import React from "react";
import {useCounterStore} from "../global-store/useCounterStore";

export default function CounterController() {
    const [count, setCount] = useCounterStore();
    return (
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
    );
}