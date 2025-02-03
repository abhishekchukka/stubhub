import Image from "next/image";
import type { Event } from "@/types/event";

interface EventCardProps {
  event: Event;
  rank: number;
}

export function EventCard({ event, rank }: EventCardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="relative h-48">
        <Image
          src={event.imageurl}
          alt={event.title}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full text-sm font-semibold z-10">
          #{rank}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{event.category}</span>
          <span>${event.price}</span>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          <div>{event.location}</div>
          <div>{new Date(event.date).toLocaleDateString()}</div>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          {event.likes.toLocaleString()} likes
        </div>
      </div>
    </div>
  );
}
