import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Orange", calories: 45 },
    { id: 3, name: "Banana", calories: 105 },
    { id: 4, name: "Coconut", calories: 159 },
    { id: 5, name: "Pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "Carrot", calories: 41 },
    { id: 7, name: "Cucumber", calories: 16 },
    { id: 8, name: "Tomato", calories: 18 },
    { id: 9, name: "Broccoli", calories: 55 },
    { id: 10, name: "Spinach", calories: 23 },
  ];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
    </>
  );
}

export default App;
