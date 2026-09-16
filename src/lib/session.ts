const KEY = "pal.session";

export type PalSession = {
  email: string;
  name: string;
};

export function readSession(): PalSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PalSession;
    if (!parsed.email) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeSession(session: PalSession) {
  localStorage.setItem(KEY, JSON.stringify(session));
  window.dispatchEvent(new Event("pal-session"));
}

export function clearSession() {
  localStorage.removeItem(KEY);
  window.dispatchEvent(new Event("pal-session"));
}
