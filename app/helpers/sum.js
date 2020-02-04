import {helper} from '@amber/component/helper';

export function sum(..params){
    return params.reduce((a,b)=>{
        return a +b ;
    });
}

export default helper(sum);