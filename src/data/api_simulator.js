import DATA from './DATA';

function getDATA(id) {
    // console.log(`inside api. seraching for ${id}`);
    return DATA.filter((collection) => collection.id === id)[0];
}

export default getDATA;