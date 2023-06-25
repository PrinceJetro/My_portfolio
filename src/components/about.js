import React from 'react';
import ReactDOM from 'react-dom/client';
import Progress from './progress';




export default function About(props){
    return (
        <div className='about'>
           <div className='row main'>
            <div className="col-md-6 row "> 
                <div className=' col-lg-4 '>
                <img src='https://avatars.githubusercontent.com/u/114796977?v=4' width={165} height={165}/>
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