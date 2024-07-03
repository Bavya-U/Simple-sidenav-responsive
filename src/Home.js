// const Home = () => {
//     return <div className="home">
//       <div className="">
//       <h1 className="fw-bold text-dark pt-5">Home</h1>
//       <p>thi is a home page</p>
//       <p className="container">The owner of a brand website partners with an ad network, allowing ads to be displayed by third-party websites on their behalf in exchange for a commission. These advertisers invest their resources in developing creative and ads under the guise that the affiliates will help the brand reach new target audiences.

// But many times bad actors find and exploit weaknesses by injecting their tracking link into PPC ads – unbeknownst to unsuspecting advertisers – in order to capitalize on the traffic hitting the SERP and earn commission from the potential conversion.

// Once the PPC ad containing the affiliate link is clicked, it methodically redirects users to the brand site or fraudulent websites, scam promotions, and in some cases, dangerous malware downloads.</p>
//     </div>
//     </div>;
//   };
  
//   export default Home;

import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Emply from "./Emply";
import{Link,useNavigate}from 'react-router-dom'


function Home() {
let history =useNavigate();

const handleEdit = (id, name, age)=>{
    localStorage.setItem('Name',name)
    localStorage.setItem('Age',age)
    localStorage.setItem('Id',id)
}
    const handleDelete = (id) =>{
        var index = Emply.map(function(e){
            return e.id
        }).indexOf(id);
        Emply.splice(index,1);
        history('/');
    }

  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Active</th>
                </tr>
            </thead>
<tbody>
    {
        Emply && Emply.length>0
        ?
        Emply.map((item) =>{
            return(
                <tr>
                    <td>
                        {item.Name}
                    </td>
                    <td>
                        {item.Age}
                    </td>
                    <td>
                        <Link to={'/Blogs'}>
                        <Button onClick={() => handleEdit(item.id, item.Name, item.Age)}>Edit</Button>
                        </Link>
                        &npsp;
                        <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                    </td>
                </tr>
            )
        })
        :
        "no data available"
    }
</tbody>
        </Table>
        <br></br>
        <Link className='d-grid gap-2' to="/create">
            <Button size="lg">Create</Button>
        </Link>
      </div>
    </Fragment>
  );
}
export default Home;
