"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useDevisModal } from "./DevisModalContext";
import {
  devisSchema,
  type DevisFormData,
  type DevisFormErrors,
} from "@/lib/validations";

type ToastVariant = "success" | "error";

interface ToastItem {
  id: number;
  variant: ToastVariant;
  title: string;
  message: string;
}

const EMPTY_FORM: DevisFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const TOAST_DURATION = 5000;

export default function DevisModal() {
  const { open, closeModal } = useDevisModal();

  const [formData, setFormData] = useState<DevisFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<DevisFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  function pushToast(variant: ToastVariant, title: string, message: string) {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, variant, title, message }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, TOAST_DURATION);
  }

  function dismissToast(id: number) {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
    if (errors[name as keyof DevisFormData]) {
      setErrors((prev: any) => ({ ...prev, [name]: undefined }));
    }
  }

  function resetForm() {
    setFormData(EMPTY_FORM);
    setErrors({});
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = devisSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: DevisFormErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof DevisFormData;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      pushToast(
        "success",
        "Demande envoyée",
        "Nous vous répondrons dans les plus brefs délais."
      );
      resetForm();
      closeModal();
    } catch {
      pushToast(
        "error",
        "Échec de l'envoi",
        "Une erreur est survenue. Veuillez réessayer ou nous appeler directement."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleClose() {
    setErrors({});
    closeModal();
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#01173d]/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="
                relative
                w-full
                max-w-2xl
                max-h-[90vh]
                overflow-y-auto
                rounded-2xl
                bg-[#F0F6FC]
                border
                border-[#0EA5E9]/15
                shadow-2xl
                shadow-black/30
                p-8
                sm:p-10
              "
              initial={{ scale: 0.92, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 20, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#0EA5E9] to-[#C8102E]" />

              {/* aurora glow */}
              <div
                aria-hidden
                className="
                  pointer-events-none
                  absolute
                  -top-20
                  -right-20
                  h-64
                  w-64
                  rounded-full
                  bg-[radial-gradient(circle,rgba(14,165,233,0.15),transparent_70%)]
                  blur-3xl
                  animate-glow-pulse
                "
              />

              {/* close */}
              <button
                onClick={handleClose}
                aria-label="Fermer"
                className="
                  absolute
                  top-4
                  right-4
                  z-20
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  shadow-md
                  text-[#1E1E1C]
                  transition-all
                  duration-300
                  hover:bg-[#0EA5E9]/10
                "
              >
                ✕
              </button>

              <p className="relative flex items-center gap-3 uppercase tracking-[4px] text-xs font-semibold text-[#C8102E] mb-3">
                <span className="h-px w-7 bg-gradient-to-r from-[#0EA5E9] to-[#C8102E]" />
                Devis gratuit
              </p>

              <h3 className="relative font-bebas text-4xl sm:text-5xl mb-8 tracking-wide bg-gradient-to-r from-[#023E8A] to-[#0EA5E9] bg-clip-text text-transparent">
                Demande de devis
              </h3>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="relative space-y-5"
              >
                <Field
                  name="name"
                  label="Nom complet / Raison sociale"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  disabled={isSubmitting}
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    name="email"
                    type="email"
                    label="Email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    disabled={isSubmitting}
                  />

                  <Field
                    name="phone"
                    type="tel"
                    label="Téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    disabled={isSubmitting}
                  />
                </div>

                <Field
                  as="textarea"
                  name="message"
                  label="Message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  disabled={isSubmitting}
                  className="min-h-[120px] resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    group
                    relative
                    w-full
                    overflow-hidden
                    rounded-xl
                    bg-[#C8102E]
                    text-white
                    font-semibold
                    uppercase
                    tracking-[2px]
                    text-xs
                    p-4
                    shadow-md
                    shadow-[#C8102E]/20
                    transition-all
                    duration-300
                    hover:bg-[#a90d26]
                    hover:shadow-lg
                    hover:shadow-[#C8102E]/30
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                    disabled:hover:bg-[#C8102E]
                  "
                >
                  <span className="absolute inset-0 transition-transform duration-700 ease-out -translate-x-full pointer-events-none bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full" />
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Spinner />
                        Envoi en cours...
                      </>
                    ) : (
                      "Envoyer la demande"
                    )}
                  </span>
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ToastViewport toasts={toasts} onDismiss={dismissToast} />
    </>
  );
}

/* ---------------------------------- FIELD ---------------------------------- */

interface FieldProps {
  name: keyof DevisFormData;
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  disabled?: boolean;
  type?: string;
  as?: "input" | "textarea";
  className?: string;
}

function Field({
  name,
  label,
  value,
  onChange,
  error,
  disabled,
  type = "text",
  as = "input",
  className = "",
}: FieldProps) {
  const baseStyles = `
    w-full
    rounded-xl
    border
    bg-white/70
    backdrop-blur-sm
    p-4
    text-sm
    text-[#1E1E1C]
    placeholder:text-[#1E1E1C]/35
    outline-none
    transition-all
    duration-300
    focus:bg-white
    ${
      error
        ? "border-[#C8102E]/50 focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/10"
        : "border-[#0EA5E9]/15 focus:border-[#0EA5E9] focus:ring-4 focus:ring-[#0EA5E9]/10"
    }
    disabled:opacity-60
    disabled:cursor-not-allowed
  `;

  return (
    <div>
      {as === "textarea" ? (
        <textarea
          name={name}
          placeholder={label}
          value={value}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={!!error}
          className={`${baseStyles} ${className}`}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={label}
          value={value}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={!!error}
          className={`${baseStyles} ${className}`}
        />
      )}

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0, y: -4 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -4 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-1.5 flex items-center gap-1.5 text-xs text-[#C8102E]"
          >
            <ErrorIcon />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------------------------- TOAST ---------------------------------- */

function ToastViewport({
  toasts,
  onDismiss,
}: {
  toasts: ToastItem[];
  onDismiss: (id: number) => void;
}) {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-x-0
        bottom-0
        z-[60]
        flex
        flex-col-reverse
        items-center
        gap-3
        p-4
        sm:items-end
        sm:bottom-6
        sm:right-6
        sm:left-auto
        sm:p-0
      "
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} onDismiss={onDismiss} />
        ))}
      </AnimatePresence>
    </div>
  );
}

function Toast({
  toast,
  onDismiss,
}: {
  toast: ToastItem;
  onDismiss: (id: number) => void;
}) {
  const isSuccess = toast.variant === "success";
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 60, scale: 0.9, transition: { duration: 0.25 } }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      className="relative flex items-start w-full max-w-sm gap-3 p-4 overflow-hidden border shadow-xl pointer-events-auto rounded-2xl bg-white/90 backdrop-blur-md shadow-black/10 pr-11"
      style={{
        borderColor: isSuccess
          ? "rgba(14,165,233,0.25)"
          : "rgba(200,16,46,0.25)",
      }}
    >
      {/* aurora glow tint */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background: isSuccess
            ? "radial-gradient(circle at 0% 0%, rgba(14,165,233,0.08), transparent 60%)"
            : "radial-gradient(circle at 0% 0%, rgba(200,16,46,0.08), transparent 60%)",
        }}
      />

      <span
        className="relative flex items-center justify-center rounded-full h-9 w-9 shrink-0"
        style={{
          background: isSuccess
            ? "linear-gradient(135deg, #0EA5E9, #023E8A)"
            : "linear-gradient(135deg, #C8102E, #a90d26)",
        }}
      >
        {isSuccess ? <CheckIcon /> : <ErrorIcon light />}
      </span>

      <div className="relative flex-1 min-w-0">
        <p className="text-sm font-semibold text-[#1E1E1C]">{toast.title}</p>
        <p className="mt-0.5 text-xs leading-5 text-[#1E1E1C]/60">
          {toast.message}
        </p>
      </div>

      <button
        onClick={() => onDismiss(toast.id)}
        aria-label="Fermer la notification"
        className="
          absolute
          top-3
          right-3
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          text-[#1E1E1C]/30
          transition-colors
          duration-200
          hover:bg-black/5
          hover:text-[#1E1E1C]/60 z-20
bg-white
shadow-md
        "
      >
        ✕
      </button>

      {/* countdown bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[3px]"
        style={{
          background: isSuccess
            ? "linear-gradient(90deg, #0EA5E9, #7DD3FC)"
            : "linear-gradient(90deg, #C8102E, #a90d26)",
        }}
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: TOAST_DURATION / 1000, ease: "linear" }}
      />
    </motion.div>
  );
}

/* ---------------------------------- ICONS ---------------------------------- */

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-4.5 h-4.5 text-white"
      strokeWidth="2.5"
    >
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ErrorIcon({ light = false }: { light?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`w-3.5 h-3.5 shrink-0 ${
        light ? "w-4.5 h-4.5 text-white" : "text-[#C8102E]"
      }`}
      strokeWidth="2.5"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" />
      <path d="M12 8v5" stroke="currentColor" strokeLinecap="round" />
      <circle
        cx="12"
        cy="16"
        r="0.5"
        fill="currentColor"
        stroke="currentColor"
      />
    </svg>
  );
}

function Spinner() {
  return (
    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-90"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}
