import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative h-[400px] bg-purple-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-transparent z-10" />
        <div
          className="absolute inset-0 bg-[url('https://cdn.dribbble.com/users/3102427/screenshots/17514939/media/6479c1d4cccbf6d5657a05da22048154.jpg?format=webp&resize=400x300&vertical=center')] bg-cover bg-center"
          style={{ opacity: 0.7 }}
        />
      </div>
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-6xl font-bold text-white mb-6">Super Bowl</h1>
        <Button className="w-fit">See Tickets</Button>
      </div>
    </div>
  );
}
