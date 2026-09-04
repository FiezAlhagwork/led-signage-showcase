/**
 * مساعدات تحديث وسوم <head> مباشرة.
 *
 * ليش تحديث يدوي بدل وسوم React 19 التلقائية: الـindex.html فيه أصلاً وسوم
 * ثابتة (عنوان ووصف وOpen Graph) لازم تضل موجودة حتى تقرأها زواحف واتساب
 * وفيسبوك اللي ما بتشغّل JS. لو رندرنا وسوم جديدة من React كان صار عنا وسمَين
 * لنفس الشي، والمتصفّح بياخد الأول. فالتحديث بمكانها هو الأضمن.
 */

type MetaKey = "name" | "property";

/** بيحدّث وسم <meta> موجود أو بينشئه إذا مفقود */
export const setMeta = (key: MetaKey, value: string, content: string) => {
  const selector = `meta[${key}="${value}"]`;
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(key, value);
    document.head.appendChild(tag);
  }

  tag.content = content;
};

/** بيحدّث وسم <link> بـrel معيّن أو بينشئه — يُستعمل للـcanonical */
export const setLink = (rel: string, href: string) => {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!tag) {
    tag = document.createElement("link");
    tag.rel = rel;
    document.head.appendChild(tag);
  }

  tag.href = href;
};

/**
 * بيستبدل كل وسوم <link rel="alternate" hreflang> بالمجموعة الجديدة.
 * الاستبدال الكامل مقصود: عددها بيختلف بين صفحة معروفة و404.
 */
export const setAlternateLinks = (
  alternates: { hreflang: string; href: string }[],
) => {
  document.head
    .querySelectorAll('link[rel="alternate"][hreflang]')
    .forEach((tag) => tag.remove());

  for (const { hreflang, href } of alternates) {
    const tag = document.createElement("link");
    tag.rel = "alternate";
    tag.hreflang = hreflang;
    tag.href = href;
    document.head.appendChild(tag);
  }
};
