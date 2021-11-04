import jornalApi from '@/api/journalApi'
// export const myAction = async () => {

// }

export const loadEntries = async ({ commit }) => {

    const { data } = await jornalApi.get('/entries.json')

    if( !data ) {
        commit('setEntries', [])
        return
    }

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

export const updateEntry = async ({ commit }, entry) => {

    // Extraer lo que necesitamos (quitar el id)
    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }

    const resp = await jornalApi.put(`/entries/${entry.id}.json`, dataToSave)
    console.log(resp);

    //commit de una mutacion -> updateEntry
    commit('updateEntry', {...entry})
}

export const createEntry = async ({ commit }, entry ) => {
    // dataToSave
    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }

    const { data } = await jornalApi.post(`entries.json`, dataToSave)

    dataToSave.id = data.name
    
    commit('addEntry', dataToSave) 

    return data.name;
}

export const deleteEntry = async ({ commit}, id ) => {
    
    await jornalApi.delete(`/entries/${id}.json`)
    commit('deleteEntry', id)

    return id
}

