// import React from 'react';
import React, { useState, useEffect } from 'react';

const Posts = ({ posts, loading, photos ,q}) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  
  var count = 0;


  const ro={float:"right",display:"inline"}
  var count=0;

 

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
      <>
        <li key={post.id} className='list-group-item'>
       <img  style={ro} height="250" width="250" src={post["Image url"]} alt="" />
        {count=count+1}
        <div>  <strong>id:</strong> {post.Id}</div>
      <div> <strong>classification_based_on:</strong>  {post.classification_based_on}</div>
         <div> <strong>humour:</strong>  {post.humour}</div>
      <div> <strong>motivational:</strong>  {post.motivational}</div>
      <div> <strong>ocr_text:</strong>  {post.ocr_text}</div>
      <div> <strong> offensive:</strong> {post.offensive}</div>
      <div> <strong>overall_sentimen:</strong>  {post.overall_sentiment}</div>
      <div> <strong>sarcastic:</strong>  {post.sarcastic}</div>
        </li>
        </>
      ))}
    </ul>
  );
};

export default Posts;