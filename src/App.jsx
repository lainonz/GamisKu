import { AiFillShopping } from "react-icons/ai";

function App() {
  let owner = 6289518312415;

  let product = [
    {
      name: "Gamis Wanita",
      harga: "400.000",
      gambar:
        "https://www.shafira.com/wp-content/uploads/2024/01/3b-762x995.jpg",
    },
    {
      name: "Gamis Wanita Type II",
      harga: "500.000",
      gambar:
        "https://www.shafira.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-27-at-2.25.13-PM-762x995.jpeg",
    },
  ];

  return (
    <>
      <div>
        <nav className="flex justify-between py-5 px-10 items-center bg-black">
          <h1 className="font-bold text-white text">SHAFIRA GAMIS</h1>
          <AiFillShopping className="fill-white text-2xl" />
        </nav>
        <section className="hero bg-[url('https://www.shafira.com/wp-content/uploads/2024/02/MP-F-Web-1-1536x772.jpg')] h-[300px] md:h-[600px] bg-cover bg-center">
          <br />
        </section>
        <section className="product mt-4">
          <h1 className="text-center font-bold text-2xl">OUR PRODUCT</h1>
          <hr className="border-[1px] border-black mx-auto w-[10%] mt-2" />
          <div className="list-product px-6 mt-6 flex flex-col md:flex-row justify-center space-y-6 md:space-x-6 md:space-y-0">
            {product.map((product, i) => (
              <>
                <div key={i}>
                  <img
                    src={product.gambar}
                    alt={product.name}
                    width="350"
                    height="350"
                    className="mx-auto"
                  />
                  <h1 className="text-center mt-2">{product.name}</h1>
                  <h1 className="text-center">Rp {product.harga}</h1>
                  <a
                    href={`https://wa.me/${owner}`}
                    target="_blank"
                    className="bg-black text-white block p-2 text-center mt-2 transition-all duration-300"
                  >
                    ORDER NOW
                  </a>
                </div>
              </>
            ))}
          </div>
        </section>
        <section className="footer bg-black h-[60px] mt-12" />
      </div>
    </>
  );
}

export default App;
