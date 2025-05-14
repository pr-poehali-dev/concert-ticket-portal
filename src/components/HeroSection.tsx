
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section id="main" className="relative pt-20 pb-24 overflow-hidden">
      <div className="hero-gradient absolute inset-0 opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <Badge className="w-fit mb-4 bg-primary-100 hover:bg-primary-200 text-primary-700">
              <span className="text-xs font-medium py-0.5">
                <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mr-2 animate-pulse-light"></span>
                Скоро на сцене
              </span>
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Фестиваль <span className="text-primary-500">современной музыки</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Грандиозное событие года с участием топовых артистов. Не пропустите возможность
              стать частью уникального музыкального опыта в самом центре Москвы.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white">
                Купить билеты
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Calendar" className="h-4 w-4" />
                Добавить в календарь
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-8">
              <div className="flex flex-col">
                <div className="text-3xl font-montserrat font-bold">15-17</div>
                <div className="text-sm text-muted-foreground">Декабря</div>
              </div>
              
              <div className="h-12 border-l"></div>
              
              <div className="flex flex-col">
                <div className="text-3xl font-montserrat font-bold">Москва</div>
                <div className="text-sm text-muted-foreground">Олимпийский</div>
              </div>
              
              <div className="h-12 border-l"></div>
              
              <div className="flex flex-col">
                <div className="text-3xl font-montserrat font-bold">30+</div>
                <div className="text-sm text-muted-foreground">Артистов</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl shadow-primary-100/20">
              <img 
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80" 
                alt="Концертная сцена" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary-500 w-10 h-10 flex items-center justify-center">
                  <Icon name="Users" className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium">Уже купили</div>
                  <div className="text-2xl font-bold">4,378 <span className="text-sm text-muted-foreground">человек</span></div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 p-3 rounded-lg shadow-lg flex items-center gap-2">
              <div className="text-amber-500">
                <Icon name="Star" className="h-5 w-5 fill-amber-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-xs text-muted-foreground">Отзывы</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
