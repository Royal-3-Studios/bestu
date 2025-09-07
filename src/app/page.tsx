import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Section 2 – About DJ */}
      <section className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat">
        <Card className="bg-white/70 p-12 pt-1 min-w-xl max-w-4xl text-center lg:text-left space-y-6">
          <div className="pt-6 pl-6 w-full flex flex-col justify-center text-center lg:text-left space-y-6">
            <div className="flex justify-center">
              <Image
                src="/BestULogo_v5.png"
                alt="Best U Logo"
                width={300}
                height={300}
                className="mx-auto lg:mx-0"
              />
            </div>

            <p>
              {"    "}
              At Best U Consulting, we believe your life deserves to be lived
              with intention. Whatever that means for you. There’s no
              one-size-fits-there are many versions of happiness. You can
              experience more joy, meaning, and fulfillment. Along with
              enhancing the gratitude of what you have. At Best U, we help you
              build the tools and strategies to design and truly live your one
              wild and precious life.
              <br />
            </p>
            <p className="italic text-md text-center text-blue-700">
              “Tell me, what is it you plan to do with your one wild and
              precious life?” — Mary Oliver
            </p>
          </div>
        </Card>
      </section>

      <section className="w-full min-h-screen flex flex-col lg:flex-row items-stretch gap-8 px-6 py-8">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="relative w-full min-h-[500px] md:min-h-[700px] lg:min-h-[720px]">
            <Image
              src="/pappas.png"
              alt="Donna Jeane Pappas"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        </div>

        {/* Right: About Me */}
        <div className="w-full lg:w-1/2 flex">
          <div className="my-auto w-full max-w-2xl mx-auto lg:mx-0 p-8 bg-white/90 text-center lg:text-left space-y-8">
            <h2 className="text-3xl font-semibold text-blue-800">About Me</h2>

            <div className="space-y-6 text-gray-800">
              <p className="">
                I’m Donna Jeane Hitchcock Pappas—but most people call me DJ. I’m
                a Licensed Clinical Mental Health Counselor in North Carolina
                with over 30 years of experience walking alongside people
                through both the pain and promise of life.
              </p>
              <p>
                My roots are in grief and loss counseling, so I deeply
                understand that life’s challenges can be complex, emotional, and
                transformative.
              </p>
              <p>
                At this chapter in my own life, I’ve felt a calling to shift
                toward something new—something that speaks to possibility.
                That’s what led me to create Best U Consulting.
              </p>
              <p>
                My work now focuses on helping adults pause, reflect, and
                consider what’s next. I guide individuals, small groups, and
                larger audiences in designing a life that feels more
                intentional, aligned, and meaningful—not in some distant ideal,
                but right here in the middle of everyday life.
              </p>
              <p>
                I believe happier is something we can create—and more
                importantly, it’s often already present within our lives,
                waiting to be noticed, nurtured, and reclaimed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 – Recalibration */}
      <section className="w-full h-[70vh] flex items-center justify-center bg-blue-50 px-6 py-12 ">
        <div className="max-w-3xl text-center lg:text-left space-y-6">
          <blockquote className="italic text-blue-700 text-lg">
            “Life is like a compass—we all require recalibration sometimes. It
            is a gift of opportunity.”
            <br />— Unknown
          </blockquote>
          <p className="text-gray-800">
            We all experience times of assessing our life direction. These are
            big life moments leading to dramatic changes. More often it is about
            the quiet, ongoing moments that reveal simple ways to shift our
            lives for the better.
          </p>
          <p className="text-gray-800">
            Recalibrating is a way of living—an ongoing opportunity for the gift
            of growth, change, and awareness of what we value most.
          </p>
          <p className="text-blue-900 font-semibold">
            If you’re at a point where you’re asking, “What’s next for me?”
            <br />
            Time for recalibration.
          </p>
          <p className="text-gray-800">
            I’d be honored to help you explore that. Contact me about a
            complimentary discovery session.
          </p>
        </div>
      </section>

      {/* Section 4 – Contact */}
      <section className="w-full h-[30vh] flex flex-col items-center justify-center bg-white px-6 py-12 border-t">
        <h2 className="text-2xl font-semibold text-blue-800 text-center">
          <p className="mb-4">Find Your Best U Today!</p>
        </h2>
        <p className="text-gray-800 mt-4">
          Email me at{" "}
          <a
            href="mailto:dj.pappas@bestu.com"
            className="text-blue-600 underline"
          >
            bestuconsulting.com
          </a>
        </p>
        <p>
          <br />
          Offering individual sessions, small group sessions & presentations
          Explore, discover, create and live your best life.
        </p>
      </section>
    </div>
  );
}
