import ReactDOM from "react-dom/client";
import Body from './components/Body'
import Header from './components/Header'

const FoodApp=()=>{
  return <>
     <Header/>
     <Body/>
  </>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FoodApp />);
