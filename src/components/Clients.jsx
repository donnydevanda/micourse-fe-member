import Image from "next/image";
import IconAmazon from "../public/images/ic-clients/ic-amazon.svg";
import IconFacebook from "../public/images/ic-clients/ic-facebook.svg";
import IconGoogle from "../public/images/ic-clients/ic-google.svg";
import IconMicrosoft from "../public/images/ic-clients/ic-microsoft.svg";
import IconTesla from "../public/images/ic-clients/ic-tesla.svg";

export default function Clients() {
  return (
    <div className="container mx-auto px-4 -mt-24 mb-24 md:mt-32">
      <div className="flex flex-wrap justify-center items-center">
        <div className="sm:w-1/6 my-4 md:mb-0">
          <Image src={IconAmazon} alt="Company Amazon" className="mx-auto" />
        </div>
        <div className="sm:w-1/6 my-4 md:mb-0">
          <Image
            src={IconFacebook}
            alt="Company Facebook"
            className="mx-auto"
          />
        </div>
        <div className="sm:w-1/6 my-4 md:mb-0">
          <Image src={IconGoogle} alt="Company Google" className="mx-auto" />
        </div>
        <div className="sm:w-1/6 my-4 md:mb-0">
          <Image
            src={IconMicrosoft}
            alt="Company Microsoft"
            className="mx-auto"
          />
        </div>
        <div className="sm:w-1/6 my-4 md:mb-0">
          <Image src={IconTesla} alt="Company Tesla" className="mx-auto" />
        </div>
      </div>
    </div>
  );
}
