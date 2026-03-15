import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          Hello, 2026!
        </h1>
        <p className="mt-6 text-xl text-slate-400">
          내 생애 첫 Next.js 사이트가 돌아가고 있어요.
        </p>
        <div className="mt-10 px-6 py-3 bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition-all cursor-pointer">
          성공적으로 수정됨!
        </div>
      </div>
    </main>
  );
}
