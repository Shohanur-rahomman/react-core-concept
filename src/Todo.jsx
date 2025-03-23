function Todo({tusk,isDone}) {
    if (isDone) {
        return <li>Done : { tusk}</li>
    } else {
        return <li> do now : { tusk}</li>
  }
}
 function Todo1({tusk,isDone}) {
    return (
        <li>
            {isDone ? `Done: ${tusk}` : `Do now: ${tusk}`}
        </li>
    )
}
 function Todo2 ({tusk,isDone}) {
    return (
        <li>
            {isDone ? `Done : ${tusk}` : `Do now : ${tusk}`}
        </li>
    )
}
 function Todo3({ tusk, isDone, time = 0}) {
    return isDone ? <li>Done : {tusk} time : {time} </li> : <li>{ tusk}</li>
}

 function Todo4({ tusk, isDone, time = 0 }) {
    if (isDone) {
        return <li> Done :{tusk} Duration: {time}</li>
    } else {
        return <li>Do now : {tusk}</li>
    }
}

 function Todo5({tusk,isDone,time= 0}) {
    return isDone && <li> Done {tusk} time : {time}</li>
}

function Todo6({tusk,isDone,time= 0}) {
    return !isDone || <li> Done {tusk} time : {time}</li>
}

 function Todo7({tusk,isDone}) {
    if (isDone) {
        return null
    } else {
        return <li> do now : { tusk}</li>
  }
}

export default function Todo8({ tusk, isDone, time }) {
    
    const displayTime = time ? time : 100
    
    let result;

    if (isDone) {
        result = <li>Done : {tusk} time : { displayTime}</li>
    } else {
        result = <li> do now : {tusk} time : {displayTime }</li>
    }
    return result
}