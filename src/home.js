function App() {
  return (
    <div className="wrapper">
      <Card
        img="https://www.labonelfinebaking.shop/wp-content/uploads/2021/02/CLASSIC-CHOCOLATE-CAKE.jpg"
        title="Chocolate cake"
        description= "Rich in chocolate"
        price="4"
      />

      <Car
        img= "https://cdn.shopify.com/s/files/1/0521/3929/4884/products/EgglessRedVelvetCake1.jpg?v=1632141306"
        title="Red Velvet"
        description="Creamy cake filled with white chocolate"
        price="10"
      />
      <Card
        img="https://cdn.giftstoindia24x7.com/ASP_Img/IMG2000/GTI435043.jpg"
        title="Mango"
        description="Blended with fresh pieces of mango"
        price="6"
      />

    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card__img" />
      <div className="card__body">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
        <h3 className="card__price">{props.price}</h3>
        <button className="card__btn">Add to Cart</button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

/*

*/
