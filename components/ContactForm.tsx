"use client";

import { useState, type FormEvent } from "react";
import { contactTopics } from "@/data/core-pages";
import { trackEvent } from "@/lib/analytics";
import { cardClass, formFieldClass, primaryButtonClass } from "@/lib/ui";

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
          "Thanks. Your message was received."
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
    <form onSubmit={handleSubmit} className={cardClass}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold text-ink">
          Name
          <input
            name="name"
            type="text"
            required
            minLength={2}
            className={`mt-2 w-full font-normal ${formFieldClass}`}
          />
        </label>
        <label className="text-sm font-semibold text-ink">
          Email
          <input
            name="email"
            type="email"
            required
            className={`mt-2 w-full font-normal ${formFieldClass}`}
          />
        </label>
      </div>
      <label className="mt-4 block text-sm font-semibold text-ink">
        Topic
        <select
          name="topic"
          className={`mt-2 w-full font-normal ${formFieldClass}`}
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
          className={`mt-2 w-full py-3 font-normal ${formFieldClass}`}
        />
      </label>
      <button
        type="submit"
        disabled={formState.status === "loading"}
        aria-busy={formState.status === "loading"}
        className={`mt-5 ${primaryButtonClass} md:w-auto disabled:cursor-not-allowed disabled:bg-ink/45 disabled:shadow-none`}
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
