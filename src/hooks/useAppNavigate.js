import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const useAppNavigate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const startNewChat = () => {
        navigate('/chat')
    }

    const navigateHome = () => {
        navigate('/home')
    }

    const navigateHelp = () => {
        navigate('/help')
    }

    const navigateDashboard = () => {
        navigate('/dashboard')
    }

    const goBack = () => {
        navigate(-1);
    }

    return {
        startNewChat,
        navigateHome,
        navigateHelp,
        navigateDashboard,
        goBack
    }
}