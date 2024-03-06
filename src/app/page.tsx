import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const links = [
    {
      name: "twitch bot.",
      url: "https://bot.ilotterytea.kz"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-col w-full min-h-screen">
        <div className="grow flex flex-row justify-between p-4 font-zilla text-4xl">
          <div className="flex flex-col">
            {
              links.map((v, i) => (
                <Link
                  href={v.url}
                  key={i}
                  className="p-1 transition-all underline underline-offset-8 text-pink-400 hover:text-black hover:bg-pink-400 hover:line-through ">
                    {v.name}
                </Link>
              ))
            }
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <Image
            src={"/silly_cat.png"}
            width={128}
            height={128}
            alt="hi"
          />
        </div>
      </div>
    </main>
  );
}