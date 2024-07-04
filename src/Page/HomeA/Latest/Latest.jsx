import { useEffect, useState } from "react";

import CardLatest from "../../Shaired/CardLatest/CardLatest";


const Latest = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const saladItem = data.filter(card => card.category === 'salad');
        setTodo(saladItem);
      })

  }, [])
  return (

    <div>
      <h1 className="text-5xl my-4 font-bold">Latest News</h1>
      <div className="flex justify-between">


        <div className="">

          <p>There are many variations of passages of Lorem Ipsum available, but the <br /> majority have suffered alteration.</p>
        </div>

        <div className="">
          <button className="btn btn-outline btn-secondary">Secondary</button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-4 my-3">
        {
          todo.slice(0, 3).map(cards => <CardLatest key={cards._id} cards={cards}></CardLatest>)
        }
      </div>


    </div>
  );
};

export default Latest;