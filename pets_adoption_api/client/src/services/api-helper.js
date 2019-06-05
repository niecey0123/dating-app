import axios from 'axios'


const URL = "http://localhost:4567"

const api = axios.create({
    baseURL:   `${URL}/pets`
})

export const fecthAllPets = async ()=>{
   try {
      const resp = await api.get("/") 
      return resp.data
      console.log(resp.data)
   } catch (error) {
       console.log(error)
   }
    
}