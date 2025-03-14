import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { TopNav } from '@/components/layout/top-nav'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { MapPin } from "lucide-react"

const announcements = [
  { id: 1, title: "Beta Duyuru", description: "Bu web sitesi şuanda geliştirme aşamasındadır. <a> Şikayet ve öneriler için wexportfolyo.vercel.app <a>", date: "2025-03-14" },
  { id: 2, title: "İŞKUR GENÇLİK PROGRAMINI KAZANAN ÖĞRENCİLERİN DİKKATİNE", description: "İŞKUR Gençlik Programı kapsamında, Meslek Yüksekokulumuzda 10 Mart 2025 tarihi itibarıyla çalışmaya başlayan öğrencilerimiz için 11 Mart 2025 Salı günü saat 11:30’da Konferans Salonu’nda bir toplantı düzenlenecektir. Öğrencilerimizin, Bahar Yarıyılı ders programlarının çıktısını alarak toplantıya katılmaları önemle rica olunur.", date: "2025-03-10" },
  { id: 3, title: "İŞKUR Gençlik Programı Yedek Olarak Kazananlar", description: "Üniversitemiz ile Bilecik İŞKUR İl Müdürlüğü arasında imzalanan protokol çerçevesinde yedek olarak başvuru hakkı kazanan öğrencilerimizin 10.03.2025 tarihi mesai bitimine kadar birimimiz öğrenci işlerine şahsen başvuru yapması gerekmektedir. Başvuru için gerekli evraklar aşağıda yer almaktadır. ", date: "2025-03-06" },
  { id: 4, title: "İŞKUR Gençlik Programı Kapsamında Başvuru Şartlarını Taşımadığı Tespit Edilen Öğrenciler Listesi", description: "İŞKUR Gençlik Programı kapsamında başvuru şartlarını taşımadığı tespit edilen öğrenciler listesi aşağıda yer almaktadır.", date: "2025-03-06" },
];

const bolumler = [
  { bolumId: 1, bolumAd: "Bankacılık ve Sigortacılık" },
  { bolumId: 2, bolumAd: "Bilgisayar Programcılığı" },
  { bolumId: 3, bolumAd: "Endüstri Ürünleri Tasarımı" },
  { bolumId: 4, bolumAd: "İnternet ve Ağ Teknolojileri" },
  { bolumId: 5, bolumAd: "Tıbbi Tanıtım ve Pazarlama" },
  { bolumId: 6, bolumAd: "Web Tasarımı ve Kodlama" },
];


const sokakLezzetleri = [
  {
    id: 1,
    name: 'Çarşı Kebap',
    image: '/images/sokakLezzetleri/carsiKebap/carsiKebap.jpg',
    location: 'Dereboğaz, Bahattin Şeker Cd., 11800 Pazaryeri/Bilecik',
    mapUrl: 'https://www.google.com/maps/place/%C3%87ar%C5%9F%C4%B1+kebap/@39.9954757,29.9041455,18z/data=!4m15!1m8!3m7!1s0x14cbed3ca75c6945:0x96e6e9acb17968a!2zw4dhcsWfxLEga2ViYXA!8m2!3d39.9954278!4d29.9041483!10e5!16s%2Fg%2F11sc0k00_8!3m5!1s0x14cbed3ca75c6945:0x96e6e9acb17968a!8m2!3d39.9954278!4d29.9041483!16s%2Fg%2F11sc0k00_8?entry=ttu&g_ep=EgoyMDI1MDMxMS4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: 2,
    name: 'Köfteci Metin Pide',
    image: '/images/sokakLezzetleri/kofteciMetinPide/kofteciMetinPide.jpg',
    location: 'Doğanlar, Bursa Cd. No:1 D:14, 11800 Pazaryeri/Bilecik',
    mapUrl: 'https://www.google.com/maps/place/K%C3%B6fteci+Metin+P%C4%B0DE+-+LAHMACUN+-+IZGARA/@39.995758,29.9024283,3a,75y/data=!3m8!1e2!3m6!1sAF1QipMk51mkMdJrGMUhgslxrQMA4qOVAi2Ehc8HZjqI!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMk51mkMdJrGMUhgslxrQMA4qOVAi2Ehc8HZjqI%3Dw203-h135-k-no!7i600!8i400!4m12!1m3!2m2!1syemek!6e5!3m7!1s0x14cbed0dde4b071f:0x8fd07a885cc7e6f4!8m2!3d39.9957015!4d29.9024047!10e5!15sCgV5ZW1la1oHIgV5ZW1la5IBCnJlc3RhdXJhbnTgAQA!16s%2Fg%2F11hzjgcll7?entry=ttu&g_ep=EgoyMDI1MDMxMS4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: 3,
    name: 'Şehir Lokantası',
    image: '/images/sokakLezzetleri/sehirLokantasi/sehirLokantasi.jpg',
    location: 'Çarşı, 11800 Pazaryeri/Bilecik',
    mapUrl: 'https://www.google.com/maps/place/%C5%9Eehir+Lokantas%C4%B1/@39.9964984,29.9031357,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIDb_LHBuwE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAB5caB8I6n3Wv3yr9m4kh0KR4ui_TEjYKIQexU-y7_XIcioUWXYjjiOSrrQz88OxZdj1i8tbOhfYlsP7rySmYScZ9ImjG9W2vXLczdLfPN08g48je8dwifgVh5PsEMXKM2jnYll9xwPoLA%3Dw203-h270-k-no!7i3024!8i4032!4m12!1m3!2m2!1syemek!6e5!3m7!1s0x14cbec8c9560d7b1:0x3d1ebd323ecfc69c!8m2!3d39.9964771!4d29.9031299!10e5!15sCgV5ZW1la1oHIgV5ZW1la5IBCnJlc3RhdXJhbnTgAQA!16s%2Fg%2F113dwrc24?entry=ttu&g_ep=EgoyMDI1MDMxMS4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    id: 4,
    name: 'Elibol Lokantası',
    image: '/images/sokakLezzetleri/elibolLokantasi/elibolLokantasi.jpg',
    location: 'Yüzbaşı, 11800 Pazaryeri/Bilecik',
    mapUrl: 'https://www.google.com/maps/place/Elibol+Lokantas%C4%B1/@39.9957988,29.9024894,19z/data=!3m1!4b1!4m6!3m5!1s0x14cbec8c98ee51d7:0x7a98054b64edffe4!8m2!3d39.9957978!4d29.9031331!16s%2Fg%2F113gwnt4k?entry=ttu&g_ep=EgoyMDI1MDMxMS4wIKXMDSoASAFQAw%3D%3D',
  },
];

