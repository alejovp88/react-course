import {getHeroById}  from './bases/08-imp-exp'

/*
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve();
        //tarea

        const hero = getHeroById(2)
        console.log('2 sec')
        console.log(hero)
        //resolve(hero)
        reject('not found');
    }, 2000)
});

promesa.then(() =>{
    console.log('then de la promesa');
})
.catch(err => {
    console.warn(err)
})*/

const getHeroByIdAsync = (id) => {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id)
            if(hero) {
                resolve(hero)
            } else {
                reject('not found');
            }

        }, 2000)
    });
}

getHeroByIdAsync(10)
    .then(hero => console.log('Hero', hero))
    .catch((err) => {
        console.warn(err)
    });