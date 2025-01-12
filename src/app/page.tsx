import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  IconBoxMultiple,
  IconBuildingFactory,
  IconMail,
  IconMapPin,
  IconMessage2,
  IconPhone,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import Hutchcol_Logo from "../assets/Huchcol_logo.svg";
import Hutchcol_o3 from "../assets/WhatsApp Image 2025-01-12 at 21.42.53 1.svg";
import Hutchcol_clear from "../assets/clear-hutchcol.svg";
import Hutchcol_marine from "../assets/B Front new 1.svg";
import Hutchcol_multi from "../assets/multi-hutchcol 1.svg";

const products = [
  {
    name: "Hutchcol O3",
    image: Hutchcol_o3,
    description: "Our Hero Product.",
    price: "$10.00",
  },
  {
    name: "Hutchcol Marine",
    image: Hutchcol_marine,
    description: "Our Water-resistant product.",
    price: "$30.00",
  },
  {
    name: "Hutchcol Clear",
    image: Hutchcol_clear,
    description: "Our Affordable product.",
    price: "$20.00",
  },
  {
    name: "Hutchcol Multi",
    image: Hutchcol_multi,
    description: "Our Multi-purpose product.",
    price: "$40.00",
  },
];
export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-900 dark:text-white">
                Welcome to HutchCol
              </h1>
              <p className="text-sm sm:text-base md:text-lg mb-6 max-w-lg mx-auto md:mx-0 text-gray-700 dark:text-gray-300">
                HutchCol specializes in{" "}
                <strong className="text-gray-900 dark:text-white">
                  synthetic wood adhesives
                </strong>{" "}
                with over{" "}
                <strong className="text-gray-900 dark:text-white">
                  16 years of experience
                </strong>{" "}
                and{" "}
                <strong className="text-gray-900 dark:text-white">
                  ISO certification since 2008
                </strong>
                . Our manufacturing unit in Indore, India, ensures high-quality
                adhesive solutions for your needs.
              </p>

              {/* Call-to-Action Button */}
              <Button asChild className="w-full sm:w-auto">
                <Link href="/products">More About Us</Link>
              </Button>
            </div>

            {/* Hero Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="w-64 sm:w-72 md:w-80 lg:w-96">
                {" "}
                {/* Fixed width container */}
                <Hutchcol_Logo
                  alt="HutchCol logo"
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid meet" // This ensures proper scaling
                  // viewBox="0 0 256 256" // Match the original SVG viewBox
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose HutchCol?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Industrial-grade adhesives */}
            <Card>
              <CardHeader>
                <IconBuildingFactory className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Industrial-grade Adhesives</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our adhesives meet the highest industry standards, perfect for
                  industrial applications requiring strength and durability.
                </p>
              </CardContent>
            </Card>

            {/* Wide range of adhesives */}
            <Card>
              <CardHeader>
                <IconBoxMultiple className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Wide Range of Adhesives</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We offer a comprehensive range of adhesives, each designed to
                  suit various needs, from woodworking to multi-purpose bonding.
                </p>
              </CardContent>
            </Card>

            {/* Contact Us for Custom Solutions */}
            <Card>
              <CardHeader>
                <IconMessage2 className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Contact Us for Custom Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Have specific needs? Get in touch with us for tailored
                  adhesive solutions that perfectly match your project
                  requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Fixed width container */}
                <product.image
                  alt={`${product.name} logo`}
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                  // viewBox="0 0 256 256" // Match the original SVG viewBox
                />
                <p className="text-sm mb-2 mt-4">
                  Brief description of {product.name.toLowerCase()}.
                </p>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button asChild className="w-full sm:w-auto">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>About Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-700 dark:text-gray-300">
              At HutchCol, we specialize in{" "}
              <strong className="text-gray-900 dark:text-white">
                synthetic wood adhesive solutions
              </strong>
              . With over{" "}
              <strong className="text-gray-900 dark:text-white">
                16 years of experience
              </strong>{" "}
              and{" "}
              <strong className="text-gray-900 dark:text-white">
                ISO certification since 2008
              </strong>
              , we are committed to delivering exceptional quality and
              performance. Our expertise ensures long-lasting, reliable bonding
              for your woodworking needs. As a{" "}
              <strong className="text-gray-900 dark:text-white">
                private limited certified company
              </strong>
              , Hutchcol Chemicals Private Limited, based in Indore, India, we
              pride ourselves on providing the highest standards of adhesive
              manufacturing.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full sm:w-auto">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* Contact Preview */}
      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center">
              <IconPhone className="mr-2 w-6 h-6" />
              <p>Phone: 8982004534</p>
            </div>
            <div className="flex items-center">
              <IconMail className="mr-2 w-6 h-6" />
              <p>Email: hutchcol94@gmail.com</p>
            </div>
            <div className="flex items-center">
              <div>
                <IconMapPin className="mr-2 w-6 h-6" />
              </div>
              <p>
                Address: 34, Shri Gajanand Industrial Park, Nemawar Rd, Gram,
                Asrawad Buzurg, Indore, Madhya Pradesh 452016
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full sm:w-auto">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
