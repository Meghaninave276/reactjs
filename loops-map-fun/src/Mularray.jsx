import React from "react";

export default function Mularray() {
  const userdata = ["megha", "ycdsshj", "dbhwsj", "ggujt"];
  const collgedata = ["iit", "idt", "drb", "sdj"];
  const usersdata = [
    {
      name: "megha",
      age: 19,
      email: "megha@gmail.com",
      id: 1,
    },
    {
      name: "ycdsshj",
      age: 20,
      email: "ycdsshj@gmail.com",
      id: 2,
    },
    {
      name: "dbhwsj",
      age: 21,
      email: "dbhwsj@gmail.com",
      id: 3,
    },
    {
      name: "ggujt",
      age: 23,
      email: "ggujt@gmail.com",
      id: 4,
    },
  ];

  return <div>
    <div>
        <table border="1">
           <thead>
             <tr>
                <td>id:</td>
                <td>name:</td>
                <td>email:</td>
                <td>age:</td>
            </tr>
           </thead>
           <tbody>
             {
                usersdata.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.age}</td>
                    </tr>

                ))

             }
  
           </tbody>
        </table>
    </div>
  </div>;
}
