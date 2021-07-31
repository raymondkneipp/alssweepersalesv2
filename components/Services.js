import tw from "twin.macro";
import Container from "./Container";
import Sewing from "./icons/Sewing";
import Trade from "./icons/Trade";
import Vacuum from "./icons/Vacuum";

const StyledContainer = tw(
  Container
)`grid sm:grid-cols-2 lg:grid-cols-3 gap-12 items-start`;

export default function Services() {
  return (
    <div tw="bg-yellow-200 py-20 text-black text-opacity-60">
      <StyledContainer>
        <article tw="flex flex-col items-center space-y-4">
          <Vacuum />
          <h3 tw="text-lg font-semibold mb-1 text-center">Vacuum Repair</h3>
          <p tw="mb-4 text-center">
            Bring your vacuum back to life. Same day or next day repairs and
            free estimates.
          </p>
        </article>

        <article tw="flex flex-col items-center space-y-4">
          <Sewing />
          <h3 tw="text-lg font-semibold mb-1 text-center">
            Sewing Machine Repair
          </h3>
          <p tw="mb-4 text-center">
            Get your sewing machine working good as new! Same day or next day
            repairs and free estimates.
          </p>
        </article>

        <article tw="flex flex-col items-center space-y-4 sm:col-span-2 lg:col-span-1">
          <Trade />
          <h3 tw="text-lg font-semibold mb-1 text-center">
            Appliance Trade In
          </h3>
          <p tw="mb-4 text-center">
            Bring in your old appliance to receive credit for a new model!
          </p>
        </article>
      </StyledContainer>
    </div>
  );
}
