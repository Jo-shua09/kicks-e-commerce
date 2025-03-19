import { images } from "../../data/ListedData";

/**
 * Component that displays a promotional hero section for a product.
 * It includes an image and promotional text highlighting a limited-time offer.
 */
const ProductHero = () => {
  /**
   * Renders the hero section with an image and promotional text.
   */
  return (
    <div className="section-two !pt-0">
      <div className="relative w-full h-full">
        <img
          src={images.Hero}
          alt="product hero image"
          className="w-full sm:brightness-90 brightness-50 sm:h-[50rem] h-[40rem] object-cover rounded-[3rem]"
        />
        <div className=" lg:w-1/3 sm:w-1/2 w-2/3 absolute top-1/2 sm:left-16 left-7 bottom-0">
          <h4 className="sm:text-3xl text-2xl text-gray-300 font-medium normal-case mb-4">
            Limited time only
          </h4>
          <h2 className="sm:text-7xl text-5xl text-white font-Rubik font-bold mb-4">
            get 30% off
          </h2>
          <p className="sm:text-2xl text-xl text-gray-300 font-normal normal-case">
            Sneakers made with your comfort in mind so you can put all of your
            focus into your next session.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
