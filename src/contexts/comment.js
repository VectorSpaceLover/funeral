import React, { useState } from 'react';

const CommentContext = React.createContext([{}, () => {}]);
const CommentProvider = (props) => {
  const [commentTxt, setCommentTxt] = useState('');
  return (
    <CommentContext.Provider value={[commentTxt, setCommentTxt]}>
      {props.children}
    </CommentContext.Provider>
  );
};

export {CommentContext, CommentProvider};