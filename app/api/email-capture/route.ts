import { NextResponse } from "next/server";
import { validateEmailCapturePayload } from "@/lib/form-validation";

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

  const validation = validateEmailCapturePayload(payload);

  if (!validation.ok) {
    return NextResponse.json(
      {
        success: false,
        error: validation.error
      },
      { status: 400 }
    );
  }

  // TODO: Persist email signups to an email provider or database before launch.
  if (process.env.NODE_ENV === "development") {
    console.info("Email capture received; not persisted yet.", validation.data);
  }

  return NextResponse.json({
    success: true,
    persisted: false,
    message:
      "Thanks. Your email was accepted in this pre-launch flow. Email storage will be connected before launch."
  });
}
