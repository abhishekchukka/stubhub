// lib/api.ts
import { sql } from "@vercel/postgres";
import type { Event, Category } from "@/types/event";

// Fetch Events from the Database
export async function getEvents(): Promise<Event[]> {
  try {
    const result = await sql<Event[]>`
      SELECT * FROM events
      ORDER BY likes DESC;
    `;
    return result.rows.flat(); // Correctly returns Event[]
  } catch (error) {
    console.error("Database Error while fetching events:", error);
    return []; // Returning an empty array ensures the app continues working
  }
}

// Fetch Categories from the Database
export async function getCategories(): Promise<Category[]> {
  try {
    const result = await sql<Category[]>`
      SELECT * FROM categories
      ORDER BY id ASC;
    `;
    return result.rows.flat(); // Correctly returns Category[]
  } catch (error) {
    console.error("Database Error while fetching categories:", error);
    return []; // Returning an empty array ensures the app continues working
  }
}
