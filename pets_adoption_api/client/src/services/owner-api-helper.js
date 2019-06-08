import axios from 'axios'

const URL = "http://localhost:4567"

const api = axios.create({
    baseURL:   `${URL}/owners`
})


export const fecthAllOwners = async ()=>{
    try {
       const resp = await api.get("/") 
       return resp.data
    } catch (error) {
        console.log(error)
    }
     
 }
 export const createOwner = async (data) => {
    try {
        const resp = await api.post('/', data)
        return resp.data
    } catch (error) {
        console.log(error)
    }
}
 
 export const ownerDeletion = async (id)=>{
     try {
        const resp = await api.delete(`/${id}`) 
        return resp.data
     } catch (error) {
         console.log(error)
     }
      
  }
 
  export const ownerUpdate = async (id,data)=>{
     try {
         const resp = await api.put(`/${id}`, data)
         console.log(resp)
         return resp.data
     } catch (error) {
         console.log(error)
     }
 }
     
 export const setOwnerToPet = async (ownerId, petId)=>{
    try {
        const resp = await api.post(`/${ownerId}/pets/${petId}/matches`)
        console.log(resp)
    } catch (error) {
       throw error 
    }
 }

 export const getMatches = async (ownerId,petId,matchId) => {
    try {
        const resp = await api.get(`/${ownerId}/pets/${petId}/matches/1`)
        console.log(resp.data)
        return resp.data;
        
    } catch (error) {
       throw error 
    }
}