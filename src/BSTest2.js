import React from "react";

function click(){
    alert("클릭했습니다.")
}

function BSTest2(){
    return(
        <div>
            <button type="button" class="btn btn-primary" onClick={click}>primary 버튼</button>
            <button type="button" class="btn btn-success" onClick={click}>success 버튼</button>
            <button type="button" class="btn btn-outline-info" onClick={click}>info 버튼</button>
            <button type="button" class="btn btn-outline-warning" onClick={click}>warning 버튼</button>
            <button type="button" class="btn btn-danger" onClick={click}>danger 버튼</button>
            <button type="button" class="btn btn-link" onClick={click}>link 버튼</button>
        </div>
    )
}

export default BSTest2;