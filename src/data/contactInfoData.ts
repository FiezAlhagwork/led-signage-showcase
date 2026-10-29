import { MapPin, Phone, MessageSquare, Clock } from "lucide-react";
import FacebookIcon from "@/components/ui/FacebookIcon";
import type { ContactInfoItem } from "@/types";

/** صفوف معلومات التواصل بصفحة "تواصل معنا" */
export const contactInfoRows: ContactInfoItem[] = [
  {
    id: "address",
    icon: MapPin,
    labelKey: "addressLabel",
    valueKey: "addressText",
    href: (data) => data.mapLink,
  },
  {
    id: "phone",
    icon: Phone,
    labelKey: "phoneLabel",
    valueField: "phone",
    href: (data) => `tel:${data.phone}`,
  },
  {
    id: "whatsapp",
    icon: MessageSquare,
    labelKey: "whatsappLabel",
    valueKey: "whatsappBtn",
    href: (data) => `https://wa.me/${data.whatsappNumber}`,
  },
  {
    id: "facebook",
    icon: FacebookIcon,
    labelKey: "facebookLabel",
    valueKey: "facebookPageName",
    href: (data) => data.facebookUrl,
  },
  {
    id: "hours",
    icon: Clock,
    labelKey: "hoursLabel",
    valueKey: "hoursText",
  },
];
