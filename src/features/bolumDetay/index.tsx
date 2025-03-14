import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Main } from '@/components/layout/main';
import { TopNav } from '@/components/layout/top-nav';
import { ProfileDropdown } from '@/components/profile-dropdown';
import { Search } from '@/components/search';
import { ThemeSwitch } from '@/components/theme-switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
const topNav = [
  {
    title: "Ana Sayfa",
    href: "/",
    isActive: false,
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

export default function BolumDetayPage() {
  const dersler = [
    { name: "Ağ Teknolojileri", id: 1 },
    { name: "Bulut Bilişim Sistemleri", id: 2 },
    { name: "İleri Web Programlama", id: 3 },
    { name: "İnternet Destekli Satış ve Pazarlama", id: 4 },
    { name: "Kullanıcı Arabirimi Tasarımı", id: 5 },
    { name: "Masaüstü Uygulama Geliştirme", id: 6 },
    { name: "Matematik I", id: 7 },
    { name: "Matematik II", id: 8 },
    { name: "Programlamanın Temelleri", id: 9 },
    { name: "Veri Tabanı ve Yönetim Sistemleri", id: 10 },
    { name: "Web Tasarımının Temelleri", id: 11 },
  ];

  return (
    <>
      <Header>
        <TopNav links={topNav} />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <Tabs defaultValue="dersler">
          <TabsList>
            <TabsTrigger value="dersler" className="font-semibold text-gray-700">Dersler</TabsTrigger>
            <TabsTrigger value="egitimGorevlisi" className="font-semibold text-gray-700">Öğretim Görevlisi</TabsTrigger>
          </TabsList>

          {/* Dersler Tabı */}
          <TabsContent value="dersler">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {dersler.map((ders) => (
                <Card
                  key={ders.id}
                  className="transition-transform transform hover:scale-105 cursor-pointer"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{ders.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-white-600">
                      Ders hakkında kısa bir açıklama burada yer alabilir.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex space-x-4">
                    {/* İlk tıklanabilir alan */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => alert(`Ders Notları: ${ders.name}`)}
                    >
                      Ders Notları
                    </Button>

                    {/* İkinci tıklanabilir alan */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => alert(`Sınavlar: ${ders.name}`)}
                    >
                      Sınavlar
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Öğretim Görevlisi Tabı */}
          <TabsContent value="egitimGorevlisi">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Öğretim Görevlisi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <p><strong>Adı Soyadı:</strong>Öğr. Gör. Zafer Serin</p>
                  <p><strong>Mezun Olduğu Bölüm:</strong> Bilgisayar Mühendisliği</p>
                  <p><strong>Email:</strong> zafer-serin@bilecik.edu.tr</p>
                  <p><strong>Telefon:</strong> 0555 123 45 67</p>
                </CardDescription>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Main>
    </>
  );
}
