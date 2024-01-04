import HomePage from '@/components/Homepage';
import Invitation from '@/components/Invitation';
import LoveStory from '@/components/LoveStory';
import ProfilMan from '@/components/ProfilMan';
import ProfilWoman from '@/components/ProfilWoman';
import Quran from '@/components/Quran';

export default function Home() {
 return (
  <div>
   <HomePage />
   <ProfilMan />
   <ProfilWoman />
   <Quran />
   <Invitation />
   <LoveStory />
  </div>
 );
}
