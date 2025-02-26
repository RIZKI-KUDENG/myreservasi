import { MultiLayerParallax } from "./components/utils/MultiLayerParallax";
import { Service } from "./Service";
import { Testimonials } from "./Testimonials";
import { Contact } from "./Contact";




export default function Home() {
  return (
  <main className="bg-white">
 <MultiLayerParallax/>
<Service></Service>
<Testimonials></Testimonials>
<Contact></Contact>
  </main>
  );
}
