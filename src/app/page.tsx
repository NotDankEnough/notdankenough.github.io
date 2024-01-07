import Item from '@/components/Item';
import Navbar from '@/components/Navbar'

export default function Home() {
  const apps = [
    {
      "name": "Maxon Petting Simulator",
      "short": "A silly clicker game about a cute kitty whose cheeks must always be squished.",
      "image_url": "/maxon.png",
      "url": "https://ilotterytea.itch.io/maxon"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="px-16 w-full space-y-8 xl:space-y-0 xl:w-[70%]">
        <Navbar />
        <div className="flex flex-col space-y-8 xl:space-y-0 xl:grid xl:grid-cols-3 xl:gap-4">
          {
            apps.map((value, index) => (
              <Item
                name={value.name}
                short={value.short}
                image_url={value.image_url}
                url={value.url}
                key={index}
              />
            ))
          }
        </div>
      </div>
    </main>
  )
}
