import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
// import { useContext } from "react";
// import { ArrayofBlogs } from "../ArrayOfBlog/ArrayOfBlog";


const NavComponent = () => {
  // const [data] = useContext(ArrayofBlogs)
  const[blogs, setBlogs] = useState([]);

  useEffect(() => {

      axios.get(`https://backend-blog-sahil.herokuapp.com/api/v1/TheSiren`).then(
          data => setBlogs(data.data)
      )

  },[])

  return (
    <div>
      <div className='heading'>
        <p className='the'>The</p>
        <p className='siren'>Siren</p>
      </div>

      <div className='navContainer' >
        <Link to="/" className='NavCategory'>Home</Link>

        {blogs.filter((value) => value.ID === '1').map((val, index) => (

          <Link to={`/category/${val.Category}`} className='NavCategory' key={index} >{val.Category}</Link>

        ))}
        

      </div>
      {/* <hr className='navHr' /> */}


    </div>
  );
};


export default NavComponent;
