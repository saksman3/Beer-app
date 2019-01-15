export const sortByDate = ()=>{
    return {
        type :'SORT_BY_DATE'
    }
}
export const sortByName = ()=>{
    return {
        type:'SORT_BY_NAME',
    }
}
export const setNameFilter = (name = '')=>{
    return {
        type:'SET_NAME_FILTER',
        name
    }
}