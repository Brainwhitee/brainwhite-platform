"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Magnetic } from "@/components/ui/magnetic";
import { validateForm, validateEmail, companySizes, placementsPerYear, type WaitlistFormData } from "@/lib/utils";
import { ease } from "@/lib/constants";

export function Waitlist() {
  const [formData, setFormData] = React.useState<WaitlistFormData>({
    name: "",
    email: "",
    company: "",
    companySize: "",
    placementsPerYear: "",
  });
  const [errors, setErrors] = React.useState<Partial<WaitlistFormData>>({});
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [touched, setTouched] = React.useState<Partial<Record<keyof WaitlistFormData, boolean>>>({});

  const handleChange = (field: keyof WaitlistFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const validationErrors = validateForm({ ...formData, [field]: value });
      setErrors((prev) => ({ ...prev, [field]: validationErrors[field] }));
    }
  };

  const handleBlur = (field: keyof WaitlistFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validationErrors = validateForm(formData);
    setErrors((prev) => ({ ...prev, [field]: validationErrors[field] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    setTouched({
      name: true,
      email: true,
      company: true,
      companySize: true,
      placementsPerYear: true,
    });

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmitStatus("loading");

    const { submitWaitlist } = await import("@/app/actions"); const res = await submitWaitlist(new FormData(e.target as HTMLFormElement)); if (!res.success) { setSubmitStatus("error"); return; }

    setSubmitStatus("success");
    setFormData({ name: "", email: "", company: "", companySize: "", placementsPerYear: "" });
    setErrors({});
    setTouched({});
  };

  return (
    <section
      id="waitlist"
      className="py-24 md:py-32 lg:py-40 border-t border-[var(--border)]"
      aria-labelledby="waitlist-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          className="max-w-2xl mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--muted)] mb-4" style={{ letterSpacing: "0.2em" }}>
            EARLY ACCESS
          </p>
          <h2 id="waitlist-heading" className="font-display font-medium text-[48px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-tight text-[var(--foreground)] text-balance">
            Get early access.
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-[var(--muted)] max-w-xl">
            We&apos;re building Brainwhite for engineering teams responsible for getting freshers productive on their codebases.
            <br /><br />
            Join the early access list and help shape the product.
          </p>
        </motion.div>

        {submitStatus === "success" ? (
          <SuccessState />
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            noValidate
          >
            <div className="space-y-6">
              <Input
                label="Full name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                onBlur={() => handleBlur("name")}
                error={touched.name ? errors.name : undefined}
                required
                autoComplete="name"
              />

              <Input
                label="Work email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                error={touched.email ? errors.email : undefined}
                required
                autoComplete="email"
              />

              <Input
                label="Company name"
                placeholder="Company name"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                onBlur={() => handleBlur("company")}
                error={touched.company ? errors.company : undefined}
                required
                autoComplete="organization"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <Select
                  label="Company size"
                  placeholder="Select size"
                  options={companySizes}
                  value={formData.companySize}
                  onChange={(e) => handleChange("companySize", e.target.value)}
                  onBlur={() => handleBlur("companySize")}
                  error={touched.companySize ? errors.companySize : undefined}
                  required
                />

                <Select
                  label="Fresher placements / year"
                  placeholder="Select range"
                  options={placementsPerYear}
                  value={formData.placementsPerYear}
                  onChange={(e) => handleChange("placementsPerYear", e.target.value)}
                  onBlur={() => handleBlur("placementsPerYear")}
                />
              </div>

              <Magnetic intensity={0.1}>
                <Button type="submit" size="lg" className="w-full" isLoading={submitStatus === "loading"}>
                  Join the waitlist ➔
                </Button>
              </Magnetic>

              <p className="text-xs text-[var(--muted)] text-center">
                By submitting, you agree to receive updates from Brainwhite. No spam. Unsubscribe anytime.
              </p>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}

function SuccessState() {
  return (
    <motion.div
      className="max-w-xl text-center py-12"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease }}
    >
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--foreground)] flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h3 className="font-display font-medium text-[32px] md:text-[40px] leading-tight text-[var(--foreground)] mb-3">
        You&apos;re on the list.
      </h3>
      <p className="text-lg text-[var(--muted)] leading-relaxed">
        We&apos;ll be in touch when early access opens.
      </p>
    </motion.div>
  );
}
