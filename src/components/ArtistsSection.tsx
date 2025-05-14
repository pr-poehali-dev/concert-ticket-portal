
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

interface Artist {
  id: number;
  name: string;
  genre: string;
  time: string;
  day: string;
  image: string;
  popularity: number;
}

const artists: Artist[] = [
  {
    id: 1,
    name: "Джарахов",
    genre: "Хип-хоп",
    time: "20:30",
    day: "day1",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    popularity: 95,
  },
  {
    id: 2,
    name: "Монеточка",
    genre: "Инди-поп",
    time: "19:00",
    day: "day1",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    popularity: 90,
  },
  {
    id: 3,
    name: "Noize MC",
    genre: "Рэп-рок",
    time: "22:00",
    day: "day1",
    image: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    popularity: 92,
  },
  {
    id: 4,
    name: "Oxxxymiron",
    genre: "Хип-хоп",
    time: "21:30",
    day: "day2",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    popularity: 98,
  },
  {
    id: 5,
    name: "Баста",
    genre: "Хип-хоп",
    time: "23:00",
    day: "day2",
    image: "https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    popularity: 94,
  },
  {
    id: 6,
    name: "Morgenshtern",
    genre: "Трэп",
    time: "19:45",
    day: "day2",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    popularity: 96,
  },
  {
    id: 7,
    name: "Земфира",
    genre: "Рок",
    time: "22:30",
    day: "day3",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    popularity: 97,
  },
  {
    id: 8,
    name: "Би-2",
    genre: "Рок",
    time: "20:15",
    day: "day3",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    popularity: 91,
  },
  {
    id: 9,
    name: "Мумий Тролль",
    genre: "Рок",
    time: "18:30",
    day: "day3",
    image: "https://images.unsplash.com/photo-1504704911898-68304a7d2807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    popularity: 89,
  },
];

const ArtistCard: React.FC<{ artist: Artist }> = ({ artist }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={artist.image} 
          alt={artist.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
          <Badge className="bg-primary-500 hover:bg-primary-600">
            {artist.time}
          </Badge>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{artist.name}</h3>
        <p className="text-sm text-muted-foreground">{artist.genre}</p>
        <div className="mt-3 flex items-center gap-2">
          <div className="text-amber-500 flex">
            {[...Array(5)].map((_, i) => (
              <Icon 
                key={i}
                name="Star" 
                className={`h-4 w-4 ${i < Math.floor(artist.popularity / 20) ? 'fill-amber-400' : 'fill-gray-200'}`} 
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {artist.popularity}%
          </span>
        </div>
      </div>
    </div>
  );
};

const ArtistsSection = () => {
  return (
    <section id="artists" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4" variant="outline">
            Хедлайнеры и не только
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Участники фестиваля</h2>
          <p className="text-lg text-muted-foreground">
            На нашем фестивале выступят лучшие артисты современной музыкальной сцены.
            Три дня незабываемых выступлений ждут вас.
          </p>
        </div>

        <div className="mb-12">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {artists.filter(a => a.popularity >= 95).map((artist) => (
                <CarouselItem key={artist.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <ArtistCard artist={artist} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static translate-y-0 mr-2" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-16">
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="w-full max-w-md mx-auto flex mb-8">
              <TabsTrigger value="day1" className="flex-1">
                15 декабря <span className="hidden md:inline ml-1">| Пятница</span>
              </TabsTrigger>
              <TabsTrigger value="day2" className="flex-1">
                16 декабря <span className="hidden md:inline ml-1">| Суббота</span>
              </TabsTrigger>
              <TabsTrigger value="day3" className="flex-1">
                17 декабря <span className="hidden md:inline ml-1">| Воскресенье</span>
              </TabsTrigger>
            </TabsList>
            
            {["day1", "day2", "day3"].map((day) => (
              <TabsContent key={day} value={day}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {artists
                    .filter((artist) => artist.day === day)
                    .map((artist) => (
                      <div key={artist.id} className="flex items-center gap-4 p-4 rounded-lg border hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={artist.image} alt={artist.name} />
                          <AvatarFallback>{artist.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{artist.name}</h3>
                          <p className="text-sm text-muted-foreground">{artist.genre}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Icon name="Clock" className="h-4 w-4 text-primary-500" />
                            <span className="text-sm">{artist.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ArtistsSection;
