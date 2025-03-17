import { KeyboardArrowDown, FilterListOutlined } from "@mui/icons-material";
import store from "./store";
import { Provider } from "react-redux";
import { useState, useEffect, useRef } from "react";
import FilterLG from "./FilterLG";
import FilterSM from "./FilterSM"; // Added missing import
import { Button } from "../general/buttons";
import { ListOfProducts } from "../../data/allItems";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate

const ProductList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const filterRef = useRef(null);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [selectedFilter, setSelectedFilter] = useState("all-items");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Added for navigation

  // Get unique types from ListOfProducts for filter options
  const filterOptions = [
    "all-items",
    ...new Set(ListOfProducts.map((product) => product.type)),
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setItemsPerPage(10);
      } else {
        setItemsPerPage(9);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFilterClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedFilter(option);
    setIsDropdownOpen(false);
    setCurrentPage(1);
  };

  // Filter products based on selected type
  const filteredProducts = ListOfProducts.filter((product) => {
    if (selectedFilter === "all-items") return true;
    return product.type === selectedFilter;
  });

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (filterRef.current && isOpen) {
        const filterRect = filterRef.current.getBoundingClientRect();
        if (filterRect.bottom < 0) {
          setIsOpen(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const handleProductClick = (list) => {
    navigate(`/product/${list.id}`, {
      state: {
        image: list.image,
        name: list.name,
        price: list.price,
        type: list.type,
      },
    });
  };

  return (
    <div className="section !pt-2 relative">
      <div
        ref={filterRef}
        className={`absolute z-10 pb-16 rounded-xl top-0 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <FilterSM />
      </div>

      <div className="lg:hidden flex justify-between w-full h-full items-center relative">
        <div
          className="text-2xl uppercase cursor-pointer font-Rubik font-medium bg-white rounded-2xl py-4 px-7 gap-x-14 flex items-center justify-between"
          onClick={handleFilterClick}
        >
          filter <FilterListOutlined sx={{ fontSize: "2rem" }} />
        </div>
        <div className="relative">
          <div
            className="text-2xl uppercase cursor-pointer font-Rubik font-medium bg-white rounded-2xl py-4 px-7 gap-x-14 flex items-center justify-between"
            onClick={handleDropdownClick}
          >
            {selectedFilter} <KeyboardArrowDown sx={{ fontSize: "2rem" }} />
          </div>
          {isDropdownOpen && (
            <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-lg z-20">
              {filterOptions.map((option) => (
                <div
                  key={option}
                  className="text-2xl uppercase cursor-pointer font-Rubik font-medium px-7 py-4 hover:bg-gray-100"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center mt-10 justify-between w-full">
        <div className="product-info">
          <h2 className="text-5xl font-Rubik font-semibold">
            life style shoes
          </h2>
          <span className="text-xl font-medium">
            {filteredProducts.length} items
          </span>
        </div>
        <div className="relative">
          <div
            className="lg:flex hidden cursor-pointer text-2xl uppercase font-Rubik font-semibold bg-white rounded-2xl py-4 px-7 gap-x-14 items-center justify-between"
            onClick={handleDropdownClick}
          >
            {selectedFilter} <KeyboardArrowDown sx={{ fontSize: "2rem" }} />
          </div>
          {isDropdownOpen && (
            <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-lg z-20">
              {filterOptions.map((option) => (
                <div
                  key={option}
                  className="text-2xl uppercase cursor-pointer font-Rubik font-semibold px-7 py-4 hover:bg-gray-100"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex w-full gap-x-5 mt-10">
        <div className="flex-[3] lg:flex hidden">
          <div className="">
            <h3 className="text-3xl font-bold mb-12">filters</h3>
            <Provider store={store}>
              <FilterLG />
            </Provider>
          </div>
        </div>

        <div className="flex-[7]">
          <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-16 grid-cols-2">
            {currentItems.map((list) => (
              <div
                key={list.id}
                className="w-full flex flex-col flex-wrap overflow-hidden h-full"
              >
                <div className="bg-white w-full p-3 rounded-3xl overflow-hidden">
                  <div className="w-full relative overflow-hidden">
                    <span className="absolute top-0 font-Rubik text-xl text-white bg-blue-600 py-3 px-5 rounded-tl-3xl rounded-br-3xl">
                      {list.type}
                    </span>
                    <div className="overflow-hidden w-full h-full">
                      <div
                        onClick={() => handleProductClick(list)}
                        className="cursor-pointer"
                      >
                        <img
                          src={list.image}
                          alt={list.name}
                          loading="lazy"
                          className="w-full overflow-hidden hover:brightness-75 rounded-3xl max-h-[20rem] sm:max-h-[25rem] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-Rubik text-nowrap my-7 text-[1.3rem] sm:text-3xl font-semibold text-gray-950 uppercase">
                  {list.name}
                </h3>
                <Link to={`/product/${list.id}`}>
                  <Button name="view products - " price={list.price} />
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-16 gap-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-6 py-3 text-3xl font-Rubik font-bold rounded-lg ${
                    currentPage === pageNum
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {pageNum}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
