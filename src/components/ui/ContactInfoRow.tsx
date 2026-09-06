import type { ContactInfoRowProps } from "@/types";

const ContactInfoRow = ({
  icon: Icon,
  label,
  value,
  href,
}: ContactInfoRowProps) => {
  const content = (
    <>
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 shadow-md flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
        <Icon className="w-5 h-5" />
      </div>

      <div className="grow mx-4 text-natural">
        <h4 className="text-sm font-bold text-primary mb-0.5">{label}</h4>
        <p className="text-white/80 text-xs">{value}</p>
      </div>
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="flex items-center justify-between py-2 group"
      >
        {content}
      </a>
    );
  }

  /* بلا رابط = صف عادي، فبلا `group` حتى ما تشتغل تأثيرات المرور على شي مو قابل للضغط */
  return (
    <div className="flex items-center justify-between py-2">{content}</div>
  );
};

export default ContactInfoRow;
