import About from "./About";
import Contract from "./Contract";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <>
      <div className="h-screen w-full bg-gray-400 text-white">
        <div className="px-16 py-14 text-center">
          <h1 className="font-bold text-5xl text-red-400 mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            praesentium?
          </h1>
          <h2 className="text-green-300 text-3xl font-semibold mt-16">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste esse
            ea aspernatur illum soluta, nam id quasi harum, commodi
            necessitatibus, reprehenderit atque ut natus facere similique
            voluptatibus assumenda hic? Soluta?
          </h2>
          <p className="text-yellow-300 text-3xl font-semibold mt-16">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae modi officia accusantium soluta eveniet rem nam, quo
            dolores saepe optio.
          </p>
          <div className="flex justify-around items-center mt-10">
            <button className="bg-red-700 text-white rounded-lg px-5 py-3 shadow-2xl">
              Read-More
            </button>
            <button className="bg-yellow-500 text-white rounded-lg px-5 py-3 shadow-2xl">
              Information More
            </button>
          </div>
        </div>
      </div>
      <About />
      <Contract />
      <Portfolio />
    </>
  );
};
export default Home;
