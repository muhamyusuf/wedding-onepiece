import Image from 'next/image';
import localFont from 'next/font/local';
import MaxWidthWrapper from './MaxWidthWrapper';

const palatino = localFont({
 src: './font/palatino/Palatino.ttf',
});

export default function LoveStory() {
 return (
  <main className="bg-[url('/assets/background-lovestory.png')] bg-cover bg-no-repeat bg-right border-y-2">
   <MaxWidthWrapper className="flex flex-col md:flex-row relative min-h-screen items-center justify-around gap-10 py-10 px-2 md:py-10 md:px-10 lg:px-20 lg:py-20">
    <div className="text-black flex-1">
     <h2 className="text-[32px] font-bold font-serif text-center">
      Love Story
     </h2>

     <div
      className={`flex flex-col gap-10 backdrop-blur-md p-5 rounded-lg border font-serif`}
     >
      <div>
       <h3 className="font-bold text-[24px]">&#x2022; First Meet</h3>
       <p className="ml-[17px]">
        Saat menempuh pendidikan dengan jurusan dan fakultas yang sama di
        universitas yang sama juga.
       </p>
      </div>
      <div>
       <h3 className="font-bold text-[24px]">&#x2022; Engagement</h3>
       <p className="ml-[17px]">
        Alhamdulillah memutuskan untuk ke jenjang yang lebih serius. Atas ridho
        Allah dan orangtua.
       </p>
      </div>
      <div>
       <h3 className="font-bold text-[24px]">&#x2022; Married</h3>
       <p className="ml-[17px]">
        InsyaAllah akan dilaksanakan pernikahan, setengah ibadah telah
        dilakukan. Sesuai Surat An-Nur ayat 32 : &quot;Dan kawinkanlah
        orang-orang yang sendirian di antara kamu, dan orang-orang yang layak
        (berkawin) dari hamba-hamba sahayamu yang lelaki dan hamba-hamba
        sahayamu yang perempuan. Jika mereka miskin Allah akan memampukan mereka
        dengan karunia-Nya. Dan Allah Maha luas (pemberian-Nya) lagi Maha
        Mengetahui.&quot;
       </p>
      </div>
     </div>
    </div>

    <div className="flex flex-col flex-1 items-center lg:gap-[218px]">
     <div>
      <Image
       className="object-cover object-center"
       src="/assets/rizky-dinda-textwedding.png"
       alt="rizky-dinda-textwedding"
       width={2212}
       height={620}
       quality={100}
      />
     </div>

     <div className="text-black h-full backdrop-blur-md p-5 rounded-lg border font-serif">
      What counts in making a happy marriage is not so much how compatible you
      are, but how you deal with incompatibility. A great marriage is not when
      the perfect couple comes together. It is when an imperfect couple learns
      to enjoy their differences.
     </div>
    </div>
   </MaxWidthWrapper>
  </main>
 );
}
