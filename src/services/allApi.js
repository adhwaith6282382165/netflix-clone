import { serverurl } from "./serverUrl";
import { commonApi } from "./commonApi";
import { data } from "react-router-dom";

// api call for upload video

export const uploadVideo = async (reqBody) => {
    return await commonApi('POST', `${serverurl}/videos`, reqBody)
}

export const getAllVideos = async () => {
    return await commonApi(`GET`, `${serverurl}/videos`, "")
}

// delete video 

export const deleteVideo = async (id) => {
    return await commonApi('DELETE', `${serverurl}/videos/${id}`, "")
}


// Add to history 

export const addToHistory = async (data) => {
    return await commonApi('POST', `${serverurl}/history`, data)
} 

// get history

export const getAllHistory = async () => {
    return await commonApi('GET', `${serverurl}/history`, "")
}

// get history

export const deleteWatchHistory = async(id)=>{
    return await commonApi('DELETE',`${serverurl}/history${id}`, {})
}

// add category

export const addCategory = async (data)=>{
    return await commonApi('POST',`${serverurl}/categories`, data)
}

// get all categories

 export const getAllCategories = async ()=>{
    return await commonApi('GET', `${serverurl}/categories`,"")
 }

 export const deleteCategory = async  (id) =>{
    return await commonApi('DELETE', `${serverurl}/categories/${id}`,"")
 }
