import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import wishlistService from "../../services/wishlistService";

const USER_STORAGE_KEY = "user";
const SESSION_MS = 30 * 60 * 1000;

const readStoredUser = () => {
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const writeStoredUser = (user) => {
  try {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  } catch {
    // ignore
  }
};

const clearAuth = () => {
  try {
    localStorage.removeItem(USER_STORAGE_KEY);
  } catch {
    // ignore
  }

  // Keep auth-aware UI in sync (wishlist badge/state, etc.)
  try {
    wishlistService.notifyAuthChanged();
  } catch {
    // ignore
  }
};

export default function SessionTimeoutWatcher() {
  const navigate = useNavigate();
  const location = useLocation();
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    const storedUser = readStoredUser();
    if (!storedUser?.token) return;

    let loginAt = Number(storedUser.loginAt);
    if (!Number.isFinite(loginAt) || loginAt <= 0) {
      loginAt = Date.now();
      writeStoredUser({ ...storedUser, loginAt });
    }

    const remainingMs = loginAt + SESSION_MS - Date.now();

    const onExpire = () => {
      // Re-check in case user already logged out.
      const currentUser = readStoredUser();
      if (!currentUser?.token) return;

      window.alert("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
      clearAuth();
      navigate("/login", { replace: true });
    };

    if (remainingMs <= 0) {
      onExpire();
      return;
    }

    timeoutRef.current = setTimeout(onExpire, remainingMs);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [navigate, location.pathname]);

  return null;
}
