import React from "react";

export default function Progress(props){
    let styles = {
        width: `${props.percent}%`
    }
    console.log(styles)
    return(
        <div className="mt-3">
            <p>{props.title}</p>
            <div class="progress bg-dark">
                <div class="progress-bar" style={styles}>{props.percent}%</div>
            </div>
            

        </div>
    )
}
    