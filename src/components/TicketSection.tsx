
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface TicketCardProps {
  title: string;
  price: number;
  description: string;
  benefits: string[];
  isPopular?: boolean;
  isSoldOut?: boolean;
}

const TicketCard: React.FC<TicketCardProps> = ({
  title,
  price,
  description,
  benefits,
  isPopular = false,
  isSoldOut = false,
}) => {
  return (
    <Card className={`ticket-card ${isPopular ? "border-primary-500 shadow-lg" : ""}`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1">
          Популярный
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-3xl font-bold">{price.toLocaleString()} ₽</div>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Icon name="Check" className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${isPopular ? "bg-primary-500 hover:bg-primary-600" : ""}`} 
          variant={isPopular ? "default" : "outline"}
          disabled={isSoldOut}
        >
          {isSoldOut ? "Распродано" : "Выбрать билет"}
        </Button>
      </CardFooter>
    </Card>
  );
};

const TicketSection = () => {
  return (
    <section id="tickets" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4" variant="outline">
            Выберите свой вариант
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Билеты на фестиваль</h2>
          <p className="text-lg text-muted-foreground">
            Мы предлагаем различные варианты билетов для наших гостей.
            Выберите наиболее подходящий для вас и погрузитесь в мир музыки.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TicketCard 
            title="Стандарт" 
            price={3500} 
            description="Доступ ко всем основным сценам"
            benefits={[
              "Доступ ко всем основным площадкам",
              "Базовая зона фуд-корта",
              "Памятный браслет",
              "Билет на все 3 дня"
            ]}
          />
          
          <TicketCard 
            title="VIP" 
            price={7990} 
            description="Расширенный доступ и привилегии"
            benefits={[
              "Все преимущества Стандарта",
              "Доступ в VIP-зоны у всех сцен",
              "Отдельный вход без очереди",
              "Приветственный набор мерча",
              "Доступ в зону отдыха с напитками"
            ]}
            isPopular={true}
          />
          
          <TicketCard 
            title="Премиум" 
            price={12500} 
            description="Максимальный комфорт и привилегии"
            benefits={[
              "Все преимущества VIP",
              "Гарантированное место в первых рядах",
              "Персональный сопровождающий",
              "Фото с артистами и автографы",
              "Обед в ресторане фестиваля",
              "Проживание в партнерском отеле"
            ]}
            isSoldOut={true}
          />
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Выберите место</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md">
              <div className="stage h-16 rounded-t-2xl mb-10 flex items-center justify-center">
                <span className="text-white font-bold relative z-10">СЦЕНА</span>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div>
                  <h4 className="text-sm font-medium mb-3 text-center">Танцпол</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="aspect-square bg-primary-100 hover:bg-primary-200 rounded-md cursor-pointer flex items-center justify-center text-xs font-medium transition"
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-3 text-center">Фан-зона</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`aspect-square rounded-md cursor-pointer flex items-center justify-center text-xs font-medium transition ${
                          [2, 5, 9, 13].includes(i) ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-primary-200 hover:bg-primary-300'
                        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-3 text-center">VIP</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="aspect-square bg-primary-400 hover:bg-primary-500 text-white rounded-md cursor-pointer flex items-center justify-center text-xs font-medium transition"
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-primary-100"></div>
                  <span>Танцпол</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-primary-200"></div>
                  <span>Фан-зона</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-primary-400"></div>
                  <span>VIP</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                  <span>Продано</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketSection;
