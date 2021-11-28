import React, { useState } from 'react';

const txtContent = 'gawarearwa';

const HonorContext = React.createContext([{}, () => {}]);
const HonorProvider = (props) => {
  const [honorTxt, setHonorTxt] = useState(txtContent);
  return (
    <HonorContext.Provider value={[honorTxt, setHonorTxt]}>
      {props.children}
    </HonorContext.Provider>
  );
};

export {HonorContext, HonorProvider};