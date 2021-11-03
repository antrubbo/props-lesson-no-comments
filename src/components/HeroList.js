import { Component } from "react";
import HeroCard from "./HeroCard";
import superHeroes from "../data/superHeroes";

class HeroList extends Component{
    constructor(){
        super()
    }
    
    render(){
        let allHeroes = superHeroes.map((hero, i) => <HeroCard key={hero.name + i} hero={hero}/>)
        
        return (
            <div id="heroesContainer">
                {allHeroes}
            </div>
        )
    }
}

export default HeroList