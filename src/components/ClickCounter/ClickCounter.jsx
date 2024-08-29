import { useState, useEffect } from "react";

export default function ClickCounter() {
  const [clicks, setClicks] = useState(0);
  const [date, setDate] = useState(Date.now());

  const updateClicks = () => {
    setClicks(clicks + 1);
  };

  const updateDate = () => {
    setDate(Date.now());
  };

  useEffect(() => {
    console.log("useEffect on mount");
  }, []);

  useEffect(() => {
    console.log("useEffect", date);
  }, [date]);

  useEffect(() => {
    console.log("useEffect", clicks);
  }, [clicks]);

  return (
    <>
      <button onClick={updateClicks}>CLicks: {clicks}</button>
      <button onClick={updateDate}>Date: {date}</button>
    </>
  );
}
