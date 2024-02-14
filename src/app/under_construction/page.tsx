import Image from "next/image";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className="flex flex-col xl:px-16 w-full min-h-screen xl:w-[70%]">
                <div className="grow"></div>
                <div className="flex flex-row-reverse">
                    <Image
                        src={"/silly_cat.png"}
                        width={64}
                        height={64}
                        alt="hi"
                    />
                </div>
            </div>
        </main>
    );
}