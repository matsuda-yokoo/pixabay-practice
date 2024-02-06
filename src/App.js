import React,{useState} from "react";
import axios from 'axios';
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

const App =()=>{
  const [images,setImages]=useState([]);
  const ApiKey=process.env.REACT_APP_PIXABAY_APIKEY; //APIkeyが直接見られないようにする
  const onSearchSubmit =async(term)=>{ //非同期関数を宣言
    try{
      const params={
        key: ApiKey, 
        q: term,
      };
      const response=await axios.get("https://pixabay.com/api/",{params}); //検索結果が出るまで待機する
      setImages(response.data.hits); //検索結果にあてはまるデータでstateを更新する
      if(response.data.total===0){  
        alert('お探しの画像はありません。') //検索結果にあてはまるデータが0件だった場合アラート表示
      }
    }catch{
        alert('写真の取得に失敗しました。') //取得失敗だった場合アラート表示
    }
  };

  return (  
      <div className="ui container" style={{marginTop: '20px'}}>
        <SearchBar onSubmit={onSearchSubmit}/> 
       {/* SearchBar関数を呼び出す。onSubmitイベントを発火させる。onSearchSubmit関数を呼び出す */}
        <ImageList images={images}/>
      </div>
  );
};

export default App;