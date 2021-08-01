import { useState } from "react";
import { useRouter } from "next/router";
import tw from "twin.macro";
import Container from "../components/Container";
import Layout from "../components/Layout";
import PushContent from "../components/navbar/PushContent";
import ButtonLink from "../components/ButtonLink";
import Location from "../components/icons/Location";
import Mail from "../components/icons/Mail";
import Phone from "../components/icons/Phone";

const StyledContainer = tw(Container)`grid gap-8 md:grid-cols-2 items-center`;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [honey, setHoney] = useState("");

  const router = useRouter();

  const contactUs = async (e) => {
    e.preventDefault();

    if (honey === "") {
      try {
        const res = await fetch("/api/contact", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            msg,
          }),
        });

        if (res.status === 200) {
          router.push("/success");
        } else {
          router.push("/_error");
        }
      } catch (err) {
        router.push("/_error");
      }
    }
  };

  return (
    <Layout title="Contact Us">
      <PushContent />
      <Container>
        <h1 tw="text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-center font-bold py-10">
          Contact Us
        </h1>
      </Container>

      <div tw="bg-yellow-200 mt-36 flex-1">
        <StyledContainer>
          <form tw="bg-white shadow-lg p-8 -mt-36" onSubmit={contactUs}>
            <h2 tw="text-3xl text-black font-semibold text-opacity-60 mb-4 text-center">
              Send A Message
            </h2>

            <div tw="flex flex-col">
              <label
                htmlFor="name"
                tw="text-black text-opacity-80 text-sm mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="name"
                tw="bg-gray-100 rounded-lg py-2 px-4 focus:(outline-none ring-yellow-400 ring) mb-4"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div tw="flex flex-col">
              <label
                htmlFor="email"
                tw="text-black text-opacity-80 text-sm mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                tw="bg-gray-100 rounded-lg py-2 px-4 focus:(outline-none ring-yellow-400 ring) mb-4"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div tw="flex flex-col">
              <label htmlFor="msg" tw="text-black text-opacity-80 text-sm mb-2">
                Message
              </label>
              <textarea
                id="msg"
                rows="4"
                tw="bg-gray-100 rounded-lg py-2 px-4 focus:(outline-none ring-yellow-400 ring) mb-4 resize-none"
                required
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
            </div>

            <input
              type="text"
              id="city"
              value={honey}
              onChange={(e) => setHoney(e.target.value)}
              tw="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            <input
              type="submit"
              tw="cursor-pointer inline-flex items-center bg-yellow-300 rounded-lg py-3 px-6 text-lg font-bold transition duration-300 ease-in-out transform hocus:(scale-110 bg-yellow-400 outline-none)"
              value="Send Message"
            />
          </form>

          <div>
            <section tw="bg-yellow-100 bg-opacity-50 p-8 mt-10">
              <h2 tw="text-3xl text-black font-semibold text-opacity-60 mb-4 text-center">
                Reach Out To Us
              </h2>
              <ul tw="text-black text-opacity-80 whitespace-nowrap grid gap-4">
                <li tw="grid grid-flow-col auto-cols-min items-center gap-4">
                  <Mail />
                  <span tw="select-all">contact@alssweepersales.com</span>
                </li>
                <li tw="grid grid-flow-col auto-cols-min items-center gap-4">
                  <Phone />
                  <span tw="select-all">(937) 382-8162</span>
                </li>
                <li tw="grid grid-flow-col auto-cols-min items-center gap-4">
                  <Location />
                  239 W Locust St, Wilmington, OH 45177
                </li>
              </ul>
            </section>

            <div tw="grid grid-flow-col items-center justify-center gap-8 p-8">
              <ButtonLink primary href="mailto:contact@alssweepersales.com">
                Email Us
              </ButtonLink>
              <ButtonLink primary href="tel:(937) 382-8162">
                Call Now
              </ButtonLink>
            </div>
          </div>
        </StyledContainer>
      </div>
    </Layout>
  );
}
