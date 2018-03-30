import { observer } from "mobx-react";
import { observable } from "mobx";

let timerData = observable({
    secondsPassed: 0
});

setInterval(() => {
    timerData.secondsPassed++;
}, 1000);

export  { timerData as timerData };