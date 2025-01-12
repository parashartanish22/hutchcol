"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Hutchcol_o3 from "../../assets/WhatsApp Image 2025-01-12 at 21.42.53 1.svg";
import Hutchcol_clear from "../../assets/clear-hutchcol.svg";
import Hutchcol_marine from "../../assets/B Front new 1.svg";
import Hutchcol_multi from "../../assets/multi-hutchcol 1.svg";
import Hutchcol_active from "../../assets/active.svg";
import Hutchcol_eco from "../../assets/eco.svg";
import Hutchcol_perfect from "../../assets/perfect.svg";
import Hutchcol_sh from "../../assets/SH.svg";
import Hutchcol_shine from "../../assets/shine.svg";

interface Product {
  name: string;
  image: string;
  description: string;
  price: string;
  coverage: string;
  film: string;
  advantage: string;
  stability: string;
  application: string;
  packing: string;
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const products = [
    {
      name: "Hutchcol O3",
      image: Hutchcol_o3,
      description:
        "Our most premium product which is water resistant and dryes at a faster rate.",
      price: "$10.00",
      coverage: "50-55 Sq.ft/kg .",
      film: "Transparent / Glossy Water resistants.",
      advantage: "Advantages of Hutchcol O3.",
      stability: "1 year.",
      application:
        "Hutchcol O3 is specially used for joining woods and derived timber products such as furniture innternal structures,Doors, windows lamination, Plywood.",
      packing: "Packing available in 500gm, 1kg, 2kg, 5kg, 10kg, 20kg, 50kg",
    },
    {
      name: "Hutchcol Marine",
      image: Hutchcol_marine,
      description: "Our Water Resistant Adhesive",
      price: "$30.00",
      coverage: "50-55 Sq.ft/kg",
      film: "Transparent / Glossy Water resistants.",
      advantage:
        "Waterproof Adhesive, Heat and Fungal Resistant, Excellent Stragth",
      stability: "1 year",
      application:
        "For bonding plywood / MDF / Particle board etc. with each other and also bonding between laminate / veneers etc.",
      packing: "Packing available in 500gm, 1kg, 2kg, 5kg, 10kg, 20kg, 50kg",
    },
    {
      name: "Hutchcol Clear",
      image: Hutchcol_clear,
      description: "Our Economic Grade ",
      price: "$20.00",
      coverage: "50-55 Sq.ft/kg ",
      film: "Transparent / Glossy",
      advantage: "More Coverage, Better Stregth",
      stability: "1 year",
      application:
        "For bonding plywood / MDF / Particle board etc. with each other and also bonding between laminate / veneers etc.",
      packing: "Packing available in 500gm, 1kg, 2kg, 5kg, 10kg, 20kg, 50kg",
    },

    {
      name: "Hutchcol Multi",
      image: Hutchcol_multi,
      description: "Our Multi-purpose Adhesive",
      price: "$40.00",
      coverage: "50-55 Sq.ft/kg",
      film: "Transparent / Glossy",
      advantage: "Advantages of Hutchcol Multi.",
      stability: "1 year",
      application:
        "For bonding plywood / MDF / Particle board etc. with each other and also bonding between laminate / veneers etc.",
      packing: "Packing available in 500gm, 1kg, 2kg, 5kg, 10kg, 20kg, 50kg",
    },
    {
      name: "Hutchcol SH",
      image: Hutchcol_sh,
      description:
        "Most premium  Resin adhesive Product with faster drying rate ",
      price: "$40.00",
      coverage: "50-55 Sq.ft/kg",
      film: "Transparent / Glossy",
      advantage:
        "Faster drying rate, ultimate strength, anti-termite formula offering superior protection against pests.",
      stability: "1 year",
      application:
        "For bonding plywood / MDF / Particle board etc. with each other and also bonding between laminate / veneers etc.",
      packing: "Packing available in 500gm, 1kg, 2kg, 5kg, 10kg, 20kg, 50kg",
    },
    {
      name: "Hutchcol Active",
      image: Hutchcol_active,
      description: "Resin Adhesive range",
      price: "$40.00",
      coverage: "50-55 Sq.ft/kg",
      film: "Transparent / Glossy",
      advantage: "Advantages of Hutchcol Active.",
      stability: "1 year",
      application:
        "For bonding plywood / MDF / Particle board etc. with each other and also bonding between laminate / veneers etc.",
      packing: "Packing available in 500gm, 1kg, 2kg, 5kg, 10kg, 20kg, 50kg",
    },
    {
      name: "Hutchcol Eco",
      image: Hutchcol_eco,
      description: "Economic Resin adhesive range",
      price: "$40.00",
      coverage: "50-55 Sq.ft/kg",
      film: "Transparent / Glossy",
      advantage: "Advantages of Hutchcol Eco.",
      stability: "1 year",
      application:
        "For bonding plywood / MDF / Particle board etc. with each other and also bonding between laminate / veneers etc.",
      packing: "Packing available in 500gm, 1kg, 2kg, 5kg, 10kg, 20kg, 50kg",
    },
    {
      name: "Hutchcol Perfect",
      image: Hutchcol_perfect,
      description: "Resin Adhesive range",
      price: "$40.00",
      coverage: "50-55 Sq.ft/kg",
      film: "Transparent / Glossy",
      advantage: "Advantages of Hutchcol Perfect.",
      stability: "1 year",
      application:
        "For bonding plywood / MDF / Particle board etc. with each other and also bonding between laminate / veneers etc.",
      packing: "Packing available in 500gm, 1kg, 2kg, 5kg, 10kg, 20kg, 50kg",
    },
    {
      name: "Hutchcol Shine",
      image: Hutchcol_shine,
      description: "Resin Adhesive range",
      price: "$40.00",
      coverage: "50-55 Sq.ft/kg",
      film: "Transparent / Glossy",
      advantage: "Advantages of Hutchcol Shine.",
      stability: "1 year",
      application:
        "For bonding plywood / MDF / Particle board etc. with each other and also bonding between laminate / veneers etc.",
      packing: "Packing available in 500gm, 1kg, 2kg, 5kg, 10kg, 20kg, 50kg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="aspect-w-4 aspect-h-3 mb-4">
                <product.image
                  alt={`${product.name} logo`}
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                  // viewBox="0 0 256 256" // Match the original SVG viewBox
                />
              </div>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="flex justify-center">
                    <Button onClick={() => setSelectedProduct(product)}>
                      View Details{" "}
                    </Button>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{selectedProduct?.name}</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <product.image
                        alt={`${product.name} logo`}
                        className="w-full h-full"
                        preserveAspectRatio="xMidYMid meet"
                        // viewBox="0 0 256 256" // Match the original SVG viewBox
                      />
                    </div>

                    <div className="grid grid-cols-4  gap-4">
                      <span className="font-bold">Coverage:</span>
                      <span className="col-span-3">
                        {selectedProduct?.coverage}
                      </span>
                    </div>
                    <div className="grid grid-cols-4  gap-4">
                      <span className="font-bold">Film:</span>
                      <span className="col-span-3">
                        {selectedProduct?.film}
                      </span>
                    </div>
                    <div className="grid grid-cols-4  gap-4">
                      <span className="font-bold">Advantage:</span>
                      <span className="col-span-3">
                        {selectedProduct?.advantage}
                      </span>
                    </div>
                    <div className="grid grid-cols-4  gap-4">
                      <span className="font-bold">Stability:</span>
                      <span className="col-span-3">
                        {selectedProduct?.stability}
                      </span>
                    </div>
                    <div className="grid grid-cols-4  gap-4">
                      <span className="font-bold">Application:</span>
                      <span className="col-span-3">
                        {selectedProduct?.application}
                      </span>
                    </div>
                    <div className="grid grid-cols-4  gap-4">
                      <span className="font-bold">Packing:</span>
                      <span className="col-span-3">
                        {selectedProduct?.packing}
                      </span>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
