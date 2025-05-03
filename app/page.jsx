import {
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Thumbnail,
  Transition,
} from '@/layout';
console.log('Cloud name:', process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Home | IbrahimAgaigou',
  description:
    'Helping ideas thrive in the digital world. Based in The Netherlands. 🎨 Crafting custom digital designs & 💻 building interactive websites from scratch. © Code by Brahim Agaigou',
};

export default function Home() {
  return (
    <Transition>
      <Navbar />
      <Header />
      <main>
        <Description />
        <Thumbnail />
        <Project />
      </main>
      <Contact />
    </Transition>
  );
}
