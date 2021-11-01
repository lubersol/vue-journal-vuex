import jornalApi from '@/api/journalApi'
// export const myAction = async () => {

// }

export const loadEntries = async ({ commit }) => {

    const { data } = await jornalApi.get('/entries.json')
    //console.log(data);
    const entries = []
    for( let id of Object.keys(data) ) {
        entries.push({
            id, 
            ...data[id]
        })
    }
    // console.log(entries);
    commit('setEntries', entries)
}

export const updateEntry = async (/*{ commit }*/) => {

}

export const createEntry = async (/*{ commit }*/) => {

}
