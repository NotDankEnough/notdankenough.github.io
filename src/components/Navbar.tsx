const Navbar = (): JSX.Element => (
    <div className="w-full h-28 flex justify-center items-center text-7xl dark:text-red-500">
        <div className="w-full flex flex-col xl:flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center">
                <h1 className="font-semibold">ilotterytea</h1>
            </div>
            <div className="w-full xl:w-[auto] flex flex-row xl:flex-col justify-around xl:justify-center items-center text-xl">
                <a href="mailto:ilotterytea@pm.me" className="dark:hover:bg-red-500 hover:bg-black dark:hover:text-black hover:text-white hover:[text-decoration:line-through]">
                    e-mail
                </a>
            </div>
        </div>
    </div>
);

export default Navbar;