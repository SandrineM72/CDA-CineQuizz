import Layout from "@/components/Layout";
import ProfileScreen from "@/components/profile/ProfileScreen";

export default function ProfilePage() {
	const handleEditAvatar = () => {
		console.log("Modifier l'avatar");
		// Tu pourras ajouter un dialog shadcn ici plus tard
	};

	return (
		<Layout pageTitle="Profil">
			<ProfileScreen
				username="lulu23"
				ageRange="12-15"
				quizCount={73}
				trophyCount={43}
				onEditAvatar={handleEditAvatar}
			/>
		</Layout>
	);
}
