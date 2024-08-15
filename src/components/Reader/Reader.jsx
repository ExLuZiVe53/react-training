import { useState } from "react";

export default function Reader({ items }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handlePrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };

  const totalItems = items.length;
  const currentItem = items[selectedIdx];
  console.log(currentItem);

  return (
    <div>
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <p>
        {selectedIdx}/{totalItems}
      </p>
      <article>
        <h2>Topic</h2>
        <p>Text</p>
      </article>
    </div>
  );
}
