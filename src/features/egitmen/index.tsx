import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, MoreHorizontal, Mail, BookOpen, PlusCircle } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Header } from '@/components/layout/header'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { TopNav } from '@/components/layout/top-nav'
import { Main } from "@/components/layout/main"

const ogretmenler = [
    {
        id: 1,
        ad: "Abdülmelik Derinkök",
        unvan: "Öğretim Üyesi",
        bolum: "Bilgisayar Programcılığı, Web Tasarımı ve Kodlama, İnternet ve Ağ Teknolojileri",
        dersler: 6,
        email: "abdulmelik.derinkok@bilecik.edu.tr",
        avatar: "/images/egitmenler/profileImage_100009.jpg",
        ayrinti: "https://avesis.bilecik.edu.tr/abdulmelik.derinkok/",
    },
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
        isActive: false,
    },
    {
        title: "Eğitmenler",
        href: "/egitmenler",
        isActive: true,
    },
]

export default function EgitmenlerPage() {
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
                        <h1 className="text-2xl font-bold tracking-tight">Eğitmenler</h1>
                        <p className="text-muted-foreground">Yüksekokulumuzda bulunan tüm eğitmenlerin listesi</p>
                    </div>
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Yeni Eğitmen Ekle
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ogretmenler.map((ogretmen) => (
                        <Card key={ogretmen.id} className="relative hover:shadow-lg transition-shadow cursor-pointer">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center space-x-4">
                                        <Avatar className="h-12 w-12">
                                            <AvatarImage src={ogretmen.avatar} alt={ogretmen.ad} />
                                            <AvatarFallback>{ogretmen.ad.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <CardTitle className="text-xl">{ogretmen.ad}</CardTitle>
                                            <CardDescription>{ogretmen.unvan}</CardDescription>
                                        </div>
                                    </div>
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
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <Users className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-muted-foreground">{ogretmen.bolum}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-muted-foreground">{ogretmen.dersler} Ders</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Mail className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-muted-foreground">{ogretmen.email}</span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <a
                                    href={ogretmen.ayrinti}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full"
                                >
                                    <Button variant="outline" className="w-full">
                                        Profili Görüntüle
                                    </Button>
                                </a>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Main>
        </>
    )
}