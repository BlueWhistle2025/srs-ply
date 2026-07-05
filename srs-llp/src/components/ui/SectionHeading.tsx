"use client";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

/** Reusable section heading with decorative underline. */
export default function SectionHeading({
  title,
  subtitle,
  center = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : "text-left"}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-3 ${
          light ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h2>

      {/* Decorative bar */}
      <div
        className={`h-1 w-20 rounded-full ${center ? "mx-auto" : ""} bg-brand-accent mb-4`}
      />

      {subtitle && (
        <p
          className={`max-w-2xl text-base md:text-lg ${center ? "mx-auto" : ""} ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
