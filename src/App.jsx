import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setCards(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        {cards.map((card) => {
          return (
            <div key={card.id} className="card">
              <h1>{card.title}</h1>
              <img
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Photo"
              />
              <p>{card.body}</p>
              <span>By: UserId: {card.userId}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
