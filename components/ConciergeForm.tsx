"use client";

import { useEffect, useState, type FormEvent } from "react";
import { SectionReveal } from "@/components/SectionReveal";
import { cn } from "@/lib/cn";

const INTEREST_OPTIONS = ["Aviation", "Sea", "Dining", "Wellness", "Culture", "Adventure"];

const BUDGET_OPTIONS = [
  "€10k to €25k",
  "€25k to €50k",
  "€50k plus",
  "Not sure yet",
];

type FieldErrors = {
  name?: string;
  email?: string;
  startDate?: string;
  endDate?: string;
  travelers?: string;
  budget?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function ConciergeForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [interests, setInterests] = useState<string[]>([]);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(false), 4500);
    return () => window.clearTimeout(timer);
  }, [toast]);

  function toggleInterest(interest: string) {
    setInterests((current) =>
      current.includes(interest)
        ? current.filter((item) => item !== interest)
        : [...current, interest]
    );
  }

  function validate(form: FormData): FieldErrors {
    const next: FieldErrors = {};
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const startDate = String(form.get("startDate") ?? "");
    const endDate = String(form.get("endDate") ?? "");
    const travelers = Number(form.get("travelers") ?? 0);
    const budget = String(form.get("budget") ?? "");

    if (!name) next.name = "Please enter your name.";
    if (!EMAIL_PATTERN.test(email)) next.email = "Please enter a valid email address.";
    if (!startDate) next.startDate = "Please choose a start date.";
    if (!endDate) next.endDate = "Please choose an end date.";
    if (startDate && endDate && endDate < startDate) {
      next.endDate = "The end date must be after the start date.";
    }
    if (!Number.isInteger(travelers) || travelers < 1) {
      next.travelers = "Travelers must be at least 1.";
    }
    if (!budget) next.budget = "Please choose a budget range.";

    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      event.currentTarget.reset();
      setInterests([]);
      setToast(true);
    }
  }

  function fieldError(name: keyof FieldErrors) {
    return errors[name];
  }

  const inputClass =
    "w-full rounded-xl border border-ink/12 bg-shell px-4 py-3 text-sm text-ink placeholder:text-muted transition-colors duration-200 focus:border-coral/60";

  return (
    <SectionReveal id="concierge" className="mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-7">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        Request an Itinerary
      </h2>
      <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-muted">
        Tell the desk how you travel. A trip designer replies within one business
        day with a first shape, not a brochure.
      </p>

      <form onSubmit={handleSubmit} noValidate className="glass mt-8 rounded-2xl p-7">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-ink">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-invalid={Boolean(fieldError("name"))}
              aria-describedby={fieldError("name") ? "name-error" : undefined}
              className={cn(inputClass, "mt-2")}
              placeholder="Your full name"
            />
            {fieldError("name") && (
              <p id="name-error" className="mt-2 text-xs text-coral">
                {fieldError("name")}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-invalid={Boolean(fieldError("email"))}
              aria-describedby={fieldError("email") ? "email-error" : undefined}
              className={cn(inputClass, "mt-2")}
              placeholder="you@example.com"
            />
            {fieldError("email") && (
              <p id="email-error" className="mt-2 text-xs text-coral">
                {fieldError("email")}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-ink">
              Start date
            </label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              required
              aria-invalid={Boolean(fieldError("startDate"))}
              aria-describedby={fieldError("startDate") ? "startDate-error" : undefined}
              className={cn(inputClass, "mt-2 [color-scheme:dark]")}
            />
            {fieldError("startDate") && (
              <p id="startDate-error" className="mt-2 text-xs text-coral">
                {fieldError("startDate")}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-ink">
              End date
            </label>
            <input
              id="endDate"
              name="endDate"
              type="date"
              required
              aria-invalid={Boolean(fieldError("endDate"))}
              aria-describedby={fieldError("endDate") ? "endDate-error" : undefined}
              className={cn(inputClass, "mt-2 [color-scheme:dark]")}
            />
            {fieldError("endDate") && (
              <p id="endDate-error" className="mt-2 text-xs text-coral">
                {fieldError("endDate")}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="travelers" className="block text-sm font-medium text-ink">
              Travelers
            </label>
            <input
              id="travelers"
              name="travelers"
              type="number"
              min={1}
              max={20}
              defaultValue={2}
              required
              aria-invalid={Boolean(fieldError("travelers"))}
              aria-describedby={fieldError("travelers") ? "travelers-error" : undefined}
              className={cn(inputClass, "mt-2")}
            />
            {fieldError("travelers") && (
              <p id="travelers-error" className="mt-2 text-xs text-coral">
                {fieldError("travelers")}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-ink">
              Budget
            </label>
            <select
              id="budget"
              name="budget"
              required
              aria-invalid={Boolean(fieldError("budget"))}
              aria-describedby={fieldError("budget") ? "budget-error" : undefined}
              className={cn(inputClass, "mt-2 [color-scheme:dark]")}
            >
              <option value="">Choose a range</option>
              {BUDGET_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {fieldError("budget") && (
              <p id="budget-error" className="mt-2 text-xs text-coral">
                {fieldError("budget")}
              </p>
            )}
          </div>
        </div>

        <div className="mt-5">
          <span className="block text-sm font-medium text-ink">Interests</span>
          <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Interests">
            {INTEREST_OPTIONS.map((interest) => (
              <button
                key={interest}
                type="button"
                onClick={() => toggleInterest(interest)}
                aria-pressed={interests.includes(interest)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-colors duration-200",
                  interests.includes(interest)
                    ? "border-coral/60 bg-coral/12 text-ink"
                    : "border-ink/12 text-muted hover:border-coral/40 hover:text-ink"
                )}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="notes" className="block text-sm font-medium text-ink">
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            className={cn(inputClass, "mt-2 resize-y")}
            placeholder="Anything the desk should know. How you sleep, eat, and move."
          />
        </div>

        <button
          type="submit"
          className="mt-6 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-shell shadow-coral transition-transform duration-200 active:-translate-y-[1px]"
        >
          Send Request
        </button>
      </form>

      <div
        role="status"
        aria-live="polite"
        className={cn(
          "fixed bottom-20 right-5 z-50 max-w-[min(92vw,360px)] rounded-2xl border border-coral/40 bg-shell/95 px-5 py-4 text-sm text-ink shadow-coral transition-all duration-300",
          toast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        )}
      >
        Request received. A trip designer will reply within one business day.
      </div>
    </SectionReveal>
  );
}
