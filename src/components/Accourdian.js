import {useState} from 'react'
import Section from './Section';

const Accordian=()=>{
    const [isVisible,setIsVisible]=useState('About');

    return(
        <div>
       <Section  setIsVisible={()=>setIsVisible(isVisible==='About'?'':'About')}  isVisible={isVisible==='About'} description={"this is about section This is the collapsible content. It can be any element or React component you like. "} title={"About  hh   n This is "}/>
        <Section setIsVisible={()=>setIsVisible(isVisible==='Career'? '' :'Career')}  isVisible={isVisible==='Career'} description={"this is carrer page This is the collapsible content. It can be any element or React component you like."} title={"Carrersss   cntent. It can be any element or R"}/>
        <Section  setIsVisible={()=>setIsVisible(isVisible==='Team Work'?'':'Team Work')}  isVisible={isVisible==='Team Work'} description={"this is team  collapsible content. It can be any element or React component you like."} title={"Team Work  ntent. It can be any element or Rjjj"}/>
        </div>
    )
}

export default Accordian;