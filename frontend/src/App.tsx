import { useEffect, useState } from "react";

// 🔹 Type define kar.
type ApiData = {
  name: string;
  skill: string;
};

function App() {
  const [data, setData] = useState<ApiData | null>(null);

  useEffect(() => {
    fetch("https://mdk-production.up.railway.app/data")
      .then((res) => res.json())
      .then((data: ApiData) => setData(data));
  }, []);

  return (
    <div>
      <h1>API Data:</h1>
      {data && (
        <div>
          <p>Name: {data.name}</p>
          <p>Skill: {data.skill}</p>
        </div>
      )}
    </div>
  );
}

export default App;