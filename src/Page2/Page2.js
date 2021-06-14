
import { useEffect, useState } from 'react'
import classes from './Page2.module.css'
import '../Loader.css'

const Page2 = () =>{

    const [state,setState] = useState({
        loading:true,
        user:[]
    })

    useEffect(async ()=>{
    const response = await fetch('https://reqres.in/api/users?page=2')
    const data = await response.json();
    let userData = []
    for(const key in data.data){
         userData.push(
            data.data[key]
         )
    }
     setState({user:userData})
    },[])

    const style = {
        width:'250px',
        height:'230px'
    }
    const page2UserList = state.user.map((x,i) => {
        return(
            <div className={classes.card} key={x.id}>
                
                <img style = {style} src={x.avatar} alt='avatar'/>
                <div className={classes.Detail}>
                <p>First Name:{ x.first_name}</p>
                <p>Last Name:{ x.last_name}</p>
                <p>Email:{ x.email}</p>
                </div>
            </div>
        )
    })

    let data = null
    if(state.loading || !state.user){
        data = <div className="loader">Loading...</div>
    }else{
        data =<div className={classes.card2}>{page2UserList}</div>
    }

    return(
         <>
          {data}
         </>
     )

}


export default Page2