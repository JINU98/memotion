import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import './App.css';
import memotion from './csvjson'

const App = () => {
  const [photos,setPhotos]=useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const [q,setQ]=useState("");

  useEffect(() => {
   
    const fetchPosts = async () => {
      setLoading(true);
      setPosts(memotion)
      setLoading(false);
    };

    fetchPosts();
  }, []);

  

  // Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(0,100);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  function Search(data){
    if(q===""){
      return currentPosts;
    }
    
    return data.filter(data => data.ocr_text.indexOf(q) >-1 ).slice(0,100)
  }

  return (
   
    <div className='container mt-5'>
        
        <form style={{float:"right"}}className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <input type="text" className="form-control" value={q} onChange={(e) => setQ(e.target.value)} id="inputPassword2" placeholder="Ocr Text"></input>
          </div>
        </form>

      <h1 className='text-primary mb-3'>Memotion 3.0 Dataset</h1>
      
      <Posts posts={Search(posts)} loading={loading} photos={photos} />
      
      {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      /> */}

    </div>
  );
};

export default App;