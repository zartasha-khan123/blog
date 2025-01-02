
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Link } from "lucide-react"
import Image from "next/image"

export default function ProfileCard() {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-black text-white pt-10 mt-20">
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-medium text-orange-500">Nic</h1>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Profile Image Section */}
          <div className="space-y-2">
            <div className="relative w-48 h-48 mx-auto">
              <Image
                src="/blogmy.avif"
                alt="Profile image"
                width={192}
                height={192}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="text-center">
              <Link href="/blogcards" className="text-blue-600 hover:underline text-sm">
                View Full Size and Details
              </Link>
            </div>
          </div>

          {/* My Blogs Section */}
          <div className="space-y-2">
            <h2 className="text-xl font-medium">My blogs</h2>
            <Link href="#" className="text-blue-600 hover:underline block">
              bakingsheet
            </Link>
          </div>

          {/* About Me Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-medium">About me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-medium text-gray-600">Gender</div>
                  <div>Female</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-medium text-gray-600">Occupation</div>
                  <div>Writer, Editor</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-medium text-gray-600">Location</div>
                  <div>Los Angeles, California, United States</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-medium text-gray-600">Interests</div>
                  <div>Baking, cooking, writing, finding a good cup of coffee</div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Stats */}
          <div className="space-y-2 text-sm text-gray-600">
            <p>On Blogger since November 2004</p>
            <p>Profile views - 68670</p>
          </div>

          {/* Contact Links */}
          <div className="space-y-2">
            <h3 className="font-medium">Contact me</h3>
            <Link href="#" className="text-blue-600 hover:underline block">
              My Web Page
            </Link>
            <Link href="#" className="text-blue-600 hover:underline block">
              Report Abuse
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