const dogaMangal = [
  {
  id: 1,
  name: 'Küçük Elmalı Tabiat Parkı',
  image: '/images/dogaMangal/kucukElmali/kucukElmali.webp',
  location: '11800 Küçükelmalı/Pazaryeri/Bilecik',
  mapUrl: 'https://www.google.com/maps/place/K%C3%BC%C3%A7%C3%BCkelmal%C4%B1+Tabiat+park%C4%B1/@40.0162603,29.7893138,16.08z/data=!4m6!3m5!1s0x14cbea796fac0c3f:0x92c1a9a1e16ad6e1!8m2!3d40.0152746!4d29.7938274!16s%2Fg%2F11c2k7srjx?hl=tr&entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D',
  },
];

export default function Dashboard() {
  return (
    <>
      <Header>
        <TopNav links={topNav} />
        <div className='ml-auto flex items-center space-x-4'>
          <Search />
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight'>Anasayfa</h1>
          <div className='flex items-center space-x-2'>
            <a target="_blank"
              rel="noopener noreferrer"
              href="https://bilecik.edu.tr/dosya/3816_9963_Akademik%20Takvim%202024-2025.pdf"
              className="w-full">
              <Button>Akademik Takvimi İndir</Button>
            </a>
          </div>
        </div>
        <Tabs orientation='vertical' defaultValue='genel' className='space-y-4'>
          <div className='w-full overflow-x-auto pb-2'>
            <TabsList>
              <TabsTrigger value='genel'>Genel</TabsTrigger>
              <TabsTrigger value='sokakLezzetleri'>Sokak Lezzetleri</TabsTrigger>
              <TabsTrigger value='dogaMangal'>Doğa & Mangal</TabsTrigger>
              <TabsTrigger value='ozelOtobus'>Özel Otobüsler</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value='genel' className='space-y-4'>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>Toplam Sınav Sayısı</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>36</div>
                  <p className='text-xs text-muted-foreground'>Önceki dönem ve senenin soruları</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>Dersler</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>49</div>
                  <p className='text-xs text-muted-foreground'>PDF'ler ve ders notları</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>Eğitmenler</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>32</div>
                  <p className='text-xs text-muted-foreground'>Yol gösterici liderler</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>Spotify</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>15</div>
                  <p className='text-xs text-muted-foreground'>Spotify albümünüzü paylaşın</p>
                </CardContent>
              </Card>
            </div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
              <Card className="col-span-1 lg:col-span-4 border shadow-md rounded-lg">
                <CardHeader>
                  <CardTitle>Duyurular</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Başlık</TableHead>
                        <TableHead>Açıklama</TableHead>
                        <TableHead>Tarih</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {announcements.map((announcement) => (
                        <TableRow key={announcement.id}>
                          <TableCell>{announcement.title}</TableCell>
                          <TableCell>{announcement.description}</TableCell>
                          <TableCell>{announcement.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card className='col-span-1 lg:col-span-3'>
                <CardHeader>
                  <CardTitle>MYO Bölümler</CardTitle>
                  <CardDescription>
                    Bölümü bulunmayan öğrenci iletişime geçsin
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Bölümler</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bolumler.map((bolumler) => (
                        <TableRow key={bolumler.bolumId}>
                          <TableCell>{bolumler.bolumAd}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value='sokakLezzetleri' className="space-y-6">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {sokakLezzetleri.map((lezzet) => (
                <Card
                  key={lezzet.id}
                  className="shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden"
                >
                  <img
                    src={lezzet.image}
                    alt={lezzet.name}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{lezzet.name}</h3>
                    <p className="mb-4">{lezzet.location}</p>
                    <a
                      href={lezzet.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 w-full text-blue-600 font-medium transition-colors duration-300"
                    >
                      <Button variant="outline" className="w-full flex items-center justify-center space-x-2 text-primary">
                        <span>Konuma Git</span>
                        <MapPin className="h-4 w-4 text-primary" />
                      </Button>
                  </a>
                </div>
                </Card>
              ))}
          </div>
        </TabsContent>
          <TabsContent value='dogaMangal' className="space-y-6">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {dogaMangal.map((geziDogaMangal) => (
                <Card
                  key={geziDogaMangal.id}
                  className="shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden"
                >
                  <img
                    src={geziDogaMangal.image}
                    alt={geziDogaMangal.name}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{geziDogaMangal.name}</h3>
                    <p className="mb-4">{geziDogaMangal.location}</p>
                    <a
                      href={geziDogaMangal.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 w-full text-blue-600 font-medium transition-colors duration-300"
                    >
                      <Button variant="outline" className="w-full flex items-center justify-center space-x-2 text-primary">
                        <span>Konuma Git</span>
                        <MapPin className="h-4 w-4 text-primary" />
                      </Button>
                  </a>
                </div>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value='ozelOtobus' className="space-y-4">
          <div className="space-y-4">
            <h2>Pazaryeri - Bilecik Merkez Otobüs Saatleri</h2>
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Pazaryeri'nden Hareket</th>
                  <th className="px-4 py-2">Bilecik Merkez'den Hareket</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">07:00</td>
                  <td className="border px-4 py-2">08:00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">08:00</td>
                  <td className="border px-4 py-2">09:30</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">10:00</td>
                  <td className="border px-4 py-2">12:00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">12:00</td>
                  <td className="border px-4 py-2">14:00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">14:00</td>
                  <td className="border px-4 py-2">16:00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">16:00</td>
                  <td className="border px-4 py-2">18:15</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">17:30</td>
                  <td className="border px-4 py-2">19:30</td>
                </tr>
              </tbody>
            </table>
            <hr />
            <h2>Pazaryeri - Bozüyük Otobüs Saatleri</h2>
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Pazaryeri'nden Hareket</th>
                  <th className="px-4 py-2">Bozüyük'ten Hareket</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">06:50</td>
                  <td className="border px-4 py-2">07:45</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">07:30</td>
                  <td className="border px-4 py-2">08:45</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">08:00</td>
                  <td className="border px-4 py-2">10:00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">09:00</td>
                  <td className="border px-4 py-2">11:00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">10:00</td>
                  <td className="border px-4 py-2">12:00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">11:00</td>
                  <td className="border px-4 py-2">13:00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">12:00</td>
                  <td className="border px-4 py-2">14:00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">13:00</td>
                  <td className="border px-4 py-2">15:00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">14:00</td>
                  <td className="border px-4 py-2">16:00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">15:00</td>
                  <td className="border px-4 py-2">17:00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">16:00</td>
                  <td className="border px-4 py-2">18:00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">17:00</td>
                  <td className="border px-4 py-2">19:00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">18:00</td>
                  <td className="border px-4 py-2">20:00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">19:00</td>
                  <td className="border px-4 py-2">21:00</td>
                </tr>
              </tbody>
            </table>
            <p className='font-bold'>NOT: Bozüyük otogardan araçlar 10 dakika önce hareket etmektedir.</p>
          </div>
        </TabsContent>
      </Tabs>
    </Main >
    </>
  );
}

const topNav = [
  {
    title: "Ana Sayfa",
    href: "/",
    isActive: true,
  },
  {
    title: "Bölümler",
    href: "/bolumler",
    isActive: false,
  },
  {
    title: "Eğitmenler",
    href: "/egitmenler",
    isActive: false,
  },
];
