import {createBrowserRouter} from 'react-router-dom';
import { Articles } from './pages/Articles';
import { CreateArticle } from './pages/CreateArticle';
import { CreateUpdateQuestion } from './pages/CreateUpdateQuestion';
import { MyDiary } from './pages/MyDiary';
import { Notifications } from './pages/Notifications';
import { PatientDiary } from './pages/PatientDiary';
import { Patients } from './pages/Patients';
import { Questions } from './pages/Questions';
import { QuestionsAssign } from './pages/QuestionsAssign';
import { QuestionHeatmap } from './pages/QuestionsHeatmap';

const router = createBrowserRouter([
    {
        path: '/patients',
        element: <Patients></Patients>
    },
    {
        path: '/patients/:id/diary',
        element: <PatientDiary></PatientDiary>
    },
    {
        path: '/patients/:id/notifications',
        element: <Notifications></Notifications>
    },
    {
        path: '/questions',
        element: <Questions></Questions>
    },
    {
        path: '/questions/create',
        element: <CreateUpdateQuestion></CreateUpdateQuestion>
    },
    {
        path: '/articles',
        element: <Articles></Articles>
    },
    {
        path: '/articles/create',
        element: <CreateArticle></CreateArticle>
    },
    {
        path: '/index/diary',
        element: <MyDiary></MyDiary>
    },
    {
        path: '/index/questions/:id/assign',
        element: <QuestionsAssign></QuestionsAssign>
    },
    {
        path: '/index/questions/:id/heatmap',
        element: <QuestionHeatmap />
    },
    {
        path: '/patients/:id/:question_id/heatmap',
        element: <QuestionHeatmap />
    }
])

export default router;