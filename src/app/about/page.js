import NavBar from "@/components/nav";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "500", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function About() {
  return (
    <main>
      <NavBar currentPage="About" />
      <div className="pt-28 px-6">
        <div className="bg-brandWhite mb-8 p-6 flex flex-wrap">
          <div className="w-full md:w-1/2 pr-4">
            <h2
              className={`${roboto.className} text-3xl font-bold text-black mb-10`}
            >
              About Us
            </h2>
            <div className={`${roboto.className} text-lg text-black`}>
              <p>
                Roofus was created to connect pets seeking a loving home with
                their future families. While this is currently a mock website
                developed by Markus Flores, Raymond Santos, and Renee Michaud
                for our Web Development II class at SAIT, we hope to keep it
                active and expand upon it for potential future use.
              </p>
              <p className="mt-5">
                The name "Roofus" is a heartfelt tribute to Renee's beloved cat,
                Rufus, who recently passed away. It also reflects our mission to
                help put a "roof" over the heads of pets in need.
              </p>
            </div>
          </div>
          {/* Maybe a photo of us or something? Whatever you guys want to place here */}
          <div className="w-full md:w-1/2">
            <img
              src="/photoofus?.jpg"
              alt=""
              className="w-full h-full object-cover rounded"
            />
          </div>
          <hr className="w-full h-1 border-gray-500 mb-2 mt-20" />
          <div className="pt-20">
            <h2 className={`${roboto.className} text-3xl font-bold text-black`}>
              Meet Our Pets
            </h2>
          </div>
        </div>

        <div className="bg-brandWhite rounded-xl shadow-lg mb-8 px-6 pb-6 flex flex-wrap">
          <div className="md:w-1/2 order-2 md:order-1">
            <img
              src="/assets/about/rufus.png"
              alt="Rufus the Cat"
              className="w-full  h-[700px] object-cover rounded"
            />
          </div>
          <div className="w-full md:w-1/2 pl-4 order-1 md:order-2">
            <h2
              className={`${roboto.className} text-2xl font-bold text-black mb-4`}
            >
              Rufus
            </h2>
            <div className={`${roboto.className} text-lg text-black`}>
              <p className="mb-5">
                For nearly 18 years, Rufus lived a long, fulfilling, and
                adventurous life with his family. He was adopted in Florida,
                where he became a member of the neighborhood cat gang and would
                often host gatherings for them in the backyard. He enjoyed
                bringing "gifts" to his owners, including dead lizards, bugs,
                and even a live squirrel that he once brought into the house.
                Him and his family lived in Florida for several years before
                making the long journey to Canada, where they settled down for
                good.
              </p>
              <p className="mb-5">
                Rufus was a very affectionate cat who loved being close to his
                owners, especially as he grew older. He could often be found
                curled up on someone's lap or sharing a pillow with them at
                night. He was content simply to be included; when Renee was a
                child Rufus would even let her put a bonnet on his head and push
                him around in a stroller. A true foodie, Rufus had a particular
                love for ice cream, chicken, and cool ranch doritos on the odd
                occasion he managed to sneak a taste. He was also deeply in tune
                with human emotions, always offering comfort during tough times.
              </p>
              <p className="mb-5">
                Some of Rufus's favorite activities included lounging by the
                fireplace, watching movies with Renee on her laptop, and
                traveling between all the food bowls to get a taste of everyone
                else's dinner. He loved to give affectionate headbutts to those
                around him, and occasionally would groom their hair.
              </p>
              <p className="mb-5">
                Rufus was a very deeply loved cat who is greatly missed and will
                always hold a special place in his family's hearts.
              </p>
              <p className="mb-5">In Loving Memory</p>
              <p className="mb-5 mr-5">2007 - 2024 ♡</p>
            </div>
          </div>
        </div>
        <div className="bg-brandWhite rounded-xl shadow-lg mb-8 p-6 flex flex-wrap">
          <div className="w-full md:w-1/2 pl-4 order-1 md:order-2">
            <h2
              className={`${roboto.className} text-2xl font-bold text-black mb-4`}
            >
              Brownie
            </h2>
            <div className={`${roboto.className} text-lg text-black`}>
              <p className="mb-5 mr-5">
                Brownie joined the Michaud family after a week of relentless
                begging from Renee and her brother Sam to their parents. As a
                puppy, she quickly earned a reputation for chewing things such
                as sandals, toilet paper, and even a pair of reading glasses.
                She spent her early years in their Florida home before moving to
                Canada with her family.
              </p>
              <p className="mb-5 mr-5">
                Despite her small stature and adorable face, Brownie is fiercely
                protective of her family and is fully convinced that she's a
                fearsome guard dog. Her family often jokes that she resemblance
                the Lorax, Frank Gallagher, or even her owner Peter. Known as
                the diva of the household, Brownie often refuses to eat her own
                food, preffering to hold out for the "good stuff" like chicken,
                cheese, sweet potato, or spaghetti. Stubborn as she can be, she
                loves her family deeply and is unwaveringly loyal.
              </p>
              <p className="mb-5 mr-5">
                Brownie is also a cancer survivor, having recently undergone a
                major surgery to remove a mass from her chest. Thankfully, she
                is now cancer-free! In her golden years, Brownie enjoys a
                peaceful and pampered life filled with love, attention, and
                plenty of treats from her family.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-2 md:order-3">
            <img
              src="/assets/about/brownie.png"
              alt="Brownie the Dog"
              className="w-full object-cover rounded h-[700px]"
            />
          </div>
        </div>
        <div className="bg-brandWhite rounded-xl shadow-lg mb-8 p-6 flex flex-wrap">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <img
              src="/assets/about/sooty.png"
              alt="Sooty the Cat"
              className="w-full  h-[700px] object-cover rounded"
            />
          </div>
          <div className="w-full md:w-1/2 pl-4 order-1 md:order-2">
            <h2
              className={`${roboto.className} text-2xl font-bold text-black mb-4`}
            >
              Sooty
            </h2>
            <div className={`${roboto.className} text-lg text-black`}>
              <p className="mb-5">
                The newest addition to the family, Sooty, was brought home from
                Edmonton as a very young kitten, only being a month old at the
                time. Raised during the pandemic, he developed an obsessive
                attachment to his owner, Renee. As a kitten, Sooty was
                mischievous and energetic, often causing chaos and playfully
                messing with the other animals in the household.
              </p>
              <p className="mb-5 mr-5">
                Weighing in a whopping 22 pounds, Sooty is affectionately teased
                by his family for his round figure and his pointy fangs, which
                give him a bat-like appearance. He displays many unusual, almost
                human-like or dog-like behaviors, such as petting humans back
                when they pet him or playing fetch with his favorite pom-pom.
                Renee often refers to Sooty as her "child" because he follows
                her everywhere and sleeps in the crook of her arm every night
                sometimes even tucked under the covers like a baby.
              </p>
              <p className="mb-5 mr-5">
                In his free time, Sooty enjoys eating plants, carrying his
                pom-pom around, and birdwatching from the window. He has a
                fascination with bags and cardboard boxes and loves car rides,
                where he sits in a "car seat" (which is actually just a
                cardboard box). Sooty also has a special fondness for Christmas,
                especially the tree, which he takes great pleasure in knocking
                ornaments off of. He also has a particular set of drink coasters
                and a suitcase handle that he loves to lick, though no one has
                figured out why. His unique personality and odd habits are part
                of many reasons why he is so loved by his family.
              </p>
            </div>
          </div>
        </div>

        {/* Place your pets here Markus and Raymond*/}
        <div className="bg-brandWhite rounded-xl shadow-lg mb-8 p-6 flex flex-wrap">
          <div className="w-full md:w-1/2 pl-4 order-1 md:order-2">
            <h2
              className={`${roboto.className} text-2xl font-bold text-black mb-4`}
            >
              Pet Name
            </h2>
            <div className={`${roboto.className} text-lg text-black`}>
              <p className="mb-5 mr-5">Description</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-2 md:order-3">
            <img
              src="/assets/about/replacewithyourpetpic.png"
              alt=""
              className="w-full object-cover rounded h-[700px]"
            />
          </div>
        </div>

        <div className="bg-brandWhite rounded-xl shadow-lg mb-8 p-6 flex flex-wrap">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <img
              src="/assets/about/replacewithyourpetpic.png"
              alt=""
              className="w-full  h-[700px] object-cover rounded"
            />
          </div>
          <div className="w-full md:w-1/2 pl-4 order-1 md:order-2">
            <h2
              className={`${roboto.className} text-2xl font-bold text-black mb-4`}
            >
              Pet Name
            </h2>
            <div className={`${roboto.className} text-lg text-black`}>
              <p className="mb-5">Description</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
