export default function ClickCounter({ onUpdate, value }) {
  return <button onClick={onUpdate}>CLicks: {value}</button>;
}
