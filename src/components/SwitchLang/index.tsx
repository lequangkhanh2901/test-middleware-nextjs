"use client";

import Cookies from "js-cookie";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

function SwitchLang() {
  const { lang } = useParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    Cookies.set("_lang", lang);
  }, [lang]);

  const handleChangeLang = (lang: string) => {
    Cookies.set("_lang", lang);
    router.push(pathname.replace(pathname.slice(1, 3), lang));
  };

  return (
    <div>
      <span
        onClick={() => handleChangeLang("en")}
        style={{
          fontSize: lang === "en" ? 25 : 14,
        }}
      >
        en
      </span>
      <br />
      <span
        onClick={() => handleChangeLang("vi")}
        style={{
          fontSize: lang === "vi" ? 25 : 14,
        }}
      >
        vi
      </span>
    </div>
  );
}

export default SwitchLang;
