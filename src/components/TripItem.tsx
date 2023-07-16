import { Trip } from "@prisma/client";
import Image from "next/image";
import React from "react";
import ReactCountryFlag from "react-country-flag";

interface TripItemProps {
  trip: Trip;
}

const TripItem = ({ trip }: TripItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative h-[280px] w-[280px]">
        <Image
          src={trip.coverImage}
          alt={trip.name}
          style={{ objectFit: "cover" }}
          fill
          className="rounded-lg shadow-md"
        />
      </div>

      <h3 className="text-sm font-medium text-primaryDarker mt-2">
        {trip.name}
      </h3>
      <div className="flex items-center gap-1 my-1">
        <ReactCountryFlag
          countryCode={trip.countryCode}
          svg
          className="w-5 h-5"
        />
        <p className="text-xs text-grayPrimary">{trip.location}</p>
      </div>

      <p className="text-xs text-grayPrimary">
        <span className="text-primary font-medium">
          R${trip.pricePerDay.toString()}
        </span>{" "}
        por dia
      </p>
    </div>
  );
};

export default TripItem;
