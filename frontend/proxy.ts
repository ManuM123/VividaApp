import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "./utils/supabase/server";

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  console.log("USER DATA:", data);
  console.log("USER ERROR:", error);

  if (!data.user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/onboarding", "/dashboard"],
};
