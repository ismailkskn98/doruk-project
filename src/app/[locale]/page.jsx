import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("HomePage");
  return <div className="flex min-h-screen items-center justify-center">{t("title")}</div>;
}
