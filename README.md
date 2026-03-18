# 🚀 Complete React Tutorial 

This is a complete beginner-to-intermediate React documentation including:

- ⚡ Vite Setup  
- 🌐 React Router  
- 🎨 Tailwind CSS  
- 📦 Props  
- 🎯 Events  
- 🧠 useState  
- 🔄 useEffect  
- 📡 Fetch API  
- 📝 Form Handling  
- 🧭 useParams (Dynamic Routing)  
- 🗂 Redux Toolkit (RTK)

---

# 📦 1️⃣ Project Setup

## Create Project Folder

```bash
mkdir Frontend
cd Frontend
npm create vite@latest .
npm install
npm run dev
```

---

# 🌐 2️⃣ Install React Router

```bash
npm install react-router-dom
```

> ⚠️ Only `react-router-dom` is required for browser applications.

---

# 🎨 3️⃣ Install Tailwind CSS (Vite Plugin)

```bash
npm install tailwindcss @tailwindcss/vite
```

### ✅ Update `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### ✅ Update `src/index.css`

```css
@import "tailwindcss";
```

---

# 📁 4️⃣ Project Structure

```
src/
│
├── components/
│   └── Nav.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Teacher.jsx
│   ├── Student.jsx
│   ├── Post.jsx
│   ├── PostDetails.jsx
│   └── ReduxCounter.jsx
│
├── routers/
│   └── router.jsx
│
├── redux/
│   └── store.js
│
├── features/
│   └── counterSlice/index.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 🧭 5️⃣ React Router Setup

## `src/routers/router.jsx`

```js
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Teacher from "../pages/Teacher";
import Student from "../pages/Student";
import Post from "../pages/Post";
import PostDetails from "../pages/PostDetails";

export const myrouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
        element: <About />,
        children: [
          { index: true, element: <Teacher /> },
          { path: "student", element: <Student /> },
        ],
      },
      { path: "post", element: <Post /> },
      { path: "post/:id", element: <PostDetails /> },
    ],
  },
  { path: "*", element: <h1>404 Not Found</h1> },
]);
```

---

# 🏗 6️⃣ App Layout

## `App.jsx`

```js
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
```

---

# 🔗 7️⃣ Navigation Component

## `Nav.jsx`

```js
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/post">Posts</Link>
      <hr />
    </nav>
  );
};

export default Nav;
```

---

## `About.jsx`

```js
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router';

const About = () => {
    const navigate = useNavigate();
    const prev = ()=> navigate(-1);
    const next = ()=> navigate("/post");
    return (
        <div>
            <h1>About Us</h1>
            <nav>
                <Link to="">Teacher</Link> {" | "}
                <Link to="student">Student</Link>
                <hr />
            </nav>
            <div> <Outlet /> </div>
            <button onClick={prev}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
    );
};

export default About;
```

---

# 📥 8️⃣ main.jsx

## Without Redux

```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { myrouter } from "./routers/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={myrouter} />
  </StrictMode>
);
```

---

# 📦 9️⃣ Passing Props

### Route

```js
{
  path: "student",
  element: (
    <Student
      name={"John Doe"}
      age={20}
      skills={["JavaScript", "React", "Node.js"]}
    />
  ),
}
```

### Component

```js
const Student = ({ name, age, skills }) => {
  return (
    <div>
      <h1>Student Page</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Student;
```

---

# 🎯 1️⃣0️⃣ Handling Events

```js
const Events = () => {
  const handleClick = () => {
    alert("Alert!!");
  };

  const add = (a, b) => {
    alert(`${a} + ${b} = ${a + b}`);
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => add(3, 4)}>Add</button>
    </div>
  );
};

export default Events;
```

---

# 🧠 1️⃣1️⃣ useState (Counter)

```js
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);

  return (
    <div>
      <h3>Value: {count}</h3>
      <button onClick={() => setCount(prev => prev + 1)}>Inc</button>
      <button onClick={() => setCount(prev => prev - 1)}>Dec</button>
    </div>
  );
};

export default Counter;
```

---

# 🔄 1️⃣2️⃣ useEffect

```js
import { useState, useEffect } from "react";

