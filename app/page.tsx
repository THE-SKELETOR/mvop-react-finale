import { EmblaCarousel } from "./components/carousel";
import GridThingy from "./components/thingy"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="md:w-11/12 lg:w-5/6 mx-auto">
          <EmblaCarousel />
        </div>
        <div className="pt-9 mx-auto text-3xl font-bold text-green-800 color w-fit">
          Plusy
        </div>
        <div className="flex flex-wrap mx-auto w-5/6 font-bold">
          <GridThingy stuff="1 hs soukromého lesoparku"/>
          <GridThingy stuff="2 hs soukromého lesoparku"/>
          <GridThingy stuff="3 hs soukromého lesoparku"/>
          <GridThingy stuff="4 hs soukromého lesoparku"/>
          <GridThingy stuff="5 hs soukromého lesoparku"/>
          <GridThingy stuff="6 hs soukromého lesoparku"/>
          <GridThingy stuff="7 hs soukromého lesoparku"/>
          <GridThingy stuff="8 hs soukromého lesoparku"/>
        </div>
        <div className="md:flex mx-auto w-11/12 font-bold rounded-lg bg-gradient-to-tr from-gray-500 to-pink-200 drop-shadow-2xl my-12">
          <div className="flex-1 overflow-hidden">
            <img
            src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="md:w-1/2 p-8 lg:p-16 leading-relaxed lg:leading-loose text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem voluptatibus possimus accusantium quos qui dolores harum, iusto delectus tempora sunt quaerat voluptate quia officiis. Accusamus impedit dolore maxime deleniti nisi.
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quaerat et, aperiam fugiat fugit, doloremque sapiente reprehenderit possimus velit unde qui quam? Praesentium sint expedita temporibus aliquid id dolorum architecto.
          </div>
        </div>
        <div className="xl:flex flex-row-reverse mx-auto w-11/12 py-12">
          <div className="p-4 m-auto w-full shadow-md shadow-black rounded-2xl" >
            <div className="rounded-xl aspect-video">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0"
                title="Embedded video"
                allowFullScreen
                
              ></iframe>
            </div>
          </div>
          <div className="xl:w-1/2 p-4 md:py-12 xl:py-20 leading-relaxed lg:leading-loose">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptate, in esse reprehenderit iusto doloribus velit provident vero. Culpa reiciendis exercitationem incidunt! Rerum, eveniet vitae? Distinctio voluptas odio placeat praesentium!
              <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veniam assumenda culpa eius dolorem minima delectus autem fugit voluptatem corrupti, dolores suscipit architecto nulla labore maxime voluptas ipsum aspernatur numquam?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
