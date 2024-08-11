/*import React from "react";
function Skills() {
    return(
        <div className="Skills">
            <div className="Main_Area">
                <div className="First_Container">
                    <div>
                        <div className="title">Skills</div>
                        <div className="Detail_title">This is how to build a website with React, React Router, and React Bootstrap</div>
                        <p></p>
                        <div><button className="Button">Learn More</button></div>
                    </div>
                </div>
            </div>
            <div className="Detail">
                <div className="Detail_Text">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit a</p>
                </div>
                <div className="Image">
                    <img src="mrudav_photo.jpg"></img>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit a</p>
                </div>
            </div>
        </div>
    )
}

export default Skills*/


import React from "react";
import {  BarChart,Bar,  XAxis,YAxis, Tooltip, Legend } from "recharts";
const skills=[{language:"Python",Years:4},{language:"SQL",Years:4},{language:"HTML",Years:7},{language:"CSS",Years:2},{language:"JS",Years:1}]
function Skills() {
    return(
    <div>
    <div className="chart">
    </div><><div className="profile_heading">Skills</div><div className="profile_new"><p></p></div></>
            <BarChart
                width={1500}
                height={400}
                data={skills}
            >

                <XAxis dataKey="language" stroke="black" tick={{ fontSize: 30 }} />
                <YAxis stroke="black" tick={{ fontSize: 20 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Years" fill="#350ee2" />

            </BarChart>
        
        
    </div>
    )
}
export default Skills