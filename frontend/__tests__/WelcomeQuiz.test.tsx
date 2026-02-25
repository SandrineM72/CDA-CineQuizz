import { MockedProvider } from "@apollo/client/testing/react";
import { render, screen } from "@testing-library/react";
import WelcomeQuiz from "@/components/user/welcome-quiz";
import { 
  QuizPublicDocument, 
  GuestUserCompletedQuizIdsDocument 
} from "@/graphql/generated/schema";
import mockRouter from 'next-router-mock';

// Mock des quiz publics
export const publicQuizzesMock = {
    request: {
        query: QuizPublicDocument,
    },
    result: {
        data: {
            getPublicQuizzes: [
                {
                    id: 1,
                    title: "Quiz public 1",
                    level: {
                        name: "débutant"
                    },
                    theme: {
                        name: "Sécurité des mots de passe"
                    }
                },
                {
                    id: 2,
                    title: "Quiz public 2",
                    level: {
                        name: "avancé"
                    },
                    theme: {
                        name: "Phishing et ingénierie sociale"
                    }
                },
                {
                    id: 3,
                    title: "Quiz public 3",
                    level: {
                        name: "expert"
                    },
                    theme: {
                        name: "Cryptographie"
                    }
                }
            ],
        },
    },
};

// Mock des quiz complétés (vide)
export const completedQuizIdsMock = {
    request: {
        query: GuestUserCompletedQuizIdsDocument,
    },
    result: {
        data: {
            guestUserCompletedQuizIds: []
        },
    },
};

describe("WelcomeQuiz", () => {
    beforeEach(() => {
        mockRouter.setCurrentUrl('/');
    });

    it("renders the list of public quizzes with theme and level", async () => {
        render(
           <MockedProvider mocks={[publicQuizzesMock, completedQuizIdsMock]}>
                <WelcomeQuiz />
           </MockedProvider>
        );

        const quizzes = publicQuizzesMock.result.data.getPublicQuizzes;
        
        // Vérifie que les thèmes s'affichent
        expect(await screen.findByText(quizzes[0].theme.name)).toBeInTheDocument();
        expect(screen.getByText(quizzes[1].theme.name)).toBeInTheDocument();
        expect(screen.getByText(quizzes[2].theme.name)).toBeInTheDocument();
        
        // Vérifie que les niveaux s'affichent
        expect(screen.getByText(/niveau débutant/i)).toBeInTheDocument();
        expect(screen.getByText(/niveau avancé/i)).toBeInTheDocument();
        expect(screen.getByText(/niveau expert/i)).toBeInTheDocument();
    });

    it("displays error message when quiz fetching fails", async () => {
        const errorMock = {
            request: {
                query: QuizPublicDocument,
            },
            error: new Error("Erreur de chargement"),
        };

        render(
           <MockedProvider mocks={[errorMock]}>
                <WelcomeQuiz />
           </MockedProvider>
        );

        expect(await screen.findByText(/Erreur lors du chargement des quiz/i)).toBeInTheDocument();
    });
});
