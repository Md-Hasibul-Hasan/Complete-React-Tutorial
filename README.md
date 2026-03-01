# 🚀 Complete React Tutorial (Vite + React Router + Tailwind + Redux Toolkit)

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
npm install react-router
```

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
      { path: "", element: <Home /> },
      {
        path: "/about",
        element: <About />,
        children: [
          { path: "", element: <Teacher /> },
          { path: "student", element: <Student /> },
        ],
      },
      { path: "/post", element: <Post /> },
      { path: "/post/:id", element: <PostDetails /> },
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
import { Outlet } from "react-router";

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
import { Link } from "react-router";

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
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
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
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
      <button onClick={() => setCounter(counter - 1)}>Dec</button>
    </div>
  );
};

export default UseEffect;
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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${formData.name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
      <input name="pass" value={formData.pass} onChange={handleChange} />
      <input name="phone" value={formData.phone} onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
};

export default Form;
```

---

# 🧭 1️⃣5️⃣ Dynamic Routing (useParams)

```js
import { Link, useParams } from "react-router-dom";
```

## Post.jsx

```js
const Post = () => {
  const posts = [
    { id: 1, title: "Post 1", content: "Content 1" },
    { id: 2, title: "Post 2", content: "Content 2" },
  ];

  return (
    <ul>
      {posts.map((item) => (
        <Link key={item.id} to={`/post/${item.id}`}>
          <li>{item.title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Post;
```

## PostDetails.jsx

```js
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
import counterReducer from "../features/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

---

## `src/features/counterSlice/index.js`

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

---

## Redux main.jsx

```js
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/store";
import { myrouter } from "./routers/router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={myrouter} />
  </Provider>
);
```

---

## ReduxCounter.jsx

```js
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../features/counterSlice";

const ReduxCounter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Inc</button>
      <button onClick={() => dispatch(decrement())}>Dec</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Inc by 5
      </button>
    </div>
  );
};

export default ReduxCounter;
```

---

# ✅ Complete React Tutorial Finished
