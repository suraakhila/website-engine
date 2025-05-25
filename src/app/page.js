import { notFound } from "next/navigation";
import dynamicImport from "next/dynamic";
import { fetchPageData } from "@/lib/api/siteservice";
import SuraAkhilaNavbar from "@/components/sections/SuraAkhilaNavbar";

const PageContent = dynamicImport(() => import("@/components/PageContent"), {
  ssr: true,
});

function getSubdomain(host) {
  if (host.includes("localhost")) return "d2d";
  const parts = host.split(".");
  if (parts.length > 2) return parts[0];
  return parts[0] === "www" ? "default" : parts[0];
}

export default async function SubdomainPage(props) {
  // You can enhance this to get subdomain from headers if needed
  const subdomain = "d2d"; // or get from host if multi-tenant
  const slug = "home"; // or get from params if you support multiple pages

  let data;
  try {
    data = await fetchPageData(subdomain, slug);
  } catch (e) {
    return notFound();
  }

  if (!data || !data.page) return notFound();

  return (
    <>
      <SuraAkhilaNavbar />
      <PageContent
        page={data.page}
        sections={data.sections}
        theme={data.theme}
        config={data.config}
      />
    </>
  );
}
