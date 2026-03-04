// any functions that are just retrieving data from the database can live in the frontend
// but functions to insert/update values in the database live in the backend

import { createClient } from "./client";

export async function getUserProfile(userId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("user_profile")
    .select("*")
    .eq("id", userId)
    .maybeSingle()
    

  if (error) {
    console.error("Error fetching profile", error.message);
    return null;
  }

  return data;
}
