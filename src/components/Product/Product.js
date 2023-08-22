import React, { useEffect, useState } from "react";
import Dialogue from "./Dialogue";
import Footer from "../Footer/Footer";

import "./Product.css";
import { useMemo } from "react";

const Product = () => {
  const itemsPerPage = 6;
  const [readMore, setReadMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const totalPage = useMemo(() => {
    return Math.ceil(Menudata?.length / itemsPerPage);
  }, [Menudata, itemsPerPage]);

  const data = useMemo(() => {
    return Menudata?.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [Menudata, currentPage, itemsPerPage]);

  const handleChangePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleChangeNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const showlessdescription = (description) => {
    if (description?.length < 100) {
      return description;
    } else {
      return description?.slice(0, 100);
    }
  };

  return (
    <>
      <h1 className="head-f">Food items</h1>
      <div className="cart-container">
        {data.map((currEle) => {
          return (
            <>
              <div className="cart">
                <div className="containerrr">
                  <div className="imgep">
                    <img className="pimg" src={currEle.image} />
                    <div className="ratingDiv">
                      <p className="rate">{currEle.rating}✰</p>
                    </div>
                  </div>
                </div>
                <div className="head-c">
                  <div className="name_rating">
                    <h4 className="main-p">{currEle.name}</h4>
                    <div>{currEle.categoary}</div>
                 
                  </div>
                  <p>
                    {readMore === currEle.id
                      ? currEle.description
                      : showlessdescription(currEle.description)}{" "}
                    {currEle.description?.length > 100 && (
                      <button
                        className="bcn"
                        onClick={() =>
                          readMore === currEle.id
                            ? setReadMore("")
                            : setReadMore(currEle.id)
                        }
                      >
                        {readMore === currEle.id ? "View less" : "View more"}
                      </button>
                    )}{" "}
                  </p>
                </div>

                <div className="orbtn">
                  <div>
                    <button className="orderBtn" onClick={openDialog}>
                      Order Now
                    </button>
                  </div>
                  <div className="pric">
                    <div>₹ {currEle.prize}</div>
                  </div>
                </div>
                <Dialogue isOpen={isDialogOpen} onClose={closeDialog} />
              </div>
            </>
          );
        })}
        {/* <ul> */}
        {/* {currentItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
  <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        onPageChange={onPageChange}
      /> */}

        <div className="btn-sy">
          <button className="byb" onClick={handleChangePrev}>
            Prev
          </button>
          <span>
            {currentPage}/{totalPage}
          </span>
          <button className="byb" onClick={handleChangeNext}>
            Next
          </button>
        </div>

      
      </div>
      <Footer />
    </>
  );
};

export default Product;

const Menudata = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1576831438132-7b74c94006b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0YXJ0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "noodles",
    categoary: "starter",
    rating: 4.7,
    orders: 26,
    prize: 100,
    description:
      "Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit.Lorem ipsum dolor sit.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600271801401-65fe5f623a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0YXJ0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "salad",
    categoary: "starter",
    rating: 4.1,
    orders: 20,
    prize: 130,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1598602055533-04e934ea2f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHN0YXJ0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "Mango jelly pudding",
    categoary: "starter",
    rating: 3.7,
    orders: 11,
    prize: 99,
    description:
      "Lorem ipsum dolor sit. Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHN0YXJ0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "veg mixer",
    categoary: "starter",
    rating: 4.5,
    orders: 20,
    prize: 140,
    description:
      "Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1579631542720-3a87824fff86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHN0YXJ0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: " noddles",
    categoary: "starter",
    rating: 4.7,
    orders: 26,
    prize: 180,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1599122759357-66745a5c36ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHN0YXJ0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "jcook roll",
    categoary: "starter",
    rating: 4.5,
    orders: 32,
    prize: 200,
    description:
      "Lorem ipsum dolor sit.Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit.Lorem ipsum dolor sit.",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1625938144755-652e08e359b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHN0YXJ0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "bread breek",
    categoary: "starter",
    rating: 3.5,
    orders: 16,
    prize: 99,
    description:
      "Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit.",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1625860633266-8707a63d6671?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHN0YXJ0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "paratha",
    categoary: "starter",
    rating: 4.7,
    orders: 26,
    prize: 100,
    description: "with extra butter",
  },
  {
    id: 9,
    image:
      "https://media.istockphoto.com/photos/bonito-marmitako-basque-tuna-stew-with-vegetables-closeup-in-the-picture-id1325566790?b=1&k=20&m=1325566790&s=170667a&w=0&h=bDVb-Hy4heeKmHHM_VcG3sInzQUohRTkeusjD_AFf6Q=",
    name: "chiken chunk",
    categoary: "main",
    rating: 4.5,
    orders: 20,
    prize: 140,
    description:
      "Lorem ipsum dolor sit. Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit",
  },
  {
    id: 10,
    image:
      "https://media.istockphoto.com/photos/fillet-of-salmon-with-vegetable-picture-id175028181?b=1&k=20&m=175028181&s=170667a&w=0&h=9SDGAG8CkgvTHfhPANh-TwIA1xJ8NelCSwl_ttUt-bk=",
    name: "egg bread ",
    categoary: "main",
    rating: 4.2,
    orders: 10,
    prize: 170,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 11,
    image:
      "https://media.istockphoto.com/photos/woman-hand-holding-fork-and-knife-eat-chicken-breast-meat-with-potato-picture-id1320788808?b=1&k=20&m=1320788808&s=170667a&w=0&h=7oFuc2_K8t5LqKk4CZk6G0RMqJrRzbUwF7J8qFPJYmU=",
    name: "pizza",
    categoary: "main",
    rating: 4.5,
    orders: 40,
    prize: 240,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFpbiUyMGNvdXJzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    name: "lobster",
    categoary: "main",
    rating: 3.2,
    orders: 4,
    prize: 90,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1606214306048-a148c5942180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1haW4lMjBjb3Vyc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "momos",
    categoary: "main",
    rating: 4.5,
    orders: 20,
    prize: 140,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 14,
    image:
      "https://images.unsplash.com/photo-1625937329935-287441889bce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1haW4lMjBjb3Vyc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "red meat",
    categoary: "main",
    rating: 4.6,
    orders: 43,
    prize: 240,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 15,
    image:
      "https://images.unsplash.com/photo-1559848062-6b79bcad91bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG1haW4lMjBjb3Vyc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "burger",
    categoary: "main",
    rating: 4.5,
    orders: 20,
    prize: 140,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 16,
    image:
      "https://images.unsplash.com/photo-1633796967868-0f4be3105d41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1haW4lMjBjb3Vyc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "mix pakoda",
    categoary: "main",
    rating: 4.7,
    orders: 26,
    prize: 100,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 17,
    image:
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c291cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    name: "random soup",
    categoary: "soup",
    rating: 4.5,
    orders: 20,
    prize: 140,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 18,
    image:
      "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c291cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    name: "tomato soup",
    categoary: "soup",
    rating: 4.5,
    orders: 20,
    prize: 140,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 19,
    image:
      "https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c291cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    name: "chicken soup",
    categoary: "soup",
    rating: 3.7,
    orders: 11,
    prize: 99,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 20,
    image:
      "https://images.unsplash.com/photo-1578859318509-62790b079366?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNvdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "ginger soup",
    categoary: "soup",
    rating: 4.5,
    orders: 20,
    prize: 140,
    description:
      "with extra broccly Lorem ipsum dolor sit Lorem ipsum dolor sit",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1576831438132-7b74c94006b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0YXJ0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "noodles",
    categoary: "starter",
    rating: 4.7,
    orders: 26,
    prize: 100,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1600271801401-65fe5f623a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0YXJ0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "salad",
    categoary: "starter",
    rating: 4.1,
    orders: 20,
    prize: 130,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1598602055533-04e934ea2f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHN0YXJ0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "Mango jelly pudding",
    categoary: "starter",
    rating: 3.7,
    orders: 11,
    prize: 99,
    description:
      "Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit",
  },
  {
    id: 14,
    image:
      "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHN0YXJ0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "veg mixer",
    categoary: "starter",
    rating: 4.5,
    orders: 20,
    prize: 140,
    description:
      "Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit .Lorem ipsum dolor sit.Lorem ipsum dolor sit",
  },
  {
    id: 15,
    image:
      "https://images.unsplash.com/photo-1579631542720-3a87824fff86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHN0YXJ0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: " noddles",
    categoary: "starter",
    rating: 4.7,
    orders: 26,
    prize: 180,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 16,
    image:
      "https://images.unsplash.com/photo-1599122759357-66745a5c36ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHN0YXJ0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "jcook roll",
    categoary: "starter",
    rating: 4.5,
    orders: 32,
    prize: 200,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 17,
    image:
      "https://images.unsplash.com/photo-1625938144755-652e08e359b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHN0YXJ0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "bread breek",
    categoary: "starter",
    rating: 3.5,
    orders: 16,
    prize: 99,
    description:
      "Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit .Lorem ipsum dolor sit.Lorem ipsum dolor sit",
  },
  {
    id: 18,
    image:
      "https://images.unsplash.com/photo-1625860633266-8707a63d6671?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHN0YXJ0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "paratha",
    categoary: "starter",
    rating: 4.7,
    orders: 26,
    prize: 100,
    description: "with extra butter",
  },
  {
    id: 19,
    image:
      "https://media.istockphoto.com/photos/bonito-marmitako-basque-tuna-stew-with-vegetables-closeup-in-the-picture-id1325566790?b=1&k=20&m=1325566790&s=170667a&w=0&h=bDVb-Hy4heeKmHHM_VcG3sInzQUohRTkeusjD_AFf6Q=",
    name: "chiken chunk",
    categoary: "main",
    rating: 4.5,
    orders: 20,
    prize: 140,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 20,
    image:
      "https://media.istockphoto.com/photos/fillet-of-salmon-with-vegetable-picture-id175028181?b=1&k=20&m=175028181&s=170667a&w=0&h=9SDGAG8CkgvTHfhPANh-TwIA1xJ8NelCSwl_ttUt-bk=",
    name: "egg bread ",
    categoary: "main",
    rating: 4.2,
    orders: 10,
    prize: 170,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 21,
    image:
      "https://media.istockphoto.com/photos/woman-hand-holding-fork-and-knife-eat-chicken-breast-meat-with-potato-picture-id1320788808?b=1&k=20&m=1320788808&s=170667a&w=0&h=7oFuc2_K8t5LqKk4CZk6G0RMqJrRzbUwF7J8qFPJYmU=",
    name: "pizza",
    categoary: "main",
    rating: 4.5,
    orders: 40,
    prize: 240,
    description:
      "Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit .Lorem ipsum dolor sit.Lorem ipsum dolor sit",
  },
  {
    id: 22,
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFpbiUyMGNvdXJzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    name: "lobster",
    categoary: "main",
    rating: 3.2,
    orders: 4,
    prize: 90,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 23,
    image:
      "https://images.unsplash.com/photo-1606214306048-a148c5942180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1haW4lMjBjb3Vyc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "momos",
    categoary: "main",
    rating: 4.5,
    orders: 20,
    prize: 140,
    description:
      "Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit .Lorem ipsum dolor sit.Lorem ipsum dolor sit",
  },
  {
    id: 24,
    image:
      "https://images.unsplash.com/photo-1625937329935-287441889bce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1haW4lMjBjb3Vyc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "red meat",
    categoary: "main",
    rating: 4.6,
    orders: 43,
    prize: 240,
    description:
      "Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit .Lorem ipsum dolor sit.Lorem ipsum dolor sit",
  },
  {
    id: 25,
    image:
      "https://images.unsplash.com/photo-1559848062-6b79bcad91bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG1haW4lMjBjb3Vyc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "burger",
    categoary: "main",
    rating: 4.5,
    orders: 20,
    prize: 140,
    description:
      "Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit .Lorem ipsum dolor sit.Lorem ipsum dolor sit",
  },
  {
    id: 26,
    image:
      "https://images.unsplash.com/photo-1633796967868-0f4be3105d41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1haW4lMjBjb3Vyc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "mix pakoda",
    categoary: "main",
    rating: 4.7,
    orders: 26,
    prize: 100,
    description:
      "Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit .Lorem ipsum dolor sit.Lorem ipsum dolor sit",
  },
  {
    id: 27,
    image:
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c291cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    name: "random soup",
    categoary: "soup",
    rating: 4.5,
    orders: 20,
    prize: 140,
    description:
      "Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit .Lorem ipsum dolor sit.Lorem ipsum dolor sit",
  },
  {
    id: 28,
    image:
      "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c291cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    name: "tomato soup",
    categoary: "soup",
    rating: 4.5,
    orders: 20,
    prize: 140,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 29,
    image:
      "https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c291cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    name: "chicken soup",
    categoary: "soup",
    rating: 3.7,
    orders: 11,
    prize: 99,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 30,
    image:
      "https://images.unsplash.com/photo-1578859318509-62790b079366?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNvdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "ginger soup",
    categoary: "soup",
    rating: 4.5,
    orders: 20,
    prize: 140,
    description: "with extra broccly",
  },
  {
    id: 31,
    image:
      "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c291cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    name: "mix soup",
    categoary: "soup",
    rating: 4.2,
    orders: 32,
    prize: 220,
    description: "with noddels",
  },
  {
    id: 32,
    image:
      "https://images.unsplash.com/photo-1610725663727-08695a1ac3ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNvdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "onion soup",
    categoary: "soup",
    rating: 3.7,
    orders: 11,
    prize: 99,
    description: "with extra chunk",
  },
  {
    id: 33,
    image:
      "https://images.unsplash.com/photo-1611068120813-eca5a8cbf793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNvdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "red tomato soup",
    categoary: "soup",
    rating: 4.5,
    orders: 20,
    prize: 140,
    description:
      "Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit .Lorem ipsum dolor sit.Lorem ipsum dolor sit",
  },
  {
    id: 34,
    image:
      "https://images.unsplash.com/photo-1607528971899-2e89e6c0ec69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHNvdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "mix veg soup",
    categoary: "soup",
    rating: 4.7,
    orders: 26,
    prize: 130,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 36,
    image:
      "https://images.unsplash.com/photo-1607528971899-2e89e6c0ec69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHNvdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "brown forest cake",
    categoary: "dessert",
    rating: 4.1,
    orders: 31,
    prize: 190,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 37,
    image:
      "https://media.istockphoto.com/photos/cupcakes-with-sparklers-picture-id532180276?b=1&k=20&m=532180276&s=170667a&w=0&h=1AynXyVlm0XlOIjxFjPqsFpWReuHccWImRMgceDW6nk=",
    name: "butterscotch cup cake",
    categoary: "dessert",
    rating: 4.5,
    orders: 20,
    prize: 140,
    description: "Lorem ipsum dolor sit.",
  },
  {
    id: 38,
    image:
      "https://media.istockphoto.com/photos/preparing-chocolate-chip-cookies-picture-id905563616?b=1&k=20&m=905563616&s=170667a&w=0&h=QOUVlmpV_-9xjJOpwQot_Bn64Ma8L0t214yjOO7DPuw=",
    name: "cookies",
    categoary: "dessert",
    rating: 4.5,
    orders: 20,
    prize: 140,
    description:
      "Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit .Lorem ipsum dolor sit.Lorem ipsum dolor sit",
  },
  {
    id: 39,
    image:
      "https://images.unsplash.com/photo-1588195542907-a0c0a2ac3312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzc2VydCUyMHBsYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    name: "cake pizza",
    categoary: "dessert",
    rating: 4.1,
    orders: 25,
    prize: 99,
    description: "Lorem ipsum dolor sit.",
  },

];
