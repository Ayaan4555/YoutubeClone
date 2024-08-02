export const API_KEY = 'AIzaSyArjdrCWUR_r7SrmRj9S4iQm2pQVxPdF6U';

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    } 
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}