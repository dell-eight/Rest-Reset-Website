"use client";

import { useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

type EmailCaptureFormProps = {
  source?: string;
};

export function EmailCaptureForm({ source = "homepage-sleep-reset-checklist" }: EmailCaptureFormProps) {
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: "No payment information is collected here. Email storage will be connected before launch."
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setFormState({
      status: "loading",
      message: "Sending..."
    });

    try {
      const response = await fetch("/api/email-capture", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          source
        })
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
        message?: string;
        persisted?: boolean;
      };

      if (!response.ok || !result.success) {
        setFormState({
          status: "error",
          message: result.error ?? "Something went wrong. Please try again."
        });
        return;
      }

      setFormState({
        status: "success",
        message:
          result.message ??
          "Thanks. Your email was accepted in this pre-launch flow."
      });
      trackEvent("email_signup_submit", {
        source,
        persisted: Boolean(result.persisted)
      });
      event.currentTarget.reset();
    } catch {
      setFormState({
        status: "error",
        message: "The form could not connect to the server. Please try again."
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
      <div className="mb-5 rounded-lg bg-mist p-4">
        <p className="text-sm font-semibold text-ink">What you get</p>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-ink/64">
          <li>3-minute evening reset checklist</li>
          <li>Simple light, sound, and routine prompts</li>
          <li>Beginner-friendly setup for screen-heavy days</li>
        </ul>
      </div>
      <label htmlFor="name" className="text-sm font-semibold text-ink">
        Name <span className="font-normal text-ink/45">(optional)</span>
      </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your name"
        className="mt-3 min-h-12 w-full rounded-lg border border-ink/15 bg-mist px-4 text-ink outline-none transition placeholder:text-ink/40 focus:border-clay focus:ring-2 focus:ring-clay/30"
      />
      <label htmlFor="email" className="mt-4 block text-sm font-semibold text-ink">
        Email address
      </label>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="min-h-12 flex-1 rounded-lg border border-ink/15 bg-mist px-4 text-ink outline-none transition placeholder:text-ink/40 focus:border-clay focus:ring-2 focus:ring-clay/30"
        />
        <button
          type="submit"
          disabled={formState.status === "loading"}
          className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-night focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-ink/45"
        >
          {formState.status === "loading" ? "Sending..." : "Send checklist"}
        </button>
      </div>
      <p
        className={`mt-3 text-xs leading-5 ${
          formState.status === "error"
            ? "text-red-700"
            : formState.status === "success"
              ? "text-sage"
              : "text-ink/55"
        }`}
        aria-live="polite"
      >
        {formState.message}
      </p>
    </form>
  );
}
