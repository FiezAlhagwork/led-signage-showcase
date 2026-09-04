import type { ChangeEvent, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type en from "@/locales/en.json";

/** مفاتيح نصوص صفحة التواصل — مقيّدة بملف الترجمة */
export type ContactLabelKey = keyof typeof en.contact;

export interface ContactData {
  phone: string;
  phoneSecondary: string;
  whatsappNumber: string;
  mapLink: string;
  email: string;
}

/** صف معلومات تواصل — العنوان من الترجمة، والقيمة إما من الترجمة أو من contactData */
export interface ContactInfoItem {
  id: string;
  icon: LucideIcon;
  labelKey: ContactLabelKey;
  /** نص القيمة من ملف الترجمة */
  valueKey?: ContactLabelKey;
  /** أو قيمة مباشرة من بيانات التواصل (رقم/إيميل) */
  valueField?: keyof ContactData;
  /** رابط اختياري مبني من بيانات التواصل — بدونه بيرندر كصف بلا رابط */
  href?: (data: ContactData) => string;
}

export interface ContactInfoRowProps {
  icon: LucideIcon;
  label: string;
  value: ReactNode;
  /** رابط اختياري (tel:, https://...) — بدون href بترندر كصف عادي بدون رابط */
  href?: string;
  isAr?: boolean;
}

export type FieldChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export interface BaseFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: FieldChangeEvent) => void;
  required?: boolean;
  placeholder?: string;
  isAr?: boolean;
}

export interface InputFieldProps extends BaseFieldProps {
  as?: "input";
  type?: string;
}

export interface TextareaFieldProps extends BaseFieldProps {
  as: "textarea";
  rows?: number;
}

export type FormFieldProps = InputFieldProps | TextareaFieldProps;
