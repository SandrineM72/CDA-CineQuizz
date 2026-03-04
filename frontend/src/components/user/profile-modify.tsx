import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Pencil, ChevronDown, ChevronUp, Upload } from "lucide-react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { useProfileQuery, useUpdateUserMutation } from "@/graphql/generated/schema";
import UserStatsCard from "@/components/user/UserStatsCard";

type OpenSection = "avatar" | "pseudo" | "email" | "password" | null;

export default function ProfileModify() {
  // const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pasteZoneRef = useRef<HTMLButtonElement>(null);

  // Récupérer les infos du profil
  const { data, loading, refetch } = useProfileQuery({
    fetchPolicy: "cache-and-network"
  });

  const [updateUser] = useUpdateUserMutation();
  const user = data?.me;

  // Accordion exclusif : une seule section ouverte à la fois
  const [openSection, setOpenSection] = useState<OpenSection>(null);

  const toggleSection = (section: OpenSection) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  // Avatar form state
  const [newAvatarUrl, setNewAvatarUrl] = useState("");
  const [avatarLoading, setAvatarLoading] = useState(false);
  const [avatarError, setAvatarError] = useState<string | null>(null);

  // Pseudo form state
  const [newPseudo, setNewPseudo] = useState("");
  const [pseudoLoading, setPseudoLoading] = useState(false);
  const [pseudoError, setPseudoError] = useState<string | null>(null);

  // Email form state
  const [newEmail, setNewEmail] = useState("");
  const [emailPassword, setEmailPassword] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [showEmailPassword, setShowEmailPassword] = useState(false);

  // Password form state
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);

  // Convertir l'image en base64
  const convertBlobToBase64 = useCallback((blob: Blob) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewAvatarUrl(reader.result as string);
    };
    reader.readAsDataURL(blob);
  }, []);

  // Gestion du copier-coller d'image au niveau du document quand la section avatar est ouverte
  useEffect(() => {
    // Activer le paste uniquement quand la section avatar est ouverte
    if (openSection !== "avatar") return;

    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          e.preventDefault(); // Empêcher le comportement par défaut
          const blob = items[i].getAsFile();
          if (blob) {
            convertBlobToBase64(blob);
          }
        }
      }
    };

    // Écouter au niveau du document pour capturer Ctrl+V partout
    document.addEventListener("paste", handlePaste);
    return () => document.removeEventListener("paste", handlePaste);
  }, [openSection, convertBlobToBase64]);

  // Gestion de l'upload via input file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      convertBlobToBase64(file);
    }
  };

  // Modification avatar — pas besoin de mot de passe
  const handleAvatarSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAvatarError(null);
    setAvatarLoading(true);

    try {
      if (!newAvatarUrl.trim()) {
        setAvatarError("Veuillez ajouter une image");
        return;
      }

      await updateUser({
        variables: {
          data: {
            avatar: newAvatarUrl,
          }
        }
      });

      await refetch();

      setNewAvatarUrl("");
      setOpenSection(null);
      alert("Avatar modifié avec succès !");
    } catch (err: any) {
      setAvatarError(err.message || "Erreur lors de la mise à jour de l'avatar");
    } finally {
      setAvatarLoading(false);
    }
  };

  // Modification pseudo - pas besoin de mot de passe
  const handlePseudoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPseudoError(null);
    setPseudoLoading(true);

    try {
      if (!newPseudo.trim()) {
        setPseudoError("Veuillez saisir un nouveau pseudo");
        return;
      }

      await updateUser({
        variables: {
          data: {
            pseudo: newPseudo,
          }
        }
      });

      await refetch();

      setNewPseudo("");
      setOpenSection(null);
      alert("Pseudo modifié avec succès !");
    } catch (err: any) {
      setPseudoError(err.message || "Erreur lors de la mise à jour du pseudo");
    } finally {
      setPseudoLoading(false);
    }
  };

  // Modification email
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError(null);
    setEmailLoading(true);

    try {
      if (!newEmail.trim()) {
        setEmailError("Veuillez saisir un nouvel email");
        return;
      }
      if (!emailPassword) {
        setEmailError("Mot de passe requis");
        return;
      }

      await updateUser({
        variables: {
          data: {
            email: newEmail,
            password: emailPassword,
          }
        }
      });

      await refetch();

      setNewEmail("");
      setEmailPassword("");
      setOpenSection(null);
      alert("Email modifié avec succès !");
    } catch (err: any) {
      setEmailError(err.message || "Erreur lors de la mise à jour de l'email");
    } finally {
      setEmailLoading(false);
    }
  };

  // Modification password
  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError(null);
    setPasswordLoading(true);

    try {
      if (!newPassword) {
        setPasswordError("Veuillez saisir un nouveau mot de passe");
        return;
      }
      if (newPassword !== confirmPassword) {
        setPasswordError("Les mots de passe ne correspondent pas");
        return;
      }
      if (!currentPassword) {
        setPasswordError("Mot de passe actuel requis");
        return;
      }

      await updateUser({
        variables: {
          data: {
            newPassword,
            password: currentPassword,
          }
        }
      });

      await refetch();

      setNewPassword("");
      setConfirmPassword("");
      setCurrentPassword("");
      setOpenSection(null);
      alert("Mot de passe modifié avec succès !");
    } catch (err: any) {
      setPasswordError(err.message || "Erreur lors de la mise à jour du mot de passe");
    } finally {
      setPasswordLoading(false);
    }
  };

  if (loading || !user) {
    return (
      <div className="flex w-full items-start justify-center px-6 pt-2 pb-8 md:px-10">
        <div className="w-full max-w-sm">
          <p className="text-center text-white">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full items-start justify-center px-6 pt-2 pb-8 md:px-10">
      <div className="w-full max-w-sm space-y-4">

        <Card className="bg-black border-4 border-[#00bb0d] rounded-none">
          <CardContent className="p-4">
            <div className="flex flex-col items-center space-y-2">
              <Avatar className="w-24 h-24 border-4 border-[#00bb0d]">
                <AvatarImage src={user.avatar || undefined} alt={user.pseudo} />
                <AvatarFallback className="bg-[#565656] text-white text-2xl">
                  {user.pseudo.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h2 className="text-white text-xl font-bold">{user.pseudo}</h2>
              </div>
            </div>
          </CardContent>
        </Card>

        <UserStatsCard />

        <Card className="bg-black border-2 border-[#00bb0d] rounded-none">
          <CardHeader
            className="cursor-pointer hover:bg-[#00bb0d] hover:bg-opacity-10 transition-colors px-4"
            onClick={() => toggleSection("avatar")}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Pencil className="w-5 h-5 text-[#00bb0d]" />
                <h3 className="text-white text-lg font-semibold">Modifier l'avatar</h3>
              </div>
              {openSection === "avatar" ? (
                <ChevronUp className="w-5 h-5 text-[#00bb0d]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#00bb0d]" />
              )}
            </div>
          </CardHeader>

          {openSection === "avatar" && (
            <CardContent className="px-4 pb-4">
              <form onSubmit={handleAvatarSubmit}>
                <FieldGroup className="gap-4">
                  <button
                    type="button"
                    ref={pasteZoneRef}
                    className="w-full p-8 border-2 border-dashed border-[#00bb0d] bg-[#565656] rounded-lg text-center cursor-pointer hover:bg-[#3a3a3a] transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                    aria-label="Sélectionner ou coller une image"
                  >
                    {newAvatarUrl ? (
                      <Image
                        src={newAvatarUrl}
                        alt="Preview"
                        width={96}
                        height={96}
                        className="mx-auto rounded-full object-cover"
                        unoptimized 
                      />
                    ) : (
                      <div className="text-white">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-[#00bb0d]" />
                        <p className="text-sm">Cliquer pour uploader une image</p>
                        <p className="text-xs text-[#00bb0d]">Ctrl+V pour coller une image<br />depuis le presse-papier</p>
                      </div>
                    )}
                  </button>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {avatarError && (
                    <p className="text-sm text-[#c00f00] text-center">{avatarError}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={avatarLoading}
                    className="w-full bg-[#00bb0d] text-black border-4 border-[#00bb0d] hover:bg-transparent hover:text-[#00bb0d] rounded-full h-12 text-base font-semibold"
                  >
                    {avatarLoading ? "Validation..." : "Valider le nouvel avatar"}
                  </Button>
                </FieldGroup>
              </form>
            </CardContent>
          )}
        </Card>

        <Card className="bg-black border-2 border-[#00bb0d] rounded-none">
          <CardHeader
            className="cursor-pointer hover:bg-[#00bb0d] hover:bg-opacity-10 transition-colors px-4"
            onClick={() => toggleSection("pseudo")}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Pencil className="w-5 h-5 text-[#00bb0d]" />
                <h3 className="text-white text-lg font-semibold">Modifier le pseudo</h3>
              </div>
              {openSection === "pseudo" ? (
                <ChevronUp className="w-5 h-5 text-[#00bb0d]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#00bb0d]" />
              )}
            </div>
          </CardHeader>

          {openSection === "pseudo" && (
            <CardContent className="px-4 pb-4">
              <p className="text-[#565656] text-sm mb-4">Pseudo actuel : <span className="text-white">{user.pseudo}</span></p>
              <form onSubmit={handlePseudoSubmit}>
                <FieldGroup className="gap-4">
                  <Field>
                    <FieldLabel htmlFor="newPseudo" className="text-white text-base mb-2">
                      Nouveau pseudo
                    </FieldLabel>
                    <Input
                      id="newPseudo"
                      type="text"
                      placeholder="Nouveau pseudo"
                      value={newPseudo}
                      onChange={(e) => setNewPseudo(e.target.value)}
                      className="bg-[#565656] border-[#00bb0d] border-2 text-white placeholder:text-[#a5a5a5] rounded-none h-12"
                    />
                  </Field>

                  {pseudoError && (
                    <p className="text-sm text-[#c00f00] text-center">{pseudoError}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={pseudoLoading}
                    className="w-full bg-[#00bb0d] text-black border-4 border-[#00bb0d] hover:bg-transparent hover:text-[#00bb0d] rounded-full h-12 text-base font-semibold"
                  >
                    {pseudoLoading ? "Validation..." : "Valider le nouveau pseudo"}
                  </Button>
                </FieldGroup>
              </form>
            </CardContent>
          )}
        </Card>

        <Card className="bg-black border-2 border-[#00bb0d] rounded-none">
          <CardHeader
            className="cursor-pointer hover:bg-[#00bb0d] hover:bg-opacity-10 transition-colors px-4"
            onClick={() => toggleSection("email")}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Pencil className="w-5 h-5 text-[#00bb0d]" />
                <h3 className="text-white text-lg font-semibold">Modifier l'email</h3>
              </div>
              {openSection === "email" ? (
                <ChevronUp className="w-5 h-5 text-[#00bb0d]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#00bb0d]" />
              )}
            </div>
          </CardHeader>

          {openSection === "email" && (
            <CardContent className="px-4 pb-4">
              <p className="text-[#565656] text-sm mb-4">
                Email actuel : <span className="text-white">{user?.email}</span>
              </p>
              <form onSubmit={handleEmailSubmit}>
                <FieldGroup className="gap-4">
                  <Field>
                    <FieldLabel htmlFor="newEmail" className="text-white text-base mb-2">
                      Nouvel email
                    </FieldLabel>
                    <Input
                      id="newEmail"
                      type="email"
                      placeholder="nouveau@email.com"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      className="bg-[#565656] border-[#00bb0d] border-2 text-white placeholder:text-[#a5a5a5] rounded-none h-12"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="emailPassword" className="text-white text-base mb-2">
                      Saisir votre mot de passe pour valider
                    </FieldLabel>
                    <div className="relative">
                      <Input
                        id="emailPassword"
                        type={showEmailPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={emailPassword}
                        onChange={(e) => setEmailPassword(e.target.value)}
                        className="bg-[#565656] border-[#00bb0d] border-2 text-white rounded-none h-12 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowEmailPassword(!showEmailPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a5a5a5] hover:text-white"
                      >
                        {showEmailPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </Field>

                  {emailError && (
                    <p className="text-sm text-[#c00f00] text-center">{emailError}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={emailLoading}
                    className="w-full bg-[#00bb0d] text-black border-4 border-[#00bb0d] hover:bg-transparent hover:text-[#00bb0d] rounded-full h-12 text-base font-semibold"
                  >
                    {emailLoading ? "Validation..." : "Valider l'email"}
                  </Button>
                </FieldGroup>
              </form>
            </CardContent>
          )}
        </Card>

        <Card className="bg-black border-2 border-[#00bb0d] rounded-none">
          <CardHeader
            className="cursor-pointer hover:bg-[#00bb0d] hover:bg-opacity-10 transition-colors px-4"
            onClick={() => toggleSection("password")}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Pencil className="w-5 h-5 text-[#00bb0d]" />
                <h3 className="text-white text-lg font-semibold">Modifier le mot de passe</h3>
              </div>
              {openSection === "password" ? (
                <ChevronUp className="w-5 h-5 text-[#00bb0d]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#00bb0d]" />
              )}
            </div>
          </CardHeader>

          {openSection === "password" && (
            <CardContent className="px-4 pb-4">
              <form onSubmit={handlePasswordSubmit}>
                <FieldGroup className="gap-4">

                  <Field>
                    <FieldLabel htmlFor="currentPasswordForPwd" className="text-white text-base mb-2">
                      Saisir mot de passe actuel
                    </FieldLabel>
                    <div className="relative">
                      <Input
                        id="currentPasswordForPwd"
                        type={showCurrentPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="bg-[#565656] border-[#00bb0d] border-2 text-white rounded-none h-12 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a5a5a5] hover:text-white"
                      >
                        {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="newPassword" className="text-white text-base mb-2">
                      Saisir nouveau mot de passe
                    </FieldLabel>
                    <div className="relative">
                      <Input
                        id="newPassword"
                        type={showNewPassword ? "text" : "password"}
                        placeholder="Nouveau mot de passe"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="bg-[#565656] border-[#00bb0d] border-2 text-white rounded-none h-12 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a5a5a5] hover:text-white"
                      >
                        {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="confirmPassword" className="text-white text-base mb-2">
                      Confirmer nouveau mot de passe
                    </FieldLabel>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Nouveau mot de passe"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="bg-[#565656] border-[#00bb0d] border-2 text-white rounded-none h-12 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a5a5a5] hover:text-white"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </Field>



                  {passwordError && (
                    <p className="text-sm text-[#c00f00] text-center">{passwordError}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={passwordLoading}
                    className="w-full bg-[#00bb0d] text-black border-4 border-[#00bb0d] hover:bg-transparent hover:text-[#00bb0d] rounded-full h-12 text-base font-semibold"
                  >
                    {passwordLoading ? "Validation..." : "Valider le mot de passe"}
                  </Button>
                </FieldGroup>
              </form>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}
