import {DATA_LIST} from '../Types/index';
import {API_URL} from "../../configs";
import axios from 'axios';

export const GetDataList = () =>{
  return async dispatch =>{
      try {
          const resp = await axios({
              url:API_URL+'dataProvince',
              method:'get'
              // headers: {
              //     'x-api-key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBkZmJlZTY5ZjQxMjA3NTMwOGI4MmJlNzFhNWE4ZmFhNTUyMDA5MmE4NjBmNGM4MTRmY2RlMzdlYzY1NWRlY2IyZmMzMDU0MjgxZjNiZmU5In0.eyJhdWQiOiI2MzYwIiwianRpIjoiMGRmYmVlNjlmNDEyMDc1MzA4YjgyYmU3MWE1YThmYWE1NTIwMDkyYTg2MGY0YzgxNGZjZGUzN2VjNjU1ZGVjYjJmYzMwNTQyODFmM2JmZTkiLCJpYXQiOjE1NzA0Mjk3NTEsIm5iZiI6MTU3MDQyOTc1MSwiZXhwIjoxNTcyOTM1MzUxLCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.thY_xlLti5UGjEMhsdv75YMmK4xa-TInNWwgn838TTwz0U3N-rN1WudbTCU7d6s3Iycv8FTC7hDpC7bRkhzZRbIyfVm7aaY-sTWyZwtAB1ckxoZxTYMi33bVx6Cbk_AFETGRr2kMR5DuE_enpqEodKAOhU-OJPwk_Sm_pHXwQ3m98Gwnt3qwCcWKi77mzg78iAKLWoeftLD1ZIjhw-xab3N1N5DUqPmEkP_x232eUXLu563-UD8cHyWaTRAcT-0p7Pr3ad9Y3e-PQyqySKPmRJatPUaunsfPaN_voBzYdh4rT4NtusKnK7WGKc4s9R1vJpEdHjZmlO44DNT3KeQhqA'
              // },
              // url: 'https://map.ir/search',
              // method: 'post',
              // data: addrData
          });
          console.log('resp',resp);
          dispatch({type:DATA_LIST,data:resp.data})
      }
      catch(err){
          console.log(err)
      }
  }
};
