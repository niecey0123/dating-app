import axios from 'axios'


const URL = "http://localhost:4567"

const api = axios.create({
    baseURL:   `${URL}/pets`
})

export const fecthAllPets = async ()=>{
   try {
      const resp = await api.get("/") 
      return resp.data
   } catch (error) {
       console.log(error)
   }
    
}

export const petDeletion = async (id)=>{
    try {
       const resp = await api.delete(`/${id}`) 
       return resp.data
    } catch (error) {
        console.log(error)
    }
     
 }

 export const petUpdate = async (id,data)=>{
    try {
        const resp = await api.put(`/${id}`, data)
        console.log(resp)
        return resp.data
    } catch (error) {
        console.log(error)
    }
}


    

