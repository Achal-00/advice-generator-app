import React, { useEffect, useState } from "react";
import Content from "./Content";
import Divider from "./Divider";
import Button from "./Button";

const App = () => {
  const [data, setData] = useState({
    id: "",
    advice: "",
  });

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setData({ ...data, id: data.slip.id, advice: data.slip.advice });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <section className="container">
      <Content data={data} />
      <Divider />
      <Button fetchAdvice={fetchAdvice} />
    </section>
  );
};

export default App;
