import { NextResponse } from "next/server";
import { validateContactPayload } from "@/lib/form-validation";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Please submit valid JSON."
      },
      { status: 400 }
    );
  }

  const validation = validateContactPayload(payload);

  if (!validation.ok) {
    return NextResponse.json(
      {
        success: false,
        error: validation.error
      },
      { status: 400 }
    );
  }

  // TODO: Send contact messages to a support inbox or database before launch.
  if (process.env.NODE_ENV === "development") {
    console.info("Contact message received; not persisted yet.", validation.data);
  }

  return NextResponse.json({
    success: true,
    persisted: false,
    message:
      "Thanks. Your message was received. Support delivery will be connected before launch."
  });
}
