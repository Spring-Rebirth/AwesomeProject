import { supabase } from "../lib/supabase";
import React from "react";

export function useAuthState() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // 检查当前会话
    supabase.auth.getSession().then(({ data }) => {
      setIsSignedIn(!!data.session);
      setLoading(false);
    });

    // 监听认证状态变化
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsSignedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { isSignedIn, loading };
}

// 用于React Navigation的if语法的hooks
export function useIsSignedIn() {
  const { isSignedIn } = useAuthState();
  return isSignedIn;
}

export function useIsSignedOut() {
  const { isSignedIn } = useAuthState();
  return !isSignedIn;
}


