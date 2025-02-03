import { Header } from "@/components/header";

export default function Loading() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="animate-pulse">
        <div className="h-[400px] bg-gray-200" />
        <div className="container mx-auto px-4 py-8">
          <div className="h-12 bg-gray-200 rounded mb-8" />

          <div className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <div className="h-8 bg-gray-200 w-64 rounded" />
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-24 bg-gray-200 rounded" />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-64 bg-gray-200 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
