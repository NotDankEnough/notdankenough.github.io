import Image from "next/image";

const Item = ({name, short, image_url, url}: {name: string, short: string, image_url: string, url: string}): JSX.Element => (
    <a href={url}>
        <div className="space-y-1 p-4 bg-slate-100 hover:bg-slate-200 dark:bg-neutral-800 dark:hover:bg-neutral-900 transition dark:text-red-500 dark:hover:text-red-400">
            <div>
                <Image
                    src={image_url}
                    width={1024}
                    height={1024}
                    alt={"Image"}
                    style={{width: "100%", height: "auto"}}
                />
            </div>
            <div className="space-y-1">
                <h1 className="font-bold text-2xl">{name}</h1>
                <p className="text-sm">{short}</p>
            </div>
        </div>
    </a>
);

export default Item;