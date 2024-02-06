
import React, {useState}from "react";

const SearchBar =({onSubmit})=>{ //onSubmitをpropsとして受け取る
    const [term,setTerm]=useState(''); //stateの初期化
    const onFormSubmit=(event)=>{
        event.preventDefault(); //デフォルトでは検索欄に入力してEnterを押すとページがリロードされるのを解除
        onSubmit(term); //onSubmit関数にtermを引数として渡す
    }
    return ( 
        <form onSubmit={onFormSubmit} className="ui form">
            {/* onSubmitイベントを発火させる。onFormSubmit関数を呼び出す。 */}
            <div className="field">
                <label>Image Search</label>
                <input 
                type="text" 
                name="search" 
                placeholder=""
                value={term} 
                onChange={(event)=>{
                    setTerm(event.target.value) //ユーザが値を入力する度にtermが更新される
                    }}/>
            </div>
        </form>
    );
};

export default SearchBar;