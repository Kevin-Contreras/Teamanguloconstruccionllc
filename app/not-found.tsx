import type { Metadata } from "next";
import { NotFoundPage } from "./components/not-found/NotFoundPage";

export const metadata: Metadata = {
  title: "Page Not Found | Team Angulo Construction LLC",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <main className="w-full bg-white">
      <NotFoundPage />
    </main>
  );
}
