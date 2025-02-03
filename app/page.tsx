import { Header } from "@/components/header";
import { Search } from "@/components/search";
import { Hero } from "@/components/hero";
import { EventCard } from "@/components/event-card";
import { Button } from "@/components/ui/button";
import { getEvents, getCategories } from "@/lib/api";

export default async function Home() {
  const [events, categories] = await Promise.all([
    getEvents().catch((error) => {
      console.error("Failed to fetch events:", error);
      return;
    }),
    getCategories().catch((error) => {
      console.error("Failed to fetch categories:", error);
      return;
    }),
  ]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4 py-8">
          <Search />

          <div className="mt-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold">
                Trending Events near Santa Clara
              </h2>
              <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="flex gap-2 min-w-max">
                  {(Array.isArray(categories) ? categories : []).map(
                    (category) => (
                      <Button
                        key={category.id}
                        variant="outline"
                        className="text-sm whitespace-nowrap"
                      >
                        {category.name}
                      </Button>
                    )
                  )}
                </div>
              </div>
            </div>

            {events.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {events.map((event, index) => (
                  <EventCard key={event.id} event={event} rank={index + 1} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-8">
                No events found. Please check back later.
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
