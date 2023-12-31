import React from 'react';
import ReactDOM from 'react-dom/client';
import Progress from './progress';




export default function About(props){
    return (
        <div className='about'>
           <div className='row main'>
            <div className="col-md-6 row "> 
                <div className=' col-lg-4 '>
                <img src='https://scontent.flos3-2.fna.fbcdn.net/v/t39.30808-6/260903207_582699239698023_8662360774569197883_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEwgw5WxelB2eiR9aXVRbcD9M7_wI64QWP0zv_AjrhBYwRj6EKLAzpS8yb4moZsKbk-xV_RDXAEicVUSkzAC8wL&_nc_ohc=kSIMjmJZaw4AX_Tuo2u&_nc_zt=23&_nc_ht=scontent.flos3-2.fna&oh=00_AfD0t4VzUEvULo2I00W4oL9mWLlrC41XQhrETf0iWgjJxg&oe=6532082F' width={165} height={200}/>
                </div>
                <div className=' col-lg-8'>
                <a target='_blank' href='https://drive.google.com/file/d/10r2fZI4apZqK47dpCIbp5NEzExcQ57CW/view?usp=drive_link'><button className='btn btn-primary'>Download Resume</button></a> <br/>
                    <h3><span className='title'> Name:</span>  <span className='answers'>Adegbuyi Jephthah</span></h3>
                    <h3><span className='title'> Profile:</span> <span className='answers'>Jnr FullStack Developer</span></h3>
                    <h3><span className='title'> Email:</span> <span className='answers'><a href="mailto: adegbuyijephthah@gmail.com">adegbuyijephthah@gmail.com</a></span></h3>
                    <h3><span className='title'> Phone:</span> <span className='answers'>+2348088981691</span></h3>
                </div>
                <div className='col-lg-12 mt-3 mb-3'>
                <h3>Skills</h3>
                <Progress title="JavaScript" percent={60} />     
                <Progress title="React" percent={60} />          
                <Progress title="Python" percent={70} />              
                <Progress title="Django" percent={65} />                   
                <Progress title="Postgres SQL" percent={80} />                   
                <Progress title="Microsoft" percent={85} />                   
                            
                                 
                </div>
            </div>
            <div className="col-md-6 ">
                <h1>About me</h1>
                <hr/>
                <p className='bio'>
                As a young software developer with over a year of experience in the software development field, I have successfully completed numerous coding courses online, which have greatly expanded my knowledge and skills. Throughout this period, I have dedicated myself to building a wide range of projects, showcasing my ability to create responsive and functional websites.
                        </p>
                        <p className='bio'>In addition to my technical skills, I possess excellent problem-solving abilities, attention to detail, and a commitment to delivering high-quality work. I am comfortable working both independently and as part of a team, and I value effective communication and collaboration to achieve project goals.</p>
            </div>
           </div>
        </div>

    )
}
