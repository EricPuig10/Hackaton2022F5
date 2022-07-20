import Searcher from "../Searcher/Searcher";
import Data from "../NavBar/data.json";

export const NavBar = () =>{

    return (
        <>
        <Searcher Data={Data} Placeholder="Please enter the name "/>
        </>
    )
    
}