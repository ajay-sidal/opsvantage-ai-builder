import DynamicPage from "./[slug]/page"

export default function HomePage(props: any) {
  return DynamicPage({ params: { ...props.params, slug: "home" } })
}
