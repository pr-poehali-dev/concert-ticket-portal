
import * as React from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="rounded-full bg-primary-500 w-8 h-8 flex items-center justify-center">
                <Icon name="Music" className="h-4 w-4 text-white" />
              </div>
              <span className="font-montserrat font-bold text-xl">КонцертБилет</span>
            </div>
            <p className="text-gray-400 mb-4">
              Организуем лучшие музыкальные события для вас.
              Наша миссия - сделать музыку доступной для всех.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="#main" className="text-gray-400 hover:text-white transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#tickets" className="text-gray-400 hover:text-white transition-colors">
                  Билеты
                </a>
              </li>
              <li>
                <a href="#artists" className="text-gray-400 hover:text-white transition-colors">
                  Артисты
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                <span className="text-gray-400">Олимпийский проспект, 16, Москва</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Phone" className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                <span className="text-gray-400">+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Mail" className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                <span className="text-gray-400">info@концертбилет.рф</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Clock" className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                <span className="text-gray-400">Пн-Вс: 10:00 - 20:00</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Подписка на новости</h3>
            <p className="text-gray-400 mb-4">
              Будьте в курсе новых мероприятий, получайте скидки и специальные предложения.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Ваш email" 
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="bg-primary-500 hover:bg-primary-600">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2025 КонцертБилет. Все права защищены.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Правила и условия
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
