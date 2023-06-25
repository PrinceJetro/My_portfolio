import React from 'react';
import ReactDOM from 'react-dom/client';
import Service from './service'



export default function App(){
    return (
        <div className='serviceDiv'>
           <h1>Services</h1>
           <hr/>
           <p>Click on the images to see  their entailments</p>
           <div className='d-flex flex-wrap'>
           <Service title="Web Development" description="I can create responsive and functional websites using various technologies such as HTML, CSS, JavaScript, and frameworks like React. I ensure the websites I build are user-friendly, visually appealing, and optimized for performance." img="https://media.publit.io/file/w_1920,h_864,c_fit,q_80/Blogweb/2s_blog_04_web-dev-maintain.jpg"/>
           <Service title="Backend Development" description="I have experience in building server-side applications and APIs using languages like Python, Django, or Flask. I can design and implement robust and scalable backend systems to support web applications." img="https://www.hubsol.com/public/upload/post/91261_web-development-lahore.jpg"/>
           <Service title="Database Design and Management" description="I can design and optimize databases using SQL or NoSQL technologies such as MySQL, PostgreSQL, MongoDB, or Firebase. I ensure efficient data storage and retrieval, as well as implement data security measures." img="https://media.istockphoto.com/id/1399944678/photo/multiple-database-is-placed-on-relational-database-tables-with-server-room-and-datacenter.webp?b=1&s=170667a&w=0&k=20&c=Ii0Wn4lommSX7q2U237SsZVYdMiE6XDzfr2-_oli97w="/>
           <Service title="Maintenance and Support" description="I offer ongoing maintenance and support services to ensure the smooth functioning and security of software applications. I can handle bug fixes, updates, and enhancements to keep the software up-to-date and running smoothly." img="https://wallpapers.com/images/hd/technical-support-it-technology-maintenance-1quikv1pksvr9gvi.jpg"/>
         
           </div>
        </div>

    )
}