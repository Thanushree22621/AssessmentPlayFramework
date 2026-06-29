//Generic  timestamp function

import { time } from "node:console";

export function getTimestamp() {
    return Date.now();
}

//Lead data generator
export function generateuniquelead(data){
    const timestamp = Date.now();

    return{
        ...data,
        firstName:data.firstName+timestamp,
        email:`user${timestamp}@mail.com`
    };
}

//campaign data generator
export function generateuniquecampaign(data){
    const timestamp = Date.now();

    return{
        ...data,
        header:{
            ...data.header,
            nametextfield: `${data.header.nametextfield}_${timestamp}`
            
        }
    };
}
export function generateuniqueaccount(data){
    const timestamp = Date.now();

    return{
        ...data,
        name: `${data.name}_${timestamp}`

    };
}