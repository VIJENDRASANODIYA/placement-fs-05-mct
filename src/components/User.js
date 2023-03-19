import React, { useEffect, useState } from "react";
// import './user.css'
import Nav from "./Nav";
const User = () => {
  const [Item, SetItem] = useState([]);

  const [checked, setChecked] = useState('all');
  const [filterData, setFilterData] = useState([]);
  // console.log(filterData);
  

  const gateData = () => {
      fetch("https://randomuser.me/api/?results=20")
        .then((res) => res.json())
        .then((data) =>
          // console.log();
  
          SetItem(data.results)
        );
      // console.log(All);
    };
    useEffect(() => {
      gateData(Item);
    },[Item]);

  const handleFilterItems = tag => {
    setChecked(tag);
    if (tag !== 'all') {
      const filteredItems = Item.filter(item => item.gender === tag);
      // console.log(filteredItems);
      
      setFilterData(filteredItems);
    } else {
      setFilterData(Item);
    }
  };

  return (
    <>
      <div className="">
        <div className="nav-div">
          <Nav />
        </div>
        <div className="p-4">
          <h2>User Details</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            obcaecati nostrum ratione harum veritatis aut explicabo culpa
            molestiae numquam dicta officia cum vitae commodi minus voluptatem,
            tenetur odio repellat, molestias magnam, similique dolore quia
            adipisci. Ipsam magni iusto veritatis eveniet maxime! In accusantium
            tempora perferendis suscipit natus repellendus sunt sapiente aut
            dolores, ea sed, veritatis quibusdam facere illum aspernatur
            voluptatem? Illum quae molestiae, animi placeat expedita repudiandae
            nulla voluptates vero debitis dolores adipisci ipsam magnam pariatur
            eveniet praesentium illo voluptate enim magni tempora sunt sed
            explicabo provident odio perspiciatis. Nesciunt illo obcaecati
            molestiae reprehenderit ullam culpa, ea aperiam tenetur officia?
          </p>
        </div>
        <div className="p-4">
        <input 
        type="radio"
        checked={checked === 'all'}
        onChange={() => handleFilterItems('all')}
      /> All <br/>
      <input 
        type="radio"
        checked={checked === 'male'}
        onChange={() => handleFilterItems('male')}
      /> male <br/>
       <input 
        type="radio"
        checked={checked === 'female'}
        onChange={() => handleFilterItems('female')}
      /> female
        </div>
        <table className="table table-sm p-5">
          <thead className="bg-dark text-white">
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((e) => (
              <>
                <tr style={{ margin: "20px 0px" }}>
                  <td width={100}>
                    <img
                      style={{ margin: "10px 10px" }}
                      width={100}
                      height={100}
                      src={e.picture.large}
                      alt=""
                    />
                  </td>
                  <td style={{ marginLeft: "20px" }}>
                    <span>{e.name.first}</span>{" "}
                  </td>
                  <td>
                    {" "}
                    <span>{e.email}</span>{" "}
                  </td>
                  <td>
                    <span>{e.gender}</span>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
