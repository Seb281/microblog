import { useEffect, useState } from "react";
import moment from "moment";

function App() {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/message")
      .then((response) => response.json())
      .then((data) => {
        setMessages(data);
      });
  }, []);

  function handleChange(e) {
    setUsername(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:8080/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: username }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    e.target.reset();
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8">
      <h1 className="text-5xl font-bold text-center">
        Our 🥦 powered microblog <br />
        (not safe for fat 🖐️)
      </h1>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          id="username"
          placeholder="username"
          onChange={handleChange}
          className="bg-pink-100 text-pink-800 rounded p-3"
        />
        <button type="submit" className="bg-pink-800 text-pink-100 p-3 rounded">
          Send
        </button>
      </form>
      <p className="italic text-gray-600 font-medium text-2xl">
        {`Logged in as ${username}`}
      </p>
      <div className="flex flex-col gap-10">
        {messages.map((message) => {
          return (
            <div className="flex flex-col">
              <p className="text-pink-900 font-bold">{message.content}</p>
              <p className="text-pink-600">{`by ${message.authorName}`}</p>
              <p className="text-pink-300">
                {moment(message.postDate).fromNow()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
