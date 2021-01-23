import React from 'react'

export default function indx(props) {
    return (
        <div>
            这是12121
            <p onClick={()=>props.history.push("/a")}></p>
        </div>
    )
}
