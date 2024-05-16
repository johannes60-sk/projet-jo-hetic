import React from "react";
import Header from "../components/Header";
import HomeCard from "./../components/HomeCard";
import banniere_jo from "../assets/img/banniere_jo.jpg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import sport_golf from "../assets/img/sport_golf.png";
import sport_basket from "./../assets/img/sport_basket.png";
import sport_running from "./../assets/img/sport_running.png";
import Planning from "../components/Planning";

const PublicPage = () => {
  const imgTabs = [
    sport_golf,
    sport_basket,
    sport_running,
    sport_basket,
    sport_golf,
  ];
  return (
    <>
      <Header />

      <div className="h-auto pt-16">
        <img src={banniere_jo} alt="" className="w-full h-60 object-cover" />
      </div>

      <div className="container bg-zinc-100">
        <div className="flex justify-center items-center pt-8 ">
          <div className="w-full max-w-lg mt-8">
            <Carousel
              opts={{
                align: "center",
              }}
              className="w-full"
            >
              <CarouselContent className="w-100">
                {imgTabs.map((img, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-44"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square p-0">
                          {/* <span className="text-3xl font-semibold">
                          {index + 1}
                        </span> */}
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        <div className="my-20 ">
          <h2 className="text-4xl font-semibold ml-20">News</h2>
          <div className="flex justify-center  my-5 p-0 w-4/5 mx-auto">
            <div className="flex-1 ">
              <HomeCard img={sport_basket}/>
            </div>
            <div className="flex-1 ">
              <HomeCard img={sport_running}/>
            </div>
            <div className="flex-1 ">
              <HomeCard img={sport_golf}/>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-4xl ml-20 font-semibold">Planning</h2>
          <Planning />
        </div>
      </div>
    </>
  );
};

export default PublicPage;