const UseEffect = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(prev => prev + 1)}>Inc</button>
      <button onClick={() => setCounter(prev => prev - 1)}>Dec</button>
    </div>
  );
};

export default UseEffect;
```

---

# Map and Filter

```js

const Map_Filter = () => {
    const products = [
        {id:1, name:'Product 1', price:100},
        {id:2, name:'Product 2', price:200},
        {id:3, name:'Product 3', price:300},
    ]

    const filteredProducts = products.filter((item,idx)=>{
        return item.price > 100;
    })

    return (
        <div>
            <h1> Using map </h1>
            <ul>
                {products.map((item,idx)=>(
                  <li key={idx}>{item.name} - {item.price}</li>  
                ))}
            </ul>

            <h3> price {">"} 100 </h3>
            <ul>
                {
                    filteredProducts.map((item,idx)=>{
                        return (
                            <li>{item.name}</li>
                        )
                    })
                }
            </ul>
            
        </div>
    );
};

export default Map_Filter;
```

---

# 📡 1️⃣3️⃣ Fetch Data

```js
import { useState, useEffect } from "react";

const FetchData = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
      const data = await res.json();
      setApiData(data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {apiData.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default FetchData;
```

---

# 📝 1️⃣4️⃣ Form Handling

```js
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${formData.name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <input type="password" name="pass" value={formData.pass} onChange={handleChange} />
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
```

---

# 🧭 1️⃣5️⃣ Dynamic Routing (useParams)

## Post.jsx

```js
import { Link } from "react-router-dom";

const Post = () => {
  const posts = [
    { id: 1, title: "Post 1", content: "Content 1" },
    { id: 2, title: "Post 2", content: "Content 2" },
  ];

  return (
    <ul>
      {posts.map((item) => (
        <li key={item.id}>
          <Link to={`/post/${item.id}`}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Post;
```

## PostDetails.jsx

```js
import { useParams, Link } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();

  const posts = [
    { id: 1, title: "Post 1", content: "Content 1" },
    { id: 2, title: "Post 2", content: "Content 2" },
  ];

  const details = posts.find((item) => item.id === parseInt(id));

  return details ? (
    <div>
      <h2>{details.title}</h2>
      <p>{details.content}</p>
      <Link to="/post">Back</Link>
    </div>
  ) : (
    <p>Post not found</p>
  );
};

export default PostDetails;
```

---

# 🗂 1️⃣6️⃣ Redux Toolkit Setup

## Install

```bash
npm install @reduxjs/toolkit react-redux
```

---

## `src/redux/store.js`

```js
import { configureStore } from "@reduxjs/toolkit";
import mycounterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    storeCounter: mycounterReducer,
    storeCounter2: mycounterReducer,
  },
});
```

---

## `src/features/counter/counterSlice.js`

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:1,
    value:10
};

export const counterSlice = createSlice({
    name:"sliceCounter",
    initialState:initialState,
    reducers:{
        increment: (state)=>{
            state.value += 1;
        },

        decrement: (st)=>{
            st.value -= 1;
        },

        customInc: (state,action)=>{
            state.value += action.payload
        }
    }
})

export const {increment, decrement, customInc} = counterSlice.actions;
export default counterSlice.reducer
```

---

## Redux main.jsx

```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/store";
import { myrouter } from "./routers/router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={myrouter} />
    </Provider>
  </StrictMode>
);
```

---

## ReduxCounter.jsx

```js
import { useDispatch, useSelector } from 'react-redux';
import { customInc, decrement, increment } from '../features/counter/counterSlice';

const Counter = () => {
    const {id, value} = useSelector((state)=>state.storeCounter);
    // console.log(state);    => state = { storeCounter: {id:1, value:10 } }
    const dispatch = useDispatch();
    return (
        <div>
            <h3>Count:{value}</h3>
            <button onClick={() =>{
                dispatch(increment());
                console.log(dispatch(increment()));
            } }>Inc</button>
            <button onClick={() =>{
                dispatch(decrement());
                console.log(dispatch(decrement()));
            } }>Dec</button>
            <button onClick={() => {
                dispatch(customInc(5));
                console.log(dispatch(customInc(5)));
            }}>Custom</button>
        </div>
    );
};

export default Counter;
```

---

# ✅ Completed React Tutorial 

