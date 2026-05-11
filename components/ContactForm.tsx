"use client";

import { useState, type FormEvent } from "react";
import { contactTopics } from "@/data/core-pages";
import { trackEvent } from "@/lib/analytics";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: "Support delivery will be connected before launch."
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setFormState({
      status: "loading",
      message: "Sending..."
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          topic: formData.get("topic"),
          message: formData.get("message")
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
          "Thanks. Your message was accepted in this pre-launch flow."
      });
      trackEvent("contact_form_submit", {
        topic: String(formData.get("topic") ?? ""),
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
    <form onSubmit={handleSubmit} className="rounded-lg border border-ink/10 bg-white/75 p-6 shadow-soft">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-ink">
          Name
          <input
            name="name"
            type="text"
            required
            minLength={2}
            className="mt-2 min-h-12 w-full rounded-lg border border-ink/15 bg-mist px-4 font-normal outline-none transition focus:border-clay focus:ring-2 focus:ring-clay/30"
          />
        </label>
        <label className="text-sm font-semibold text-ink">
          Email
          <input
            name="email"
            type="email"
            required
            className="mt-2 min-h-12 w-full rounded-lg border border-ink/15 bg-mist px-4 font-normal outline-none transition focus:border-clay focus:ring-2 focus:ring-clay/30"
          />
        </label>
      </div>
      <label className="mt-4 block text-sm font-semibold text-ink">
        Topic
        <select
          name="topic"
          className="mt-2 min-h-12 w-full rounded-lg border border-ink/15 bg-mist px-4 font-normal outline-none transition focus:border-clay focus:ring-2 focus:ring-clay/30"
        >
          {contactTopics.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </label>
      <label className="mt-4 block text-sm font-semibold text-ink">
        Message
        <textarea
          name="message"
          required
          minLength={10}
          rows={6}
          className="mt-2 w-full rounded-lg border border-ink/15 bg-mist px-4 py-3 font-normal outline-none transition focus:border-clay focus:ring-2 focus:ring-clay/30"
        />
      </label>
      <button
        type="submit"
        disabled={formState.status === "loading"}
        className="mt-5 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-night focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-ink/45"
      >
        {formState.status === "loading" ? "Sending..." : "Send message"}
      </button>
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
