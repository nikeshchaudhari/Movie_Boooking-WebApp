import React from 'react'

const Booking = () => {
     const [items, setItems] = useState("");
  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await axios.get("http://localhost:3000/movies");
        setItems(res.data);
        console.log(res.data);
      } catch (err) {
        console.log("Something wrong...", err);
      }
    };
  });
  return (
    <div>Booking</div>
  )
}

export default Booking