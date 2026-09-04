import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import Button from "@/components/ui/Button";

const NotFound = () => {
  const { t, isRtl: isAr } = useLanguage();

  return (
    <main
      className="w-full min-h-screen bg-dark-bg text-white flex flex-col items-center justify-center gap-6 px-6 text-center font-(family-name:--font-main)"
      dir={isAr ? "rtl" : "ltr"}
    >
      <span className="text-7xl md:text-9xl font-extrabold text-primary/30 tracking-tight">
        404
      </span>

      <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
        {t.notFound.title}
      </h1>

      <Link to="/">
        <Button size="lg" variant="primary">
          {t.notFound.backHome}
        </Button>
      </Link>
    </main>
  );
};

export default NotFound;
