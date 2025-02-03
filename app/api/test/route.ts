import { NextResponse } from "next/server";
import { getEvents, getCategories } from "@/lib/api";

export async function GET() {
  try {
    // Try to fetch both events and categories
    const [events, categories] = await Promise.all([
      getEvents(),
      getCategories(),
    ]);

    // Return both results with counts for easy verification
    return NextResponse.json({
      success: true,
      eventCount: events.length,
      categoryCount: categories.length,
      events,
      categories,
    });
  } catch (error) {
    console.error("Test API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Database connection failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
