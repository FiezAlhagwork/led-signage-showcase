import type { FormFieldProps } from "@/types";

/** حقل فورم موحّد (label + input أو textarea) — يحل محل التكرار الأربعي بصفحة التواصل. */
const FormField = (props: FormFieldProps) => {
  const { label, name, value, onChange, required, placeholder, isAr } = props;
  const alignClass = isAr ? "text-right" : "text-left";
  const fieldClassName = `w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-primary transition-all ${alignClass}`;

  return (
    <div>
      <label className={`block text-xs font-semibold text-white/70 mb-2 ${alignClass}`}>
        {label}
      </label>

      {props.as === "textarea" ? (
        <textarea
          name={name}
          rows={props.rows ?? 4}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={fieldClassName}
        />
      ) : (
        <input
          type={props.type ?? "text"}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={fieldClassName}
        />
      )}
    </div>
  );
};

export default FormField;
