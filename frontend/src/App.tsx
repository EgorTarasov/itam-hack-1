import "./App.css";
import "./index.css";

import NotFoundPage from "./pages/NotFoundPage";
import IndexPage from "./pages/index";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import SignUpSurveyPage from "./pages/SignUpSurveyPage";
import RecomendationsPage from "./pages/RecomendationsPage";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import AdminUserProfile from "./pages/AdminUserProfile";
import CommunityPage from "./pages/CommunityPage";
import AddHackPage from "./pages/AddHackPage";
import TeamsPage from "./pages/TeamsPage";
import "./App.css";
import NewsPage from "./pages/NewsPage";
import DetailUserPage from "./pages/DetailUserPage";
import TestPage from "./pages/TestPage";
function App() {
    // const navigate = useNavigate();

    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/test" element={<TestPage />} />
            {/* protected routes */}
            <Route element={<RequireAuth />}>
                <Route path="/me" element={<ProfilePage />} />
                <Route path="/add_hack" element={<AddHackPage />} />
                <Route path="/hacks/:hackId/add" element={<AddHackPage />} />
                <Route path="/survey" element={<SignUpSurveyPage />} />
                <Route path="/users/:userId" element={<DetailUserPage />} />
                <Route path="/teams/:teamId" element={<TeamsPage />} />
                <Route
                    path="/recommendations"
                    element={<RecomendationsPage />}
                />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/_/" element={<IndexPage />} />
                <Route path="/admin" element={<AdminUserProfile />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;

// вспышка на крыше электровоза снятие напряжение контактной сети
