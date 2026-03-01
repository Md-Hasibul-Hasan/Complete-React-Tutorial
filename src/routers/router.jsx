import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Teacher from "../pages/Teacher";
import Student from "../pages/Student";
import Post from "../pages/Post";
import PostDetails from "../pages/PostDetails";
import Counter from "../pages/Counter";
import Map_Filter from "../pages/Map_Filter";
import UseEffect from "../pages/UseEffect";
import FetchData from "../pages/FetchData";
import Form from "../pages/Form";
import Count from "../pages/Count";



export const myrouter = createBrowserRouter([
    {path:"/", element:<App/>, children:[
        {path:"", element:<Home/>},
        {path:"/about", element:<About/> , children:[
            {path:"", element:<Teacher/>},
            {path:"student", element:<Student
                name={"John Doe"}
                age={20}
                skills={["JavaScript", "React", "Node.js"]}
            />},
        ]},
        {path:"/post", element:<Post/>},
        {path:"/post/:id", element:<PostDetails/>},
        {path:"/counter", element:<Counter/>},
        {path:"/map-filter", element:<Map_Filter/>},
        {path:"/use-effect", element:<UseEffect/>},
        {path:"/fetch-data", element:<FetchData/>},
        {path:"/form", element:<Form/>},
        {path:"/redux-counter", element:<Count/>},
    ]},
    {path:"*", element:<h1>404 Not Found</h1>}
])