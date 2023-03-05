import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const useAppNavigate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const startNewChat = () => {
        navigate('/chat')
    }

    return {
        startNewChat
    }
}