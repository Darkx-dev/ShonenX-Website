"use client";
import React, { useState } from "react";
import {
  Smartphone,
  Bookmark,
  Heart,
  Server,
  Languages,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const Home = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "Multiple Servers",
      description:
        "Choose from various streaming servers for the best viewing experience",
    },
    {
      icon: <Languages className="w-6 h-6" />,
      title: "Dubs & Subtitles",
      description: "Watch your favorite anime dubbed or with subtitles",
    },
    {
      icon: <Bookmark className="w-6 h-6" />,
      title: "Smart Organization",
      description:
        "Keep track of your anime with watchlist and favorites features",
    },
  ];

  return (
    <div className="relative min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center overflow-hidden bg-[url(/images/gojo.png)] max-md:bg-none max-md:bg-center bg-cover bg-right-bottom bg-no-repeat">
        <div className="relative z-20 container mx-auto flex justify-between items-center">
          <div className="max-w-2xl space-y-8 pl-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="/images/logo.png"
                  alt="ShonenX Logo"
                  className="h-12 w-auto"
                />
                <span className="text-red-400 font-medium">
                  BUILT WITH FLUTTER
                </span>
              </div>
              <h1 className="text-7xl font-bold">
                <span className="block bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
                  ShonenX
                </span>
                <span className="block text-3xl mt-4 text-zinc-400">
                  Your Ultimate Android Anime Companion
                </span>
              </h1>
            </div>
            <p className="text-xl text-zinc-400 max-w-xl">
              Experience anime streaming with a beautiful interface, multiple
              servers, and essential features designed for the perfect viewing
              experience.
            </p>
            <Link
              href="https://drive.google.com/file/d/1GsFIfr6otZkM-McK6XxlcUOcg0lIa_pJ/view?usp=sharing"
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-red-600 hover:bg-red-700 group">
                <Smartphone className="w-4 h-4 mr-2" />
                Download for Android
              </Button>
            </Link>
          </div>
          {/* <img src="/images/itadori_render_by_knxtty0_det5rzr.png" className="max-h-screen scale-x-[-1]" alt="" /> */}
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
              Feature-Rich Experience
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Everything you need for seamless anime streaming
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`group hover:scale-105 transition-all duration-300 bg-zinc-900/30 backdrop-blur-sm border-red-500/20 
                  ${activeFeature === index ? "ring-2 ring-red-500" : ""}`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <CardContent className="p-6 space-y-4">
                  <div
                    className="p-3 bg-red-500/10 w-fit rounded-lg text-red-400 
                    group-hover:bg-red-500 group-hover:text-white transition-colors"
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* App Preview */}
      <div className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-24 items-center place-self-center">
            <div className="space-y-8 w-1/2">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
                  Beautiful Design
                </h2>
                <p className="text-zinc-400 text-lg">
                  A stunning interface that makes discovering and watching anime
                  a joy.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  "Elegant and intuitive interface",
                  "Easy server switching",
                  "Quick dub/sub toggle",
                  "Organized watchlist and favorites",
                  "Beautiful theme and animations",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="h-2 w-2 rounded-full bg-red-500 group-hover:w-4 transition-all" />
                    <span className="text-zinc-300 group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                className="pt-4 block"
                href="https://drive.google.com/file/d/1GsFIfr6otZkM-McK6XxlcUOcg0lIa_pJ/view?usp=sharing"
              >
                <Button className="bg-red-600 hover:bg-red-700 group">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Get it on Android
                </Button>
              </Link>
            </div>
            <div className="relative w-full">
              {/* Left Phone */}
              <div
                className="absolute left-[-100px] top-[50px] w-64 h-[540px] rounded-[2.5rem] border-8 border-zinc-900 
              overflow-hidden shadow-2xl bg-zinc-900 -rotate-12 opacity-50 scale-90"
              >
                <div className="absolute top-0 left-0 right-0 h-6 bg-zinc-900 flex justify-center">
                  <div className="w-20 h-4 bg-zinc-950 rounded-b-xl" />
                </div>
                <img
                  src="/images/details.png"
                  alt="App Preview Left"
                  className="absolute bottom-1 scale-[1.01] w-full h-full object-cover"
                />
              </div>

              {/* Main Phone */}
              <div
                className="relative mx-auto w-72 h-[600px] rounded-[2.5rem] border-8 border-zinc-900 
              overflow-hidden shadow-2xl bg-zinc-900 z-10"
              >
                <div className="absolute top-0 left-0 right-0 h-6 bg-zinc-900 flex justify-center">
                  <div className="w-20 h-4 bg-zinc-950 rounded-b-xl" />
                </div>
                <img
                  src="/images/home.png"
                  alt="App Preview"
                  className="absolute bottom-1 scale-[1.01] w-full h-full object-cover"
                />
              </div>

              {/* Right Phone */}
              <div
                className="absolute right-[-100px] top-[50px] w-64 h-[540px] rounded-[2.5rem] border-8 border-zinc-900 
              overflow-hidden shadow-2xl bg-zinc-900 rotate-12 opacity-50 scale-90"
              >
                <div className="absolute top-0 left-0 right-0 h-6 bg-zinc-900 flex justify-center">
                  <div className="w-20 h-4 bg-zinc-950 rounded-b-xl" />
                </div>
                <img
                  src="/images/stream.png"
                  alt="App Preview Right"
                  className="absolute bottom-1 scale-[1.01] w-full h-full object-cover"
                />
              </div>

              <div className="absolute -z-10 inset-0 bg-red-500/20 blur-[100px] rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
            Ready to Start Watching?
          </h2>
          <p className="text-xl text-zinc-400">
            Download ShonenX now and experience anime streaming like never
            before
          </p>
          <Link
            href="https://drive.google.com/file/d/1GsFIfr6otZkM-McK6XxlcUOcg0lIa_pJ/view?usp=sharing"
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="bg-red-600 hover:bg-red-700 group">
              <Smartphone className="w-4 h-4 mr-2" />
              Download for Android
            </Button>
          </Link>
          <div className="flex justify-center items-center gap-8 pt-8">
            <div className="flex items-center gap-2 bg-zinc-900/50 p-3 rounded-lg backdrop-blur-sm">
              <Palette className="w-5 h-5 text-red-400" />
              <span className="text-zinc-300">Beautiful UI</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-900/50 p-3 rounded-lg backdrop-blur-sm">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-zinc-300">Made with Flutter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
