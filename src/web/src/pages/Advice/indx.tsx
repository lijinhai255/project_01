import React from 'react'

export default function indx(props) {
    return (
        <div>
            这是一个页面 都是刘德华
            <p onClick={()=>props.history.push("/a")}>12121212</p>
        </div>
    )
}
