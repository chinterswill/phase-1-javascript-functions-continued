// code your solution here
function saturdayFun(activity='roller-skate'){
    return(`This Saturday, I want to ${activity}!`);
}

saturdayFun();
saturdayFun('bathe my dog');

function mondayWork(action='go to the office'){
    return(`This Monday, I will ${action}.`);
}
mondayWork();
mondayWork('work from home');

let wrapAdjective = function(style="*") {
    return function(adj="special") {
        return `You are ${style}${adj}${style}!`
    }

}