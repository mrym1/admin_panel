import axios from "axios";
// export const axiosRequest(){
//   baseUrl: "http://63.35.34.209:5000/v1/"
// };
export const _api = "http://63.35.34.209:5000/v1/"


export const post_api  = async(url,body) => {
    const token =  localStorage.getItem('token')
    var res;
    await axios({
            method: 'post',
            url: _api+url,
            headers: { Authorization: `Bearer ${token}` }, 
            data: body
    }).then((data)=>{
        if(data.data.result.status==='fail'){
            alert(data.data.result.message);
            res=  null;
        }else{
            res= data.data.result;
        }
    }).catch((error)=>{
        console.log(error.response.data);
        alert(error.response.data.message);
        res=null;
    });
    return res;    

}
export const get_api  = async(url,params='') => {
    const token =  localStorage.getItem('token')
    var res;
    await axios({
            method: 'get',
            url: _api+url+params,
            headers: { Authorization: `Bearer ${token}` }, 
    }).then((data)=>{
        if(data.data.result.status==='fail'){
            alert(data.data.result.message);
            res=  null;
        }else{
            res= data.data.result;
        }
    }).catch((error)=>{
        console.log(error.response.data);
        alert(error.response.data.message);
        res=null;
    });
    return res;    

}
export const delete_api  = async(url,params='') => {
    const token =  localStorage.getItem('token')
    var res;
    await axios({
            method: 'delete',
            url: _api+url+params,
            headers: { Authorization: `Bearer ${token}` }, 
    }).then((data)=>{
        if(data.data.result.status==='fail'){
            alert(data.data.result.message);
            res=  null;
        }else{
            res= data.data.result;
        }
    }).catch((error)=>{
        console.log(error.response.data);
        alert(error.response.data.message);
        res=null;
    });
    return res;    

}