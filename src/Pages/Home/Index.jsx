/*********** Import react ************/
import React, { useEffect, useState } from "react";

/*********** Import package ************/
import axios from "axios";
import Pagination from "./Pagination";

const Index = () => {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [filter,setFilter] = useState("");

    // hadle pagination
    const handleRowsPerPage = (rows) => {
        setRowsPerPage(rows)
    }

    const handlePages = (currentPage) => {
        setCurrentPage(currentPage)
    }

    const handleFilter = (e) => {
      setFilter(e.target.value);
    }

    useEffect(() => {
        axios.get(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${rowsPerPage}`).then((res) => {
            if (res) {
                setData(res);
            }
        })
    }, [currentPage,rowsPerPage]);


    return (
        <div className="container">
            <h1>Interview Task</h1>
            <div className="mt-5">

                {/* input box */}
                <input type="text" name="name" onChange={(e)=> handleFilter(e)}/>

                <table className="table border">
                    <thead className="thead-dark ">
                        <tr>
                            <th scope="col">#</th>
                            <th>Name</th>
                            <th>Attenuation level</th>
                            <th>First brewed</th>
                            <th>Tag line</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data?.map((item, index) => (
                            <tr key={index}>
                                <td>{item?.id}</td>
                                <td>{item?.name}</td>
                                <td>{item?.attenuation_level}</td>
                                <td>{item?.first_brewed}</td>
                                <td>{item?.tagline}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4">
                <Pagination
                    rowsPerPage={rowsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    nextPage={handlePages}
                    changeRowsPerPage={handleRowsPerPage}
                />
            </div>
        </div>
    );
}

export default Index;
