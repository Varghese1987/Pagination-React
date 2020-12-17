import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Records from './components/listRecords';
import Pagination from './components/pagination';

const App = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setRecords(response.data);
      setLoading(false);
    };
    fetchPost();
  }, []);
  
  const indexOfLastPost = currentPage * recordsPerPage;
  const indexOfFirstPost = indexOfLastPost - recordsPerPage;
  const currentRecords = records.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Pagination in React</h1>
      <Records records={currentRecords} loading={loading} />
      <Pagination recordsPerPage={recordsPerPage} totalRecords={records.length} paginate={paginate} />
    </div>
  );

}



export default App;
