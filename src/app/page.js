
export default function Home() {
  const getDate = async()=> {
    const res = await fetch('http://localhost:3000/time')
    const data = await res.json();
    return data.currentDate;
  }


  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold text-center">this is Landing Page here</h1>
      <h3 className="text-4xl font-bold">Time : {getDate()}</h3>
    </div>
  );
}
