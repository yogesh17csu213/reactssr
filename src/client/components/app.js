import React,{useEffect} from "react";
import { headerData } from "../actions";
import { connect } from "react-redux";
const App=(props)=>{
    useEffect(()=>{
        props.dispatch(headerData())
    },[])
    return (
        <div>
            <div>I'm the App cmponent </div>
            <button onClick={()=>{console.log('helo')}}>Press Me on App</button>
        </div>
    )
}
const mapStateToProps=(state)=>{
    console.log(state)
    return{

    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)