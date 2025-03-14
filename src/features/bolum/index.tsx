import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle, Users, GraduationCap, MoreHorizontal } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Main } from '@/components/layout/main'
import { Header } from '@/components/layout/header'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { TopNav } from '@/components/layout/top-nav'

const bolumler = [
    {
        id: 1,
        ad: "Bankacılık ve Sigortacılık",
        ogrenciSayisi: 46,
        ogretimGorevlisi: "Öğr. Gör. Nurbanu HUYUGÜZEL"
    },
    {
        id: 2,
        ad: "Bilgisayar Programcılığı",
        ogrenciSayisi: 58,
        ogretimGorevlisi: "Öğr. Gör. Arif GÜNER"
    },
    {
        id: 3,
        ad: "Endüstri Ürünleri Tasarımı",
        ogrenciSayisi: 26,
        ogretimGorevlisi: "Öğr. Gör. Serpil ÖZDEMİR"
    },
    {
        id: 4,
        ad: "İnternet ve Ağ Teknolojileri",
        ogrenciSayisi: 49,
        ogretimGorevlisi: "Öğr. Gör. Gülten KARTAL"
    },
    {
        id: 5,
        ad: "Tıbbi Tanıtım ve Pazarlama",
        ogrenciSayisi: 34,
        ogretimGorevlisi: "Öğr. Gör. İrem YAZICI"
    },
    {
        id: 6,
        ad: "Web Tasarımı ve Kodlama",
        ogrenciSayisi: 47,
        ogretimGorevlisi: "Öğr. Gör. Zafer SERİN"
    }
]

const topNav = [
    {
        title: "Ana Sayfa",
        href: "/",
        isActive: false,
    },
    {
        title: "Bölümler",
        href: "/bolumler",
        isActive: true,
    },
    {
        title: "Eğitmenler",
        href: "/egitmenler",
        isActive: false,
    },
]

export default function BolumlerPage() {
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

            <Main className="peer-[.header-fixed]/header:mt-16 px-4 py-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Bölümler</h1>
                        <p className="text-muted-foreground">Yüksekokulumuzda bulunan tüm bölümlerin listesi</p>
                    </div>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Yeni Bölüm Ekle
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bolumler.map((bolum) => (
                        <Card key={bolum.id} className="relative">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <CardTitle className="text-xl">{bolum.ad}</CardTitle>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>Düzenle</DropdownMenuItem>
                                            <DropdownMenuItem className="text-red-600">Sil</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                <CardDescription>{bolum.ogretimGorevlisi}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center space-x-2">
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-muted-foreground">
                                        Kayıt Yapan {bolum.ogrenciSayisi} Öğrenci
                                    </span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">
                                    <GraduationCap className="mr-2 h-4 w-4" />
                                    Detayları Görüntüle
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Main>
        </>
    )
}