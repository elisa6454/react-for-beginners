import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://api.publicapis.org/entries`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return <div>{loading ? <h1>Loading...</h1> : null}</div>;
}

export default App;
