import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("academy", "routes/academy.tsx"),
    route("ai-intelligence", "routes/ai-intelligence.tsx"),
    route("careers", "routes/careers.tsx"),
    route("contact", "routes/contact.tsx"),
    route("industries", "routes/industries.tsx"),
    route("insights", "routes/insights.tsx"),
    route("privacy-policy", "routes/privacy-policy.tsx"),
    route("research", "routes/research.tsx"),
    route("services", "routes/services.tsx"),
    route("solutions", "routes/solutions.tsx"),
    route("terms-of-use", "routes/terms-of-use.tsx"),
  ]),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
