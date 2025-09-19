"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 1500); // 1.5 seconds delay for loading screen
    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div className="flex justify-center items-center h-screen bg-[#2e7d3292]">
      {loading && (
        <div className="flex items-center justify-center space-x-2">
          <span className="w-4 h-4 bg-[#2E7D32] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-4 h-4 bg-[#2E7D32] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-4 h-4 bg-[#2E7D32] rounded-full animate-bounce"></span>
        </div>
      )}
    </div>
  );
};
export default Page;