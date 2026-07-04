import { useState } from "react";

function GenderFilter ({setSelectedGender}){
 

    const womenSelector = ()=>{
        setSelectedGender("women")
    }

    const menSelector = ()=>{
        setSelectedGender("men")
    }


    return (

        <div>
            <h4 className="mb-4 font-bold dark:text-white"> جنسیت</h4>
            <div className="space-y-3">
                <p onClick={womenSelector}>زنانه</p>
                <p onClick={menSelector}>مردانه</p>
            </div>


        </div>

    );
}

export default GenderFilter;