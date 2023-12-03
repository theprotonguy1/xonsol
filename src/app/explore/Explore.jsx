import Image from "next/image"
import { explore } from "../../../public"

const Explore = () => {
  return (
    <div className="min-h-screen border-2 border-white">
      <Image src={explore} alt="Explore" fill={true} className="object-cover" />
    </div>
  );
}

export default Explore