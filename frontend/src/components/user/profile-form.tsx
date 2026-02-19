import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface ProfileFormProps {
  pseudo: string;
  quizStarted: number;
  quizCompleted: number;
  totalScore: number;
  avatarUrl?: string;
}

export default function ProfileForm({
  pseudo,
  quizStarted,
  quizCompleted,
  totalScore,
  avatarUrl,
}: ProfileFormProps) {
  return (
    <div className="flex w-full items-start justify-center px-6 pt-2 pb-8 md:px-10">
      <div className="w-full max-w-md space-y-4">
        {/* Avatar Section */}
        <div className="flex justify-center">
          <div className="relative">
            <Avatar className="h-[200px] w-[200px] border-4 border-[#00bb0d] bg-black">
              <AvatarImage src={avatarUrl} alt={`Avatar de ${pseudo}`} />
              <AvatarFallback className="bg-black text-white text-xl font-semibold">
                Avatar
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Stats Section */}
        <div className="space-y-3">
          <Card className="bg-black border-2 border-[#00bb0d] rounded-none">
            <CardContent className="p-4 text-center">
              <span className="text-[#565656] text-base font-medium">Pseudo</span>
              <p className="text-white text-lg font-semibold mt-1">{pseudo}</p>
            </CardContent>
          </Card>

          <Card className="bg-black border-2 border-[#00bb0d] rounded-none">
            <CardContent className="p-4 text-center">
              <span className="text-[#565656] text-base font-medium">{quizStarted} quiz lancés</span>
            </CardContent>
          </Card>

          <Card className="bg-black border-2 border-[#00bb0d] rounded-none">
            <CardContent className="p-4 text-center">
              <span className="text-[#565656] text-base font-medium">{quizCompleted} quiz terminés</span>
            </CardContent>
          </Card>

          <Card className="bg-black border-2 border-[#00bb0d] rounded-none">
            <CardContent className="p-4 text-center">
              <span className="text-[#565656] text-base font-medium">Score global : {totalScore}</span>
            </CardContent>
          </Card>
        </div>

        {/* Modify profile button */}
        <div className="flex justify-center pt-2">
          <Link href="/profile-modify-page" className="w-3/4">
            <Button
              type="button"
              className="w-full bg-[#00bb0d] text-black border-4 border-[#00bb0d] hover:bg-transparent hover:text-[#00bb0d] rounded-full h-12 text-base font-semibold"
            >
              Modifier mon profil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
