import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const useAppNavigate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const startNewChat = (chatroomId) => {
    navigate("/chat", { state: { chatroomId } });
  };

  const navigateHome = () => {
    navigate("/home");
  };

  const navigateHelp = () => {
    navigate("/help");
  };

  const navigateDashboard = () => {
    navigate("/dashboard");
  };

  const navigateHelperChat = (chatroomId) => {
    console.log(chatroomId);
    navigate("/helperChat", { state: { chatroomId } });
  };

  const goBack = () => {
    navigate(-1);
  };

  return {
    startNewChat,
    navigateHome,
    navigateHelp,
    navigateDashboard,
    navigateHelperChat,
    goBack,
  };
};
