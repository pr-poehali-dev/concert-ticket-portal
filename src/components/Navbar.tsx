
import * as React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="fixed w-full border-b bg-background/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2">
            <div className="rounded-full bg-primary-500 w-8 h-8 flex items-center justify-center">
              <Icon name="Music" className="h-4 w-4 text-white" />
            </div>
            <span className="font-montserrat font-bold text-xl">КонцертБилет</span>
          </a>
        </div>
        
        <div className="hidden md:flex gap-6 font-montserrat">
          <a href="#main" className="text-sm font-medium hover:text-primary-500 transition">
            Главная
          </a>
          <a href="#tickets" className="text-sm font-medium hover:text-primary-500 transition">
            Билеты
          </a>
          <a href="#artists" className="text-sm font-medium hover:text-primary-500 transition">
            Артисты
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-primary-500 transition">
            FAQ
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:flex gap-2">
            <Icon name="User" className="h-4 w-4" />
            <span>Войти</span>
          </Button>
          
          <Button className="gap-2 bg-primary-500 hover:bg-primary-600">
            <Icon name="Ticket" className="h-4 w-4" />
            <span className="hidden md:inline">Купить билеты</span>
            <span className="inline md:hidden">Билеты</span>
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Icon name="Menu" className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10 font-montserrat">
                <a href="#main" className="text-sm font-medium hover:text-primary-500 transition">
                  Главная
                </a>
                <a href="#tickets" className="text-sm font-medium hover:text-primary-500 transition">
                  Билеты
                </a>
                <a href="#artists" className="text-sm font-medium hover:text-primary-500 transition">
                  Артисты
                </a>
                <a href="#faq" className="text-sm font-medium hover:text-primary-500 transition">
                  FAQ
                </a>
                <Button variant="outline" size="sm" className="justify-start gap-2 mt-4">
                  <Icon name="User" className="h-4 w-4" />
                  <span>Войти</span>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
