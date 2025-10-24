import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 wrapper p-4">{children}</main>
      <Footer />
    </div>
  );
}
