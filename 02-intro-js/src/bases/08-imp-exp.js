//import heroes, {owners} from "../data/heroes";
import heroes from "../data/heroes";

export const getHeroById = (id) => {
    return heroes.find((hero) => hero.id === id)
}

//console.log(getHeroById(3))

export const getHeroByOwner = (owner) => {
    return heroes.filter((hero) => hero.owner === owner)
}

// console.log(getHeroByOwner('Marvel'))
//console.log(owners);