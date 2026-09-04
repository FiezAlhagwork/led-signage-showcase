import { Eye } from "lucide-react";
import Card from "@/components/ui/Card";
import type { ProjectCardProps } from "@/types";

/** بطاقة مشروع واحدة بشبكة "أعمالنا المميزة" — صورة + شارة تصنيف + عنوان + زر معاينة. */
const ProjectCard = ({
  image,
  title,
  category,
  isAr,
  onClick,
}: ProjectCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="bg-black/40 rounded-2xl hover:shadow-2xl hover:shadow-primary/15 cursor-pointer"
    >
      <div className="relative h-64 w-full overflow-hidden bg-zinc-900">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <span
          className={`absolute top-4 ${
            isAr ? "right-4" : "left-4"
          } px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-primary`}
        >
          {category}
        </span>
      </div>

      <div className="p-6 flex items-center justify-between">
        <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
          <Eye className="w-5 h-5" />
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
