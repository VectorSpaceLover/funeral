import React from 'react';
import Routers from './router'
import {HonorProvider} from "./contexts/honor";
import {CommentProvider} from "./contexts/comment";

function App() {
  return (
      <HonorProvider>
        <CommentProvider>
          <Routers />
        </CommentProvider>
      </HonorProvider>
  );
}

export default App;
