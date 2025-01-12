"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BoutIcon from "../../assets/About_hutchcol 1.svg"; // Imported as React component
import FounderIcon from "../../assets/Founder 1.svg"; // Imported as React component
import founder from "../../assets/Founder.jpg"; // JPG can stay as Image

export default function About() {
  return (
    <div className="space-y-16 px-4 md:px-16 lg:px-24">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8 text-center">About Us</h1>

      {/* Story Section */}
      <div className="grid gap-12">
        <Card className="shadow-xl border border-border overflow-hidden">
          <CardHeader className="pb-4 bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardTitle className="text-3xl font-bold text-center">
              Our Story
            </CardTitle>
            <CardDescription className="text-center">
              Innovating since 2008
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8 items-center p-8">
            {/* Image Section */}
            <div className="flex justify-center">
              <BoutIcon className="w-72 h-72 rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Text Section */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Hutch Col has been a trusted provider of Wood Adhesives for over
                16 years.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we're proud to be a leader in our industry, serving
                across Madhya Pradesh, Maharashtra, Uttar Pradesh and Rajasthan.
                Our team brings a wealth of experience and expertise to every
                project we undertake.
              </p>
              <p className="text-lg leading-relaxed">
                What sets us apart is our unwavering commitment to quality and
                customer service. We believe in giving the best experience.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Leadership Section */}
      {/* <div className="py-20 bg-muted">
        <h2 className="text-4xl font-bold text-center text-primary mb-16">
          Leadership
        </h2>
        <div className="flex justify-center">
          <Card className="max-w-md border-none shadow-2xl bg-gradient-to-b from-card to-background">
            <CardContent className="pt-12 text-center">
              <div className=" justify-between relative w-auto h-80 mx-auto mb-8">
                <FounderIcon className=" relative w-auto h-72 rounded-lg" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Anand Parashar</h3>
              <p className="text-xl text-primary font-semibold mb-6">
                Founder & CEO
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-sm mx-auto">
                Visionary leader driving HutchCol's mission to transform the
                industry through innovative solutions and exceptional service
                delivery.
              </p>
            </CardContent>
          </Card>
        </div>
      </div> */}

      {/* Mission Section */}
      <Card className="bg-primary text-primary-foreground p-8 rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold">
            Our Mission
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-center max-w-3xl mx-auto">
            To provide innovative solutions that exceed our customers'
            expectations and drive their success, while maintaining the highest
            standards of quality, integrity, and customer satisfaction.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
