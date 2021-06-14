import Pagination from '@material-ui/lab/Pagination';
import Page2 from './Page2/Page2';
import Page1 from './Page1/Page1';
import './App.css';
import { useState } from 'react';

 function App() {

  const [page,setPage] = useState({
    rederData:true,
  })

  const change = (e) =>{
    const data = page.rederData
    setPage({rederData:!data})
  }
  
  let Page = null;
  if(page.rederData){
    Page = <Page1 />
  }else{
    Page = <Page2 />
  }

  return (
    <div className='app'>
    <div  className='pagination'>
    
    <Pagination 
    color='secondary'
    count={2}
    onChange={change}
    />

    </div>
    {Page}
    </div>
  );
}

export default App;
