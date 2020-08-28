import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
  MDBBtn,
} from "mdbreact";
import { motion } from "framer-motion";

const CarouselPage = ({ preBuildedPCs }) => {
  return (
    <div className="h-100">
      <MDBCarousel
        activeItem={1}
        length={preBuildedPCs.length}
        showControls={true}
        showIndicators={true}
        className="z-depth-1 "
        className="h-100"
      >
        <MDBCarouselInner>
          {preBuildedPCs.map((preBuildedPC, index) => {
            console.log(index++);
            return (
              <>
                <MDBCarouselItem itemId={index++}>
                  <MDBView className="h-100">
                    <div className=" d-flex elegant-color-dark p-5 h-100 w-100">
                      <div className=" container d-flex carousel-container justify-content-center  align-items-center darken-2">
                        <div className="white-text h-50 d-flex w-responsive  flex-column justify-content-between align-items-start ">
                          <p className="red-text font-weight-bold">
                            {" "}
                            {preBuildedPC.name}
                          </p>
                          <h1 className="font-weight-bold ">
                            <span className="d-block ">
                              {preBuildedPC.buildType}
                            </span>
                            {preBuildedPC.type}{" "}
                          </h1>
                          <p>{preBuildedPC.info}</p>
                          <h2 className="font-weight-bold mr-2">
                            {preBuildedPC.price}
                          </h2>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            className="align-self-center"
                          >
                            <MDBBtn
                              className="rounded-pill m-0  "
                              gradient="blue"
                            >
                              See Details
                            </MDBBtn>
                          </motion.div>
                        </div>
                        <div
                          style={{ width: "500px", height: "500px" }}
                          className=" d-flex w-responsive h-50 flex-column  align-items-center "
                        >
                          <img
                            src={preBuildedPC.imgUrl}
                            className=" img-fluid"
                            alt="PC-img"
                          />
                        </div>
                      </div>
                    </div>
                  </MDBView>
                </MDBCarouselItem>
              </>
            );
          })}
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
};

export default CarouselPage;
