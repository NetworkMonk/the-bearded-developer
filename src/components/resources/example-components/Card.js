export default function Card({ children }) {
  return (
    <div className="shadow-lg border border-gray-100 p-8 rounded-lg">
      {children}
    </div>
  );
}
