import axios from "axios";
import { RootObject } from "./interfaces/IReddit";

export function printReditDataToConsole(){
    const url = 'https://www.reddit.com/r/typescript.json';

    axios.get(url).then(res=>{
        const data : RootObject = res.data;
        data.data.children.forEach(child => {
            console.log(`title : ${child.data.title}`);
        });
        
    }).catch(err=>{
        console.error(err);
    })
}

// export function printReditDataToConsole(){
//     const url = 'https://www.reddit.com/r/typescript.json';

//     axios.get(url).then(res=>{
//         console.log(res.data);
//     }).catch(err=>{
//         console.error(err);
//     })
// }