import { AdminSidebar } from "@/components/admin/admin";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCategoriesQuery, useDecadesQuery, useQuizQuery, useUpdateChoiceMutation, useUpdateQuestionMutation, useUpdateQuizMutation } from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export enum AgeRange {
  TOUS_PUBLICS = "tous publics",
  MOINS_12 = "-12",
  MOINS_16 = "-16"
}

const EditQuizPage = () => {
    const router= useRouter();
    const id = Number(router.query.id);

    const [updateQuiz] = useUpdateQuizMutation(); // hook mise à jour d'un quiz
    const [updateQuestion]= useUpdateQuestionMutation(); // hook maj question
    const [updateChoice] = useUpdateChoiceMutation(); // hook maj choice
    const [errorMessage,setErrorMessage] = useState(null);

    const {data: quizData, loading, error, refetch} = useQuizQuery({variables : {id: id}}); // récupération quiz
    const quiz = quizData?.quiz || null;

    // test quiz
    if(isNaN(id) || !quiz) {
        return (
            <Layout pageTitle={`Quiz n °${router.query.id} - Admin`}>
                <div className="flex">
                <AdminSidebar />
                    <main className="flex-1 p-8 bg-black text-white">
                        Quiz inexistant           
                    </main>
                </div>
            </Layout>
        );
    }

    const {data: categoriesData} = useCategoriesQuery(); // récup catégories
    const categories = categoriesData?.categories || null;

    const {data: decadeData} = useDecadesQuery(); // récup décennies
    const decades = decadeData?.decades || null;

    // state des champs formulaire
    const [title, setTitle] = useState(quiz.title);
    const [description, setDescription] = useState(quiz.description);
    const [ageRange, setAgeRange] = useState(quiz.age_range);
    const [timeLimit, setTimeLimit] = useState(quiz.time_limit);
    const [categoryId, setCategoryId] = useState(quiz.category.id);
    const [decadeId, setDecadeId] = useState(quiz.decade.id);
    const [isDraft, setIsDraft] = useState(quiz.is_draft);
    const [isPublic, setIsPublic] = useState(quiz.is_public);
    const [image, setImage] = useState(quiz.image);

    const [questionsToMake, setQuestionsToMake] = useState<null|any>(quiz.questions.map(item => ({id: item.id, title: item.title, choices: item.choices.map(choice => ({id: choice.id, description: choice.description, is_correct: choice.is_correct}))})));

    // soumission formulaire
    const handleSubmit = async (e: FormEvent) => {
        try {
            e.preventDefault();
            console.log("formulaire soumis");
            
            const data = {
                title,
                description,
                age_range: ageRange,
                time_limit: timeLimit,
                is_draft: isDraft,
                is_public: isPublic,
                image,
                category : {id: categoryId},
                decade: {id: decadeId},
            };


            questionsToMake.forEach( async (question: { id: any; title: any; choices: any }) => {
                await updateQuestion({
                    variables: { 
                    id: question.id,
                    data: {title: question.title}
                    }
                });

                question.choices.forEach(async (choice: {id: number, description: string, is_correct: boolean}) => {
                    await updateChoice({
                        variables: {
                            updateChoiceId: choice.id,
                            data: {description: choice.description, is_correct: choice.is_correct}
                        }
                    })
                });

            });

            await updateQuiz({variables: {
                id: quiz.id,
                data: data, 
            }});
            

            await refetch();
            router.push(`/admin/games/${id}`);
        } catch(err:any) {
            const message = 
				err.graphQLErrors?.[0]?.message ||
				err.networkError?.message ||
				err.errors?.[0]?.extensions.validationErrors?.[0]?.constraints.isUrl ||
				err.message || "une erreur est survenue ";
            setErrorMessage(message);
        }
    }

    // chargement données
    if(loading) {
        return (
            <Layout pageTitle={`Quiz n °${router.query.id} - Admin`}>
                <div className="flex">
                <AdminSidebar />
                    <main className="flex-1 p-8 bg-black text-white">
                        Chargement des données...           
                    </main>
                </div>
            </Layout>
        );
    }

    if(errorMessage) {
        alert(errorMessage);
        router.push("/admin/games");
    }
    

    const handleQuestionChange = (question: any, e: React.ChangeEvent<HTMLInputElement>) => {
        const questionToChange = questionsToMake.find((item: { title: any; }) => item.title === question.title);
        const questionsLeft = questionsToMake.filter((item: { title: any; }) => item.title !==question.title);
        console.log(e.target.value);
        questionToChange.title = e.target.value;
        const newArr = [...questionsLeft, questionToChange];
        newArr.sort((a,b) => a.id - b.id); // tri pour avoir les questions dans le bon ordre d'affichage conservé
        setQuestionsToMake(newArr);
    }

    const handleChoiceChange = (question: any, choice: any, e: React.ChangeEvent<HTMLInputElement>) => {
        const questionToChange = questionsToMake.find((item: { title: any; }) => item.title === question.title)
        const questionsLeft = questionsToMake.filter((item: { title: any; }) => item.title !== question.title)

        const choiceToChange = questionToChange.choices.find((elem: { id: any; }) => elem.id === choice.id);
        const choicesLeft = questionToChange.choices.filter((elem: { id: any; }) => elem.id !== choice.id);
        console.log(choiceToChange);
        
        questionToChange.choices = [...choicesLeft, {...choiceToChange, description: e.currentTarget.value}];  //  on passe un nouvel objet modifié
        questionToChange.choices.sort((a: { id: number; },b: { id: number; }) => a.id - b.id); // tri pour avoir le bon ordre d'affichage des choix conservé

        const newArr = [...questionsLeft, questionToChange];
        newArr.sort((a,b) => a.id - b.id); // tri pour avoir le bon ordre d'affichage des questions conservé
        setQuestionsToMake(newArr);
    }

    const handleCorrectChoiceChange =(question: any, choice: any, e: React.ChangeEvent<HTMLInputElement>) => {
        const questionToChange = questionsToMake.find((item: { title: any; }) => item.title === question.title)
        const questionsLeft = questionsToMake.filter((item: { title: any; }) => item.title !== question.title)

        const choiceToChange = questionToChange.choices.find((elem: { id: any; }) => elem.id === choice.id);
        const choicesLeft = questionToChange.choices.filter((elem: { id: any; }) => elem.id !== choice.id);

        const updatedFalseChoices = choicesLeft.map((item: any) => ({...item, is_correct : false}));
        choiceToChange.is_correct = true;
        questionToChange!.choices = [...updatedFalseChoices, choiceToChange].sort((a,b) => a.id - b.id);  // on modifie les choices avec le choice modifié et les autres (avec tri pour l'ordre des choices)
        
        const newArr = [...questionsLeft, questionToChange];
        newArr.sort((a,b) => a.id - b.id); // tri pour avoir le bon ordre d'affichage des questions conservé
        setQuestionsToMake(newArr);
    }

    return(
        <Layout pageTitle={`Quiz n °${router.query.id} - Admin`}>
            <div className="flex">
                <AdminSidebar />
                <main className="flex-1 p-8 bg-black text-white">
                    <Card className="w-full border-gray-700 bg-gray-900 p-5">
                        <h1 className="text-3xl font-bold mb-6">
                            Quiz n° {id} (édition)
                        </h1>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <Card className="w-full border-0 p-0">
                            <CardContent className="px-5">
                                <Label htmlFor="title" className="my-3">Titre</Label>
                                <Input
                                    type="text"
                                    id="title"
                                    placeholder="Titre du quizz"
                                    value={title}
                                    onChange={(e)=> setTitle(e.target.value)}
                                    required
                                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 w-full mb-5"
                                />
                                <Label htmlFor="description" className="my-3">Description</Label>
                                <Input
                                    type="text"
                                    id="description"
                                    placeholder="Description du quizz"
                                    value={description}
                                    onChange={(e)=> setDescription(e.target.value)}
                                    required
                                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 w-full mb-5"
                                />
                                
                                <Label htmlFor="time_limit" className="my-3">Limite de temps</Label>
                                <Input
                                    type="number"
                                    id="time_limit"
                                    value={timeLimit}
                                    onChange={(e)=> setTimeLimit(Number(e.target.value))}
                                    required
                                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 w-full mb-5"
                                />
                                
                                <Label className="my-3">Tranche d'âge</Label>
                                <Select
                                    value={ageRange}
                                    onValueChange={(val:AgeRange)=> setAgeRange(val)}
                                >
                                    <SelectTrigger className={`bg-zinc-800 border-zinc-700 w-full ${true ? "text-white" : "text-zinc-500"}`}>
                                        <SelectValue placeholder="Tranche d'âge" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="tous publics">Tous publics</SelectItem>
                                        <SelectItem value="-12">-12</SelectItem>
                                        <SelectItem value="-16">-16</SelectItem>
                                    </SelectContent>
                                </Select>

                                <Label className="my-3">Catégorie</Label>
                                <Select
                                    value={""+categoryId}
                                    onValueChange={(val)=> setCategoryId(Number(val))}
                                >
                                    <SelectTrigger className={`bg-zinc-800 border-zinc-700 w-full ${true ? "text-white" : "text-zinc-500"}`}>
                                        <SelectValue placeholder="Catégorie" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories?.map(elem => <SelectItem value={""+elem.id}>{elem.name}</SelectItem>
                                        )}
                                    </SelectContent>
                                </Select>

                                <Label className="my-3">Décennie</Label>
                                <Select
                                    value={""+decadeId}
                                    onValueChange={(val)=> setDecadeId(Number(val))}
                                >
                                    <SelectTrigger className={`bg-zinc-800 border-zinc-700 w-full ${true ? "text-white" : "text-zinc-500"}`}>
                                        <SelectValue placeholder="Décennie" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {decades?.map(elem => <SelectItem value={""+elem.id}>{elem.name}</SelectItem>
                                        )}
                                    </SelectContent>
                                </Select>

                                <div className="flex items-center space-x-2 mt-7 mb-5">
                                    <Checkbox
                                        id="draft"
                                        checked={isDraft}
                                        onCheckedChange={checked => setIsDraft(checked === true)}
                                        className="text-white"
                                    />
                                    <Label htmlFor="draft" className="text-white cursor-pointer">
                                        Brouillon
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2 my-5">
                                    <Checkbox
                                        id="public"
                                        checked={isPublic}
                                        onCheckedChange={checked => setIsPublic(checked === true)}
                                        className="text-white"
                                    />
                                    <Label
                                        htmlFor="public"
                                        className="text-white cursor-pointer"
                                    >
                                        Public
                                    </Label>
                                </div>

                                <Dialog>
                                    <DialogTrigger asChild>
                                        {/* <Button variant="outline"> */}
                                            <div className="w-[400px] h-[300px] border-2 border-zinc-700 hover:border-zinc-400 hover:cursor-pointer">
                                                {(image && image.startsWith("https://")) && <img src={image} className="object-cover w-full h-full"/>}
                                                {image && !image.startsWith("https://") && <p className="text-white font-semibold w-full h-full text-center relative top-35">IMAGE QUIZZ</p>}
                                                {!image && <p className="text-white font-semibold w-full h-full text-center relative top-35">IMAGE QUIZZ</p>}
                                            </div>
                                        {/* </Button> */}
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px] text-white bg-zinc-600">
                                        <DialogHeader>
                                            <DialogTitle>url de l'image quizz</DialogTitle>
                                            <DialogDescription>
                                                Merci de saisir une url valide pour l'image du quizz.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="grid gap-4">
                                            <div className="grid gap-3">
                                                <Label htmlFor="image">URL</Label>
                                                <Input id="image" name="image" value={image} onChange={(e) => setImage(e.currentTarget.value)} />
                                            </div>
                                        </div>
                                        <DialogFooter>
                                            <DialogClose asChild>
                                                <Button variant="outline">Annuler</Button>
                                            </DialogClose>
                                            <DialogClose asChild>
                                                <Button type="submit" variant="outline" className="cursor-pointer">Enregister</Button>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>

                                </CardContent>
                                </Card>
                                <Card className="w-full border-gray-700 bg-gray-900 p-5 mt-5">
                                <CardContent>
                                    <h2 className="text-2xl mb-5">Questions et réponses du quiz {quiz.id}</h2>
                            
                                    {questionsToMake?.map((question: { id: number | null | undefined; title: string | number | readonly string[] | undefined; choices: any[]; },index: number) =>
                                    <Card key={question.id} className="p-10">
                                        <Label htmlFor={`question${index+1}`} className="p-3 bg-red-500 text-white text-xl rounded-3xl justify-center">Question { index + 1 }</Label> 
                                        <Input 
                                            type="text"
                                            id={`question${index+1}`}
                                            placeholder="question du quizz"
                                            value={question.title}
                                            onChange={(e)=> handleQuestionChange(question, e)}
                                            required
                                            className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:bg-zinc-300 focus:text-black focus:font-[arial]"
                                        />
                                        <div className="m-5">

                                            {question.choices.map((choice: { id: number ; description: string, is_correct: boolean }, ind: number) => 
                                                <div key={choice.id}>
                                                    <Label htmlFor={`question${index+1}choice${ind+1}`} className="text-sm w-[250px]">
                                                        Proposition {ind + 1}
                                                        <input type="radio"
                                                            name={""+question.id}
                                                            checked={choice.is_correct}
                                                            id={`question${index+1}choice${ind+1}correct`}
                                                            onChange={(e)=> handleCorrectChoiceChange(question, choice, e)}
                                                            className={`text-white inline-block w-4 h-4 ml-5`}
                                                            
                                                        />
                                                        <Label htmlFor={`question${index+1}choice${ind+1}correct`} className={`inline text-[10px] p-2 ${choice.is_correct && "text-green-600"}`}>Bonne réponse</Label>
                                                    </Label>
                                                        
                                                    <Input 
                                                    type="text"
                                                    id={`question${index+1}choice${ind+1}`}
                                                    value={""+choice.description}
                                                    onChange={(e) => handleChoiceChange(question, choice,e)}
                                                    required
                                                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 mt-5 mb-10  focus:bg-zinc-300 focus:text-black focus:font-[arial]"
                                                    />
                                                </div>
                                            )}

                                        </div>  
                                    </Card>
                                    )} 
                                </CardContent>
                                </Card>
                                <Button type="submit" /* disabled={isSubmitting} */  className="w-[200px] bg-green-600 border border-zinc-700 text-white text-xl hover:bg-green-500 cursor-pointer m-auto">
                                    Valider
                                </Button>
                        </form>
                    </Card>
                </main>
            </div>
        </Layout>
    );
};

export default EditQuizPage;