import { useState } from "react";

export default function Toogler() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToogle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToogle}>{isOpen ? "Close" : "Open"}</button>
      {isOpen && (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum ad
          fugit mollitia voluptatum, sed dolorum laudantium voluptatem eligendi
          labore nobis dolore magni eaque atque facere id? Reiciendis expedita
          accusamus laudantium.
        </p>
      )}
    </div>
  );
}
