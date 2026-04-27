import { useColorScheme } from "@/hooks/use-color-scheme";

type Colors = {
  background: string;
  foreground: string;
  mutedForeground: string;
  border: string;
  primary: string;
};

const light: Colors = {
  background: "#ffffff",
  foreground: "#111827",
  mutedForeground: "#6B7280",
  border: "#E5E7EB",
  primary: "#2563EB",
};

const dark: Colors = {
  background: "#0F172A",
  foreground: "#F8FAFC",
  mutedForeground: "#94A3B8",
  border: "#334155",
  primary: "#60A5FA",
};

export function useColors(): Colors {
  const scheme = useColorScheme();
  return scheme === "dark" ? dark : light;
}
