import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Section 1 – Logo and Intro */}
      <section className="w-full min-h-screen flex flex-col lg:flex-row px-6 py-8">
        {/* Image section (photo of DJ Pappas) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full relative min-h-[500px] md:min-h-[700px] lg:h-full">
            <Image
              src="/pappas.png"
              alt="pappas"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="pt-6 pl-6 w-full flex flex-col justify-center max-w-xl text-center lg:text-left space-y-6">
            {/* <Image
              src="/BestULogo_v5.png"
              alt="Best U Logo"
              width={200}
              height={200}
              className="mx-auto lg:mx-0"
            /> */}
            <h1 className="text-6xl font-bold text-blue-800 text-center">
              <p className="text-2xl text-primary">
                <i>Be The</i>
              </p>
              <p>BEST U</p>
            </h1>
            <p className="text-gray-700 text-lg">
              Exploring, discovering, creating and living your best life.
            </p>
            <p className="italic text-md text-blue-600">
              “Tell me, what is it you plan to do with your one wild and
              precious life?”
              <br />— Mary Oliver
            </p>
            <p className="text-gray-800">
              At Best U Consulting, we believe your life deserves to be lived
              with intention— whatever that means for you. There’s no
              one-size-fits-all version of happiness, but there are things you
              can do to experience more joy, meaning, and fulfillment.
              <br />
              <br />
              At Best U, we help you build the tools and strategies to
              design—and truly live— your one wild and precious life.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 – About DJ */}
      <section className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat">
        <Card className="bg-white/70 p-12 max-w-3xl text-center lg:text-left space-y-6">
          <h2 className="text-3xl font-semibold text-blue-800 text-center">
            About Me
          </h2>
          <b className="space-y-10">
            <p className="text-gray-800 text-bold">
              I’m Donna Jeane Hitchcock Pappas—but most people call me DJ. I’m a
              Licensed Clinical Mental Health Counselor in North Carolina with
              over 30 years of experience walking alongside people through both
              the pain and promise of life.
              <br />
              <br />
              My roots are in grief and loss counseling, so I deeply understand
              that life’s challenges can be complex, emotional, and
              transformative.
            </p>
            <p className="text-gray-800">
              At this chapter in my own life, I’ve felt a calling to shift
              toward something new— something that speaks to possibility. That’s
              what led me to create Best U Consulting.
            </p>
            <p className="text-gray-800">
              My work now focuses on helping adults pause, reflect, and consider
              what’s next. I guide individuals, small groups, and larger
              audiences in designing a life that feels more intentional,
              aligned, and meaningful—not in some distant ideal, but right here
              in the middle of everyday life.
            </p>
            <p className="text-gray-800">
              I believe happier is something we can create—and more importantly,
              it&lsquos often already present within our lives, waiting to be
              noticed, nurtured, and reclaimed.
            </p>
          </b>
        </Card>
      </section>

      {/* Section 3 – Recalibration */}
      <section className="w-full min-h-screen flex items-center justify-center bg-blue-50 px-6 py-12 ">
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
      <section className="w-full min-h-[50vh] flex flex-col items-center justify-center bg-white px-6 py-12 border-t">
        <h2 className="text-2xl font-semibold text-blue-800 text-center">
          <p className="mb-4">Find Your Best U Today!</p>
          Contact Me
        </h2>
        <p className="text-gray-800 mt-4">
          Email me at{" "}
          <a
            href="mailto:dj.pappas@bestu.com"
            className="text-blue-600 underline"
          >
            dj.pappas@bestu.com
          </a>
        </p>
      </section>
    </div>
  );
}
