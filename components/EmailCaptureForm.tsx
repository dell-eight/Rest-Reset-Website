"use client";

import { useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";
import { cardClass, formFieldClass, primaryButtonClass } from "@/lib/ui";

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
          "Thanks. You are on the launch update list."
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
    <form onSubmit={handleSubmit} className={cardClass}>
      <div className="mb-5 rounded-xl bg-foam p-4">
        <p className="text-sm font-semibold text-ink">What you get</p>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-ink/64">
          <li>3-minute evening reset checklist</li>
          <li>Simple light, sound, and routine prompts</li>
          <li>Launch updates before ordering opens</li>
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
        className={`mt-3 w-full ${formFieldClass}`}
      />
      <label htmlFor="email" className="mt-4 block text-sm font-semibold text-ink">
        Email address
      </label>
      <div className="mt-3 flex flex-col gap-3 md:flex-row">
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={`flex-1 ${formFieldClass}`}
        />
        <button
          type="submit"
          disabled={formState.status === "loading"}
          aria-busy={formState.status === "loading"}
          className={`${primaryButtonClass} md:w-auto disabled:cursor-not-allowed disabled:bg-ink/45 disabled:shadow-none`}
        >
          {formState.status === "loading" ? "Sending..." : "Get the checklist"}
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
