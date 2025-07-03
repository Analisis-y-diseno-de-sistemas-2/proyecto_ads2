import axios from 'axios';
import {SERVICEURL} from './Const';

const urlAPI = SERVICEURL+"/";

export const postPetition=async(path,data,callback,token)=>{
    await axios.post(urlAPI+path,data,addToken(token))
    .then(response=>{
      if(callback!=undefined){
        callback(response)
      }

    }).catch(error=>{
      if(error.request.status === 401)
      { return callback(error.request)}
      else if(error.request.status === 400){
        return callback(error.request)
      }
      console.log(error);
    })
}

export const putPetition=async(path,data,callback,token)=>{
    await axios.put(urlAPI+path,data,addToken(token))
    .then(response=>{
      if(callback!=undefined) 
        callback(response.data)
    }).catch(error=>{
      console.log(error);
    })
}

export const getPetition =async(path,callback,token)=>{
    await axios.get(urlAPI+path,addToken(token))
    .then(
      response=> {
        callback(response.data);
      }
    ).catch(error=>{
      console.log(error);
    })
  }



export const deletePetition=async(path,token)=>{
  await axios.delete(urlAPI+path,addToken(token))
  .then(()=>{
  }).catch(error=>{
    console.log(error);
  })
}

function addToken(token)
{
  return {
    headers: { Authorization: `Bearer ${token}` }
};
}