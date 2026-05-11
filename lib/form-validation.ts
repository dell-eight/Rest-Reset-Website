export type ValidationResult<T> =
  | {
      ok: true;
      data: T;
    }
  | {
      ok: false;
      error: string;
    };

type EmailCaptureInput = {
  email: string;
  name?: string;
  source?: string;
};

type ContactInput = {
  name: string;
  email: string;
  message: string;
  topic?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateEmailCapturePayload(payload: unknown): ValidationResult<EmailCaptureInput> {
  if (!payload || typeof payload !== "object") {
    return {
      ok: false,
      error: "Please submit a valid email address."
    };
  }

  const data = payload as Record<string, unknown>;
  const email = readString(data.email).toLowerCase();
  const name = readString(data.name);
  const source = readString(data.source);

  if (!emailPattern.test(email)) {
    return {
      ok: false,
      error: "Please enter a valid email address."
    };
  }

  if (name.length > 120) {
    return {
      ok: false,
      error: "Please keep your name under 120 characters."
    };
  }

  return {
    ok: true,
    data: {
      email,
      ...(name ? { name } : {}),
      ...(source ? { source } : {})
    }
  };
}

export function validateContactPayload(payload: unknown): ValidationResult<ContactInput> {
  if (!payload || typeof payload !== "object") {
    return {
      ok: false,
      error: "Please complete the contact form."
    };
  }

  const data = payload as Record<string, unknown>;
  const name = readString(data.name);
  const email = readString(data.email).toLowerCase();
  const message = readString(data.message);
  const topic = readString(data.topic);

  if (name.length < 2) {
    return {
      ok: false,
      error: "Please enter your name."
    };
  }

  if (!emailPattern.test(email)) {
    return {
      ok: false,
      error: "Please enter a valid email address."
    };
  }

  if (message.length < 10) {
    return {
      ok: false,
      error: "Please include a message with at least 10 characters."
    };
  }

  if (name.length > 120 || message.length > 2000 || topic.length > 120) {
    return {
      ok: false,
      error: "Please shorten your message and try again."
    };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      message,
      ...(topic ? { topic } : {})
    }
  };
}
