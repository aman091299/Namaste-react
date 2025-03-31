import { useEffect, useState } from "react";

const useOnline=function(){
const [isOnline,setIsOnline]=useState(true);

const onlineHandler=function(){
setIsOnline(true);

}
const offlineHandler=function(){
    setIsOnline(false);
}
useEffect(()=>{
 window.addEventListener('online',onlineHandler);
 window.addEventListener('offline',offlineHandler);
 return ()=>{
    removeEventListener('online',onlineHandler)
    removeEventListener('offline',offlineHandler)
 }
},[])
return  isOnline;



}


export default useOnline;