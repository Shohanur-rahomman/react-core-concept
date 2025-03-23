// export default function Todo({tusk,isDone}) {
//     if (isDone) {
//         return <li>Done : { tusk}</li>
//     } else {
//         return <li> do now : { tusk}</li>
//   }
// }
// export default function Todo({tusk,isDone}) {
//     return (
//         <li>
//             {isDone ? `Done: ${tusk}` : `Do now: ${tusk}`}
//         </li>
//     )
// }
// export default function Todo ({tusk,isDone}) {
//     return (
//         <li>
//             {isDone ? `Done : ${tusk}` : `Do now : ${tusk}`}
//         </li>
//     )
// }

export default function Todo({tusk,isDone}) {
    if (isDone) {
        return <li> Done :{ tusk}</li>
    } else {
        return <li>Do now : { tusk}</li>
    }
}