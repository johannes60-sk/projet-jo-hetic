import React from "react";
import Header from "../components/Header";
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
        <div className="flex justify-center items-center ">
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

        <div class="flex justify-between my-8">
          <div class="flex-1 h-28 bg-black mx-2">Block 1</div>
          <div class="flex-1 h-28 bg-slate-500 mx-2">Block 2</div>
          <div class="flex-1 h-28 bg-zinc-900 mx-2">Block 3</div>
          <div class="flex-1 h-28 bg-blue-500 mx-2">Block 4</div>
        </div>

        <div className="mt-5">
          <h2 className="text-2xl font-semibold">Planning</h2>
        </div>

        <Planning />
      </div>
    </>
  );
};

export default PublicPage;
