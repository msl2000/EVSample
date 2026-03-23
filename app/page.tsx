import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center bg-red-500" >
      <div className=" h-1/2 w-1/3 rounded bg-[#333333] flex flex-col p-8 gap-y-5">
        <span className="text-3xl text-yellow-200">Hello. Please sign in. Marvis did some weork here</span>
        <input className="rounded-lg w-full h-10 text-lg border" placeholder="Enter your email"></input>
        <input type='password' className="rounded-lg w-full h-10 text-lg border" placeholder="Enter your password"></input>
      </div>
    </div>
  );
}
